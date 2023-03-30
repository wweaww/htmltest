/* 접속 핸드폰 정보 */
// var userAgent = navigator.userAgent.toLowerCase(); 
/* 모바일 홈페이지 바로가기 링크 생성 */
// if(userAgent.match('iphone')){
//     alert('iphone');
// } else if(userAgent.match('ipad')) { 
//     alert('ipad');
// } else if(userAgent.match('android')) {
//     alert('android');
// } else if(userAgent.match('win64')) {
//     alert('64비트 윈도우');
// } else if(userAgent.match('win84')) {
//     alert('32비트 윈도우');
// }

window.addEventListener('load',function(event){
    
}, true);

window.addEventListener('resize', function(event){
    // var size = {width: window.innerWidth || document.body.clientWidth, height: window.innerHeight || document.body.clientHeight };
    // if(size.width<900){
    //     display_smaller();
    // }else{
    //     display_over();
    // }
}, true);

// function display_smaller(){
//     document.getElementsByClassName("left")[0].id = "none";
//     document.getElementsByClassName("right")[0].id = "full";
// }

// function display_over(){
//     document.getElementsByClassName("left")[0].id = "";
//     document.getElementsByClassName("right")[0].id = "";
// }

function showContent(){
    var clone = document.getElementsByTagName("template")[0].content.cloneNode(true);
    document.getElementsByClassName('template')[0].innerText = "";
    document.getElementsByClassName('template')[0].append(clone);
}
function clearContent(){
    document.getElementsByClassName('template')[0].innerText = "";
}


// (function func(){})();

//var func = function(){ }
//func();
