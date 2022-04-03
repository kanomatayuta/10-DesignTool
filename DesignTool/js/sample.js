// ページが完全に読み込まれたとき発生
window.addEventListener("load", function(){

  // 横スクロール実装
  // プラグインを定義
  gsap.registerPlugin(ScrollTrigger);
  // 変数areaにjs-scroll__areaを代入
  const area  = document.querySelector(".js-scroll__area");
  // 変数listにjs-scroll__listを代入
  const list  = document.querySelector(".js-scroll__list");
  // 変数itemsにjs-scroll__itemを代入
  const items = document.querySelectorAll(".js-scroll__item");
  // 変数numにitemsのを代入
  const num   = items.length;

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
});