(() => {
  const trigger=document.getElementById('secret-credits-trigger');
  const dialog=document.getElementById('secret-credits');
  if(!trigger||!dialog)return;
  let clicks=0,timeout;
  function openCredits() {
    if(dialog.open)return;
    clicks=0;clearTimeout(timeout);
    dialog.showModal();
    timeout=setTimeout(()=>dialog.close(),10000);
  }
  window.triggerEasterEgg=openCredits;
  for(const element of [trigger,document.querySelector('.logo')].filter(Boolean)) {
    element.addEventListener('click',event=>{
      if(event.ctrlKey||event.metaKey||event.shiftKey)return;
      event.preventDefault();
      if(++clicks>=5)openCredits();
    });
  }
  dialog.querySelector('button').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{clearTimeout(timeout);trigger.focus();});
})();
