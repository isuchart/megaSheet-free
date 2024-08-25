function newExamData() {
    var a = []
    var b = []
    var c = []
    var n1 = []
    var n2 = []
    var n3 = []
    var n4 = []
    var n5 = []
    var exam = []
    var examAns = []
    var examQuiz = []
    var html = []
    var htmlAns = []

    var n3Txt =[]
    var op1Txt = []
    var op2Txt = []
    var op3Txt = []
    var op4Txt = []

    var nLine = 55

    for (let i = 1; i <= 8; i++) {

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
        if((n1[i]*n4[i])+(n2[i]*n3[i])==0 || (n1[i]*n4[i])+(n2[i]*n3[i])==-1 || (n1[i]*n4[i])+(n2[i]*n3[i])==1){
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

        // exam[i] = `$ \\frac{a}{b} $`
        // examQuiz[i] = `$\\ =\\ ${createLine(nLine)} $`
        // html[i] = exam[i]+examQuiz[i]
    
        // examAns[i] = `$\\ =\\ \\textcolor{red}{(${n1[i]}x${op3Txt[i]}${n2[i]})(${n3[i]}x${op4Txt[i]}${n4[i]})} $`
        // htmlAns[i] = exam[i]+examAns[i] 
    }
    
    //1
//     \begin{align*}
//    a&=b+c \\
//    d+e&=f
// \end{align*}
    let i = 1
    n1[i] = random( 1, 9)
    exam[i] = `$จงเขียน\\ \\Large{\\frac{x-${n1[i]}}{x^2-${n1[i]**2}}}\\normalsize{\\ ในรูปผลสำเร็จ}\\\\$`
    examQuiz[i] = ` \\begin{alignat*}{2} `
    examQuiz[i] += ` \\normalsize{\\frac{x-${n1[i]}}{x^2-${n1[i]**2}}} &=  ${createLine(nLine)} \\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}`
    examQuiz[i] += ` \\end{alignat*} `
    html[i] = exam[i]+examQuiz[i]
    
    examAns[i]  = ` \\begin{alignat*}{2} `
    examAns[i] += ` \\small{\\frac{x-${n1[i]}}{x^2-${n1[i]**2}}} &=  \\ \\textcolor{red}{\\frac{x-${n1[i]}}{x^2-${n1[i]}^2}} \\\\`
    examAns[i] += ` &= \\ \\textcolor{red}{\\frac{x-${n1[i]}}{(x-${n1[i]})(x+${n1[i]})}} \\\\`
    examAns[i] += ` &= \\textcolor{red}{\\frac{\\cancel{x-${n1[i]}}}{\\cancel{(x-${n1[i]})}(x+${n1[i]})}} \\\\`
    examAns[i] += ` &= \\textcolor{red}{\\frac{1}{x+${n1[i]}}} \\\\`
    examAns[i] += ` \\end{alignat*} `
    htmlAns[i] = exam[i]+examAns[i] 
        
    //2÷
    i++
    n1[i] = random( 1, 9)
    n2[i] = random( 2, 9)
    n3[i] = random( 2, 9)
    n2[i]===n3[i] ? n3[i] += 1 :n3[i] = n3[i]

    exam[i] = `$จงเขียน\\ \\Large{\\frac{${n2[i]}x-${n1[i]*n2[i]}}{${n3[i]}x^2-${n1[i]*n3[i]}x}}\\normalsize{\\ ในรูปผลสำเร็จ}\\\\$`
    examQuiz[i] = ` \\begin{alignat*}{2} `
    examQuiz[i] += ` \\small{\\frac{${n2[i]}x-${n1[i]*n2[i]}}{${n3[i]}x^2-${n1[i]*n3[i]}x}} &=  ${createLine(nLine)} \\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}`
    examQuiz[i] += ` \\end{alignat*} `
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = ` \\begin{alignat*}{2} `
    examAns[i] += ` \\small{\\frac{${n2[i]}x-${n1[i]*n2[i]}}{${n3[i]}x^2-${n1[i]*n3[i]}x}} &=  \\ \\textcolor{red}{\\frac{${n2[i]}(x-${n1[i]})}{${n3[i]}x(x-${n1[i]})}} \\\\`
    examAns[i] += ` &= \\textcolor{red}{\\frac{${n2[i]}\\cancel{(x-${n1[i]})}}{${n3[i]}x\\cancel{(x-${n1[i]})}}} \\\\`
    n3[i]/gcd(n2[i],n3[i])===1 ? n3Txt[i]=`` : n3Txt[i]= n3[i]/gcd(n2[i],n3[i])
    examAns[i] += ` &= \\textcolor{red}{\\frac{${n2[i]/gcd(n2[i],n3[i])}}{${n3Txt[i]}x}} \\\\`
    examAns[i] += `  \\\\`
    examAns[i] += ` \\end{alignat*} `
    htmlAns[i] = exam[i]+examAns[i] 
    htmlAns[i] = exam[i]+examAns[i] 
    
    //3
    i++
    n1[i] = random( 2, 9)
    n2[i] = random( 2, 9)
    n3[i] = random( -9, -2)
    n1[i]===n2[i] ? n1[i]+=1 : n1[i]=n1[i]

    exam[i] = `$จงเขียน\\ \\Large{\\frac{${n1[i]*n3[i]}x^3+${-n2[i]*n3[i]}}{${-n3[i]}x}}\\normalsize{\\ ในรูปผลสำเร็จ}\\\\$`
    examQuiz[i] = ` \\begin{alignat*}{2} `
    examQuiz[i] += ` \\small{\\frac{${n1[i]*n3[i]}x^3+${-n2[i]*n3[i]}}{${-n3[i]}x}} &=  ${createLine(nLine)} \\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}`
    examQuiz[i] += ` \\end{alignat*} `
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = ` \\begin{alignat*}{1} `
    examAns[i] += `\\small{\\frac{${n1[i]*n3[i]}x^3+${-n2[i]*n3[i]}}{${-n3[i]}x}} &=  \\ \\textcolor{red}{\\frac{${-n3[i]}x(-${n1[i]}x^2+${n2[i]}x)}{${-n3[i]}x}} \\\\`
    examAns[i] += ` &=  \\ \\textcolor{red}{\\frac{\\cancel{${-n3[i]}x}(-${n1[i]}x^2+${n2[i]}x)}{\\cancel{${-n3[i]}x}}} \\\\`
    examAns[i] += ` &= \\textcolor{red}{-${n1[i]}x^2+${n2[i]}x} \\\\`
    examAns[i] += ` &= \\textcolor{red}{x(-${n1[i]}x+${n2[i]}x)} \\\\`
    examAns[i] += ` \\end{alignat*} `
    htmlAns[i] = exam[i]+examAns[i] 
    htmlAns[i] = exam[i]+examAns[i]  
    
    //4
    i++
    n1[i] = random( 2, 9)
    n2[i] = random( 2, 9)
    n3[i] = random( 2, 9)
    n4[i] = random( 2, 5)
    
    gcd(n1[i],n3[i]) != 1 ? n3[i]+=1 : n3[i]=n3[i]
    nLine = 40

    exam[i] = `$จงเขียน\\ \\Large{ฺ\\Big(\\frac{${n1[i]*n2[i]}x^2-${n3[i]*n2[i]}x}{${n2[i]*n4[i]}x^2}\\Big)\\Big(\\frac{${n1[i]}x+${n3[i]}}{${n1[i]}x-${n3[i]}}\\Big)}\\normalsize{\\ ในรูปผลสำเร็จ}\\\\$`
    examQuiz[i] = ` \\begin{alignat*}{2} `
    examQuiz[i] += ` \\small{\\Big(\\frac{${n1[i]*n2[i]}x^2-${n3[i]*n2[i]}x}{${n2[i]*n4[i]}x^2}\\Big)\\Big(\\frac{${n1[i]}x+${n3[i]}}{${n1[i]}x-${n3[i]}}\\Big)} &=  ${createLine(nLine)} \\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}`
    examQuiz[i] += ` \\end{alignat*} `
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = ` \\begin{alignat*}{1} `
    examAns[i] += `\\small{\\Big(\\frac{${n1[i]*n2[i]}x^2-${n3[i]*n2[i]}x}{${n2[i]*n4[i]}x^2}\\Big)\\Big(\\frac{${n1[i]}x+${n3[i]}}{${n1[i]}x-${n3[i]}}\\Big)} &= \\textcolor{red}{\\small{\\Big(\\frac{${n2[i]}x^2(${n1[i]}x-${n3[i]}x)}{${n2[i]*n4[i]}x^2}\\Big)\\Big(\\frac{${n1[i]}x+${n3[i]}}{${n1[i]}x-${n3[i]}}\\Big)}} \\\\`
    examAns[i] += ` &= \\textcolor{red}{\\small{\\Big(\\frac{\\cancel{${n2[i]}x^2}\\cancel{(${n1[i]}x-${n3[i]}x)}}{\\cancel{${n2[i]*n4[i]}x^2}}\\Big)\\Big(\\frac{${n1[i]}x+${n3[i]}}{\\cancel{${n1[i]}x-${n3[i]}}}\\Big)}} \\\\`
    examAns[i] += ` &= \\textcolor{red}{\\small{\\frac{1}{${n4[i]}}(${n1[i]}x+${n3[i]})}} \\\\`
    examAns[i] += ` \\end{alignat*} `
    htmlAns[i] = exam[i]+examAns[i] 
    htmlAns[i] = exam[i]+examAns[i]  
 
    //5
    i++
    n1[i] = random( 2, 9)
    n2[i] = random( 2, 9)
    n3[i] = random( 2, 9)
    // n1[i]===n2[i] ? n1[i]+=1 : n1[i]=n1[i]

    nLine = 40

    exam[i] = `$จงเขียน\\ \\Large{\\frac{${n1[i]}x^2+${n1[i]*n2[i]}x}{x-${n3[i]}}\\sdot\\frac{x}{x+${n2[i]}}}\\normalsize{\\ ในรูปผลสำเร็จ}\\\\$`
    examQuiz[i] = ` \\begin{alignat*}{2} `
    examQuiz[i] += ` \\small{\\frac{${n1[i]}x^2-${n1[i]*n2[i]}x}{x-${n3[i]}}\\sdot\\frac{x}{x+${n2[i]}}} &=  ${createLine(nLine)} \\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}`
    examQuiz[i] += ` \\end{alignat*} `
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = ` \\begin{alignat*}{1} `
    examAns[i] += `\\small{\\frac{${n1[i]}x^2+${n1[i]*n2[i]}x}{x-${n3[i]}}\\sdot\\frac{x}{x+${n2[i]}}} &= \\textcolor{red}{\\small{\\frac{${n1[i]}x(x+${n2[i]})}{x-${n3[i]}}\\sdot\\frac{x}{x+${n2[i]}}}} \\\\`

    examAns[i] += ` &= \\textcolor{red}{\\small{\\frac{${n1[i]}x\\cancel{(x+${n2[i]})}}{x-${n3[i]}}\\sdot\\frac{x}{\\cancel{x+${n2[i]}}}}} \\\\`

    examAns[i] += ` &= \\textcolor{red}{\\small{\\frac{2x^2}{x-${n3[i]}}}} \\\\`
    examAns[i] += ` \\end{alignat*} `
    htmlAns[i] = exam[i]+examAns[i] 
    htmlAns[i] = exam[i]+examAns[i]

    //6
    i++
    n1[i] = random( 2, 9)
    n2[i] = random( 2, 9)
    n3[i] = random( 2, 9)
    // n1[i]===n2[i] ? n1[i]+=1 : n1[i]=n1[i]

    nLine = 40

    exam[i] = `$จงเขียน\\ \\Large{\\frac{x}{x+${n2[i]}}\\small{\\div}\\Large{\\frac{x+${n1[i]}}{x^2-${n2[i]**2}}}}\\normalsize{\\ ในรูปผลสำเร็จ}\\\\$`
    examQuiz[i] = ` \\begin{alignat*}{2} `
    examQuiz[i] += ` \\small{\\frac{x}{x+${n2[i]}}\\small{\\div}\\small{\\frac{x+${n1[i]}}{x^2-${n2[i]**2}}}} &=  ${createLine(nLine)} \\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}`
    examQuiz[i] += ` \\end{alignat*} `
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = ` \\begin{alignat*}{1} `
    examAns[i] += ` \\small{\\frac{x}{x+${n2[i]}}\\small{\\div}\\small{\\frac{x+${n1[i]}}{x^2-${n2[i]**2}}}} &= \\textcolor{red}{ \\small{\\frac{x}{x+${n2[i]}}\\sdot\\small{\\frac{x^2-${n2[i]**2}}{x+${n1[i]}}}}} \\\\`
    examAns[i] += ` &=  \\textcolor{red}{ \\small{\\frac{x}{x+${n2[i]}}\\sdot\\small{\\frac{(x-${n2[i]})(x+${n2[i]})}{x+${n1[i]}}}}} \\\\`
    examAns[i] += ` &=  \\textcolor{red}{ \\small{\\frac{x}{\\cancel{x+${n2[i]}}}\\sdot\\small{\\frac{(x-${n2[i]})\\cancel{(x+${n2[i]})}}{x+${n1[i]}}}}} \\\\`
    examAns[i] += ` &= \\textcolor{red}{\\small{\\frac{x(x-${n2[i]})}{x+${n1[i]}}}} \\\\`
    examAns[i] += ` \\end{alignat*} `
    htmlAns[i] = exam[i]+examAns[i] 
    htmlAns[i] = exam[i]+examAns[i]  

    //7
    i++
    n1[i] = random( 2, 9)
    n2[i] = random( 2, 9)
    n3[i] = random( 2, 9)
    n4[i] = random( 2, 9)
    n5[i] = random( 2, 9)
    // n1[i]===n2[i] ? n1[i]+=1 : n1[i]=n1[i]

    let n13Txt
    let gcdTxt
    let lTxt
    let rTxt
    let n13 = n1[i]+n3[i]
    let n24 = n2[i]+n4[i]
    let gcd7 = gcd(n13,n24)
    gcd7 == 1 ? gcdTxt = `` : gcdTxt = gcd7
    gcd7 == 1 ? lTxt = `` : lTxt = `(`
    gcd7 == 1 ? rTxt = `` : rTxt = `)`
    n13/gcd7 == 1 ? n13Txt = `` : n13Txt = n13/gcd7
    
    nLine = 40

    exam[i] = `$จงเขียน\\ \\Large{\\frac{${n1[i]}x+${n2[i]}}{x+${n5[i]}}+\\frac{${n3[i]}x+${n4[i]}}{x+${n5[i]}}}\\normalsize{\\ ในรูปผลสำเร็จ}\\\\$`
    examQuiz[i] = ` \\begin{alignat*}{2} `
    examQuiz[i] += ` \\small{\\frac{${n1[1]}x+${n2[i]}}{x+${n5[i]}}+\\frac{${n3[i]}x+${n4[i]}}{x+${n5[i]}}} &=  ${createLine(nLine)} \\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}`
    examQuiz[i] += ` \\end{alignat*} `
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = ` \\begin{alignat*}{1} `
    examAns[i] += ` \\small{\\frac{${n1[i]}x+${n2[i]}}{x+${n5[i]}}+\\frac{${n3[i]}x+${n4[i]}}{x+${n5[i]}}} &= \\textcolor{red}{ \\small{\\frac{${n1[i]}x+${n2[i]}+${n3[i]}x+${n4[i]}}{x+${n5[i]}}}} \\\\`
    examAns[i] += ` &=  \\textcolor{red}{ \\small{\\frac{${n13}x+${n24}}{x+${n5[i]}}}} \\\\`
    
    gcd7 == 1 ? examAns[i] += `` : examAns[i] += ` &= \\textcolor{red}{\\small{\\frac{${gcdTxt}${lTxt}${n13Txt}x+${n24/gcd7}${rTxt}}{x+${n5[i]}}}} \\\\`
    // examAns[i] += ` &= \\textcolor{red}{\\small{\\frac{${gcdTxt}${lTxt}${n13Txt}x+${n24/gcd7}${rTxt}}{x+${n5[i]}}}} \\\\`
    examAns[i] += ` \\end{alignat*} `
    htmlAns[i] = exam[i]+examAns[i] 
    htmlAns[i] = exam[i]+examAns[i]  

    //8
    i++
    n1[i] = random( 2, 6)
    
    nLine = 40

    exam[i] = `$จงเขียน\\ \\Large{\\frac{x^3+${n1[i]**3}}{x+${n1[i]}}}\\normalsize{\\ ในรูปผลสำเร็จ}\\\\$`
    examQuiz[i] = ` \\begin{alignat*}{2} `
    examQuiz[i] += ` \\small{\\frac{x^3+${n1[i]**3}}{x+${n1[i]}}} &=  ${createLine(nLine)} \\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}\\\\`
    examQuiz[i] += ` &= ${createLine(nLine)}`
    examQuiz[i] += ` \\end{alignat*} `
    html[i] = exam[i]+examQuiz[i]
   
    examAns[i] = ` \\begin{alignat*}{1} `
    examAns[i] += ` \\small{\\frac{x^3+${n1[i]**3}}{x+${n1[i]}}} &= \\textcolor{red}{ \\small{\\frac{x^3+${n1[i]}^3}{x+${n1[i]}}}} \\\\`
    examAns[i] += ` &=  \\textcolor{red}{ \\small{\\frac{(x+${n1[i]})(x^2-2(x)(${n1[i]})+${n1[i]}^2)}{x+${n1[i]}}}} \\\\`
    examAns[i] += ` &=  \\textcolor{red}{ \\small{\\frac{(x+${n1[i]})(x^2-${n1[i]*2}x+${n1[i]**2})}{x+${n1[i]}}}} \\\\`
    examAns[i] += ` &=  \\textcolor{red}{ \\small{\\frac{\\cancel{(x+${n1[i]})}(x^2-${n1[i]*2}x+${n1[i]**2})}{\\cancel{x+${n1[i]}}}}} \\\\`
    examAns[i] += ` &=  \\textcolor{red}{ \\small{x^2-${n1[i]*2}x+${n1[i]**2}}} \\\\`
    
   
    examAns[i] += ` \\end{alignat*} `
    htmlAns[i] = exam[i]+examAns[i] 
    htmlAns[i] = exam[i]+examAns[i]  

    pageNo=0
    let no = localStorage.getItem("pageNo");
    no++
    // let n = 1
    localStorage.setItem('pageNo', no);

//ส่วนหัวตาราง
    let headerText1 = `$ระบบจำนวนจริง : เศษส่วนของพหุนาม\\ : \\frac{p(x)}{q(x)}\\ ;\\ q(x)\\ne 0 $`
    let headerText2 = `ว้นที่ ${createLine(20)} ชื่อ-สกุล${createLine(60)} ชั้น ${createLine(20)} เลขที่ <span style="font-size: 1.5rem;">${space(2)}<b>${(no)}</b></span>`
        headerText2 += "<br>จงเขียนเศษส่วนของพหุนามในรูปผลสำเร็จ"
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