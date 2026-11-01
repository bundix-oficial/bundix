// Legacy links open the selected game directly. No pre-download or portal loading screen.
(()=>{
  'use strict';
  const routes={"dark-room":"games/dark-room/index.html","gridland":"games/gridland/index.html","minesweeper":"games/minesweeper/index.html","bubble-shooter":"games/bubble-shooter/index.html","match-three":"games/match-three/index.html","skifree":"games/skifree/index.html","connect-four":"games/connect-four/index.html","underrun":"games/underrun/index.html","hexgl":"games/hexgl/index.html","elliott":"games/elliott/index.html","radius-raid":"games/radius-raid/index.html","xx142":"games/xx142/index.html","space-huggers":"games/space-huggers/index.html","astray":"games/astray/index.html","bounce-back":"games/bounce-back/index.html","space-invaders":"games/space-invaders/index.html","alien-invasion":"games/alien-invasion/index.html","little-platformer":"games/little-platformer/index.html","little-puzzle":"games/little-puzzle/index.html","orb-island":"games/orb-island/index.html","gta-san-andreas":"games/gta-san-andreas/index.html","tower-building":"games/tower-building/index.html","pacman":"games/pacman/index.html","boulderdash":"games/boulderdash/index.html","two-colors":"games/two-colors/index.html","breaklock":"games/breaklock/index.html","mario-html5":"games/mario-html5/index.html","mario64-cleanroom":"games/mario64-cleanroom/index.html","zelda-tribute":"games/zelda-tribute/index.html","bombergirl":"games/bombergirl/index.html","retro-racer":"games/retro-racer/index.html","flappy-bird":"games/flappy-bird/index.html","slope":"games/slope/index.html","clumsy-bird":"games/clumsy-bird/index.html","tetris":"games/tetris/index.html","hextris":"games/hextris/index.html","breakout":"games/breakout/index.html"};
  const id=new URLSearchParams(location.search).get('game');
  if(Object.prototype.hasOwnProperty.call(routes,id)){
    location.replace(routes[id]);
    return;
  }
  document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('route-error').hidden=false;
  },{once:true});
})();
