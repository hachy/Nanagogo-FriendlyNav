/* eslint quote-props: [2, "consistent"] */
'use strict';

var nogizaka = {
  '秋元真夏': 'http://7gogo.jp/lp/EHJO22HByVYWkVIvojdMdG==',
  '生田絵梨花': 'http://7gogo.jp/lp/qVRNAvlchjLWkVIvojdMdG==',
  '生駒里奈': 'http://7gogo.jp/lp/jkOW8cD6yvaWkVIvojdMdG==',
  '伊藤かりん': 'http://7gogo.jp/lp/mQefyXKRyixWkVIvojdMdG==',
  '伊藤純奈': 'http://7gogo.jp/lp/QQIMkqI4yZLWkVIvojdMdG==',
  '井上小百合': 'http://7gogo.jp/lp/m2nb5PEEVF-WkVIvojdMdG==',
  '衛藤美彩': 'http://7gogo.jp/lp/IehN_dxcAlhWkVIvojdMdG==',
  '川後陽菜': 'http://7gogo.jp/lp/848OPG81AWtWkVIvojdMdG==',
  '川村まひろ': 'http://7gogo.jp/lp/EJjT0Dzb7XlWkVIvojdMdG==',
  '北野日奈子': 'http://7gogo.jp/lp/2Fl8X2eu81xWkVIvojdMdG==',
  '斎藤ちはる': 'http://7gogo.jp/lp/ZPRzeIO_rx-WkVIvojdMdG==',
  '斉藤優里': 'http://7gogo.jp/lp/WcgJ5NeKFhlWkVIvojdMdG==',
  '桜井玲香': 'http://7gogo.jp/lp/967Kcw7O3WLWkVIvojdMdG==',
  '白石麻衣': 'http://7gogo.jp/lp/-41Jgd7qLKLWkVIvojdMdG==',
  '新内眞衣': 'http://7gogo.jp/lp/CvkGFK1FrRAWkVIvojdMdG==',
  '高山一実': 'http://7gogo.jp/lp/slEyH7eOqmEWkVIvojdMdG==',
  '中田花奈': 'http://7gogo.jp/lp/MMhO048Vl1EWkVIvojdMdG==',
  '西野七瀬': 'http://7gogo.jp/lp/ipNEKvlo_eAWkVIvojdMdG==',
  '能條愛未': 'http://7gogo.jp/lp/sPHC9jWzi6xWkVIvojdMdG==',
  '橋本奈々未': 'http://7gogo.jp/lp/JitPAdGLEXaWkVIvojdMdG==',
  '星野みなみ': 'http://7gogo.jp/lp/JV4GaKQJZnaWkVIvojdMdG==',
  '堀未央奈': 'http://7gogo.jp/lp/59sEGXLHsYEWkVIvojdMdG==',
  '松村沙友理': 'http://7gogo.jp/lp/9SGk_al6McHWkVIvojdMdG==',
  '山崎怜奈': 'http://7gogo.jp/lp/loSdLlzZXdtWkVIvojdMdG==',
  '渡辺みり愛': 'http://7gogo.jp/lp/7J9xwxaZ77eWkVIvojdMdG==',
  '和田まあや': 'http://7gogo.jp/lp/5eM1jJlrHM1WkVIvojdMdG=='
};

$(function() {
  var nav = $('<div class="left-contents"><p class="title-nogizaka">乃木坂46</p><ul class="nogi-list"></ul></div>');
  var main = $('body').children();

  main.css('margin-left', '100px');
  $('.l-header').css('margin-left', '100px');
  $('body').append(nav);

  $.each(nogizaka, function(name, url) {
    $('<li></li>')
      .append('<a href="' + url + '" target="_parent">' + name + '</a>')
      .appendTo('.nogi-list');
  });
});
