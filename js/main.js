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

    // var size = {width: window.innerWidth || document.body.clientWidth, height: window.innerHeight || document.body.clientHeight };
    // if(size.width<900){
    //     display_smaller();
    // }else{
    //     display_over();
    // }

//load(로드가 완료), unload(로드가 안될때), error(에러 or 요청자원없음), resize(창 크기 조정), scroll(스크롤 할 때)
// $(document).ready(function(){
//     $(img).dblclick(function(){
//         console.log($(this));
//     });
// });
window.addEventListener('load',function(event){ }, true);
window.addEventListener('resize', function(event){ }, true);


function showContent(num){
    let number = parseInt(num);
    if(number==0){
        if(document.getElementsByClassName("container")[0].style.display == "none"){
            document.getElementsByClassName("header_bt00")[0].value = "내용 안보이기";
            document.getElementsByClassName("container")[0].style.display = "flex";
        }else{
            document.getElementsByClassName("header_bt00")[0].value = "내용 보이기";
            document.getElementsByClassName("container")[0].style.display = "none";
        }
    }
}

function showContent1(){
    clearContent1();
    var clone = document.getElementsByClassName("temp1")[0].content.cloneNode(true);
    document.getElementsByClassName('template1')[0].append(clone);
}
function clearContent1(){ document.getElementsByClassName('template1')[0].innerText = ""; }

//(function func(){})();
//var func = function(){}; func();

// var didScroll;
// // 스크롤시에 사용자가 스크롤했다는 것을 알림 
// window.addEventListener('scroll', function(event){
//     didScroll = true;
// }, true);

// // hasScrolled()를 실행하고 didScroll 상태를 재설정
// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 1000);

// function hasScrolled() {
//     if(window.scrollY > 100){
//         alert("스크롤 내림");
//     }
// }


/*
:eq
:gt
:lt
:even 짝
:old 홀

:first 처음
:last 마지막
:animated 애니메이션
:header h1~h6
:lang(언어)

:not(선택자)
:root
:target
:contains(텍스트)

:has(선택자) 선택자 자손을 가지는 요소
:empty 자식 없음
:parent 자식있음

*/