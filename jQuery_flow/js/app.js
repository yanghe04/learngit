window.onload = function() {

    PBL('wrap', 'box');

    var data = [
        { 'src': '1.jpg' },
        { 'src': '2.jpg' },
        { 'src': '3.jpg' },
        { 'src': '4.jpg' },
        { 'src': '5.jpg' },
        { 'src': '6.jpg' },
        { 'src': '7.jpg' },
        { 'src': '8.jpg' },
        { 'src': '9.jpg' },
        { 'src': '10.jpg' },
        { 'src': '11.jpg' },
        { 'src': '12.jpg' },
        { 'src': '13.jpg' },
        { 'src': '14.jpg' },
        { 'src': '15.jpg' },
        { 'src': '16.jpg' },
        { 'src': '17.jpg' },
        { 'src': '18.jpg' },
        { 'src': '19.jpg' },
        { 'src': '20.jpg' },
        { 'src': '21.jpg' }
    ];


    //设置滚动加载
    window.onscroll = function() {

        if (getCheck()) {
            var wrap = document.getElementById('wrap');
            for (i in data) {

                var box = document.createElement('div');
                box.className = 'box';
                wrap.appendChild(box);

                var info = document.createElement('div');
                info.className = 'info';
                box.appendChild(info);

                var pic = document.createElement('div');
                pic.className = 'pic';
                info.appendChild(pic);

                var img = document.createElement('img');
                img.src = 'images/' + data[i].src;
                img.style.height = 'auto';
                pic.appendChild(img);

            }
            PBL('wrap', 'box');
        }
    }
}

//瀑布流主函数

function PBL(wrap, box) {
    //	1.获得外层以及每一个box
    var wrap = document.getElementById(wrap);
    var boxs = getClass(wrap, box);
    //	2.获得屏幕可显示的列数
    var boxW = boxs[0].offsetWidth;
    var colsNum = Math.floor(document.documentElement.clientWidth / boxW);
    wrap.style.width = boxW * colsNum + 'px'; //为外层赋值宽度
    //	3.循环出所有的box并按照瀑布流排列
    var everyH = []; //定义一个数组存储每一列的高度
    for (var i = 0; i < boxs.length; i++) {
        if (i < colsNum) {
            everyH[i] = boxs[i].offsetHeight;
        } else {
            var minH = Math.min.apply(null, everyH); //获得最小的列的高度
            var minIndex = getIndex(minH, everyH); //获得最小列的索引
            getStyle(boxs[i], minH, boxs[minIndex].offsetLeft, i);
            everyH[minIndex] += boxs[i].offsetHeight; //更新最小列的高度
        }
    }
}

// 获取类元素

function getClass(wrap, className) {
    var obj = wrap.getElementsByTagName('*');
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].className == className) {
            arr.push(obj[i]);
        }
    }
    return arr;
}

//获取最小列的索引
function getIndex(minH, everyH) {
    for (index in everyH) {
        if (everyH[index] == minH) return index;
    }
}

// 数据请求检验

function getCheck() {
    var documentH = document.documentElement.clientHeight;
    var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
    return documentH + scrollH >= getLastH() ? true : false;
}

// 获得最后一个box所在列的高度

function getLastH() {
    var wrap = document.getElementById('wrap');
    var boxs = getClass(wrap, 'box');
    return boxs[boxs.length - 1].offsetTop + boxs[boxs.length - 1].offsetHeight;
}


//设置加载样式

var getStartNum = 0; //设置请求加载的条数的位置
function getStyle(box, top, left, index) {
    if (getStartNum >= index) return;
    $(box).css({
        'position': 'absolute',
        'top': top,
        "left": left,
        "opacity": "0"
    });
    $(box).stop().animate({
        "opacity": "1"
    }, 999);
    getStartNum = index; //更新请求数据的条数位置
}
