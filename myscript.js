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
  '齋藤飛鳥'   : 'https://7gogo.jp/saito-asuka',
  '斎藤ちはる' : 'https://7gogo.jp/saito-chiharu',
  '斉藤優里'   : 'https://7gogo.jp/MM1u8Yp3Dv6C',
  '相楽伊織'   : 'https://7gogo.jp/sagara-iori',
  '桜井玲香'   : 'https://7gogo.jp/sakurai-reika',
  '白石麻衣'   : 'https://7gogo.jp/shiraishi-mai',
  '新内眞衣'   : 'https://7gogo.jp/shinuchi-mai',
  '鈴木絢音'   : 'https://7gogo.jp/suzuki-ayane',
  '高山一実'   : 'https://7gogo.jp/takayama-kazumi',
  '中田花奈'   : 'https://7gogo.jp/nakada-kana',
  '西野七瀬'   : 'https://7gogo.jp/nishino-nanase',
  '能條愛未'   : 'https://7gogo.jp/nojo-ami',
  '樋口 日奈'  : 'https://7gogo.jp/higuchi-hina',
  '星野みなみ' : 'https://7gogo.jp/hoshino-minami',
  '堀未央奈'   : 'https://7gogo.jp/hori-miona',
  '松村沙友理' : 'https://7gogo.jp/matsumura-sayuri',
  '山崎怜奈'   : 'https://7gogo.jp/yamazaki-rena',
  '渡辺みり愛' : 'https://7gogo.jp/watanabe-miria',
  '和田まあや' : 'https://7gogo.jp/wada-maaya',
};

const fragment = document.createDocumentFragment();
const div = document.createElement('div');
const p = document.createElement('p');
const ul = document.createElement('ul');
const title = document.createTextNode('乃木坂46');

div.classList.add('left-contents');
p.classList.add('title-nogizaka');
ul.classList.add('nogi-list');

div.appendChild(p);
p.appendChild(title);
div.appendChild(ul);

document.documentElement.style.marginLeft = '100px';
document.body.appendChild(div);

Object.keys(nogizaka).forEach((key) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const name = document.createTextNode(key);
  a.href = nogizaka[key];
  a.target = '_parent';
  a.appendChild(name);
  li.appendChild(a);
  fragment.appendChild(li);
});

ul.appendChild(fragment);
