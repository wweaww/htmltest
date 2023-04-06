//load(로드가 완료), unload(로드가 안될때), error(에러 or 요청자원없음), resize(창 크기 조정), scroll(스크롤 할 때)
window.addEventListener('load',function(event){
    display_flex(0);
}, true);
//어떤 조건이 만족할때 실행

const champ_line = ["All", "Top", "Jungle", "Mid", "Bottom", "Suppot"];
//그냥 실행
function showContent(num){
    let number = parseInt(num);
    init();
    all_display_none();
    display_flex(number);
}
function init(){ //전부 버튼이 클릭 안된 상태로 보이게
    for(let i=0; i<document.getElementsByTagName("header")[0].getElementsByTagName('input').length; i++){
        document.getElementsByClassName("header_bt")[i].setAttribute('class',"header_bt");
    }
}
function all_display_none(){ //모든 캐릭터를 안보이게
    for(let i=0; i<document.getElementsByClassName(champ_line[0]).length; i++){
        document.getElementsByClassName(champ_line[0])[i].style.display = "none";
    }
}
function display_flex(number){ //특정 조건 클래스만 보이게
    document.getElementsByClassName("header_bt")[number].setAttribute('class',"header_bt check");
    for(let i=0; i<document.getElementsByClassName(champ_line[+number]).length; i++){
        document.getElementsByClassName(champ_line[+number])[i].style.display = "";
    }
}

//(function func(){})();
//var func = function(){}; func();