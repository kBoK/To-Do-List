const itemList = [ ]; //배열 생성
const addBtn = document.querySelector("#add_button"); //#add_button인 첫번째 요소 선택
addBtn.onclick = addList; //addBtn을 누르면 addList가 작동

function addList(){
    var item = document.querySelector("#text_box").value; //#text_box의 값을 item에 넣는다
    if(text_box.value !== ""){//#text_box 빈값이 아니라면
        itemList.push(item); //itemList라는 배열에 item(#text_box)값을 넣는다
        document.querySelector("#text_box").value = "" //값을 넣고나면 #text_box value는 빈값
        document.querySelector("#text_box").focus(); // #text_box 자동으로 포커싱된다
        showList(); //showList가 작동하라
    }else{
        alert("작성하세요");//#text_box 빈값이면 경고
    }
}

function showList(){
    var list = "<ul>"
    for (var i=0; i<itemList.length; i++){
        list +="<li>"+itemList[i]+"<span class='close' id="+i+">X</span></li>";
    } //<ul> <li> itemList[i] + 클래스가 close인 X </li> </ul>      
    //id="+i+" 의 의미는 모름 밑에 remove랑 연관이있는듯한데..딱히 없어도 문제없음
    list +="</ul>";
    document.querySelector("#itemList").innerHTML = list; //#itemList에 list 넣기

    var remove = document.querySelectorAll(".close"); //.close를 remove로 지정
    for(var i=0; i<remove.length; i++){
        remove[i].addEventListener("click", removeList); //remove[i]를 클릭하면 removeList를 발생시킴 
    }
}

function removeList(){
    var id=this.getAttribute("id"); //this(클릭한 삭제버튼)의 id 값 가져와 id변수에 저장
    itemList.splice(id,1); //원하는 위치에 요소를 추가하거나 삭제, 배열중 id 1개 삭제
    showList();
}
