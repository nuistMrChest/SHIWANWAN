window.addEventListener("scroll", function() {
    let scrolled = window.scrollY;
    // 0.5 可以改成别的，越小滚动越慢
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
        nu.style.borderTopWidth = '4px';
        nu.style.borderBottomWidth = '4px'; 
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