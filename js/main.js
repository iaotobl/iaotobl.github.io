//弹窗样式
// iziToast.settings({
//     timeout: 10000,
//     progressBar: false,
//     close: false,
//     closeOnEscape: true,
//     position: 'topCenter',
//     transitionIn: 'bounceInDown',
//     transitionOut: 'flipOutX',
//     displayMode: 'replace',
//     layout: '1',
//     backgroundColor: '#00000040',
//     titleColor: '#efefef',
//     messageColor: '#efefef',
//     icon: 'Fontawesome',
//     iconColor: '#efefef',
// });


// 封装显示加载动画
function setShowLoad() {
    $(".loading-box").css("display", "block");
 }
 // 封装隐藏加载动画
 function setHideLoad() {
    $(".loading-box").css("display", "none");
 }
 
 // 模拟页面加载效果
 $(window).ready(function () {
    setShowLoad();
 })
 
 setTimeout(function () {
    setHideLoad();
 }, 2000)
 
//根据js判断，页面加载完毕就显示
// document.onreadystatechange = function () {
//     if (document.readyState == "complete") {    
//         $(".loading-box").hide();
//         $('body').css('overflow','scroll');
//     }
//   }
