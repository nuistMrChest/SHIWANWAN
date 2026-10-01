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
            苏ICP备17061437号-2
        </a>
        </div>
        <div style="text-align:center; padding: 10px; font-size:14px; color:#666;">
        <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32050502012396" 
            style="text-decoration:none; color:#666;" target="_blank">
            <img src="https://www.beian.gov.cn/img/new/gongan.png"
                style="vertical-align:middle; width:16px; height:16px; margin-right:5px;" />
            苏公网安备32050502012396号
        </a>
        </div>
    `;
    document.body.appendChild(footer);
});

// 列表文件可独立更新，每次打开页面都从服务器获取最新内容。
document.addEventListener("DOMContentLoaded", () => {
    const lists = {
        index_ul_rep: "/index_ul.html",
        works_ul_rep: "/works_ul.html",
        curaturial_ul_rep: "/curaturial_ul.html",
        writing_ul_rep: "/writing_ul.html"
    };

    Object.entries(lists).forEach(async ([id, file]) => {
        const container = document.getElementById(id);
        if (!container) return;

        try {
            const response = await fetch(file, { cache: "no-store" });
            if (!response.ok) {
                throw new Error(`${file}: HTTP ${response.status}`);
            }
            container.innerHTML = await response.text();
        } catch (error) {
            console.error("列表加载失败", error);
            const message = document.createElement("p");
            message.textContent = "列表加载失败，请刷新页面重试。";
            container.replaceChildren(message);
        }
    });
});
