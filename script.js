// JavaScript

console.log('Hello world!');
const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');

// 定数の定義
const loading = document.getElementById('loading');

// cssクラスを追加する関数
function animation(){
  loading.classList.add('loaded');
}

//画面が読み込まれたら animation を呼び出す
// window.addEventListener('load', animation);

// 指定秒後に動作させる
window.setTimeout( animation, 2000 );

const text = document.querySelector('#caption');

//マウスオーバー
thumbs.forEach(function(item, index) {
  item.onmouseover = function() {
   //console.log(this.dataset.image);
   main.src = this.dataset.image;
   text.textContent = this.title;
  }
});
