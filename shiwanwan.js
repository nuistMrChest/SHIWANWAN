window.addEventListener("scroll", function() {
    let scrolled = window.scrollY;
    document.getElementById("bk").style.transform = "translateY(" + scrolled * 0.5 + "px)";
});
let nav=document.querySelector("#nav");
let nu=document.querySelector("#nu");
window.addEventListener('scroll', () => {
    let hat = nav.getBoundingClientRect();

    if (hat.top <= 0) {
        nav.style.backgroundColor = 'white';
        nu.style.color = 'black';
        nu.style.borderColor = 'black';
        nu.style.borderTopWidth = '2px';
        nu.style.borderBottomWidth = '2px'; 
        nu.style.width = '100vw';
    } else {
        nav.style.backgroundColor = 'rgba(0,0,0,0)';
        nu.style.color = 'white';
        nu.style.borderColor = 'white';
        nu.style.width = '';
        nu.style.borderTopWidth = '';
        nu.style.borderBottomWidth = '';
    }
});
let mnb=document.querySelector("#mnb");
let mnvbk=document.querySelector("#mnvbk");
mnb.addEventListener('click', (e) => {
    e.stopPropagation();
    mnvbk.style.display = 'block';
});
mnvbk.addEventListener('click', (e) => {
    if (e.target === mnvbk) {
        mnvbk.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div style="text-align:center; padding: 10px; font-size:14px; color:#666;">
        <a href="https://beian.miit.gov.cn/" 
            style="text-decoration:none; color:#666;" target="_blank">
            <img src="https://www.beian.gov.cn/img/new/gongan.png" 
                style="vertical-align:middle; width:16px; height:16px; margin-right:5px;" />
            苏ICP备17061437号-2
        </a>
        </div>
    `;
    document.body.appendChild(footer);
});