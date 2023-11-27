// JavaScript

console.log('Hello world!');

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

const open = document.querySelector('#btn-open');
const close = document.querySelector('#btn-close');
const menu = document.querySelector('#menu');

// メニュー項目を配列に格納
const items = document.querySelectorAll('.item');

 // 開くボタン
 const menuOpen = () => {
    const keyframes = {
        visibility: ['hidden','visible'],
        opacity: [0,1]
      }
      const options = {
        duration: 600,
        easing: 'ease',
        fill: 'forwards',
      }
      menu.animate(keyframes,options);

      // 項目を表示するアニメーション
  items.forEach((item,index) => {
    item.animate({opacity:[0,1]},{
      duration: 600,
      easing: 'ease',
      fill: 'forwards',
      delay: index * 200,
    });
  });

  }

 open.addEventListener('click',menuOpen);

 // 閉じるボタン
 const menuClose = () => {
    const keyframes = {
      visibility: ['visible','hidden'],
      opacity: [1,0]
    }
    const options = {
      duration: 600,
      easing: 'ease',
      fill: 'forwards',
    }
    menu.animate(keyframes,options);

     // 項目を非表示にするアニメーション
    items.forEach((item) => {
        item.animate({opacity:[1,0]},{
          duration: 600,
          easing: 'ease',
          fill: 'forwards',
        });
      });
    
  }
  close.addEventListener('click',menuClose);
  
  