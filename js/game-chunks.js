/* Reassemble exact local game files split to fit static-hosting file limits. */
(() => {
  'use strict';
  const config = window.PlaynovaChunkFiles;
  if (!config || window.PlaynovaChunksInstalled) return;
  window.PlaynovaChunksInstalled = true;
  const root = new URL(config.root, location.href), nativeFetch = window.fetch.bind(window), cache = new Map();
  const find = input => {
    try {
      const url = new URL(input instanceof URL ? input.href : typeof input === 'string' ? input : input.url, location.href);
      if (url.origin !== root.origin || !url.pathname.startsWith(root.pathname)) return undefined;
      return config.files[decodeURIComponent(url.pathname).slice(root.pathname.length)];
    }
    catch { return undefined; }
  };
  function bytes(info) {
    if (!cache.has(info.parts[0])) {
      cache.set(info.parts[0], Promise.all(info.parts.map(async part => {
        const response = await nativeFetch(new URL(part, root));
        if (!response.ok) throw new Error('Missing game part: ' + part);
        return response.arrayBuffer();
      })).then(parts => new Blob(parts, {type:info.type}).arrayBuffer()));
    }
    return cache.get(info.parts[0]);
  }
  window.fetch = (input, init) => {
    const info = find(input);
    if (!info || (init?.method && init.method !== 'GET')) return nativeFetch(input, init);
    return bytes(info).then(buffer => new Response(buffer, {status:200,headers:{'Content-Type':info.type,'Content-Length':String(info.size)}}));
  };
  const open = XMLHttpRequest.prototype.open, send = XMLHttpRequest.prototype.send, abort = XMLHttpRequest.prototype.abort;
  XMLHttpRequest.prototype.open = function (method, url, ...args) {
    this.playnovaChunkInfo = String(method).toUpperCase() === 'GET' ? find(url) : null;
    this.playnovaChunkURL = new URL(url, location.href).href;
    this.playnovaChunkAborted = false;
    return open.call(this, method, url, ...args);
  };
  XMLHttpRequest.prototype.send = function (...args) {
    const info = this.playnovaChunkInfo;
    if (!info) return send.apply(this, args);
    const xhr = this;
    xhr.dispatchEvent(new ProgressEvent('loadstart', {lengthComputable:true,total:info.size}));
    bytes(info).then(buffer => {
      if (xhr.playnovaChunkAborted) return;
      let response = buffer, text;
      if (!xhr.responseType || xhr.responseType === 'text') {
        const parts=[], view=new Uint8Array(buffer);
        for(let pos=0;pos<view.length;pos+=32768) parts.push(String.fromCharCode(...view.subarray(pos,pos+32768)));
        text=parts.join('');response=text;
      } else if(xhr.responseType === 'blob') response=new Blob([buffer],{type:info.type});
      Object.defineProperties(xhr, {
        status:{configurable:true,get:()=>200},statusText:{configurable:true,get:()=>'OK'},
        readyState:{configurable:true,get:()=>4},response:{configurable:true,get:()=>response},
        responseText:{configurable:true,get:()=>text || ''},responseURL:{configurable:true,get:()=>xhr.playnovaChunkURL}
      });
      xhr.getResponseHeader=name=>name.toLowerCase()==='content-length'?String(info.size):name.toLowerCase()==='content-type'?info.type:null;
      xhr.getAllResponseHeaders=()=>`content-type: ${info.type}\r\ncontent-length: ${info.size}\r\n`;
      xhr.dispatchEvent(new ProgressEvent('progress',{lengthComputable:true,loaded:info.size,total:info.size}));
      xhr.dispatchEvent(new Event('readystatechange'));
      xhr.dispatchEvent(new ProgressEvent('load',{lengthComputable:true,loaded:info.size,total:info.size}));
      xhr.dispatchEvent(new ProgressEvent('loadend',{lengthComputable:true,loaded:info.size,total:info.size}));
    }).catch(()=>{if(!xhr.playnovaChunkAborted){xhr.dispatchEvent(new ProgressEvent('error'));xhr.dispatchEvent(new ProgressEvent('loadend'));}});
  };
  XMLHttpRequest.prototype.abort = function () {
    this.playnovaChunkAborted = true;
    return abort.call(this);
  };
})();
