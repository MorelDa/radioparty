// PWA install + service worker registration
(function(){
  if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
      navigator.serviceWorker.register('sw.js').catch(e=>console.warn('SW error',e));
    });
  }
  let deferredPrompt = null;
  const btn = document.getElementById('btn-install');
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    if(btn){ btn.hidden = false; }
  });
  if(btn){
    btn.addEventListener('click', async ()=>{
      if(!deferredPrompt) return;
      deferredPrompt.prompt();
      const {outcome} = await deferredPrompt.userChoice;
      if(outcome === 'accepted') btn.hidden = true;
      deferredPrompt = null;
    });
  }
  window.addEventListener('appinstalled', ()=>{ if(btn) btn.hidden = true; });
})();
