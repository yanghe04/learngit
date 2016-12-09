//定义所要修改皮肤部分dom对象的变量
var first_page = document.getElementById("first_page");
var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var menu3 = document.getElementById("menu3");
var menu4 = document.getElementById("menu4");
var menu5 = document.getElementById("menu5");
var menu6 = document.getElementById("menu6");
var menu7 = document.getElementById("menu7");
var menu8 = document.getElementById("menu8");
var menu9 = document.getElementById("menu9");
var menu10 = document.getElementById("menu10");
var menu_a_2 = document.getElementById("menu_a_2");
var menu_a_3 = document.getElementById("menu_a_3");
var menu_a_4 = document.getElementById("menu_a_4");
var menu_a_5 = document.getElementById("menu_a_5");
var menu_a_6 = document.getElementById("menu_a_6");
var menu_a_7 = document.getElementById("menu_a_7");
var menu_a_8 = document.getElementById("menu_a_8");
var menu_a_9 = document.getElementById("menu_a_9");
var menu_a_10 = document.getElementById("menu_a_10");
var menu_a_11 = document.getElementById("menu_a_11");
var part_two = document.getElementById("part_two");
var part_four = document.getElementById("part_four");
var change1 = document.getElementById("change1");
var change2 = document.getElementById("change2");
var change3 = document.getElementById("change3");
var change4 = document.getElementById("change4");
var change5 = document.getElementById("change5");
var change6 = document.getElementById("change6");
var change7 = document.getElementById("change7");
var change8 = document.getElementById("change8");
var theme_color = localStorage.getItem('color');
if (theme_color) {
    changeSkin(theme_color);
}
//具体操作部分
function changeSkin(color) {

    first_page.style.background = color;
    first_page.style.borderTop = "2px solid" + color;
    menu1.style.borderTop = "2px solid" + color;
    menu2.style.borderTop = "2px solid" + color;
    menu3.style.borderTop = "2px solid" + color;
    menu4.style.borderTop = "2px solid" + color;
    menu5.style.borderTop = "2px solid" + color;
    menu6.style.borderTop = "2px solid" + color;
    menu7.style.borderTop = "2px solid" + color;
    menu8.style.borderTop = "2px solid" + color;
    menu9.style.borderTop = "2px solid" + color;
    menu10.style.borderTop = "2px solid" + color;
    menu_a_2.style.color = color;
    menu_a_3.style.color = color;
    menu_a_4.style.color = color;
    menu_a_5.style.color = color;
    menu_a_6.style.color = color;
    menu_a_7.style.color = color;
    menu_a_8.style.color = color;
    menu_a_9.style.color = color;
    menu_a_10.style.color = color;
    menu_a_11.style.color = color;
    part_two.style.border = "1px solid" + color;
    part_four.style.border = "1px solid" + color;
    change1.style.color = color;
    change2.style.color = color;
    change3.style.color = color;
    change4.style.color = color;
    change5.style.color = color;
    change6.style.color = color;
    change7.style.color = color;
    change8.style.color = color;
    localStorage.setItem('color', color);

}
