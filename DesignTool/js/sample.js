// ページが完全に読み込まれたとき発生
window.addEventListener("load", function(){
  // 横スクロール実装
  gsap.registerPlugin(ScrollTrigger);// プラグインを定義
  const area  = document.querySelector(".js-scroll__area");// 変数areaにjs-scroll__areaを代入
  const list  = document.querySelector(".js-scroll__list");// 変数listにjs-scroll__listを代入
  const items = document.querySelectorAll(".js-scroll__item");// 変数itemsにjs-scroll__itemを代入
  const num   = items.length;// 変数numにitemsのを代入

  // 横幅を指定
  gsap.set(list,  { width: num * 100 + "%" });
  gsap.set(items, { width: 100 / num + "%" });

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

// featureSwiper実装 sp版
  const featureSwiper = new Swiper(".js-feature-swiper", {
    a11y:"none", //アクセシビリティ
    navigation: {
      nextEl: ".swiper-button-next",// 「次へ」ボタンの要素のセレクタ
      prevEl: ".swiper-button-prev",//「前へ」ボタンの要素のセレクタ
    },
  });

  // menuSwiper実装
  const menuSwiper = new Swiper(".js-menuswiper", {
    loop: true,// ループ
    a11y:"none", //アクセシビリティ
    breakpoints: {
      475: {
        slidesPerView: 1,// 475px以上の場合
        spaceBetween: 20,// 隣同士の余白
      },
      575: {
        slidesPerView: 1.2,// 575px以上の場合
        spaceBetween: 20,// 隣同士の余白
      },
      757: {
        slidesPerView: 1.5,// 757px以上の場合
        spaceBetween: 24,// 隣同士の余白
      },
      991: {
        slidesPerView: 2,// 991px以上の場合
        spaceBetween: 40,// 隣同士の余白
      },
      1200: {
        slidesPerView: 3,// 1200px以上の場合
        spaceBetween: 40,// 隣同士の余白
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

  // fadeSwiper実装
  const fadeSwiper = new Swiper(".js-fadeswiper", {
    slidesPerView: 1,// 1200px以上の場合
    a11y:"none", // アクセシビリティ
    autoplay: {
      delay: 1000, // 1.5秒後削除
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


  // shopタブメニュー 切り替え実装
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
    // color-active 切り替え実装
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
});