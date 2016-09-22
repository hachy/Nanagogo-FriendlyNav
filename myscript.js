/* eslint-env jquery */
/* eslint quote-props: [2, "consistent"] */

const nogizaka = {
  '秋元真夏'   : 'https://7gogo.jp/akimoto-manatsu',
  '生田絵梨花' : 'https://7gogo.jp/ikuta-erika',
  '伊藤かりん' : 'https://7gogo.jp/itou-karin',
  '伊藤純奈'   : 'https://7gogo.jp/itou-junna',
  '井上小百合' : 'https://7gogo.jp/inoue-sayuri',
  '衛藤美彩'   : 'https://7gogo.jp/eto-misa',
  '川後陽菜'   : 'https://7gogo.jp/kawago-hina',
  '川村まひろ' : 'https://7gogo.jp/kawamura-mahiro',
  '北野日奈子' : 'https://7gogo.jp/kitano-hinako',
  '相楽伊織'   : 'https://7gogo.jp/sagara-iori',
  '斎藤ちはる' : 'https://7gogo.jp/saito-chiharu',
  '桜井玲香'   : 'https://7gogo.jp/sakurai-reika',
  '白石麻衣'   : 'https://7gogo.jp/shiraishi-mai',
  '新内眞衣'   : 'https://7gogo.jp/shinuchi-mai',
  '高山一実'   : 'https://7gogo.jp/takayama-kazumi',
  '中田花奈'   : 'https://7gogo.jp/nakada-kana',
  '西野七瀬'   : 'https://7gogo.jp/nishino-nanase',
  '能條愛未'   : 'https://7gogo.jp/nojo-ami',
  '橋本奈々未' : 'https://7gogo.jp/hashimoto-nanami',
  '樋口 日奈'  : 'https://7gogo.jp/higuchi-hina',
  '星野みなみ' : 'https://7gogo.jp/hoshino-minami',
  '堀未央奈'   : 'https://7gogo.jp/hori-miona',
  '松村沙友理' : 'https://7gogo.jp/matsumura-sayuri',
  '山崎怜奈'   : 'https://7gogo.jp/yamazaki-rena',
  '渡辺みり愛' : 'https://7gogo.jp/watanabe-miria',
  '和田まあや' : 'https://7gogo.jp/wada-maaya',
};

$(() => {
  const nav = $('<div class="left-contents"><p class="title-nogizaka">乃木坂46</p><ul class="nogi-list"></ul></div>');
  const main = $('body').children();

  main.css('margin-left', '100px');
  $('.l-header').css('margin-left', '100px');
  $('body').append(nav);

  $.each(nogizaka, (name, url) => {
    $('<li></li>')
      .append(`<a href="${url}" target="_parent">${name}</a>`)
      .appendTo('.nogi-list');
  });
});
