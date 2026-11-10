const C=WEDDING_CONFIG,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let L='en';
const T={en:{with:"With the blessings of our families",tag:"Together Forever",open:"OPEN OUR WEDDING INVITATION",skip:"Skip intro",together:"Together with our families",quote:"Two hearts, two families, one beautiful beginning.",cdl:"Counting down to our special day",story:"Our Story",s1:"Some beautiful stories begin with a simple introduction. Ours began with two families coming together, two hearts finding their connection, and a journey that will last a lifetime.",s2:"With the love and blessings of our families, we are delighted to invite you to celebrate our wedding.",scrH:"A little surprise awaits you…",scrS:"Scratch to reveal",scrWin:"We can’t wait to celebrate with you!",events:"Wedding Celebrations",gallery:"Our Moments",rsvp:"RSVP",rsvpAsk:"We would love to know if you can join us!",yes:"Happily Accepts",no:"Regretfully Declines",send:"Send via WhatsApp",rsvpNote:"WhatsApp opens with a prefilled message. Please press send there. We don’t store anything on this website.",name:"Your name",msg:"Message (optional)",share:"Share our happiness with your loved ones.",wa:"WhatsApp",nat:"Share",copy:"Copy link",copied:"Link copied",gcal:"Google Calendar",ics:"Download .ics",qrd:"Download QR",f1:"Your presence will make our celebration even more special.",f2:"We look forward to celebrating this beautiful beginning with you.",f3:"With love and blessings,",replay:"Replay invitation",dear:"Dear",delight:"We are delighted to invite you to celebrate our special day.",tbd:"Date to be announced",dir:"Get Directions",done:"The celebrations begin!",d:"Days",h:"Hours",m:"Minutes",s:"Seconds",nonum:"Add the WhatsApp number in js/config.js"},
ta:{with:"எங்கள் குடும்பத்தினரின் ஆசீர்வாதத்துடன்",tag:"என்றும் ஒன்றாக",open:"எங்கள் திருமண அழைப்பிதழை திறக்கவும்",skip:"தவிர்க்கவும்",together:"எங்கள் குடும்பத்தினருடன் இணைந்து",quote:"இரு இதயங்கள், இரு குடும்பங்கள், ஒரு அழகிய தொடக்கம்.",cdl:"எங்கள் சிறப்பு நாளுக்கான நேரம்",story:"எங்கள் கதை",s1:"சில அழகிய கதைகள் ஒரு எளிய அறிமுகத்துடன் தொடங்கும். எங்கள் கதை இரு குடும்பங்கள் இணைந்ததில், இரு இதயங்கள் இணைந்ததில் தொடங்கியது.",s2:"எங்கள் குடும்பத்தினரின் அன்புடனும் ஆசீர்வாதத்துடனும், எங்கள் திருமணத்தில் கலந்துகொள்ள உங்களை அழைக்கிறோம்.",scrH:"ஒரு சிறிய ஆச்சரியம்…",scrS:"தேய்த்துப் பாருங்கள்",scrWin:"உங்களுடன் கொண்டாட ஆவலுடன் காத்திருக்கிறோம்!",events:"திருமண நிகழ்வுகள்",gallery:"எங்கள் தருணங்கள்",rsvp:"வருகை உறுதி",rsvpAsk:"நீங்கள் வர முடியுமா என்பதை அறிய விரும்புகிறோம்!",yes:"மகிழ்ச்சியுடன் வருகிறேன்",no:"வருந்துகிறேன், வர இயலாது",send:"வாட்ஸ்அப்பில் அனுப்பு",rsvpNote:"வாட்ஸ்அப் முன்பூர்த்தி செய்த செய்தியுடன் திறக்கும். அங்கே அனுப்பவும். இந்த தளத்தில் எதுவும் சேமிக்கப்படாது.",name:"உங்கள் பெயர்",msg:"செய்தி (விருப்பம்)",share:"எங்கள் மகிழ்ச்சியை உங்கள் அன்புக்குரியவர்களுடன் பகிருங்கள்.",wa:"வாட்ஸ்அப்",nat:"பகிர்",copy:"இணைப்பை நகலெடு",copied:"இணைப்பு நகலெடுக்கப்பட்டது",gcal:"கூகுள் கேலெண்டர்",ics:".ics பதிவிறக்கு",qrd:"QR பதிவிறக்கு",f1:"உங்கள் வருகை எங்கள் கொண்டாட்டத்தை மேலும் சிறப்பாக்கும்.",f2:"இந்த அழகிய தொடக்கத்தை உங்களுடன் கொண்டாட ஆவலுடன் இருக்கிறோம்.",f3:"அன்புடனும் ஆசீர்வாதத்துடனும்,",replay:"அழைப்பிதழை மீண்டும் காண்க",dear:"அன்புள்ள",delight:"எங்கள் சிறப்பு நாளைக் கொண்டாட உங்களை மகிழ்ச்சியுடன் அழைக்கிறோம்.",tbd:"தேதி விரைவில் அறிவிக்கப்படும்",dir:"வழி காட்டு",done:"கொண்டாட்டங்கள் தொடங்குகின்றன!",d:"நாட்கள்",h:"மணி",m:"நிமிடம்",s:"வினாடி",nonum:"js/config.js இல் வாட்ஸ்அப் எண்ணை சேர்க்கவும்"}};
const t=k=>T[L][k]||T.en[k]||'';
const TZ=C.wedding.timezone,loc=()=>L=='ta'?'ta-IN':'en-IN';
const fd=(iso,o)=>iso?new Date(iso).toLocaleString(loc(),{timeZone:TZ,...o}):t('tbd');
const names=`${C.bride.name} ❤️ ${C.groom.name}`;
const toast=m=>{const e=$('#toast');e.textContent=m;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),2200)};
Object.entries(C.features).forEach(([k,v])=>!v&&$$(`[data-f="${k}"]`).forEach(e=>e.hidden=true));
$('.hero').style.setProperty('--hero',`url(${C.media.hero})`);
$$('.names').forEach(e=>e.textContent=names);$('#hB').textContent=C.bride.name.toUpperCase();$('#hG').textContent=C.groom.name.toUpperCase();
$$('.petals').forEach(p=>{for(let i=0;i<10;i++){const s=document.createElement('i');s.style.cssText=`left:${Math.random()*100}%;animation-duration:${7+Math.random()*7}s;animation-delay:-${Math.random()*9}s`;p.append(s)}});
const guest=(new URLSearchParams(location.search).get('guest')||'').trim().slice(0,60);
function renderGuest(){$('#guest').textContent=guest?`${t('dear')} ${guest}, ${t('delight')}`:''}
function renderEvents(){
  $('#ev').innerHTML=C.events.map(e=>{
    const dir=e.mapsUrl||'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(`${e.venue} ${e.address}`);
    const has=e.venue||e.address||e.mapsUrl;
    return `<div class="ev"><h4>${e.name[L]}</h4><p class="gold">${fd(e.start,{dateStyle:'full'})}${e.start?' · '+fd(e.start,{timeStyle:'short'}):''}</p>
    ${e.venue?`<p><b>${e.venue}</b></p>`:''}${e.address?`<p>${e.address}</p>`:''}${e.desc[L]?`<p class="it">${e.desc[L]}</p>`:''}
    ${has?`<a class="btn" target="_blank" rel="noopener" href="${dir}">${t('dir')}</a>`:''}${e.embedUrl?`<iframe loading="lazy" src="${e.embedUrl}" title="Map"></iframe>`:''}</div>`}).join('');
}
function apply(){
  document.documentElement.lang=L;$$('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));
  $$('[data-ph]').forEach(e=>e.placeholder=t(e.dataset.ph));$('#lang').textContent=L=='en'?'தமிழ்':'EN';
  const d=fd(C.wedding.date,{dateStyle:'full'});$('#wdate').textContent=d;$('#wdate2').textContent=d;
  $('#nat').hidden=!navigator.share;renderEvents();renderGuest();tick();
}
$('#lang').onclick=()=>{L=L=='en'?'ta':'en';apply()};
function tick(){
  const box=$('#cd');if(!C.wedding.date){box.textContent=t('tbd');return}
  let s=Math.floor((new Date(C.wedding.date)-Date.now())/1000);
  if(s<=0){box.textContent=t('done');return}
  box.innerHTML=[['d',86400],['h',3600],['m',60],['s',1]].map(([k,n])=>{const x=Math.floor(s/n);s%=n;return `<div><b>${String(x).padStart(2,'0')}</b><small>${t(k)}</small></div>`}).join('');
}setInterval(tick,1000);
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&(e.target.classList.add('in'),io.unobserve(e.target))),{threshold:.12});
$$('.rv').forEach(e=>io.observe(e));
const au=new Audio(C.media.backgroundMusic);au.loop=true;au.volume=0;let fadeT;
au.onerror=()=>$('#music').hidden=true;
const fade=(to,cb)=>{clearInterval(fadeT);fadeT=setInterval(()=>{au.volume=Math.max(0,Math.min(1,au.volume+(to>au.volume?.04:-.04)));if(Math.abs(au.volume-to)<.05){au.volume=to;clearInterval(fadeT);cb&&cb()}},80)};
const mPlay=()=>au.play().then(()=>{fade(.5);$('#music').classList.add('on')}).catch(()=>{});
$('#music').onclick=()=>au.paused?mPlay():(fade(0,()=>au.pause()),$('#music').classList.remove('on'));
let busy=false;
const enter=()=>{$('#intro').classList.add('out');document.body.classList.remove('lock');scrollTo(0,0)};
$('#open').onclick=()=>{if(busy)return;busy=true;$('#env').classList.add('open');setTimeout(()=>{enter();mPlay();busy=false},2400)};
$('#skip').onclick=enter;
$('#replay').onclick=()=>{$('#env').classList.remove('open');$('#intro').classList.remove('out');document.body.classList.add('lock')};
function burst(){for(let i=0;i<40;i++){const e=document.createElement('i');e.className='conf';e.style.cssText=`left:${Math.random()*100}vw;background:${['#C6A15B','#641E2B','#B77A7A'][i%3]};animation-delay:${Math.random()*.6}s`;document.body.append(e);setTimeout(()=>e.remove(),3200)}}
function scratch(){
  const c=$('#sc');if(!c||c.closest('[hidden]'))return;const x=c.getContext('2d'),w=c.width=c.offsetWidth,h=c.height=c.offsetHeight;
  const g=x.createLinearGradient(0,0,w,h);g.addColorStop(0,'#C6A15B');g.addColorStop(.5,'#ecd9a0');g.addColorStop(1,'#a8823c');x.fillStyle=g;x.fillRect(0,0,w,h);
  x.fillStyle='#641E2B';x.textAlign='center';x.font="600 24px 'Cormorant Garamond','Noto Sans Tamil',serif";x.fillText(t('scrH'),w/2,h/2-6);x.font="15px Jost,'Noto Sans Tamil',sans-serif";x.fillText(t('scrS'),w/2,h/2+22);
  let down=false,n=0,done=false;
  const check=()=>{const a=x.getImageData(0,0,w,h).data;let k=0,tot=0;for(let i=3;i<a.length;i+=64){tot++;if(!a[i])k++}if(k/tot>.45&&!done){done=true;c.classList.add('gone');burst()}};
  const p=e=>{const r=c.getBoundingClientRect();x.globalCompositeOperation='destination-out';x.beginPath();x.arc(e.clientX-r.left,e.clientY-r.top,22,0,7);x.fill();if(++n%10==0)check()};
  c.onpointerdown=e=>{down=true;c.setPointerCapture(e.pointerId);p(e)};c.onpointermove=e=>down&&p(e);c.onpointerup=c.onpointercancel=()=>down=false;
}
const G=C.media.gallery;let gi=0;const lb=$('#lb'),li=lb.querySelector('img');
$('#grid').innerHTML=G.map((s,i)=>`<img loading="lazy" draggable="false" src="${s}" alt="Pre-wedding photograph ${i+1}" data-i="${i}">`).join('');
$$('#grid img').forEach(im=>im.onerror=()=>{im.remove();if(!$('#grid img'))$('#gal').hidden=true});
const show=i=>{gi=(i+G.length)%G.length;li.src=G[gi];lb.hidden=false};
$('#grid').onclick=e=>e.target.dataset.i&&show(+e.target.dataset.i);
$('#lx').onclick=()=>lb.hidden=true;$('#lp').onclick=()=>show(gi-1);$('#ln').onclick=()=>show(gi+1);
[$('#grid'),lb].forEach(e=>e.oncontextmenu=ev=>ev.preventDefault());
addEventListener('keydown',e=>{if(lb.hidden)return;e.key=='Escape'?lb.hidden=true:e.key=='ArrowLeft'?show(gi-1):e.key=='ArrowRight'&&show(gi+1)});
let tx=0;lb.ontouchstart=e=>tx=e.touches[0].clientX;lb.ontouchend=e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)show(gi+(d<0?1:-1))};
$('#rs').onclick=()=>{
  const n=$('#rn').value.trim().slice(0,60),g=+$('#rg').value||1,y=$('#ra').value=='y',m=$('#rm').value.trim().slice(0,300);
  if(!n)return $('#rn').focus();if(!C.contact.whatsappNumber)return toast(t('nonum'));
  const txt=y?`Hello! This is ${n}. We are happy to attend the wedding of ${C.bride.name} and ${C.groom.name}. Number of guests: ${g}.`:`Hello! This is ${n}. We are sorry that we are unable to attend the wedding of ${C.bride.name} and ${C.groom.name}. Our best wishes to you both.`;
  open(`https://wa.me/${C.contact.whatsappNumber}?text=${encodeURIComponent(txt+(m?' '+m:''))}`,'_blank','noopener');
};
const base=location.href.split(/[?#]/)[0];
$('#wa').href='https://wa.me/?text='+encodeURIComponent(`${names} – wedding invitation ${base}`);
$('#nat').onclick=()=>navigator.share({title:names,url:base}).catch(()=>{});
$('#cp').onclick=()=>(navigator.clipboard?navigator.clipboard.writeText(base):Promise.reject()).then(()=>toast(t('copied')),()=>prompt('Copy:',base));
if(window.QRCode)new QRCode($('#qr'),{text:base,width:180,height:180,colorDark:'#641E2B',colorLight:'#FFF8EB'});
$('#qd').onclick=()=>{const cv=$('#qr canvas');if(!cv)return;const a=document.createElement('a');a.href=cv.toDataURL('image/png');a.download='invitation-qr.png';a.click()};
const ev=C.events.find(e=>e.start&&e.end),f=s=>s.replace(/[-:]/g,'').slice(0,15);
if(!ev)$$('[data-f="addToCalendar"]').forEach(e=>e.hidden=true);else{
  const ti=`Wedding of ${C.bride.name} & ${C.groom.name}`,lo=[ev.venue,ev.address].filter(Boolean).join(', ');
  $('#gc').href=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ti)}&dates=${f(ev.start)}/${f(ev.end)}&ctz=${TZ}&location=${encodeURIComponent(lo)}&details=${encodeURIComponent(ev.desc.en||'')}`;
  $('#ics').onclick=()=>{const s=`BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//invite//EN\r\nBEGIN:VEVENT\r\nUID:${Date.now()}@invite\r\nDTSTAMP:${new Date().toISOString().replace(/[-:]|\.\d+/g,'')}\r\nDTSTART;TZID=${TZ}:${f(ev.start)}\r\nDTEND;TZID=${TZ}:${f(ev.end)}\r\nSUMMARY:${ti}\r\nLOCATION:${lo.replace(/,/g,'\\,')}\r\nEND:VEVENT\r\nEND:VCALENDAR`;const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([s],{type:'text/calendar'}));a.download='wedding.ics';a.click()};
}
apply();addEventListener('load',scratch);
