function newExamData() {
    var a = []
    var b = []
    var c = []
    var d = []
    var m = []
    var n1 = []
    var n2 = []
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

    var nLine = 35

    for (let i = 1; i <= 40; i++) {

        n1[i] = random( -9, 9)
        n2[i] = random( -9, 9)
        if(n1[i]==0 || n1[i]==1){n1[i]+=2}
        if(n2[i]==0 || n2[i]==1){n2[i]+=2}
        n1[i] == (-1*n2[i]) ? n2[i]-=2 : n2[i]=n2[i]
        if (n1[i]+n2[i] == 1 || n1[i]+n2[i] == -1 ) {
            n1[i]+=2
        }else{
            n1[i]=n1[i]
        } 
        
        b[i] = n1[i]+n2[i]
        c[i] = n1[i]*n2[i]
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

        if(n1[i]<0){
            op3Txt[i]=''
        }else{
            op3Txt[i]='+'
        }
        
        if(n2[i]<0){
            op4Txt[i]=''
        }else{
            op4Txt[i]='+'
        }
    }
    
    //1
    let i = 1
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 
        
    //2
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 
    
    //3
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 

    //4
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 

    //5
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 

    //6
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 

    //7
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 

    //8
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 

    //9
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 
    
    //10
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 
    
    //11
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 
    
    //12
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 
    
    //13
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 

    //14
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 

    //15
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 

    //16
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //17
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 

    //18
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 

    //19
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 

    //20
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i] 

    //21
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //22
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //23
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //24
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //25
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //26
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //27
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //28
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //29
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //30
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //31
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //32
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //33
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //34
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //35
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //36
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //37
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //38
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //39
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    //nLine
    i++
    exam[i] = `$ x^2${op1Txt[i]}${b[i]}x${op2Txt[i]}${c[i]}$`
    examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = `$\\ =\\ \\textcolor{red}{(x${op3Txt[i]}${n1[i]})(x${op4Txt[i]}${n2[i]})} $`
    htmlAns[i] = exam[i]+examAns[i]

    pageNo=0
    let no = localStorage.getItem("pageNo");
    no++
    // let n = 1
    localStorage.setItem('pageNo', no);

//ส่วนหัวตาราง
    let headerText1 = `$ระบบจำนวนจริง : แยกตัวประกอบพหุนาม\\ : ax^2+bx+c\\ ;\\ a=1 $`
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