(()=>{"use strict";var e={d:(t,n)=>{for(var c in n)e.o(n,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:n[c]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(){const e=document.createElement("div");e.className="container";const t=document.createElement("p");t.textContent="Best Indian food in town";const n=document.createElement("p");n.textContent="Made with passion since 1920";const c=document.createElement("img");c.setAttribute("src","./chef.jpg"),c.className="chefImage";const o=document.createElement("p");o.textContent="Order online or visit us",e.appendChild(t),e.appendChild(n),e.appendChild(c),e.appendChild(o),document.querySelector(".content").appendChild(e)}function n(e){const n=["Home","Menu","Contact"];for(let e in n){let t="."+n[e];document.querySelector(t).style.cssText="text-decoration: none;"}document.querySelector(".container").remove(),"Home"===e.target.innerHTML?(t(),document.querySelector(".Home").style.cssText="text-decoration: underline"):"Contact"===e.target.innerHTML?(!function(){const e=document.createElement("div");e.className="container";const t=document.createElement("p"),n=document.createElement("i");n.className="fa-solid fa-phone",t.appendChild(n),t.innerHTML+="123 456 789";const c=document.createElement("p"),o=document.createElement("i");o.className="fa-solid fa-house",c.appendChild(o),c.innerHTML+="Hollywood Boulevard 42, Los Angeles, USA";const d=document.createElement("img");d.setAttribute("src","./map.webp"),d.className="mapImage",e.appendChild(t),e.appendChild(c),e.appendChild(d),document.querySelector(".content").appendChild(e)}(),document.querySelector(".Contact").style.cssText="text-decoration: underline"):(!function(){const e=document.createElement("div");e.className="container grid";for(let t=0;t<4;t++){let t=document.createElement("div"),n=document.createElement("img");n.src="./menu.jpeg",n.className="menuImg",t.className="grid-item";let c=document.createElement("h2");c.textContent="Salalala";let o=document.createElement("p");o.textContent="About the dish; ingridients;About the dish; ingridients;",t.appendChild(n),t.appendChild(c),t.appendChild(o),e.appendChild(t)}document.querySelector(".content").appendChild(e)}(),document.querySelector(".Menu").style.cssText="text-decoration: underline")}e.d({},{q:()=>n}),function(){const e=["Home","Menu","Contact"],t=document.createElement("div");t.className="header";const c=document.createElement("h1");c.textContent="King of Spices",t.appendChild(c);const o=document.createElement("ul");for(let t=0;t<3;t++){let c=document.createElement("li"),d=document.createElement("a");0===t&&(d.style.cssText="text-decoration: underline"),d.className=e[t],console.log(d),d.setAttribute("href","#"),d.textContent=e[t],d.addEventListener("click",n),c.appendChild(d),o.appendChild(c)}t.appendChild(o),document.querySelector(".content").appendChild(t)}(),t()})();