(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';

            //等价于 640为设计稿，40为1rem=40px
            // docEl.style.fontSize = 40 * (clientWidth / 640) + "px";
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    console.log("------rem")
})(document, window);


//以640设计稿为例 1rem=40px;
// 465px = 11.625rem;
// 640px = 16rem;
// 1rem=40px;
