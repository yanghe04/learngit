$(document).ready(function() {
    refreshNews()
    $.ajax({
        url:'localhost/server/getnews.php',
        type:'get',
        datatype:'json',
        success:function(data){
            console.log(data);
        }
    });

    // refreshNews('精选')


    // $('nav a').click(function(e){
    //     e.preventDefault();
    //     var type = $(this).text();
    //     refreshNews(type);
    // });

});

function refreshNews() {

    var $lists = $('article ul');
    $lists.empty();
    var $list = $('<li></li>').addClass('news-list').prependTo($lists);
    var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
    var $img = $('<img>').attr('src', 'img/4.JPEG').appendTo($newsImg);
    var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
    var $h1 = $('<h1></h1>').html('新闻标题占位符').appendTo($newsContent);
    var $p = $('<p></p>').appendTo($newsContent);
    var $newstime = $('<span></span>').addClass('newstime').html('新闻时间占位符').appendTo($p);
    var $newsSrc = $('<span></span>').addClass('newssrc').html('新闻来源占位符').appendTo($p);

}

// function refreshNews(type) {
//     var $lists = $('article ul');
//     $lists.empty();
//     $.ajax({
//         url: '../server/getnews.php',
//         type: 'get',
//         datatype: 'json',
//         data: { newstype: type },
//         success: function(data) {
//             data.forEach(function(item,index,array) {
//                 var $list = $('<li></li>').addClass('news-list').prependTo($lists);
//                 var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
//                 var $img = $('<img>').attr('src', item.newsimg).appendTo($newsImg);
//                 var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
//                 var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
//                 var $p = $('<p></p>').appendTo($newsContent);
//                 var $newsTime = $('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
//                 var $newsSrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);

//             })

//         }
//     });





// }
