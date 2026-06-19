var D=null;window.saveD=function(){localStorage.setItem("rpvData",JSON.stringify(D))};
async function loadD(){
  let base;
  try{const r=await fetch('data.json',{cache:'no-store'});base=await r.json()}catch(e){base={}}
  try{const s=localStorage.getItem('rpvData');if(s)return Object.assign({},base,JSON.parse(s))}catch(e){}
  return base;
}
window.addEventListener('storage',async()=>{D=await loadD();window.D=D;renderAll()});
(async()=>{D=await loadD();window.D=D;renderAll()})();
