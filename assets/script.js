
const productCategories=["CarKam","Speed Dome(PTZ)","EzyHome","Video Door Phones","Time & Attendance","Mobile Surveillance","Storage","Switches","Memory","Body Worn Solutions","AI Edge Box","Accessories","Network Camera","Network Video Recorder (NVR)","Analog HD Camera","Digital Video Recorder (DVR)","illumax","Guard+"];
const cats=productCategories;
const icons=["📷","🖥️","📹","💾","🎥","🏠","🔔","🕒","🗄️","🔌","🧰","🚗"];
const sols=[["Banking","ATM, branch and cash-van surveillance."],["Campus","Safer schools and universities."],["Hospitality / Health Care","Tailored coverage for hotels and hospitals."],["Industrial","Warehouses and manufacturing floors."],["Law Enforcement","Support for city and state police."],["Oil & Gas","Remote, large-area monitoring."],["Real Estate","Construction sites to finished buildings."],["Retail","Reduce theft and cashier fraud."],["Safe City","Public-area surveillance."],["Smart Traffic","Traffic monitoring and enforcement."],["Transport","Mobile surveillance for vehicles."]];
const trend=[
 {name:"CP-UNC-DA21L3C-LQ2",description:"2MP Dual Light Dome Camera - 30Mtr.",isNew:true,image:"https://cpplusworld.com/prodassets/product/small/7a97138d-c694-4090-806b-3746e5ba222f.png",url:"https://cpplusworld.com/cp-unc-da21l3c-lq2"},
 {name:"CP-W32",description:"CarKam 3MP",isNew:true,image:"https://cpplusworld.com/prodassets/product/small/ee3c91b8-4ab4-4b81-a64a-9970ccd7c4a7.png",url:"https://cpplusworld.com/cp-w32"},
 {name:"CP-UVR-1601F1V-I",description:"16Ch. 5MP Digital Video Recorder",isNew:true,image:"https://cpplusworld.com/prodassets/product/small/38bd52ca-7a64-4380-bf3a-70beda8041e7.png",url:"https://cpplusworld.com/cp-uvr-1601f1v-i-"},
 {name:"CP-UVR-3201K2V-I3",description:"32Ch. 5MP Digital Video Recorder",image:"https://cpplusworld.com/prodassets/product/small/b1c210f6-67b3-445b-b554-499ac7e3379e.png",url:"https://cpplusworld.com/cp-uvr-3201k2v-i3-"},
 {name:"CP-DNW-GPU8G2P-96",description:"8 Ports Gigabit Unmanaged PoE Switch with 2 Gigabit Uplink Ports",image:"https://cpplusworld.com/prodassets/product/small/7ef9d793-773e-4f0a-87c0-6fe180814cab.png",url:"https://cpplusworld.com/cp-dnw-gpu8g2p-96"},
 {name:"CP-DNW-GPU4G2P-48",description:"4 Ports Gigabit Unmanaged PoE Switch with 2 Gigabit Uplink Ports",image:"https://cpplusworld.com/prodassets/product/small/db77677b-d95e-4e46-8ec0-fd8a282aeb74.png",url:"https://cpplusworld.com/cp-dnw-gpu4g2p-48-"},
 {name:"CP-UNC-TA21L3C-LQ2",description:"2MP Dual Light Bullet Camera - 30Mtr.",image:"https://cpplusworld.com/prodassets/product/small/531ea535-0047-47c2-a5a9-c55b9930aa6d.png",url:"https://cpplusworld.com/cp-unc-ta21l3c-lq2"},
 {name:"CP-UNC-TA21L3C-Q2",description:"2MP Network IR Bullet Camera - 30Mtr.",image:"https://cpplusworld.com/prodassets/product/small/22c05e26-e287-4dfc-bda5-a9446e75839c.png",url:"https://cpplusworld.com/cp-unc-ta21l3c-q2"},
 {name:"CP-UA-H14L100B-V3",description:"14” Vandal-Proof IR Housing",image:"https://cpplusworld.com/prodassets/product/small/648e0e96-40ac-497a-9e12-2e135de1c5c7.png",url:"https://cpplusworld.com/cp-ua-h14l100b-v3"},
 {name:"CP-UA-H14B-V3",description:"14” Vandal Proof Camera Housing",image:"https://cpplusworld.com/prodassets/product/small/743a15d5-c356-40a9-a85d-231089f0a64f.png",url:"https://cpplusworld.com/cp-ua-h14b-v3"}
];
const news=[["11/05/2026","A new campaign. A smarter way to look at security."],["05/29/2026","Leadership in intelligent surveillance at industry expos"],["05/29/2026","Surveillance beyond infrastructure for remote homes"],["04/09/2026","New R&D center strengthens global innovation"],["04/09/2026","Dual honours for smart, made-in-India security"],["03/05/2026","Managing Director receives industry achievement award"]];
const productPhotos=[
 "photo-1558008258-3256797b43f3","photo-1518770660439-4636190af475","photo-1557597774-9d273605dfa9",
 "photo-1581092918056-0c4c3acd3789","photo-1519608487953-e999c86e7455","photo-1563013544-824ae1b704d3"
];
const categoryProductPhotos={
 "CarKam":["https://cpplusworld.com/prodassets/product/small/ee3c91b8-4ab4-4b81-a64a-9970ccd7c4a7.png","photo-1449965408869-eaa3f722e40d","photo-1549317661-bd32c8ce0db2","photo-1603386329225-868f9b1ee6a9"],
 "Speed Dome(PTZ)":["photo-1558008258-3256797b43f3","photo-1557597774-9d273605dfa9","photo-1581092918056-0c4c3acd3789","photo-1519608487953-e999c86e7455"],
 "EzyHome":["photo-1563013544-824ae1b704d3","photo-1558008258-3256797b43f3","photo-1557597774-9d273605dfa9","photo-1518770660439-4636190af475"],
 "Video Door Phones":["photo-1558008258-3256797b43f3","photo-1563013544-824ae1b704d3","photo-1557597774-9d273605dfa9","photo-1518770660439-4636190af475"],
 "Time & Attendance":["photo-1581092918056-0c4c3acd3789","photo-1518770660439-4636190af475","photo-1563013544-824ae1b704d3","photo-1558008258-3256797b43f3"],
 "Mobile Surveillance":["photo-1549317661-bd32c8ce0db2","photo-1449965408869-eaa3f722e40d","photo-1603386329225-868f9b1ee6a9","photo-1558008258-3256797b43f3"],
 "Storage":["photo-1558494949-ef010cbdcc31","photo-1544197150-b99a580bb7a8","photo-1597872200969-2b65d56bd16b","photo-1518770660439-4636190af475"],
 "Switches":["https://cpplusworld.com/prodassets/product/small/7ef9d793-773e-4f0a-87c0-6fe180814cab.png","https://cpplusworld.com/prodassets/product/small/db77677b-d95e-4e46-8ec0-fd8a282aeb74.png","https://cpplusworld.com/prodassets/product/small/7ef9d793-773e-4f0a-87c0-6fe180814cab.png","https://cpplusworld.com/prodassets/product/small/db77677b-d95e-4e46-8ec0-fd8a282aeb74.png"],
 "Memory":["photo-1518770660439-4636190af475","photo-1597872200969-2b65d56bd16b","photo-1581092918056-0c4c3acd3789","photo-1558494949-ef010cbdcc31"],
 "Body Worn Solutions":["photo-1557597774-9d273605dfa9","photo-1581092918056-0c4c3acd3789","photo-1518770660439-4636190af475","photo-1558008258-3256797b43f3"],
 "AI Edge Box":["photo-1518770660439-4636190af475","photo-1581092918056-0c4c3acd3789","photo-1558494949-ef010cbdcc31","photo-1597872200969-2b65d56bd16b"],
 "Accessories":["photo-1518770660439-4636190af475","photo-1558008258-3256797b43f3","photo-1581092918056-0c4c3acd3789","photo-1563013544-824ae1b704d3"],
 "Network Camera":["https://cpplusworld.com/prodassets/product/small/7a97138d-c694-4090-806b-3746e5ba222f.png","https://cpplusworld.com/prodassets/product/small/531ea535-0047-47c2-a5a9-c55b9930aa6d.png","https://cpplusworld.com/prodassets/product/small/22c05e26-e287-4dfc-bda5-a9446e75839c.png","https://cpplusworld.com/prodassets/product/small/7a97138d-c694-4090-806b-3746e5ba222f.png"],
 "Network Video Recorder (NVR)":["https://cpplusworld.com/prodassets/product/small/38bd52ca-7a64-4380-bf3a-70beda8041e7.png","https://cpplusworld.com/prodassets/product/small/b1c210f6-67b3-445b-b554-499ac7e3379e.png","https://cpplusworld.com/prodassets/product/small/38bd52ca-7a64-4380-bf3a-70beda8041e7.png","https://cpplusworld.com/prodassets/product/small/b1c210f6-67b3-445b-b554-499ac7e3379e.png"],
 "Analog HD Camera":["https://cpplusworld.com/prodassets/product/small/531ea535-0047-47c2-a5a9-c55b9930aa6d.png","https://cpplusworld.com/prodassets/product/small/22c05e26-e287-4dfc-bda5-a9446e75839c.png","https://cpplusworld.com/prodassets/product/small/7a97138d-c694-4090-806b-3746e5ba222f.png","https://cpplusworld.com/prodassets/product/small/531ea535-0047-47c2-a5a9-c55b9930aa6d.png"],
 "Digital Video Recorder (DVR)":["https://cpplusworld.com/prodassets/product/small/38bd52ca-7a64-4380-bf3a-70beda8041e7.png","https://cpplusworld.com/prodassets/product/small/b1c210f6-67b3-445b-b554-499ac7e3379e.png","photo-1597872200969-2b65d56bd16b","photo-1558494949-ef010cbdcc31"],
 "illumax":["https://cpplusworld.com/prodassets/product/small/7a97138d-c694-4090-806b-3746e5ba222f.png","https://cpplusworld.com/prodassets/product/small/531ea535-0047-47c2-a5a9-c55b9930aa6d.png","https://cpplusworld.com/prodassets/product/small/22c05e26-e287-4dfc-bda5-a9446e75839c.png","photo-1557597774-9d273605dfa9"],
 "Guard+":["https://cpplusworld.com/prodassets/product/small/7a97138d-c694-4090-806b-3746e5ba222f.png","https://cpplusworld.com/prodassets/product/small/531ea535-0047-47c2-a5a9-c55b9930aa6d.png","photo-1558008258-3256797b43f3","photo-1557597774-9d273605dfa9"]
};
const newsPhotos=[
 "photo-1558008258-3256797b43f3","photo-1486406146926-c627a92ad1ab","photo-1519608487953-e999c86e7455",
 "photo-1581092918056-0c4c3acd3789","photo-1518770660439-4636190af475","photo-1544620347-c4fd4a3d5957"
];
const photoUrl=(id,w=700)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const productImageUrl=(source,w=700)=>source.startsWith("http")?source:photoUrl(source,w);
const $=id=>document.getElementById(id);
$("megaMenu").innerHTML=`<a href="#products" data-product-all>All Products</a>${cats.map((c,i)=>`<a href="#products" data-category="${i}">${c}</a>`).join("")}`;
$("solMenu").innerHTML=sols.map(s=>`<a href="#solutions">${s[0]}</a>`).join("");
$("fProd").innerHTML=cats.slice(0,8).map(c=>`<li><a href="#products">${c}</a></li>`).join("");
$("fSol").innerHTML=sols.slice(0,8).map(s=>`<li><a href="#solutions">${s[0]}</a></li>`).join("");
$("trendGrid").innerHTML=trend.map(t=>`<article class="card trend-card">${t.isNew?'<span class="trend-ribbon">New</span>':''}<div class="ph"><a href="${t.url}" target="_blank" rel="noopener noreferrer" aria-label="View ${t.name}"><img src="${t.image}" alt="${t.name}" loading="eager" decoding="async"></a></div><div class="b"><h3><a href="${t.url}" target="_blank" rel="noopener noreferrer">${t.name}</a></h3><p>${t.description}</p></div></article>`).join("");
const trendTrack=$("trendGrid"),trendCards=[...trendTrack.children];
let trendIndex=0;
function trendVisibleCount(){return innerWidth<=380?1:innerWidth<=560?2:innerWidth<=760?3:innerWidth<=1100?4:5}
function updateTrendCarousel(){
 const maxIndex=Math.max(0,trendCards.length-trendVisibleCount());
 trendIndex=Math.min(trendIndex,maxIndex);
 const step=trendCards[0]?.getBoundingClientRect().width+(parseFloat(getComputedStyle(trendTrack).gap)||0);
 trendTrack.style.transform=`translateX(-${trendIndex*step}px)`;
 $("trendPrev").disabled=trendIndex===0;
 $("trendNext").disabled=trendIndex>=maxIndex;
}
$("trendPrev").onclick=()=>{trendIndex=Math.max(0,trendIndex-1);updateTrendCarousel()};
$("trendNext").onclick=()=>{trendIndex=Math.min(trendCards.length-trendVisibleCount(),trendIndex+1);updateTrendCarousel()};
addEventListener("resize",updateTrendCarousel);
updateTrendCarousel();
$("solGrid").innerHTML=sols.map((s,i)=>`<article class="card sol"><div class="ic" aria-hidden="true">${["🏦","🎓","🏥","🏭","🛡️","🛢️","🏢","🛍️","🌆","🚦","🚌"][i]}</div><div class="sol-copy"><h3>${s[0]}</h3><p>${s[1]}</p><a class="link" href="#contact">Explore ›</a></div></article>`).join("");
$("newsGrid").innerHTML=news.map((n,i)=>{
 const pageUrl=encodeURIComponent(location.href.split("#")[0]);
 const title=encodeURIComponent(n[1]);
 return `<article class="card news-card"><div class="ph"><img src="${photoUrl(newsPhotos[i%newsPhotos.length])}" alt="${n[1]}" loading="lazy"><div class="news-overlay"><time>${n[0]}</time><h3>${n[1]}</h3><div class="news-share" aria-label="Share this story">
 <a href="https://www.facebook.com/sharer/sharer.php?u=${pageUrl}" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4z"/></svg></a>
 <a href="https://twitter.com/intent/tweet?text=${title}&amp;url=${pageUrl}" target="_blank" rel="noopener noreferrer" aria-label="Share on X"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20z"/></svg></a>
 <a href="https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3A2.2 2.2 0 115.2 7.4 2.2 2.2 0 015.2 3zM3.3 9h3.8v12H3.3zm6.2 0h3.6v1.6h.1A4 4 0 0116.8 8c4 0 4.7 2.6 4.7 6V21h-3.8v-6.2c0-1.5 0-3.5-2.1-3.5s-2.5 1.6-2.5 3.4V21H9.5z"/></svg></a>
 </div></div></div><div class="b"><time>${n[0]}</time><h3>${n[1]}</h3><button class="news-details" type="button" aria-expanded="false">Show details</button></div></article>`;
}).join("");
const newsTrack=$("newsGrid"),newsCards=[...newsTrack.children];
newsTrack.addEventListener("click",e=>{
 const card=e.target.closest(".news-card");
 if(!card||e.target.closest(".news-share a"))return;
 card.classList.toggle("is-active");
 const button=card.querySelector(".news-details");
 button.setAttribute("aria-expanded",card.classList.contains("is-active"));
 button.textContent=card.classList.contains("is-active")?"Hide details":"Show details";
});
let newsIndex=0;
function newsVisibleCount(){return innerWidth<=560?1:innerWidth<=900?2:3}
function updateNewsCarousel(){
 const maxIndex=Math.max(0,newsCards.length-newsVisibleCount());
 newsIndex=Math.min(newsIndex,maxIndex);
 const step=newsCards[0]?.getBoundingClientRect().width+(parseFloat(getComputedStyle(newsTrack).gap)||0);
 newsTrack.style.transform=`translateX(-${newsIndex*step}px)`;
 $("newsPrev").disabled=newsIndex===0;
 $("newsNext").disabled=newsIndex>=maxIndex;
}
$("newsPrev").onclick=()=>{newsIndex=Math.max(0,newsIndex-1);updateNewsCarousel()};
$("newsNext").onclick=()=>{newsIndex=Math.min(newsCards.length-newsVisibleCount(),newsIndex+1);updateNewsCarousel()};
addEventListener("resize",updateNewsCarousel);
updateNewsCarousel();
/* product categories */
const productCategoryDescriptions={
 "CarKam":"Compact and reliable CarKam range offering crystal-clear footage for enhanced on-road safety.",
 "Speed Dome(PTZ)":"Flexible pan, tilt and zoom surveillance for wide-area coverage.",
 "EzyHome":"Smart, convenient security solutions for your home.",
 "Video Door Phones":"See and speak with visitors before opening the door.",
 "Time & Attendance":"Smart systems for accurate time and attendance management.",
 "Mobile Surveillance":"Reliable surveillance solutions for vehicles and mobile environments.",
 "Storage":"Dependable storage solutions for surveillance footage.",
 "Switches":"Reliable network connectivity for security cameras and systems.",
 "Memory":"Memory solutions for reliable recording and data storage.",
 "Body Worn Solutions":"Portable video solutions for field teams and security professionals.",
 "AI Edge Box":"Edge computing solutions for intelligent video analytics.",
 "Accessories":"Essential accessories for complete security installations.",
 "Network Camera":"Network cameras for clear, connected video surveillance.",
 "Network Video Recorder (NVR)":"Network video recorders for centralized IP camera recording and playback.",
 "Analog HD Camera":"High-definition analog cameras for dependable surveillance coverage.",
 "Digital Video Recorder (DVR)":"Digital video recorders for recording and managing analog HD camera footage.",
 "illumax":"Illumax cameras deliver clear color imaging in low-light environments.",
 "Guard+":"Guard+ surveillance cameras provide reliable protection for homes and businesses."
};
function showCat(i){
 [...$("tabs").children].forEach((button,j)=>{
  button.classList.toggle("on",j===i);
  button.setAttribute("aria-pressed",j===i);
 });
 const category=productCategories[i];
 const photos=categoryProductPhotos[category]||productPhotos.slice(0,4);
 const description=productCategoryDescriptions[category];
 const featurePhoto=photos[0];
 $("productFeature").innerHTML=`<img src="${productImageUrl(featurePhoto,900)}" alt="${category}" loading="eager" decoding="async"><div class="product-feature-copy"><h3>${category}</h3><p>${description}</p></div>`;
 $("prodGrid").innerHTML=[1,2,3,4].map((n,j)=>`<article class="product-item"><img src="${productImageUrl(photos[j%photos.length])}" alt="${category} product ${n}" loading="eager" decoding="async"><div><h4>${category==="CarKam"?(j===0?"Dash cam":`CarKam Model ${n}`):`${category} – Model ${n}`}</h4><p>${category==="CarKam"&&j===0?"Dash Camera":description}</p></div></article>`).join("");
}
$("tabs").innerHTML=productCategories.map((category,i)=>`<button type="button" data-i="${i}" aria-pressed="false">${category}</button>`).join("");
$("tabs").onclick=e=>{
 const button=e.target.closest("button[data-i]");
 if(button)showCat(Number(button.dataset.i));
};
showCat(0);
$("products").querySelector(".show-all").addEventListener("click",()=>showCat(0));
/* carousel */
let cur=0,timer;const n=3;
$("dots").innerHTML=[...Array(n)].map((_,i)=>`<i data-i="${i}"></i>`).join("");
function go(i){cur=(i+n)%n;$("slides").style.transform=`translateX(-${cur*100}%)`;[...$("dots").children].forEach((d,j)=>d.classList.toggle("on",j===cur))}
function auto(){clearInterval(timer);timer=setInterval(()=>go(cur+1),5000)}
$("prev").onclick=()=>{go(cur-1);auto()};$("next").onclick=()=>{go(cur+1);auto()};
$("dots").onclick=e=>{if(e.target.dataset.i){go(+e.target.dataset.i);auto()}};
go(0);auto();
const revealEls=[...document.querySelectorAll("#contact .contact-item,.nl-signup,.follow,footer .footer-company,footer .fcols>div")];
revealEls.forEach((el,i)=>{el.classList.add("reveal");el.style.transitionDelay=`${(i%4)*100}ms`});
document.documentElement.classList.add("reveal-ready");
if("IntersectionObserver" in window){
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add("is-visible");revealObserver.unobserve(entry.target)}
 }),{threshold:.12});
 revealEls.forEach(el=>revealObserver.observe(el));
}else revealEls.forEach(el=>el.classList.add("is-visible"));
/* misc */
const nav=$("nav");
const dropdownItems=[...nav.querySelectorAll("li")].filter(item=>item.querySelector(":scope > .drop"));
dropdownItems.forEach((item,index)=>{
 const link=item.querySelector(":scope > a");
 const menu=item.querySelector(":scope > .drop");
 if(!menu.id)menu.id=`nav-submenu-${index}`;
 link.setAttribute("aria-controls",menu.id);
 link.setAttribute("aria-expanded","false");
});
function closeMobileNav(){
 nav.classList.remove("open");
 $("burger").setAttribute("aria-expanded","false");
 dropdownItems.forEach(item=>{
  item.classList.remove("submenu-open");
  item.querySelector(":scope > a").setAttribute("aria-expanded","false");
 });
}
$("burger").onclick=()=>{
 const open=nav.classList.toggle("open");
 $("burger").setAttribute("aria-expanded",open);
 if(!open)closeMobileNav();
};
nav.addEventListener("click",event=>{
 const link=event.target.closest("a");
 if(!link)return;
 const item=link.closest("li");
 if(innerWidth>1100){
  if(link.closest("#megaMenu")){
   if(link.dataset.category!==undefined)showCat(Number(link.dataset.category));
   else if(link.hasAttribute("data-product-all"))showCat(0);
  }else if(link.parentElement===item&&link.getAttribute("href")==="#products"&&item?.querySelector(":scope > .drop")){
   showCat(0);
  }
  return;
 }
 if(link.parentElement===item&&item?.parentElement===nav.querySelector("ul")&&item.querySelector(":scope > .drop")){
  const wasOpen=item.classList.contains("submenu-open");
  if(link.getAttribute("href")==="#products")showCat(0);
  if(wasOpen&&link.getAttribute("href")==="#products"){
   closeMobileNav();
   return;
  }
  event.preventDefault();
  dropdownItems.filter(other=>other!==item).forEach(other=>{
   other.classList.remove("submenu-open");
   other.querySelector(":scope > a").setAttribute("aria-expanded","false");
  });
  item.classList.toggle("submenu-open",!wasOpen);
  link.setAttribute("aria-expanded",!wasOpen);
  return;
 }
 const categoryLink=link.closest("#megaMenu")&&link.dataset.category!==undefined;
 if(categoryLink)showCat(Number(link.dataset.category));
 if(link.hasAttribute("data-product-all"))showCat(0);
 closeMobileNav();
});
const themeToggle=$("themeToggle");
themeToggle.onclick=()=>{
 const dark=document.documentElement.dataset.theme!=="dark";
 document.documentElement.dataset.theme=dark?"dark":"light";
 $("themeIcon").textContent=dark?"☀️":"🌙";
 $("themeLabel").textContent=dark?"Light mode":"Dark mode";
 themeToggle.setAttribute("aria-label",`Switch to ${dark?"light":"dark"} mode`);
 themeToggle.setAttribute("aria-pressed",dark);
};
$("nlForm").onsubmit=e=>{e.preventDefault();$("nlMsg").textContent="Thanks! "+$("nlEmail").value+" is subscribed (demo).";$("nlForm").reset()};
$("gotit").onclick=()=>{$("cookie").style.display="none"};
const tb=$("top");addEventListener("scroll",()=>{tb.style.display=scrollY>400?"block":"none"});
tb.onclick=()=>scrollTo({top:0,behavior:"smooth"});
