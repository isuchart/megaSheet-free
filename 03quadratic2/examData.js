function newExamData() {
    var a = []
    var b = []
    var c = []
    var d = []
    var m = []
    var n1 = []
    var n2 = []
    var n3 = []
    var n4 = []
    var o = []
    var p = []
    var r = []
    var k = []
    var sn = []
    var exam = []
    var examAns = []
    var examQuiz = []
    var html = []
    var htmlAns = []

    var n1Txt =[]
    var n2Txt =[]
    var op1Txt = []
    var op2Txt = []
    var op3Txt = []
    var op4Txt = []

    var nLine = 30

    for (let i = 1; i <= 40; i++) {

        n1[i] = random( 2, 9)
        n2[i] = random( -9, 9)
        n3[i] = random( 2, 9)
        n4[i] = random( -9, 9)
        
        if(n2[i]==0 || n2[i]==1){n2[i]+=2}
        if(n4[i]==0 || n4[i]==1){n4[i]+=2}
        n1[i] == (-1*n2[i]) ? n2[i]-=2 : n2[i]=n2[i]
        if (n1[i]+n2[i] == 1 || n1[i]+n2[i] == -1 ) {
            n1[i]+=2
        }else{
            n1[i]=n1[i]
        }
        if((n1[i]*n4[i])+(n2[i]*n3[i])==0){
            n2[i]+=1
            n4[i]-=3
        }
        a[i] = n1[i]*n3[i]
        b[i] = (n1[i]*n4[i])+(n2[i]*n3[i])
        c[i] = n2[i]*n4[i]
        // n1[i]+n2[i] == 0 ? n2[i]-=2 : n2[i]=n2[i]

        if(b[i]<0){
            op1Txt[i]=''
        }else{
            op1Txt[i]='+'
        }

        if(c[i]<0){
            op2Txt[i]=''
        }else{
            op2Txt[i]='+'
        }

        if(n2[i]<0){
            op3Txt[i]=''
        }else{
            op3Txt[i]='+'
        }
        
        if(n4[i]<0){
            op4Txt[i]=''
        }else{
            op4Txt[i]='+'
        }

        exam[i] = `$ ${a[i]}x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
        examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
        html[i] = exam[i]+examQuiz[i]
    
        examAns[i] = `$\\ =\\ \\textcolor{red}{(${n1[i]}x${op3Txt[i]}${n2[i]})(${n3[i]}x${op4Txt[i]}${n4[i]})} $`
        htmlAns[i] = exam[i]+examAns[i] 
    }
    
    // //1
    // let i = 1
    // exam[i] = `$ ${a[i]}x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    // examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    // html[i] = exam[i]+examQuiz[i]
   
    // examAns[i] = `${a[i]}$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    // htmlAns[i] = exam[i]+examAns[i] 
        
    // //2
    // i++
    // exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    // examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    // html[i] = exam[i]+examQuiz[i]
   
    // examAns[i] = `$\\ =\\ \\textcolor{red}{(${n1[i]}x${op3Txt[i]}${n2[i]})(x${op4Txt[i]}${n3[i]})} $`
    // htmlAns[i] = exam[i]+examAns[i] 
    
    // //3
    // i++
    // exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    // examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    // html[i] = exam[i]+examQuiz[i]
   
    // examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    // htmlAns[i] = exam[i]+examAns[i] 

    // //4
    // i++
    // exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    // examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    // html[i] = exam[i]+examQuiz[i]
   
    // examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    // htmlAns[i] = exam[i]+examAns[i] 

    pageNo=0
    let no = localStorage.getItem("pageNo");
    no++
    // let n = 1
    localStorage.setItem('pageNo', no);

//ส่วนหัวตาราง
    let headerText1 = `$ระบบจำนวนจริง : แยกตัวประกอบพหุนาม\\ : ax^2+bx+c\\ ;\\ a>1 $`
    let headerText2 = `ว้นที่ ${createLine(20)} ชื่อ-สกุล${createLine(60)} ชั้น ${createLine(20)} เลขที่ <span style="font-size: 1.5rem;">${space(2)}<b>${(no)}</b></span>`
       // headerText2 += "<br>จงหาผลคูณต่อไปนี้"
    $("#header1").html(headerText1)
    $("#header2").html(headerText2)
    $("#header3").html(headerText1)
    $("#header4").html(headerText2)
    $("#header2").css("margin-bottom", "10px");
    $("#header4").css("margin-bottom", "10px");

//หน้าคำถาม และหน้าเฉลย
for (let i = 1; i <= 40; i++) {
    $("#exam"+i+"").html(""+i+". " + html[i] + "")
    $("#answer"+i+"").html(""+i+". " +htmlAns[i] + "")
}
// MathJax.typesetPromise()

}

//จำนวนข้ออยูใน script.js