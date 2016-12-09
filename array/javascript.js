 var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
 <!-- 定义出现的次数变量-->
 var count = {};
 <!--定义出现的位置变量-->
 var position = {};
 <!--遍历arr数组并且生成新数组-->
 for (var i = 0; i < arr.length; i++) {
     var char = arr[i];
     if (count[char]) {
         count[char] += 1;
         position[char] += "/" + i;
     } else {
         count[char] = 1;
         position[char] = i;
     }
 }
 <!--返回出现次数最多的字母的次数-->
 var max = count[Object.keys(count).sort(function(a, b) {
     return count[a] <= count[b];
 })[0]];
 <!--出现次数最多的字母如果有多个，全部写入arr_max数组中，并输出-->
 var arr_max = [];
 for (i in count) {
     if (count[i] >= max) {
         max = count[i];
         arr_max.push(i);
     }
 }
 document.write("出现次数最多的字母是:" + arr_max + "<br>");
 <!--输出结果-->
 for (var i = 0; i < arr_max.length; i++) {
     key = arr_max[i];
     document.write(key + "出现的次数为:" + count[key] + "<br>");
     document.write(key + "的位置分别为:" + position[key] + "<br>");
 }
