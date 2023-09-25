var acc = document.getElementsByClassName("accordion"); //아코디언클래스리스트를 가져온다.
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    //클릭이벤트를 추가한다.
    /* Toggle between adding and removing the "active" class, to highlight the button that controls the panel */

    this.parentNode.classList.toggle("active"); //부모 노드의 클래스를 추가하거나 삭제함.

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling; //현재 아코디언의 다음노트를 가져온다. panel이 옴.
    if (panel.style.display === "block") {
      //출력모드가 블럭인지 none인지 체크한다.
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
