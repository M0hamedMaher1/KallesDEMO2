let upper = document.querySelector(".upper");

window.addEventListener("scroll", function(){
    const nav = document.querySelector(".nav");
    let x = scrollY;
    if(x > 200){
        nav.style.transform = "translateY(0)";
        upper.style.transform = "translateY(0)";
    }else{
        nav.style.transform = "translateY(calc(-100% + -2px))";
        upper.style.transform = "translateY(calc(100% + 50px))";
    };
});

upper.addEventListener("click", function (){
    scrollTo(0, 0);
});

let up = document.querySelector(".last .up");
let close1 = document.querySelector(".closeUp");

close1.addEventListener("click", function(){
    up.style.display = "none";
});

let head = document.querySelectorAll(".head");
let arrow = document.querySelectorAll(".head i");
let bots = document.querySelectorAll(".bots");

head.forEach((item, index) => {
    item.addEventListener("click", function(){
        if(bots[index].style.height == 0){
            bots[index].style.height = bots[index].scrollHeight + "px";
            arrow[index].style.transform = "rotate(180deg)";
        }else{
            bots[index].style.height = null;
            arrow[index].style.transform = "rotate(0deg)";
        };
    });
});

let bars = document.querySelectorAll(".bars");
let close2 = document.querySelector(".close2");
let aside = document.querySelector(".aside1");

bars.forEach((item) => {
    item.addEventListener("click", function(){
        aside.style.transform = "translateX(0)";
    });
})

close2.addEventListener("click", function(){
    aside.style.transform = "translateX(calc(-100% + -50px))";
});

