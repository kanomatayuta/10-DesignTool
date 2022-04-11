/*----------------------------
*　ページが完全に読み込まれたとき発生
*----------------------------*/
window.addEventListener("load", function(){
/*----------------------------
*　横スクロール実装　gsap
*----------------------------*/
  gsap.registerPlugin(ScrollTrigger);// プラグインを定義
  const area  = document.querySelector(".js-scroll__area");// 変数areaにjs-scroll__areaを代入
  const list  = document.querySelector(".js-scroll__list");// 変数listにjs-scroll__listを代入
  const items = document.querySelectorAll(".js-scroll__item");// 変数itemsにjs-scroll__itemを代入
  const num   = items.length;// 変数numにitemsのを代入
  gsap.set(list,  { width: num * 100 + "%" });// 横幅を指定
  gsap.set(items, { width: 100 / num + "%" });// 横幅を指定
  gsap.to(items, {
    xPercent: -100 * ( num - 1 ), // x方向に移動させる
    ease: "none", //イージング
    scrollTrigger: {
      trigger: area, // トリガー
      start: "top top", // 開始位置
      end: "+=1000", // 終了位置
      pin: true, // ピン留め
      scrub: true, // スクロール量に応じて動かす
    }
  });

/*----------------------------
*　 featureSwiper実装 sp版
*----------------------------*/
  const featureSwiper = new Swiper(".js-feature-swiper", {
    a11y:"none", //アクセシビリティ
    navigation: {
      nextEl: ".swiper-button-next",// 「次へ」ボタンの要素のセレクタ
      prevEl: ".swiper-button-prev",//「前へ」ボタンの要素のセレクタ
    },
  });

/*----------------------------
*　 menuSwiper実装
*----------------------------*/
  const menuSwiper = new Swiper(".js-menuswiper", {
    loop: true,// ループ
    a11y:"none", //アクセシビリティ
    breakpoints: {
      0: {// 0x以上の場合
        slidesPerView: 1.2,// 横幅
        spaceBetween: 20,// 隣同士の余白
      },
      757: {// 757px以上の場合
        slidesPerView: 1.5,
        spaceBetween: 24,
      },
      991: {// 991px以上の場合
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1200: {// 1200px以上の場合
        slidesPerView: 3,
        spaceBetween: 40,
      }
    },
    pagination: {
      el: ".swiper-pagination",// 「ページ付け」ボタンの要素のセレクタ
      clickable: true,// クリックを有効
    },
    navigation: {
      nextEl: ".swiper-button-next",// 「次へ」ボタンの要素のセレクタ
      prevEl: ".swiper-button-prev",//「前へ」ボタンの要素のセレクタ
    }
  });

/*----------------------------
*　 fadeSwiper実装
*----------------------------*/
const fadeSwiper = new Swiper(".js-fadeswiper", {
  slidesPerView: 1,
  a11y:"none", // アクセシビリティ
  autoplay: {
    delay: 1500, // 1.5秒後削除
    disableOnInteraction: false // ユーザー操作後に自動再生を再開する
  },
  effect: "fade", // フェードのエフェクト
  autoplay: {
    delay: 3000, // 3秒後に次の画像へ
    disableOnInteraction: false // ユーザー操作後に自動再生を再開する
  },
  pagination: {
    el: ".fadeswiper-pagination",// ページ付け」ボタンの要素のセレクタ
    clickable: true,// クリックを有効
  },
  speed: 2000, // ２秒かけながら次の画像へ移動
  allowTouchMove: false, // マウスでのスワイプを禁止
});

/*----------------------------
*　shopタブメニュークリック時切り替え
*----------------------------*/
  const tabTriggers = document.querySelectorAll('.js-tab-trigger');// タブメニュークラス'.js-tab-trigger'を持つ要素を取得
  const tabTargets = document.querySelectorAll('.js-tab-target');// タブコンテンツクラス'.js-tab-target'を持つ要素を取得
  for (let count = 0; count < tabTriggers.length; count++) {// 要素の数の分だけループ処理をして値を取り出す
    tabTriggers[count].addEventListener('click', (event) => {// タブメニュークリック時
      let currentMenu = event.currentTarget;// クリックされた要素（メニュー要素[トリガー要素]）を取得
      let currentContent = document.getElementById(currentMenu.dataset.id);// ターゲットとなる要素（タブメニューdata属性値と等しいid値を持つコンテンツ要素[ターゲット要素]）を取得
      for (let count = 0; count < tabTriggers.length; count++) {// すべてのタブメニューの'tab-active'クラスを削除
        tabTriggers[count].classList.remove('tab-active');
      }
      currentMenu.classList.add('tab-active');// クリックしたタブメニューに'tab-active'クラスを追加
      for (let count = 0; count < tabTargets.length; count++) {// タブコンテンツを非アクティブにする
        tabTargets[count].classList.remove('tab-active');
      }
      if(currentContent !== null) {// 対象コンテンツ(指定したIDの要素があったら)を表示させる
        currentContent.classList.add('tab-active');
      }
    });
    /*----------------------------
    *　shop backcoloカラー 切り替え実装
    *----------------------------*/
    const targetOn = document.getElementById('js-color-on');// タブメニューid'.js-tcolor-on'を持つ要素を取得
    const targetOff = document.getElementById('js-color-off');// タブメニューid'.js-tcolor-off'を持つ要素を取得
    const targetColor = document.getElementById('shop');// タブメニューid'.shop'を持つ要素を取得
    targetOn.addEventListener('click', function(){// onをクリック時
      targetColor.classList.add('color-active');// クリックしたタブメニューに'color-active'クラスを追加
    });
    targetOff.addEventListener('click', function(){// offをクリック時
      targetColor.classList.remove('color-active');// クリックしたタブメニューに'color-active'クラスを削除
    });
  }

/*----------------------------
*　ナビをクリック時にターゲットまでスムーススクロールする実装
*----------------------------*/
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');//a href="#{id名}"となっているものを全て取得
  for (let count = 0; count < smoothScrollTrigger.length; count++){//ループ処理でsmoothScrollTriggerの数だけ繰り返す
    smoothScrollTrigger[count].addEventListener('click', (event) => {//一つ一つに対してクリックイベントを起こす
      event.preventDefault();// デフォルトの動作をキャンセルしスムースクロールする。
      let href = smoothScrollTrigger[count].getAttribute('href');// href=””の中身を取得。
      let targetElement = document.getElementById(href.replace('#', ''));// #を除く.ジャンプする先のid名を抜き出すことができる.
      const rect = targetElement.getBoundingClientRect().top;// ブラウザからの高さを取得
      const offset = window.pageYOffset;// ブラウザからの高さを取得
      const target = rect + offset// ウィンドウからターゲットまでの距離を取得
      window.scrollTo({
        top: target,//targetの位置
        behavior: 'smooth',//スムースでスクロール
      });
    });
  }

/*----------------------------
* スクロール時のヘッダー部分の実装
*----------------------------*/
  window.addEventListener('scroll', function() {// スクロールしたときに処理を実行
    const scrollY = window.pageYOffset;//垂直方向のスクロール量の取得
    const target = document.getElementById('js-target-begin'); //id名(js-target-begin)を取得
    const targetClientRectMiddl= document.getElementById('js-target-middle').getBoundingClientRect().top;//(js-target-middle)の表示領域の左上を(0, 0)として、そこからの相対位置で表示
    const targetYMiddl = scrollY + targetClientRectMiddl -300;//基準のスクロール値を取得(絶対位置:値は固定)300手前
    const targetClientRectEnd = document.getElementById('js-target-end').getBoundingClientRect().top;//(js-target-end)の表示領域の左上を(0, 0)として、そこからの相対位置で表示
    const triggerYEnd = scrollY + targetClientRectEnd;//基準のスクロール値を取得(絶対位置:値は固定)
    if(scrollY > 0) {//垂直方向のスクロール量が０より大き場合
      target.classList.add('common');//class(common)を追加
    } else if(scrollY === 0) {//垂直方向のスクロール量が０場合
      target.classList.remove('common');//class(common)を削除
      target.classList.remove('middle');//class(middle)を削除
    }
    if(scrollY > targetYMiddl) {//垂直方向のスクロール量がtargetYMiddlより大きい場合
      target.classList.add('middle');//class(middle)を追加
    }else{//垂直方向のスクロール量がtargetYMiddlより小さい場合
      target.classList.remove('middle');//class(middle)を削除
    }
    if(scrollY > triggerYEnd){//垂直方向のスクロール量がtargetYEndより大きい場合
      target.classList.remove('middle');//class(middle)を削除
    }
  });

/*----------------------------
* hamburger-navの実装　SP版
*----------------------------*/
  const hamburgerBtn = document.getElementById('js-hamburger-menu');//'js-hamburger-men'要素を取得
  const slideStr = document.getElementsByClassName("drawer__nav--str");//'drawer__nav--str'要素を取得
  let flag = false; //falseをおく

  hamburgerBtn.addEventListener('click', function(){//hamburgerBtnクリック時
    if (!flag) { //falseならば
      hamburgerBtn.classList.add('active');//要素にactiveを追加
      for(let count = 0; count < slideStr.length; count++){//ループ処理でslideStrの数だけ繰り返す
        slideStr[count].classList.add('slide-in');//要素にslide-inを追加
      }
      flag = true;//実行したら、flagにtrueをおく。次,ボタン押すとtrueの場合の処理になる
    } else { //trueならば
      hamburgerBtn.classList.remove('active');//要素にactiveを追加
      for(let count = 0; count < slideStr.length; count++){//ループ処理でslideStrの数だけ繰り返す
        slideStr[count].classList.remove('slide-in');//要素のslide-inを削除
      }
      flag = false; //実行したら、flagにfalseをおく。次、ボタン押すとfalseの場合の処理になる
    }
  });

});

