// Radio Party Valencia - main.js
(function(){
  'use strict';
  const $ = (s,ctx=document)=>ctx.querySelector(s);
  const $$ = (s,ctx=document)=>[...ctx.querySelectorAll(s)];
  const escapeHtml = s => String(s||'').replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));

  const SOCIAL_ICONS = {
    facebook:'<svg viewBox="0 0 24 24"><path d="M13 22v-8h3l1-4h-4V7.5c0-1 .3-1.5 1.7-1.5H17V2.5C16.6 2.4 15.3 2 13.8 2 10.6 2 9 3.9 9 6.9V10H6v4h3v8h4z"/></svg>',
    instagram:'<svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.4.5.7.3 1.3.6 1.8 1.2.6.5.9 1.1 1.2 1.8.3.6.4 1.3.5 2.4.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1.1-.2 1.8-.5 2.4-.3.7-.6 1.3-1.2 1.8-.5.6-1.1.9-1.8 1.2-.6.3-1.3.4-2.4.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.8-.2-2.4-.5-.7-.3-1.3-.6-1.8-1.2-.6-.5-.9-1.1-1.2-1.8-.3-.6-.4-1.3-.5-2.4C2 15.1 2 14.7 2 12s0-3 .1-4.1c0-1.1.2-1.8.5-2.4.3-.7.6-1.3 1.2-1.8.5-.6 1.1-.9 1.8-1.2.6-.3 1.3-.4 2.4-.5C9.1 2 9.4 2 12 2m0 5a5 5 0 100 10 5 5 0 000-10m0 2a3 3 0 110 6 3 3 0 010-6m5.4-3.6a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/></svg>',
    twitter:'<svg viewBox="0 0 24 24"><path d="M18.9 5.1c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4.1 4.1 0 001.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.9.1a4.1 4.1 0 003.8 2.9A8.3 8.3 0 012 18.7 11.7 11.7 0 008.3 20.5c7.5 0 11.7-6.3 11.5-11.9.8-.6 1.5-1.3 2-2.1-.7.3-1.5.6-2.3.7z"/></svg>',
    youtube:'<svg viewBox="0 0 24 24"><path d="M23 7.5s-.2-1.6-.9-2.3c-.8-.9-1.8-.9-2.2-1C16.7 4 12 4 12 4s-4.7 0-7.9.2c-.4.1-1.4.1-2.2 1-.7.7-.9 2.3-.9 2.3S1 9.3 1 11.2v1.7c0 1.8.2 3.6.2 3.6s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.5.2 7.5.2s4.7 0 7.9-.2c.4-.1 1.4-.1 2.2-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.6v-1.7c0-1.9-.2-3.7-.2-3.7M9.7 14.7V8.5l6.1 3.1-6.1 3.1z"/></svg>',
    whatsapp:'<svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.6.1c-.9-.4-1.7-.9-2.4-1.5-.7-.6-1.3-1.3-1.8-2.1-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.2-.2.3-.4.1-.1.1-.3 0-.4l-1-2.2c-.2-.5-.5-.5-.7-.5H7.6c-.2 0-.5.1-.7.4-.8.9-1.2 2-1.1 3.2.2 1.4.7 2.7 1.6 3.9 1.5 2.2 3.5 3.9 5.9 4.9.7.3 1.2.5 1.6.6.6.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.1-.2-.2-.4-.3M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.3-1.4c4.8 2.6 10.8.8 13.4-4S18.8 4.6 14 2c-.7-.4-1.4-.6-2-.8V2M18 15.7c-.4 1.2-2 2.2-3.2 2.4-1.5.2-3.1-.4-4.9-1.4-2.4-1.4-4.5-3.5-5.8-6.1C4 10 4 9.2 4 8.3c0-1.2.6-2.4 1.5-3.1.6-.4 1.3-.7 2-.7.5 0 .8.1 1 .5.3.5 1 2.5 1.1 2.7.1.2.1.4 0 .5-.1.2-.2.5-.3.6-.1.1-.2.3-.3.4-.1.2-.3.4-.1.7 1 1.6 2.5 3 4.3 3.7.4.2.6.1.7-.1.2-.2.9-1 1.1-1.3.2-.3.4-.3.7-.2 1 .4 1.9 1 2.7 1.6l.1.1c.1.1.1.9-.2 1.9"/></svg>'
  };

  let CONFIG = null;
  let audio = $('#radio-audio');
  let isPlaying = false;

  fetch('config.json?v=' + Date.now())
    .then(r=>r.json())
    .then(cfg => { CONFIG = cfg; init(); })
    .catch(err => { console.error('Config load error', err); document.body.innerHTML='<div style="padding:40px;color:#fff;font-family:sans-serif">Error cargando config.json</div>'; });

  function init(){
    applyTheme();
    renderHeader();
    renderHero();
    renderShows();
    renderDiscover();
    renderNews();
    renderHotList();
    renderSchedule();
    renderContact();
    renderFooter();
    initPlayer();
    initShare();
    initMobileMenu();
    applySecurity();
  }

  function applyTheme(){
    const t = CONFIG.theme;
    const r = document.documentElement.style;
    r.setProperty('--accent', t.colorAccent);
    r.setProperty('--accent2', t.colorAccent2);
    r.setProperty('--bg', t.colorBg);
    r.setProperty('--bg-alt', t.colorBgAlt);
    r.setProperty('--text', t.colorText);
    r.setProperty('--muted', t.colorTextMuted);
    if(t.fontHeading) r.setProperty('--f-heading', t.fontHeading);
    if(t.fontBody) r.setProperty('--f-body', t.fontBody);
    // Update theme-color meta
    const themeMeta = document.querySelector('meta[name=theme-color]');
    if(themeMeta) themeMeta.setAttribute('content', t.colorAccent);
    // Hero backgrounds
    if(t.heroBgBottom){ $('#hero-bg-bottom').style.backgroundImage = `linear-gradient(135deg,rgba(20,10,25,.8),rgba(11,11,15,.85)),url('${t.heroBgBottom}')`; $('#hero-bg-bottom').style.backgroundSize='cover'; }
  }

  function renderHeader(){
    const s = CONFIG.site;
    if(s.logoHeader) $('#header-logo').src = s.logoHeader;
    else $('#header-logo').outerHTML = `<span style="font-family:var(--f-heading);font-size:26px;letter-spacing:2px;color:var(--accent)">${escapeHtml(s.name)}</span>`;
    // Nav
    $('#main-nav').innerHTML = CONFIG.nav.map(n => `<a href="${escapeHtml(n.href)}">${escapeHtml(n.label)}</a>`).join('');
    $('#mobile-nav').innerHTML = CONFIG.nav.map(n => `<a href="${escapeHtml(n.href)}">${escapeHtml(n.label)}</a>`).join('');
    // Document title & meta
    document.title = `${s.name} · ${s.tagline}`;
  }

  function renderHero(){
    const h = CONFIG.hero;
    $('#hero-title').textContent = h.title;
    $('#hero-subtitle').textContent = h.subtitle;
    $('#hero-tag').textContent = CONFIG.site.description;
    $('#hero-cta').textContent = h.cta;
  }

  function renderShows(){
    $('#shows-grid').innerHTML = CONFIG.shows.map(s => `
      <div class="show-card" data-play>
        <img loading="lazy" src="${escapeHtml(s.image)}" alt="${escapeHtml(s.title)}">
        <div class="show-play"><span class="material-icons">play_arrow</span></div>
        <div class="show-card-overlay">
          <span class="show-genre">${escapeHtml(s.genre)}</span>
          <h3 class="show-title">${escapeHtml(s.title)}</h3>
          <div class="show-host">${escapeHtml(s.host||'')}</div>
          <div class="show-time">${escapeHtml(s.time)}</div>
        </div>
      </div>`).join('');
    $$('#shows-grid [data-play]').forEach(el => el.addEventListener('click', ()=> togglePlay(true)));
  }

  function renderDiscover(){
    $('#discover-grid').innerHTML = CONFIG.discover.map(d => `
      <div class="discover-card">
        <img loading="lazy" src="${escapeHtml(d.image)}" alt="">
        <div class="discover-card-content">
          <h3 class="discover-title">${escapeHtml(d.title)}</h3>
          <p class="discover-sub">${escapeHtml(d.subtitle)}</p>
          <span class="discover-cta">${escapeHtml(d.cta)}</span>
        </div>
      </div>`).join('');
  }

  function renderNews(){
    $('#news-grid').innerHTML = CONFIG.news.map(n => `
      <article class="news-card">
        <div class="news-card-img"><img loading="lazy" src="${escapeHtml(n.image)}" alt=""></div>
        <span class="news-cat">${escapeHtml(n.category)}</span>
        <h3 class="news-title">${escapeHtml(n.title)}</h3>
        <p class="news-excerpt">${escapeHtml(n.excerpt)}</p>
        <div class="news-date">${escapeHtml(n.date)}</div>
      </article>`).join('');
  }

  function renderHotList(){
    $('#hot-list').innerHTML = CONFIG.hotWeek.map(h => `
      <li class="hot-item">
        <img src="${escapeHtml(h.image)}" alt="">
        <div class="hot-item-title">${escapeHtml(h.title)}</div>
      </li>`).join('');
  }

  function renderSchedule(){
    const days = Object.keys(CONFIG.schedule);
    $('#schedule-tabs').innerHTML = days.map((d,i) => `<div class="tab${i===0?' active':''}" data-day="${escapeHtml(d)}">${escapeHtml(d)}</div>`).join('');
    $$('#schedule-tabs .tab').forEach(t => t.addEventListener('click', ()=>{
      $$('#schedule-tabs .tab').forEach(x=>x.classList.remove('active'));
      t.classList.add('active');
      showDaySchedule(t.dataset.day);
    }));
    showDaySchedule(days[0]);
  }
  function showDaySchedule(day){
    const items = CONFIG.schedule[day] || [];
    $('#schedule-list').innerHTML = items.map(s => `
      <div class="schedule-item">
        <img src="${escapeHtml(s.image)}" alt="">
        <div class="schedule-info">
          <h4>${escapeHtml(s.title)}</h4>
          <p>${escapeHtml(s.host||'')} · ${escapeHtml(s.genre||'')}</p>
        </div>
        <div class="schedule-time">${escapeHtml(s.time)}</div>
      </div>`).join('') || '<p style="color:var(--muted)">Sin programación</p>';
  }

  function renderContact(){
    const c = CONFIG.contact;
    $('#contact-address').textContent = c.address;
    $('#contact-email').textContent = c.email; $('#contact-email').href = `mailto:${c.email}`;
    $('#contact-phone').textContent = c.phone; $('#contact-phone').href = `tel:${c.phone.replace(/\s/g,'')}`;
    $('#social-row').innerHTML = CONFIG.social.map(s => `<a class="social-btn" href="${escapeHtml(s.url)}" target="_blank" rel="noopener" aria-label="${escapeHtml(s.name)}">${SOCIAL_ICONS[s.icon]||''}</a>`).join('');
  }

  function renderFooter(){
    if(CONFIG.site.logoHeader) $('#footer-logo').src = CONFIG.site.logoHeader;
    $('#footer-nav').innerHTML = CONFIG.footer.links.map(l => `<a href="${escapeHtml(l.href)}">${escapeHtml(l.label)}</a>`).join('');
    $('#copyright').textContent = CONFIG.footer.copyright;
  }

  function initPlayer(){
    audio.src = CONFIG.stream.url;
    audio.crossOrigin = 'anonymous';
    audio.volume = 0.8;
    if(CONFIG.stream.cover) $('#player-cover').src = CONFIG.stream.cover;
    else $('#player-cover').style.background = 'linear-gradient(135deg,var(--accent),var(--accent2))';
    $('#player-title').textContent = CONFIG.stream.stationName;
    $('#player-artist').textContent = CONFIG.stream.stationSubtitle;

    $('#player-play').addEventListener('click', ()=> togglePlay());
    $('#btn-hero-play').addEventListener('click', ()=> togglePlay(true));

    audio.addEventListener('playing', ()=>{ isPlaying=true; setPlayIcon('pause'); });
    audio.addEventListener('pause', ()=>{ isPlaying=false; setPlayIcon('play_arrow'); });
    audio.addEventListener('waiting', ()=> $('#player-play').classList.add('loading'));
    audio.addEventListener('canplay', ()=> $('#player-play').classList.remove('loading'));
    audio.addEventListener('error', ()=>{ $('#player-play').classList.remove('loading'); setPlayIcon('play_arrow'); isPlaying=false; });

    $('#volume').addEventListener('input', e => {
      const v = e.target.value/100;
      audio.volume = v;
      $('#volume-icon').textContent = v===0?'volume_off':v<.5?'volume_down':'volume_up';
    });
  }
  function setPlayIcon(i){ $('#player-play-icon').textContent = i; }
  function togglePlay(forcePlay){
    if(forcePlay || audio.paused){
      $('#player-play').classList.add('loading');
      audio.src = CONFIG.stream.url + (CONFIG.stream.url.includes('?')?'&':'?') + '_cb=' + Date.now();
      audio.play().catch(e=>{ console.warn(e); $('#player-play').classList.remove('loading'); });
    } else {
      audio.pause();
    }
  }

  function initShare(){
    const shareUrl = CONFIG.site.url || location.href;
    const shareText = `${CONFIG.site.name} · ${CONFIG.site.tagline}`;
    $('#share-url').value = shareUrl;
    const targets = [
      { name:'WhatsApp', icon:'whatsapp', url:`https://wa.me/?text=${encodeURIComponent(shareText+' '+shareUrl)}` },
      { name:'Facebook', icon:'facebook', url:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
      { name:'Twitter', icon:'twitter', url:`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}` },
      { name:'Telegram', icon:'facebook', url:`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}` }
    ];
    $('#share-buttons').innerHTML = targets.map(t => `<a class="share-btn" href="${t.url}" target="_blank" rel="noopener">${SOCIAL_ICONS[t.icon]||''}<span>${t.name}</span></a>`).join('');

    $('#btn-share').addEventListener('click', async ()=>{
      if(navigator.share){
        try{ await navigator.share({title:CONFIG.site.name,text:shareText,url:shareUrl}); return; }catch{}
      }
      $('#share-modal').classList.add('open');
    });
    $('#share-close').addEventListener('click', ()=> $('#share-modal').classList.remove('open'));
    $('#share-modal').addEventListener('click', e=>{ if(e.target.id==='share-modal') $('#share-modal').classList.remove('open'); });
    $('#share-copy-btn').addEventListener('click', async ()=>{
      try{ await navigator.clipboard.writeText(shareUrl); const b=$('#share-copy-btn'); const o=b.textContent; b.textContent='¡Copiado!'; setTimeout(()=>b.textContent=o,1500); }catch{}
    });
  }

  function initMobileMenu(){
    $('#btn-menu').addEventListener('click', ()=> $('#mobile-menu').classList.add('open'));
    $('#mobile-close').addEventListener('click', ()=> $('#mobile-menu').classList.remove('open'));
    $$('#mobile-menu nav a').forEach(a=>a.addEventListener('click', ()=> $('#mobile-menu').classList.remove('open')));
  }

  function applySecurity(){
    if(!CONFIG.security) return;
    if(CONFIG.security.blockTextSelection) document.body.classList.add('no-select');
    // security.js reads flags via window
    window.__RPV_SECURITY__ = CONFIG.security;
    if(window.__initSecurity) window.__initSecurity();
  }
})();
