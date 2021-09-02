var num=0;
var wrap=document.getElementById('wrap');
var list=document.getElementById('list').children;
var timer;
function run(){
    for(var i=0;i<list.length;i++){
        list[i].removeAttribute('class');
    }
    wrap.style.transform='translateX('+-100*num+'vw)'
    list[num].setAttribute('class','current');
}
function go(){
    timer=setInterval(function(){
        num++;
        if(num>2){
            num=0;
        }
        run();
        
    },1000)
}
go();
box.onmouseenter=function(){
    clearInterval(timer);
}
box.onmouseleave=function(){
    go()
}
for(var i=0;i<list.length;i++){
    list[i].index=i;
    list[i].onclick=function(){
        num=this.index
        run()
    }
}
var btn_top=document.getElementById('btn_top');
btn_top.onclick=function(){
    document.documentElement.scrollTop=0;
    document.body.scrollTop=0;
}
window.onscroll=function(){
    console.log(document.documentElement.scrollTop||document.body.scrollTop)
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop>400){
        header.style.position='fixed'
        btn_top.style.display='block'
    }else{
        header.style.position='initial'
        btn_top.style.display='none'
    }
}
