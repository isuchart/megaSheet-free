
// $("#np").hide()
// $("#nq").hide()
// $("#aq").hide()
// $("#pq").hide()
let pgExam = $(".page-exam")
makePage(40) //จำนวนข้อ
$("#np").show()
$("#nq").show()
$("#aq").show()
$("#pq").show()
$(".page-exam").hide()
$(".page-answer").show()
newExamData() // เสร็จแล้วต้องปิด

$(document).ready(function () {
    $(".btn-hamburger").on("click", function () {
        $("nav ul").toggleClass("nav-active");
    })
});
function toggleDisplay() {
    $(".page-exam").toggle()
    // pgExam.toggle()
    $(".page-answer").toggle()
}

function prnExam(){
    $(".page-exam").show()
    $(".page-exam").css("page-break-after", "always")
    $(".page-answer").show()
    window.print()
    $(".page-answer").hide()
}

function signinFn(){
    $("#login").show()
    $(".page-exam").hide()
    $("#welcome").hide()
}
function displayExam(){
    // let user = document.getElementById("user").value
    // let password = document.getElementById("password").value
    let user = $("#user").val()
    let password = $("#password").val()
    console.log(user)
    console.log(password)
    if(user==111 && password==111){
        $("#login").hide()
        $(".page-exam").show()
        $("#np").show()
        $("#nq").show()
        $("#aq").show()
        $("#pq").show()
        $("#sn").hide()
        newExamData()
    }else{
        alert("เข้าไม่ได้")
    }
}
function refresh(){
    location.reload()
    // $("body").css("visibility","hidden")
    $(".page-exam").show()
    // reload.preventDefault()
}
function newQuestion(){
    refresh()
    // newExamData()
    $("#welcome").hide()
    // $("#welcome").show()
    $(".page-exam").show()
    $(".page-answer").hide()
}

//reset เลขที่
function resetPageNo(){
    let no = prompt() || 1
    // no--
    no -= 2
    localStorage.setItem('pageNo', no);
    newExamData()
    // no -= 2
    location.reload();
  }


function ascSpace(n){
    let sp = "\\ "
    for(i=1;i<n;i++){
        sp += "\\ "
    }
    return sp
}