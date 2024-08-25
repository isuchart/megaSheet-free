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
        m[i] = random(1, 10)*10000 //เงินต้น
        n[i] = random( 3, 20)
        r[i] = random( 2 , 10)
        o[i] = random( 2 , 4)
        p[i] = random( 5 , 8)*1000 //เงินดาวน์
        k[i] = random( 3 , 10)*2 //เดือน(งวด)
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

        exam[i] = `$ ซื้อสินค้า\\ ${(m[i]+p[i]).toLocaleString()} \\ บาท\\ จ่ายดาวน์\\ ${p[i].toLocaleString()}\\ บาท\\\\ $`
        exam[i] += `$ ${space(3)}ที่เหลือผ่อนชำระเท่ากันทุกสิ้นเดือน\\ เป็นเวลา\\\\  $`
        exam[i] += `$ ${space(3)}${k[i]}\\ เดือน\\ ดอกเบี้ย\\ ${r[i]}\\%\\ ต่อปี\\ ทบต้นทุกเดือน$`
        exam[i] += `$ ${space(3)}ต้องผ่อนชำระเดือนละเท่าใด $`
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
        htmlAns[i] += '<div style="color: red; line-height: .7rem; margin-top: 10px; font-size: 1.25rem;">'
        htmlAns[i] += `$ ${space(3)} \\underline{\\text{วิธีทำ}} ${space(3)}จะได้\\ S=${(m[i]+p[i]).toLocaleString()}-${p[i].toLocaleString()}=${m[i].toLocaleString()}\\\\ $`
        htmlAns[i] += `$ ${space(26)} r=\\frac{${r[i]}}{1,200}=${(r[i]/1200).toLocaleString()},\\ n=${k[i]} \\\\ $`
        htmlAns[i] += ` \\begin{align*}`
        htmlAns[i] += ` จาก\\ S &= \\frac{R(1+r)^{-1}(1-(1+r)^{-n})}{1-(1+r)^{-1}} \\\\ `
        htmlAns[i] += `${m[i].toLocaleString()} &=\\frac{R(1-(1+${(r[i]/1200).toLocaleString()})^{-${k[i]}})}{1-(1+${(r[i]/1200).toLocaleString()})^{-1}} \\\\ `
        htmlAns[i] += `${m[i].toLocaleString()} &=\\frac{R(1-(${(1+(r[i]/1200)).toLocaleString()})^{-${k[i]}})}{1-(${(1+r[i]/1200).toLocaleString()})^{-1}} \\\\ `
        htmlAns[i] += `${m[i].toLocaleString()} &=\\frac{R(1-${((1+(r[i]/1200))**(-k[i])).toLocaleString('th', {minimumFractionDigits: 4, maximumFractionDigits: 4})})}{1-${((1+r[i]/1200)**(-1)).toLocaleString('th', {minimumFractionDigits: 4, maximumFractionDigits: 4})}} \\\\ `
        htmlAns[i] += `${m[i].toLocaleString()} &=\\frac{R(${(1-(1+(r[i]/1200))**(-k[i])).toLocaleString('th', {minimumFractionDigits: 4, maximumFractionDigits: 4})})}{${(1-(1+r[i]/1200)**(-1)).toLocaleString('th', {minimumFractionDigits: 4, maximumFractionDigits: 4})}} \\\\ `
        htmlAns[i] += `R &\\approx ${m[i].toLocaleString()}\\bigg( \\frac{${(1-(1+r[i]/1200)**(-1)).toLocaleString('th', {minimumFractionDigits: 4, maximumFractionDigits: 4})}}{${(1-(1+(r[i]/1200))**(-k[i])).toLocaleString('th', {minimumFractionDigits: 4, maximumFractionDigits: 4})}}\\bigg) \\\\ `
        htmlAns[i] += `R &\\approx ${m[i].toLocaleString()}(${((1-(1+r[i]/1200)**(-1))/(1-(1+(r[i]/1200))**(-k[i]))).toLocaleString('th', {minimumFractionDigits: 4, maximumFractionDigits: 4})}) \\\\ `
        htmlAns[i] += `R &\\approx ${(m[i]*((1-(1+r[i]/1200)**(-1))/(1-(1+(r[i]/1200))**(-k[i])))).toLocaleString('th', {minimumFractionDigits: 2, maximumFractionDigits: 2})} \\\\ `
        htmlAns[i] += `\\end{align*}`
        htmlAns[i] += `$${space(3)} \\underline{\\text{ตอบ}} $`
        htmlAns[i] += `$ ${space(2)}ต้องผ่อนชำระเดือนละ\\ ${(m[i]*((1-(1+r[i]/1200)**(-1))/(1-(1+(r[i]/1200))**(-k[i])))).toLocaleString('th', {minimumFractionDigits: 2, maximumFractionDigits: 2})}\\ \\ บาท$`
        htmlAns[i] += "</div>"
    }
    
    pageNo=0
    let no = localStorage.getItem("pageNo");
    no++
    // let n = 1
    localStorage.setItem('pageNo', no);

//ส่วนหัวตาราง
    let headerText1 = `$คณิตศาสตร์การเงิน : เงินผ่อน $`
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