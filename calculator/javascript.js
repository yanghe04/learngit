var result; //点击运算符之前输入框中的数值
var operator; //运算符
var equals = false; //是否按下”=“键

//数字
function connectionDigital(control) {
    var txt = document.getElementById('txtScream');
    if (equals) {
        txt.value = ""; //已进行过计算，则清空数值输入框重新开始
        equals = false;
    }
    //数值输入已经输入一个小数点,则不允许再输入小数点
    if (txt.value.indexOf('.') > -1 && control.value == '.')
        return false;
    txt.value += control.value; //将控件值赋给数值输入框中
}

//退格
function backspace() {
    var txt = document.getElementById('txtScream');
    txt.value = txt.value.substring(0, txt.value.length - 1);
}

//清空数字输入框
function clearAll() {
    document.getElementById('txtScream').value = "";
    result = "";
    operator = "";
}

// +、-、*、/ 事件
function calculation(control) {
    //将运算符保存入全局变量中
    operator = control.value;
    var txt = document.getElementById('txtScream');
    if (txt.value == "") return false; //数值输入框中没有数字，则不能输入运算符
    //将数值输入框中的值保存到计算表达式中
    result = txt.value;
    //清空输入框，以待输入操作值
    txt.value = "";
}

//计算结果
function getResult() {
    var opValue;
    //计算表达式中存在运算符
    var sourseValue = parseFloat(result);
    var txt = document.getElementById('txtScream');
    if (operator == '*') {
        opValue = sourseValue * parseFloat(txt.value);
    } else if (operator == '/') {
        if (txt.value == 0) {
            alert("除数不能为零");
            txt.value = 'NaN';
            return;
        }
        opValue = sourseValue / parseFloat(txt.value);
    } else if (operator == '+') {
        opValue = sourseValue + parseFloat(txt.value);
    } else if (operator == '-') {
        opValue = sourseValue - parseFloat(txt.value);
    }

    txt.value = parseFloat(opValue.toFixed(8));
    equals = true;
    result = "";
    opValue = "";
}
