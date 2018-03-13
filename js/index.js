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
    }
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
    };
    imgs.forEach(function (ele) {
        ele.addEventListener("transitionend",function () {
            flag=true;
        })
    })
}
//单品部分效果
{
    function huadong(parent) {
        const prev=parent.querySelector(".danpin_btn1");
        const next=parent.querySelector(".danpin_btn2");
        const inner=parent.querySelector(".danpin_inner");
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
        };
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
    const huadongList=document.querySelectorAll(".huadong");
    huadongList.forEach(function (ele) {
        huadong(ele);
    });
}
//选项卡
{
    function content(parent) {
        const types = parent.querySelectorAll(".dapei_right span");
        const goods = parent.querySelectorAll(".dapei-bottom");
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
    
    contentList.forEach(function (ele) {
        content(ele);
    })
}
//内容部分效果
{
    function wheel(parent){
        let prev=parent.querySelector(".neirong_btn1");
        let next=parent.querySelector(".neirong_btn2");
        let inner=parent.querySelector(".neirong-inner");
        let contents=parent.querySelectorAll(".qiehuan");
        let pagers=parent.querySelectorAll(".pager");
        let n=0;
        next.onclick=function () {
            n++;
            if(n===contents.length){
                n=contents.length-1;
                return;
            }
            inner.style.marginLeft=n* -296+"px";
            pagers[n].classList.add("active");
            pagers[n-1].classList.remove("active");
            obj=pagers[n];
        };
        prev.onclick=function(){
            n--;
            if(n<0){
                n=0;
                return;
            }
            inner.style.marginLeft=n* -296+"px";
            pagers[n].classList.add("active");
            pagers[n+1].classList.remove("active");
            obj=pagers[n];
        };
        let obj=pagers[n];
        pagers.forEach(function (ele,index) {
            ele.onclick=function () {
                obj.classList.remove("active");
                ele.classList.add("active");
                obj=ele;
                inner.style.marginLeft=index*-296+"px";
                n=index;
                
            }
        })
    }
    let items=document.querySelectorAll(".neirong_item");
    items.forEach(function(ele){
        wheel(ele);
    })
}

//侧导航效果
{
    let labels=document.querySelectorAll(".label");
    let menus=document.querySelectorAll(".menu");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        };
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    })
}

//导航效果
// {
//     let box=document.querySelector(".container-daohang");
//     let top=document.querySelectorAll(".daohang_wenzi span");
//     let bottom=document.querySelectorAll(".nav-menu");
//     top.onmouseenter=function(){
//         bottom.style.height="229px";
//     }
//     box.onmouseleave=function(){
//         bottom.style.height="0";
//     }
// }

{
         let top=document.querySelectorAll(".daohang_wenzi span");
         let neirong=document.querySelectorAll(".menu-content");
         let bottom=document.querySelector(".nav-menu");
         let box=document.querySelector(".container-daohang");
         let object=bottom[0];
         // console.log(top,bottom,box,neirong);
         top.onmouseenter=function(){
             bottom.style.display="block";
             bottom.style.height="229px";
         };
        box.onmouseleave=function(){
            bottom.style.display="none";
            bottom.style.height="0";
        };
        top.forEach(function (ele,index) {
            ele.onmouseenter=function () {
                object.style.display="none";
                neirong[index].style.display="block";
                object=neirong[index];
             }
        });
}