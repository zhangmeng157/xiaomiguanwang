//banner效果
{
    let imgs = document.querySelectorAll(".imgbox li");
    let pagers = document.querySelectorAll(".pagebox li");
    let banner=document.querySelector("#banner");
    let next=document.querySelector(".next");
    let prev=document.querySelector(".prev");
    pagers.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;//鼠标离开接着展示
        }
    });
    // window.setInterval();自动执行  在几秒内自动执行  单位毫秒
    var n = 0;
    function move() {
        n++;
        // n=n%5;
        if (n === imgs.length) {
            n = 0;
        }//判断超出范围
        if(n<0){
            n=imgs.length-1;
        }
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    };
    let t=setInterval(move, 2000);
    banner.onmouseenter=function () {
        //清除自动
        clearInterval(t);
    };
    banner.onmouseleave=function () {
        t=setInterval(move,2000);
    };//鼠标离开开始时间函数
    let flag=true;
    next.onclick=function () {
        if (flag){
            flag=false;
            move();
        }
    };
    prev.onclick=function () {
        if (flag){
            flag=false;
            n-=2;
            move();
        }
    }
    imgs.forEach(function (ele) {
        ele.addEventListener("transitionend",function () {
            flag=true;
        })
    })
}
//单品部分效果
{
    const prev=document.querySelector(".danpin_btn1");
    const next=document.querySelector(".danpin_btn2");
    const inner=document.querySelector(".danpin_inner");
    let n=0;
    next.onclick=function(){
        n++;
        prev.classList.remove("disable")
        if(n===2){
            this.classList.add("disable");
        }
        if(n===3){
            n=2;
            return;
        }
        inner.style.marginLeft=-1226*n+"px";
    }
    prev.onclick=function(){
        n--;
        next.classList.remove("disable");
        if(n===0){
            prev.classList.add("disable");
        }
        if(n===-1){
            n=0;
            return;
        }
        inner.style.marginLeft=-1226*n+"px";
    }
}
//选项卡
{
    function content(parent) {
        const types = parent.querySelectorAll(".dapei_right span");
        const goods = parent.querySelectorAll(".dapei-bottom");
        console.log(types);
        console.log(goods);

        types.forEach(function (ele, index) {
            ele.onmouseenter = function () {
                for (let i = 0; i<types.length; i++) {
                    types[i].classList.remove("active");
                    goods[i].classList.remove("active");
                }
                this.classList.add("active");
                goods[index].classList.add("active");
            }
            // console.log(ele);
        })
    }
    const contentList = document.querySelectorAll(".dapei-content");
    content(contentList[0]);
    content(contentList[1]);
    // content(contentList[2]);
    // content(contentList[3]);
    // contentlist.forEach(function (ele) {
    //     content(ele);
    // })
}