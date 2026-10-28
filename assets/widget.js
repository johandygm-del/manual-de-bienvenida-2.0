(function(){
var d=document,r=d.documentElement,K='gb-theme';
function get(){try{return localStorage.getItem(K)}catch(e){return null}}
function set(v){try{localStorage.setItem(K,v)}catch(e){}}
var t=get()||'light';r.setAttribute('data-theme',t);
var css=d.createElement('style');
css.textContent=
'.gbw{position:fixed;right:16px;bottom:16px;z-index:9999;display:flex;gap:6px;padding:6px;border-radius:999px;background:rgba(27,27,27,.92);box-shadow:0 8px 24px rgba(0,0,0,.28);backdrop-filter:blur(8px)}'+
'.gbw a,.gbw button{width:46px;height:46px;border-radius:50%;border:0;display:flex;align-items:center;justify-content:center;background:transparent;color:#fff;cursor:pointer;padding:0;transition:background .15s,transform .15s;text-decoration:none}'+
'.gbw a:hover,.gbw button:hover,.gbw a:focus-visible,.gbw button:focus-visible{background:#00abe1;color:#1b1b1b;outline:none;transform:scale(1.06)}'+
'.gbw svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'+
'.gbw .sun{display:none}[data-theme=dark] .gbw .sun{display:block}[data-theme=dark] .gbw .moon{display:none}'+
'.gbw{animation:gbin .6s .4s cubic-bezier(.2,.7,.2,1) both}@keyframes gbin{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}'+
'@media(prefers-reduced-motion:reduce){.gbw{animation:none}}'+
'@media(hover:hover) and (prefers-reduced-motion:no-preference){.pg .c,.pg .chip,.pg .stk{transition:scale .25s cubic-bezier(.2,.7,.2,1),box-shadow .25s}.pg .c:hover,.pg .chip:hover,.pg .chip:focus-visible,.pg .stk:hover{scale:1.04;position:relative;z-index:3;box-shadow:0 0 0 3px rgba(0,171,225,.9),0 0 28px 6px rgba(0,171,225,.55)}}'+
'body{padding-bottom:84px;transition:background .3s;overflow-x:hidden}'+
'@media(hover:hover) and (min-width:700px) and (prefers-reduced-motion:no-preference){.pg{transition:transform .35s cubic-bezier(.2,.7,.2,1),box-shadow .35s;transform-origin:center top}.pg:hover{transform:scale(1.025);box-shadow:0 18px 50px rgba(0,0,0,.28);z-index:2}}'+
/* modo oscuro */
'[data-theme=dark] body{background:#0b0d10!important}'+
'[data-theme=dark] .pg{background:#14171b!important;color:#eef3f7!important}'+
'[data-theme=dark] .pg [style*="background:#fff"],[data-theme=dark] .pg [style*="background:#f3f9fd"],[data-theme=dark] .pg [style*="background:#e8eef3"],[data-theme=dark] .pg .tl{background:#23282e!important;color:#eef3f7!important}'+
'[data-theme=dark] .pg [style*="background:#fff"] *:not([style*="color:#00"]):not([style*="color:#7"]):not(b):not(strong),[data-theme=dark] .pg .tl *{color:inherit}'+
'[data-theme=dark] .pg [style*="background:#1b1b1b"]{background:#05070a!important;box-shadow:0 0 0 1px #2e353d}'+
'[data-theme=dark] .pg img[src*="logo-negro"]{filter:invert(1) brightness(1.2)}'+
'[data-theme=dark] .pg svg[fill="#1b1b1b"],[data-theme=dark] .pg svg [fill="#1b1b1b"]{opacity:.6}'+
'[data-theme=dark] .nav .cnt{color:#eef3f7}'+
'[data-theme=dark] .nav a:not(.next){background:#23282e}'+
'[data-theme=dark] .ft,[data-theme=dark] .ft *{color:#eef3f7!important}';
d.head.appendChild(css);
function build(){
var w=d.createElement('div');w.className='gbw';w.setAttribute('role','toolbar');w.setAttribute('aria-label','Accesos rápidos');
w.innerHTML='<a href="index.html" aria-label="Ir al inicio" title="Inicio"><svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/></svg></a>'+
'<button type="button" aria-label="Cambiar entre modo claro y oscuro" title="Claro / Oscuro"><svg class="moon" viewBox="0 0 24 24"><path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/></svg><svg class="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg></button>';
w.querySelector('button').onclick=function(){var n=r.getAttribute('data-theme')==='dark'?'light':'dark';r.setAttribute('data-theme',n);set(n);var m=d.querySelector('meta[name=theme-color]');if(m)m.content=n==='dark'?'#0b0d10':'#1b1b1b'};
d.body.appendChild(w)}
if(d.body)build();else d.addEventListener('DOMContentLoaded',build);
})();
