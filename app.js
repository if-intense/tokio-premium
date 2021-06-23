var vm = new Vue({
  el: '#app',
  data: {
    items: [
      {name: 'プレミアム シャンプー', size: "900ml", img:'img/product001-pr900.jpeg', price: 7800, taxPrice: 8580, purchaseLink: 'https://ifing-beauty.com/products/detail/89', stock: true, sub: false },
      {name: 'プレミアム シャンプー', size: "500ml", img:'img/product001-pr500.jpeg', price: 5800, taxPrice: 6380, purchaseLink: 'https://ifing-beauty.com/products/detail/88', stock: true, sub: false },
      {name: 'プレミアム シャンプー', size: "200ml", img:'img/product002-pr200.png', price: 2900, taxPrice: 3190, purchaseLink: 'https://ifing-beauty.com/products/detail/86', stock: true, sub: false},
      {name: 'プレミアム トリートメント', size: "900ml", img:'img/product001-pr-tr900.jpeg', price: 7500, taxPrice: 8250, purchaseLink: 'https://ifing-beauty.com/products/detail/92', stock: true, sub: false},
      {name: 'プレミアム トリートメント', size: "500ml", img:'img/product003-pr-tr500.jpeg', price: 5500, taxPrice: 6050, purchaseLink: 'https://ifing-beauty.com/products/detail/91', stock: true, sub: false},
      {name: 'プレミアム トリートメント', size: "200ml", img:'img/product004-pr-tr200.jpeg', price: 2800, taxPrice: 3080, purchaseLink: 'https://ifing-beauty.com/products/detail/89', stock: true, sub: false},
      {name: 'プレミアム エアートリートメント', size: "100ml", img:'img/product005-out.oil.jpeg', price: 2800, taxPrice: 3080, purchaseLink: 'https://ifing-beauty.com/products/detail/90', stock: true, sub: false},
      {name: '900サイズセット', size: "《初回特典有》", img:'img/sub900.jpeg', price: 14535, taxPrice: 15989, purchaseLink: 'https://ifing-beauty.com/products/detail/78', stock: true, sub: true},
      {name: '500サイズセット', size: "《初回特典有》", img:'img/sub500.jpeg', price: 10735, taxPrice: 11809, purchaseLink: 'https://ifing-beauty.com/products/detail/77', stock: true, sub: true },
      // {name: 'プレミアム シャンプー', size: "500", img:'img/product001-pr500.jpeg', price: 5800, taxPrice: 6380, purchaseLink: 'https://ifing-beauty.com/products/detail/88', stock: true },
      // {name: 'プレミアム シャンプー', size: "500", img:'img/product001-pr500.jpeg', price: 5800, taxPrice: 6380, purchaseLink: 'https://ifing-beauty.com/products/detail/88', stock: true },
      // {name: 'TOKIO INKARAMI PR TR.OIL', img:'img/product001.png', price: 1800, taxPrice: 1980, purchaseLink: 'https://ifing-beauty.com/products/detail/91', stock: true},
    ]
  }
});


var vm = new Vue({
  el: '#subsc',
  data: {
    items: [
      {name: '500サイズセット《初回特典有》', img:'img/sub900.jpeg', price: 7800, taxPrice: 8580, purchaseLink: 'https://ifing-beauty.com/products/detail/89', stock: true },
      {name: '500サイズセット《初回特典有》', img:'img/sub500.jpeg', price: 5800, taxPrice: 6380, purchaseLink: 'https://ifing-beauty.com/products/detail/88', stock: true },
    ]
  }
});


// var tri = new Vue({
//   el: '#new',
//   data: {
//     products: [
//       {name: 'TOKIO IE PREMIUM', description: '保湿力抜群しっとりタイプのヘアケア', img: 'img/img-pr-sh200.jpeg', tname: 'AIR.TREATMENT', desctitle: 'ミストタイプのアウトバスTR', description2: 'ケラチン・シルク配合で、保水と潤いを与えながら、髪を補修します。ブロー前にご使用ください。', img2: 'img/air-treatment.jpeg', repair: 4, texture: 4, bubble: 4, desc1: 'TOKIOインカラミのケラチンを使用', desc2: 'シルク・コラーゲン配合で高い保湿力', desc3: 'しっとり感とまとまりが欲しい方に'},
//       {name: 'TOKIO IE PLATINUM', description: 'さらっと軽いタイプのヘアケア', img: 'img/img-pl-sh200.jpeg', tname: 'AIR.TREATMENT', desctitle: 'オイルタイプのアウトバスTR', description2: '保湿成分配合で滑らかさ・軽さとまとまりの実感。アイロンやコテを使用する際にもおすすめです。', img2: 'img/air-treatment.jpeg', repair: 3, texture: 3, bubble: 4, desc1: 'TOKIOインカラミのケラチンを使用', desc2: '豊富な泡立ちで髪を柔らかく', desc3: 'さらっとした指通りが欲しい方に'},
//     ]
//   }
// });

