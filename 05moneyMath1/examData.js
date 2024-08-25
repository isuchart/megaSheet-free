function newExamData() {
    var d = []
    var m = []
    var n = []
    var o = []
    var p = []
    var r = []
    var k = []
    var sn = []
    var exam = []
    var html = []
    var htmlAns = []

    var a1 = []
    var a2 = []
    var a3 = []
    var a4 = []
    var a5 = []
    var an = []
    var a1Txt = []
    var a2Txt = []
    var a3Txt = []
    var anTxt = []
    var opTxt = []
    var op1Txt = []
    var op2Txt = []
    var nTxt = []

    var nLine = 65

    for (let i = 1; i <= 8; i++) {
        d[i] = random( 2 , 5)
        m[i] = random(1, 10)*10000
        n[i] = random( 3, 20)
        r[i] = random( 2 , 10)
        o[i] = random( 2 , 4)
        p[i] = random( 5 , 8)
        k[i] = random( 1 , 3)*2
        if(m[i]==0 || m[i]==1 || m[i]==-1){m[i]+=o[i]}
        if(r[i]==0 || r[i]==1 || r[i]==-1){r[i]+=o[i]}
        d[i] == 0 ? d[i]+=2 : 
        m[i]==Math.abs(r[i]) ? m[i]+=2 : m[i]+=0
        r[i]==Math.abs(m[i]) ? r[i]+=2 : r[i]+=0

        //ตรวจสอบ a1[i]/r[i] ลงตัวหรือไม่
        a1[i] = m[i]
        if(a1[i]%r[i] == 0){
            an[i] =  a1[i]/r[i]
        }else if(gcd(a1[i],r[i]) != 1){
            an[i] = `\\frac{${a1[i]/gcd(a1[i],r[i])}}{${r[i]/gcd(a1[i],r[i])}}`
        }else {
            an[i] = `\\frac{${a1[i]}}{${r[i]}}`
        }
        a1[i]<0 ? a1Txt[i] = `(${a1[i]})` : a1Txt[i] = a1[i]
        if(((n[i]-1)*r[i])<0){
            op1Txt[i] = ``
        }else{
            op1Txt[i] = `+`
        }
        d[i]<0 ? opTxt[i] = `` : opTxt[i] = `+`
        a2[i] = a1[i]+d[i]
        a3[i] = a1[i]+(d[i]*2)
        a4[i] = a1[i]+(d[i]*3)
        a5[i] = a1[i]+(d[i]*4)
        an[i] = a1[i]+(d[i]*(n[i]-1))
        a2[i]<0 ? a2Txt[i] = `(${a2[i]})` :  a2Txt[i] = a2[i]
        a3[i]<0 ? a3Txt[i] = `(${a3[i]})` :  a3Txt[i] = a3[i]
        an[i]<0 ? anTxt[i] = `(${an[i]})` :  anTxt[i] = an[i]
        n[i]%2 != 0 ? nTxt[i] = `\\frac{${n[i]}}{2}` : nTxt[i] = n[i]/2
        a1[i]<0 ? op2Txt = `+` : op2Txt = ``
    }
    
    //1
    let i = 1
    exam[i] = `$ ฝากเงิน\\ ${(m[i]).toLocaleString()} \\ บาท\\ ได้ดอกเบี้ย\\ ${r[i]}\\% \\ ต่อปี\\ คิด\\\\ $`
    exam[i] += `$ ${space(3)}ดอกเบี้ยทบต้นทุก\\ ๆ\\ ${k[i]}\\ เดือน\\ จงหาเงินรวมเมื่อ $`
    exam[i] += `$ ${space(3)}ฝากครบ\\ ${n[i]}\\ ปี\\ โดยไม่มีการฝาก-ถอนเพิ่ม$`
    html[i] = exam[i]
    html[i] += "<br>" + space(3)+"<u>วิธีทำ</u> " +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(3)+"<u>ตอบ</u> "+space(1) +createLine(nLine)
   
    htmlAns[i] = exam[i]
    htmlAns[i] += '<div style="color: red; line-height: 2.35rem; margin-top: 10px;">'
    htmlAns[i] += `$ ${space(3)} \\underline{\\text{วิธีทำ}} ${space(3)}จะได้\\ P=${(m[i]).toLocaleString()},\\ r=\\frac{${r[i]}}{100}=${r[i]/100} \\\\ $`
    htmlAns[i] += `$ ${space(25)} k=\\frac{12}{${(k[i])}}=${12/k[i]},\\ n=${n[i]} \\\\ $`
    htmlAns[i] += ` \\begin{align*}`
    htmlAns[i] += ` จาก\\ S_n&=P(1+\\frac{r}{k})^{kn} \\\\ `
    htmlAns[i] += ` จาก\\ S_n&=P(1+\\frac{${r[i]/100}}{${k[i]}})^{${k[i]}(${n[i]})} \\\\ `
    htmlAns[i] += ` S_{${k[i]*n[i]}}&=${(m[i]).toLocaleString()}(1+${((r[i]/100)/k[i]).toFixed(2)})^{${k[i]*n[i]}} \\\\ `
    htmlAns[i] += ` S_{${k[i]*n[i]}}&=${(m[i]).toLocaleString()}(${(1+(r[i]/100)/k[i]).toFixed(2)})^{${k[i]*n[i]}} \\\\ `
    htmlAns[i] += ` S_{${k[i]*n[i]}}&=${(m[i]).toLocaleString()}(${((1+(r[i]/100)/k[i])**(k[i]*n[i])).toFixed(2)}) \\\\ `
    sn[i]=(m[i]*(1+(r[i]/100)/k[i])**(k[i]*n[i])).toLocaleString('th',{minimumFractionDigits: 2, maximumFractionDigits: 2}) 
    htmlAns[i] += ` S_{${k[i]*n[i]}}&=${sn[i]} \\\\ `
    htmlAns[i] += `\\end{align*}`
    htmlAns[i] += `$${space(3)} \\underline{\\text{ตอบ}} $`
    htmlAns[i] += `$ ${space(2)}ครบ\\ ${n[i]}\\ ปี\\ จะได้เงินรวม\\ ${sn[i]}\\ บาท$`
    htmlAns[i] += "</div>"
    
    //2
    i++
    exam[i] = `$ ฝากเงิน\\ ${(m[i]).toLocaleString()} \\ บาท\\ ได้ดอกเบี้ย\\ ${r[i]}\\% \\ ต่อปี\\ คิด\\\\ $`
    exam[i] += `$ ${space(3)}ดอกเบี้ยทบต้นทุก\\ ๆ\\ ${k[i]}\\ เดือน\\ จงหาเงินรวมเมื่อ $`
    exam[i] += `$ ${space(3)}ฝากครบ\\ ${n[i]}\\ ปี\\ โดยไม่มีการฝาก-ถอนเพิ่ม$`
    html[i] = exam[i]
    html[i] += "<br>" + space(3)+"<u>วิธีทำ</u> " +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(3)+"<u>ตอบ</u> "+space(1) +createLine(nLine)
   
    htmlAns[i] = exam[i]
    htmlAns[i] += '<div style="color: red; line-height: 2.35rem; margin-top: 10px;">'
    htmlAns[i] += `$ ${space(3)} \\underline{\\text{วิธีทำ}} ${space(3)}จะได้\\ P=${(m[i]).toLocaleString()},\\ r=\\frac{${r[i]}}{100}=${r[i]/100} \\\\ $`
    htmlAns[i] += `$ ${space(25)} k=\\frac{12}{${(k[i])}}=${12/k[i]},\\ n=${n[i]} \\\\ $`
    htmlAns[i] += ` \\begin{align*}`
    htmlAns[i] += ` จาก\\ S_n&=P(1+\\frac{r}{k})^{kn} \\\\ `
    htmlAns[i] += ` จาก\\ S_n&=P(1+\\frac{${r[i]/100}}{${k[i]}})^{${k[i]}(${n[i]})} \\\\ `
    htmlAns[i] += ` S_{${k[i]*n[i]}}&=${(m[i]).toLocaleString()}(1+${((r[i]/100)/k[i]).toFixed(2)})^{${k[i]*n[i]}} \\\\ `
    htmlAns[i] += ` S_{${k[i]*n[i]}}&=${(m[i]).toLocaleString()}(${(1+(r[i]/100)/k[i]).toFixed(2)})^{${k[i]*n[i]}} \\\\ `
    htmlAns[i] += ` S_{${k[i]*n[i]}}&=${(m[i]).toLocaleString()}(${((1+(r[i]/100)/k[i])**(k[i]*n[i])).toFixed(2)}) \\\\ `
    sn[i]=(m[i]*(1+(r[i]/100)/k[i])**(k[i]*n[i])).toLocaleString('th',{minimumFractionDigits: 2, maximumFractionDigits: 2}) 
    htmlAns[i] += ` S_{${k[i]*n[i]}}&=${sn[i]} \\\\ `
    htmlAns[i] += `\\end{align*}`
    htmlAns[i] += `$${space(3)} \\underline{\\text{ตอบ}} $`
    htmlAns[i] += `$ ${space(2)}ครบ\\ ${n[i]}\\ ปี\\ จะได้เงินรวม\\ ${sn[i]}\\ บาท$`
    htmlAns[i] += "</div>"
    
    //3
    i++
    exam[i] = `$ ฝากเงิน\\ ${(m[i]).toLocaleString()} \\ บาท\\ ได้ดอกเบี้ย\\ ${r[i]}\\% \\ ต่อปี\\ คิด\\\\ $`
    exam[i] += `$ ${space(3)}ดอกเบี้ยทบต้นทุก\\ ๆ\\ ${k[i]}\\ เดือน\\ จงหาเงินรวมเมื่อ $`
    exam[i] += `$ ${space(3)}ฝากครบ\\ ${n[i]}\\ ปี\\ โดยไม่มีการฝาก-ถอนเพิ่ม$`
    html[i] = exam[i]
    html[i] += "<br>" + space(3)+"<u>วิธีทำ</u> " +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(3)+"<u>ตอบ</u> "+space(1) +createLine(nLine)
   
    htmlAns[i] = exam[i]
    htmlAns[i] += '<div style="color: red; line-height: 2.35rem; margin-top: 10px;">'
    htmlAns[i] += `$ ${space(3)} \\underline{\\text{วิธีทำ}} ${space(3)}จะได้\\ P=${(m[i]).toLocaleString()},\\ r=\\frac{${r[i]}}{100}=${r[i]/100} \\\\ $`
    htmlAns[i] += `$ ${space(25)} k=\\frac{12}{${(k[i])}}=${12/k[i]},\\ n=${n[i]} \\\\ $`
    htmlAns[i] += ` \\begin{align*}`
    htmlAns[i] += ` จาก\\ S_n&=P(1+\\frac{r}{k})^{kn} \\\\ `
    htmlAns[i] += ` จาก\\ S_n&=P(1+\\frac{${r[i]/100}}{${k[i]}})^{${k[i]}(${n[i]})} \\\\ `
    htmlAns[i] += ` S_{${k[i]*n[i]}}&=${(m[i]).toLocaleString()}(1+${((r[i]/100)/k[i]).toFixed(2)})^{${k[i]*n[i]}} \\\\ `
    htmlAns[i] += ` S_{${k[i]*n[i]}}&=${(m[i]).toLocaleString()}(${(1+(r[i]/100)/k[i]).toFixed(2)})^{${k[i]*n[i]}} \\\\ `
    htmlAns[i] += ` S_{${k[i]*n[i]}}&=${(m[i]).toLocaleString()}(${((1+(r[i]/100)/k[i])**(k[i]*n[i])).toFixed(2)}) \\\\ `
    sn[i]=(m[i]*(1+(r[i]/100)/k[i])**(k[i]*n[i])).toLocaleString('th',{minimumFractionDigits: 2, maximumFractionDigits: 2}) 
    htmlAns[i] += ` S_{${k[i]*n[i]}}&=${sn[i]} \\\\ `
    htmlAns[i] += `\\end{align*}`
    htmlAns[i] += `$${space(3)} \\underline{\\text{ตอบ}} $`
    htmlAns[i] += `$ ${space(2)}ครบ\\ ${n[i]}\\ ปี\\ จะได้เงินรวม\\ ${sn[i]}\\ บาท$`
    htmlAns[i] += "</div>"

    //4
    i++
    exam[i] = `$ ฝากเงิน\\ ${(m[i]).toLocaleString()} \\ บาท\\ ได้ดอกเบี้ย\\ ${r[i]}\\% \\ ต่อปี\\ คิด\\\\ $`
    exam[i] += `$ ${space(3)}ดอกเบี้ยทบต้นทุก\\ ๆ\\ ${k[i]}\\ เดือน\\ จงหาเงินรวมเมื่อ $`
    exam[i] += `$ ${space(3)}ฝากครบ\\ ${n[i]}\\ ปี\\ โดยไม่มีการฝาก-ถอนเพิ่ม$`
    html[i] = exam[i]
    html[i] += "<br>" + space(3)+"<u>วิธีทำ</u> " +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(13) +createLine(nLine)
    html[i] += "<br>" + space(3)+"<u>ตอบ</u> "+space(1) +createLine(nLine)
   
    htmlAns[i] = exam[i]
    htmlAns[i] += '<div style="color: red; line-height: 2.35rem; margin-top: 15px;">'
    htmlAns[i] += `$ ${space(3)} \\underline{\\text{วิธีทำ}} ${space(3)}จะได้\\ P=${(m[i]).toLocaleString()},\\ r=\\frac{${r[i]}}{100}=${r[i]/100} \\\\ $`
    htmlAns[i] += `$ ${space(25)} k=\\frac{12}{${(k[i])}}=${12/k[i]},\\ n=${n[i]} \\\\ $`
    htmlAns[i] += ` \\begin{align*}`
    htmlAns[i] += ` จาก\\ S_n&=P(1+\\frac{r}{k})^{kn} \\\\ `
    htmlAns[i] += ` จาก\\ S_n&=P(1+\\frac{${r[i]/100}}{${k[i]}})^{${k[i]}(${n[i]})} \\\\ `
    htmlAns[i] += ` S_{${k[i]*n[i]}}&=${(m[i]).toLocaleString()}(1+${((r[i]/100)/k[i]).toFixed(2)})^{${k[i]*n[i]}} \\\\ `
    htmlAns[i] += ` S_{${k[i]*n[i]}}&=${(m[i]).toLocaleString()}(${(1+(r[i]/100)/k[i]).toFixed(2)})^{${k[i]*n[i]}} \\\\ `
    htmlAns[i] += ` S_{${k[i]*n[i]}}&=${(m[i]).toLocaleString()}(${((1+(r[i]/100)/k[i])**(k[i]*n[i])).toFixed(2)}) \\\\ `
    sn[i]=(m[i]*(1+(r[i]/100)/k[i])**(k[i]*n[i])).toLocaleString('th',{minimumFractionDigits: 2, maximumFractionDigits: 2}) 
    htmlAns[i] += ` S_{${k[i]*n[i]}}&=${sn[i]} \\\\ `
    htmlAns[i] += `\\end{align*}`
    htmlAns[i] += `$${space(3)} \\underline{\\text{ตอบ}} $`
    htmlAns[i] += `$ ${space(2)}ครบ\\ ${n[i]}\\ ปี\\ จะได้เงินรวม\\ ${sn[i]}\\ บาท$`
    htmlAns[i] += "</div>"

    //5
    i++
    

    //6
    i++
    

    //7
    i++
    

    //8
    i++
   

    //9
    i++
    
    pageNo=0
    let no = localStorage.getItem("pageNo");
    no++
    // let n = 1
    localStorage.setItem('pageNo', no);

//ส่วนหัวตาราง
    let headerText1 = `$คณิตศาสตร์การเงิน2 : เงินรวม(ดอกเบี้ยทบต้น)\\ : S_n = P(1+\\frac{r}{{k}})^{kn} $`
    let headerText2 = `ว้นที่ ${createLine(20)} ชื่อ-สกุล${createLine(60)} ชั้น ${createLine(20)} เลขที่ <span style="font-size: 1.5rem;">${space(2)}<b>${(no)}</b></span>`
       // headerText2 += "<br>จงหาผลคูณต่อไปนี้"
    $("#header1").html(headerText1)
    $("#header2").html(headerText2)
    $("#header3").html(headerText1)
    $("#header4").html(headerText2)
    $("#header2").css("margin-bottom", "10px");
    $("#header4").css("margin-bottom", "10px");

//หน้าคำถาม และหน้าเฉลย
for (let i = 1; i <= 12; i++) {
    $("#exam"+i+"").html(""+i+". " + html[i] + "")
    $("#answer"+i+"").html(""+i+". " +htmlAns[i] + "")
}
// MathJax.typesetPromise()

}

//จำนวนข้ออยูใน script.js