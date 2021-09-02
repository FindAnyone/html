var img_top=document.getElementById('img_top');

img_top.onclick=function(){
    // 修改滚动坐标的值
    document.documentElement.scrollTop=0;
    document.body.scrollTop=0;
}
window.onscroll=function(){
    console.log(111);
    // scrollTop滚动坐标
    console.log(document.documentElement.scrollTop||document.body.scrollTop)
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop>400){
        header.style.position='fixed'
        img_top.style.display='block'
    }else{
        // 不定位
        header.style.position='initial'
        img_top.style.display='none'
    }
}
function returnOna()
{
window.history.go(-1);
}