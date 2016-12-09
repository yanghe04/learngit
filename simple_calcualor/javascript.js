 var calculate = {

     input: "", //表达式
     answer: "", //结果
     num1: "", //操作数1
     num2: "", //操作数2
     operator: "", //操作符
     str: "", //当前按钮获取的

     /*开始函数*/
     init: function() {
         calculate.getExpression();
     },
     /*获取表达式，根据点击按钮调用其他函数*/
     getExpression: function() {
         var get = document.getElementById("button");
         get.addEventListener('click', function(e) { //

             calculate.str = e.target; //str是从按钮获得的值

             //根据按钮显示
             switch (true) {

                 //点击空，无反应
                 case calculate.str.value == null:
                     break;

                     //点击数字
                 case calculate.str.name == "number":
                     if (calculate.num1.length == 0) {
                         calculate.num1 = calculate.str.value;
                         calculate.input = calculate.num1;
                     } else if (calculate.num1 == "0" || calculate.num2 == "0") { //数字不能以0开头
                         break;
                     } else if (calculate.operator.length == 0 || calculate.num1 == "-") {
                      //如果num1为空或负号，记录数字到num1
                         calculate.num1 = calculate.num1 + calculate.str.value;
                         calculate.input = calculate.num1;
                     } else if (calculate.operator.length != 0) { //如果操作符不为空，记录数字到num2
                         calculate.num2 = calculate.num2 + calculate.str.value;
                         calculate.input = calculate.num1 + calculate.operator + calculate.num2;
                     }

                     calculate.showExpression();
                     break;

                     //点击小数点
                 case calculate.str.name == "point":
                     if (calculate.num1.length == 0) { //如果数字为空，显示"0."
                         calculate.num1 = "0.";
                         calculate.input = calculate.num1;
                     } else if (calculate.operator.length == 0) { //第一个数未记录完
                         if (parseInt(calculate.num1) == calculate.num1 && calculate.num1[calculate.num1.length - 1] != ".") { 
                         //且之前是整数，就显示小数点
                             calculate.num1 = calculate.num1 + calculate.str.value;
                             calculate.input = calculate.num1;
                         }
                     } else if (calculate.operator.length != 0 && calculate.num2.length == 0) { //第二个操作数为空
                         calculate.num2 = "0.";
                         calculate.input = calculate.num1 + calculate.operator + calculate.num2;
                     } else if (calculate.num2.length != 0) { //第二个操作数不为空
                         if (parseInt(calculate.num2) == calculate.num2 && calculate.num2[calculate.num2.length - 1] != ".") {
                          //且之前是整数，就显示小数点
                             calculate.num2 = calculate.num2 + calculate.str.value;
                             calculate.input = calculate.num1 + calculate.operator + calculate.num2;
                         }
                     }
                     calculate.showExpression();
                     break;

                     //点击单目运算符
                 case calculate.str.name == "one":
                     if (!isNaN(calculate.answer) && (calculate.answer.length != 0)) { //上次运算结果存在,answer不为空且是数字
                         calculate.num1 = calculate.answer;
                         calculate.operator = calculate.str.value;
                         calculate.input = calculate.operator + calculate.num1 + "=";
                         calculate.answer = "";
                     } else if (calculate.num1.length == 0) { //num1为空,默认为0
                         calculate.num1 = "0";
                         calculate.operator = calculate.str.value;
                         calculate.input = calculate.operator + calculate.num1;
                         alert(calculate.input);
                     } else {
                         if (!isNaN(calculate.num1)) { //如果num1是数字
                             calculate.operator = calculate.str.value;
                             calculate.input = calculate.operator + calculate.num1 + "=";
                         }
                     }
                     calculate.showExpression();
                     calculate.getAnswer();

                     break;

                     //点击双目运算符
                 case calculate.str.name == "double":
                     if (!isNaN(calculate.answer) && (calculate.answer.length != 0)) { //上次运算结果存在,answer不为空且是数字
                         calculate.num1 = calculate.answer;
                         calculate.operator = calculate.str.value;
                         calculate.num2 = "";
                         calculate.answer = "";
                         calculate.input = calculate.num1 + calculate.operator;
                     } else {
                         if (calculate.num1.length != 0 && calculate.num2.length == 0) { //如果num1不为空,num2为空
                             calculate.operator = calculate.str.value;
                             calculate.input = calculate.num1 + calculate.operator;
                         } else if (!isNaN(calculate.num1) && !isNaN(calculate.num2) && calculate.operator.length != 0) {
                          //当做等号使用
                             calculate.input = calculate.num1 + calculate.operator + calculate.num2 + "=";
                             calculate.getAnswer();
                             calculate.num1 = calculate.answer;
                             calculate.operator = calculate.str.value;
                             calculate.num2 = "";
                             calculate.answer = "";
                             calculate.input = calculate.num1 + calculate.operator;
                         }
                     }
                     calculate.showExpression();
                     calculate.showAnswer();
                     break;

                     //点击等号时才计算
                 case calculate.str.name == "is":
                     if (!isNaN(calculate.num1) && !isNaN(calculate.num1) && calculate.operator != null) { //各个部分合法
                         calculate.input = calculate.num1 + calculate.operator + calculate.num2 + "=";
                         calculate.getAnswer();
                     }
                     calculate.showExpression();
                     break;

                     //点击清除按钮
                 case calculate.str.name == "clear":
                     calculate.clearScreen();
                     break;

                     //其他情况
                 default:
                     calculate.clearScreen();
                     break;
             }
         });
     },

     /*单目运算函数*/
     _OperatorOne: function() {
         //alert(num+operator);
         if (isNaN(calculate.num1)) { //如果num不是数字
             calculate.answer = "ERROR!";
         } else {
             switch (calculate.operator) {
                 case "sin":
                     calculate.answer = Math.sin(calculate.num1);
                     break;
                 case "cos":
                     calculate.answer = Math.cos(calculate.num1);
                     break;
                 case "√":
                     if (calculate.num1 >= 0) {
                         calculate.answer = Math.sqrt(calculate.num1);
                     } else {
                         calculate.answer = "负数不能开平方根！";
                     }
                     break;
             }
         }
     },
     /*双目运算函数*/
     _OperatorDouble: function() {
         //alert(num1+operator+num2);
         if (isNaN(calculate.num1) || isNaN(calculate.num1)) { //如果num不是数字
             calculate.answer = "ERROR!";
         } else {
             switch (calculate.operator) {
                 case "+":
                     calculate.answer = Number(calculate.num1) + Number(calculate.num2);
                     break;
                 case "-":
                     calculate.answer = Number(calculate.num1) - Number(calculate.num2);
                     break;
                 case "*":
                     calculate.answer = calculate.num1 * calculate.num2;
                     break;
                 case "÷":
                 case "/":
                     if (calculate.num2 == 0) {
                         calculate.answer = "除数不能为0";
                         alert(calculate.answer);
                         break;
                     } else {
                         calculate.answer = calculate.num1 / calculate.num2;
                     }
                     break;
                 case "%":
                     calculate.answer = calculate.num1 % calculate.num2;
                     break;
                 case "^":
                     calculate.answer = Math.pow(calculate.num1, calculate.num2);
                     break;
             }
         }
     },
     /*计算总函数*/
     getAnswer: function() {
         //alert(calculate.operator);
         calculate.input = calculate.input.substring(0, calculate.input.length - 1); //去掉等于号的表达式

         if (!isNaN(calculate.input)) { //如果input是数字直接显示答案
             calculate.answer = calculate.input;
         } else {
             switch (calculate.operator) {
                 case "sin":
                 case "cos":
                 case "√":
                     calculate._OperatorOne(); //调用单目运算函数
                     break;
                 case "1/":
                     calculate.num2 = calculate.num1;
                     calculate.num1 = 1;
                     calculate.operator = "/";
                 case "+":
                 case "-":
                 case "%":
                 case "÷":
                 case "^":
                 case "*":
                     if (calculate.num2.length == 0) { //如果num2为空，默认为0
                         calculate.num2 = "0";
                         calculate.input = calculate.num1 + calculate.operator + calculate.num2;
                         calculate.showExpression();
                     }
                     calculate._OperatorDouble();
                     break;
             }
         }
         calculate.showAnswer(); //显示答案
     },

     /*显示表达式*/
     showExpression: function() {
         
         var screen = document.getElementById("expression"); //显示结果
         screen.innerHTML = calculate.input;

     },

     /*显示结果*/
     showAnswer: function() {
         if (!isNaN(calculate.answer) && calculate.answer.length != 0) { //结果为数字,且不为空
             if (parseInt(calculate.answer) != calculate.answer) { //如果是小数
                 calculate.answer = Number(calculate.answer).toFixed(5); //精确2位
                 calculate.answer = parseFloat(calculate.answer);
             }
         }
         var screen = document.getElementById("answer"); //显示结果
         screen.innerHTML = calculate.answer;
     },
     /*清屏*/
     clearScreen: function() {
         calculate.input = "";
         calculate.answer = "";
         calculate.num1 = "";
         calculate.num2 = "";
         calculate.operator = "";
         calculate.showAnswer();
         calculate.showExpression();
     }
 };
 /*自运行*/
 calculate.init();
