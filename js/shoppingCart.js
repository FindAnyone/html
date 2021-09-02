var m_shoping = document.getElementsByClassName('m_shoping');
var shoping_num = document.getElementsByClassName('shoping_num');
var shoping_count = document.getElementsByClassName('shoping_count');
shoping_num[0].innerHTML = "购物车(" + m_shoping.length + ")";
shoping_count[0].innerHTML = "共" + m_shoping.length + "件宝贝";

var merchants = document.getElementsByClassName('merchants');
var goods_count = document.getElementsByClassName('goods_count');
var count_arr = document.getElementsByClassName('count_arr');
var price = document.getElementsByClassName('price');
var count_price = document.getElementsByClassName('count_price');
var counts = 0;//点击勾选商品次数
var cuntsMoney = 0;//计算总价格
//店铺选择
for (let i = 0; i < merchants.length; i++) {
    merchants[i].onclick = function () {

        if (this.style.background != 'red') {
            merchants[i].style.background = 'red';
            if (merchants[i].style.background = 'red') {
                goods_count[i].style.background = 'red';
                cuntsMoney += parseInt(price[i].innerHTML.substring(1));
                count_price[0].innerHTML = "&yen;" + cuntsMoney + "";
                console.log(parseInt(price[i].innerHTML.substring(1)));
                console.log(cuntsMoney);
                counts++;
                if (counts == merchants.length) {
                    count_arr[0].style.background = 'red';
                    counts = 0;
                }
            }
            else {
                goods_count[i].style.background = '';

            }
        }
        else {
            this.style.background = '';
            count_arr[0].style.background = '';
            goods_count[i].style.background = '';
            count_price[0].innerHTML = "&yen;0";
        }
        console.log(i);
    }

}
//商品选择
for (let i = 0; i < goods_count.length; i++) {
    goods_count[i].onclick = function () {
        if (this.style.background != 'red') {
            goods_count[i].style.background = 'red';
            var c = this.parentNode.parentNode.parentNode.getElementsByClassName('goods_count')
            for (let t = 0; t < c.length; t++) {
                if (c.style.background == '') {
                    merchants[i].style.background = '';


                    break;

                }
                if (t == c.length - 1) {

                }
            }
        }
        else {
            goods_count[i].style.background = '';
            merchants[i].style.background = '';
            count_arr[0].style.background = '';
            count_price[0].innerHTML = "&yen;0";
        }
    }
}
//全选
count_arr[0].onclick = function () {
    if (count_arr[0].style.background != 'red') {
        count_arr[0].style.background = 'red';
        cuntsMoney = 0;
        change('red');
    }
    else {
        count_arr[0].style.background = '';
        for (let i = 0; i < merchants.length; i++) {
            merchants[i].style.background = '';
            goods_count[i].style.background = '';
        }
        count_price[0].innerHTML = "&yen;0";
        change('');
    }
}

function change(a) {
    for (let i = 0; i < merchants.length; i++) {
        merchants[i].style.background = a;
    }
    for (let i = 0; i < goods_count.length; i++) {
        goods_count[i].style.background = a;
    }
}