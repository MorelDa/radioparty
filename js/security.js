// Basic anti-inspection (disuasorio). NOTE: no browser can 100% prevent code inspection.
(function(){
  window.__initSecurity = function(){
    const cfg = window.__RPV_SECURITY__ || {};
    if(cfg.blockRightClick){
      document.addEventListener('contextmenu', e => e.preventDefault());
    }
    if(cfg.blockDevTools){
      // Block common shortcuts
      document.addEventListener('keydown', e => {
        const k = e.key || '';
        if(e.key === 'F12') { e.preventDefault(); return false; }
        if(e.ctrlKey && e.shiftKey && ['I','J','C'].includes(k.toUpperCase())){ e.preventDefault(); return false; }
        if(e.ctrlKey && ['u','s'].includes(k.toLowerCase())){ e.preventDefault(); return false; }
        if(e.metaKey && e.altKey && ['i','j','c'].includes(k.toLowerCase())){ e.preventDefault(); return false; }
      });
      // Detect devtools (approximate via window size differential)
      let warned = false;
      const threshold = 160;
      setInterval(()=>{
        const w = window.outerWidth - window.innerWidth;
        const h = window.outerHeight - window.innerHeight;
        if((w > threshold || h > threshold) && !warned){
          warned = true;
          document.body.style.filter = 'blur(20px)';
          alert('Acceso al inspector no permitido en este sitio.');
          setTimeout(()=>{ document.body.style.filter = ''; warned = false; }, 500);
        }
      }, 1500);
      // Anti-debug loop (mild)
      setInterval(()=>{ try{ (function(){}).constructor('debugger')(); }catch(e){} }, 4000);
    }
  };
})();
