function newExamData() {
    var m = []
    var n = []
    var o = []
    var p = []
    var r = []
    var exam = []
    var html = []
    var htmlAns = []
    var a = []
    var a1 = []
    var a2 = []
    var a3 = []
    var a4 = []
    var a5 = []
    var an = []

    for (let i = 1; i <= 8; i++) {
        m[i] = random(1, 7) 
        n[i] = random(5, 10)
        r[i] = random( 3 , 9)
        o[i] = random( 2 , 4)
        p[i] = random( 5 , 8)
            if(m[i]==0 || m[i]==1 || m[i]==-1){m[i]+=n[i]}
            if(r[i]==0 || r[i]==1 || r[i]==-1){r[i]+=n[i]}
            m[i]==Math.abs(r[i]) ? m[i]+=2 : m[i]+=0
            r[i]==Math.abs(m[i]) ? r[i]+=2 : r[i]+=0
        a[i] = o[i]
        a1[i] = m[i]
        a2[i] = a1[i]*r[i]
        a3[i] = a1[i]*r[i]**2
        a4[i] = a1[i]*r[i]**3
        // a1[i]%r[i] == 0 ? an[i] =  a1[i]/r[i] : an[i] = `\\frac{${a1[i]}}{${r[i]}}`
        if(a1[i]%r[i] == 0){
            an[i] =  a1[i]/r[i]
        }else if(gcd(a1[i],r[i]) != 1){
            an[i] = `\\frac{${a1[i]/gcd(a1[i],r[i])}}{${r[i]/gcd(a1[i],r[i])}}`
        }else {
            an[i] = `\\frac{${a1[i]}}{${r[i]}}`
        }
    }
    
    //1
    let i = 1
    m[i] = random(2, 7) 
    n[i] = random(5, 10)
    r[i] = random( 3 , 9)
    a[i] = o[i]
    a1[i] = m[i]
    a2[i] = a1[i]*r[i]
    a3[i] = a1[i]*r[i]**2
    a4[i] = a1[i]*r[i]**3

    exam[i] = `$ จงหาผลบวก\\ ${(n[i]).toLocaleString()} \\ พจน์แรกของอนุกรมที่ได้จากลำดับ $`
    exam[i] += `$ ${space(3)} เรขาคณิต\\ \\frac{1}{${a1[i]}},\\frac{1}{${a2[i]}},\\frac{1}{${a3[i]}},\\frac{1}{${a4[i]}},... $`
    html[i] = exam[i]
    html[i] += "<br>" + space(3)+"<u>วิธีทำ</u> " +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(3)+"<u>ตอบ</u> "+space(1) +createLine(75)
   
    htmlAns[i] = exam[i]
    htmlAns[i] += '<div style="color: red; line-height: 0.5rem;">'
    htmlAns[i] += `$ ${space(3)} \\underline{\\text{วิธีทำ}} ${space(3)} $`
    htmlAns[i] += `$ จากโจทย์จะได้\\ a_1=\\frac{1}{${a1[i]}},\\ r=\\frac{1}{${r[i]}},\\ n=${n[i]} \\\\ $`
    htmlAns[i] += `\\begin{align*}`
    htmlAns[i] += ` จาก\\ S_n&=\\frac{a_1(1-r^n)}{1-r}\\ ; r\\ne 1 \\\\`
    htmlAns[i] += ` \\therefore\\ S_{${n[i]}}&=\\frac{\\frac{1}{${a1[i]}}[1-(\\frac{1}{${r[i]}})^{${n[i]}}]}{1-\\frac{1}{${r[i]}}}  \\\\`
    htmlAns[i] += ` &=\\frac{1}{${a1[i]}}(\\frac{${r[i]}}{${r[i]-1}})[1-(\\frac{1}{${r[i]}})^{${n[i]}}] \\\\`
    htmlAns[i] += ` &=\\frac{${r[i]/(gcd(r[i],a1[i]*(r[i]-1)))}}{${(a1[i]*(r[i]-1))/(gcd(r[i],a1[i]*(r[i]-1)))}}[1-(\\frac{1}{${r[i]}})^{${n[i]}}]  \\\\`
    htmlAns[i] += `\\end{align*}`
    // htmlAns[i] += ` $ ${space(3)} \\underline{\\text{ตอบ}} `
    // htmlAns[i] += ` ${space(2)}S_{${n[i]}}=\\frac{${r[i]/(gcd(r[i],a1[i]*(r[i]-1)))}}{${(a1[i]*(r[i]-1))/(gcd(r[i],a1[i]*(r[i]-1)))}}[1-(\\frac{1}{${r[i]}})^{${n[i]}}] $`
    htmlAns[i] += "</div>"
    
    //2
    i++
    m[i] = random(-7, -2) 
    n[i] = random(5, 10)
    r[i] = random( 3 , 9)
    a[i] = o[i]
    a1[i] = m[i]
    a2[i] = a1[i]*r[i]
    a3[i] = a1[i]*r[i]**2
    a4[i] = a1[i]*r[i]**3

    exam[i] = `$ จงหาผลบวก\\ ${(n[i]).toLocaleString()} \\ พจน์แรกของอนุกรมที่ได้จากลำดับ $`
    exam[i] += `$ ${space(3)} เรขาคณิต\\ -\\frac{1}{${-a1[i]}},-\\frac{1}{${-a2[i]}},-\\frac{1}{${-a3[i]}},-\\frac{1}{${-a4[i]}},... $`
    html[i] = exam[i]
    html[i] += "<br>" + space(3)+"<u>วิธีทำ</u> " +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(3)+"<u>ตอบ</u> "+space(1) +createLine(75)
   
    htmlAns[i] = exam[i]
    htmlAns[i] += '<div style="color: red; line-height: 0.5rem;">'
    htmlAns[i] += `$ ${space(3)} \\underline{\\text{วิธีทำ}} ${space(3)} $`
    htmlAns[i] += `$ จากโจทย์จะได้\\ a_1=-\\frac{1}{${-a1[i]}},\\ r=\\frac{1}{${r[i]}},\\ n=${n[i]} \\\\ $`
    htmlAns[i] += `\\begin{align*}`
    htmlAns[i] += ` จาก\\ S_n&=\\frac{a_1(1-r^n)}{1-r}\\ ; r\\ne 1 \\\\`
    htmlAns[i] += ` \\therefore\\ S_{${n[i]}}&=\\frac{-\\frac{1}{${-a1[i]}}[1-(\\frac{1}{${r[i]}})^{${n[i]}}]}{1-\\frac{1}{${r[i]}}}  \\\\`
    htmlAns[i] += ` &=-\\frac{1}{${-a1[i]}}(\\frac{${r[i]}}{${r[i]-1}})[1-(\\frac{1}{${r[i]}})^{${n[i]}}] \\\\`
    htmlAns[i] += ` &=-\\frac{${r[i]/(gcd(r[i],a1[i]*(r[i]-1)))}}{${-(a1[i]*(r[i]-1))/(gcd(r[i],a1[i]*(r[i]-1)))}}[1-(\\frac{1}{${r[i]}})^{${n[i]}}]  \\\\`
    htmlAns[i] += `\\end{align*}`
    // htmlAns[i] += ` $ ${space(3)} \\underline{\\text{ตอบ}} `
    // htmlAns[i] += ` ${space(2)}S_{${n[i]}}=-\\frac{${r[i]/(gcd(r[i],a1[i]*(r[i]-1)))}}{${-(a1[i]*(r[i]-1))/(gcd(r[i],a1[i]*(r[i]-1)))}}[1-(\\frac{1}{${r[i]}})^{${n[i]}}] $`
    htmlAns[i] += "</div>"

    //3
    i++
    m[i] = random(2, 7) 
    n[i] = random(5, 10)
    r[i] = random( -9 , -3)
    a[i] = o[i]
    a1[i] = m[i]
    a2[i] = a1[i]*r[i]
    a3[i] = a1[i]*r[i]**2
    a4[i] = a1[i]*r[i]**3

    exam[i] = `$ จงหาผลบวก\\ ${(n[i]).toLocaleString()} \\ พจน์แรกของอนุกรมที่ได้จากลำดับ $`
    exam[i] += `$ ${space(3)} เรขาคณิต\\ \\frac{1}{${a1[i]}},-\\frac{1}{${-a2[i]}},\\frac{1}{${a3[i]}},-\\frac{1}{${-a4[i]}},... $`
    html[i] = exam[i]
    html[i] += "<br>" + space(3)+"<u>วิธีทำ</u> " +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(3)+"<u>ตอบ</u> "+space(1) +createLine(75)
   
    htmlAns[i] = exam[i]
    htmlAns[i] += '<div style="color: red; line-height: 0.5rem;">'
    htmlAns[i] += `$ ${space(3)} \\underline{\\text{วิธีทำ}} ${space(3)} $`
    htmlAns[i] += `$ จากโจทย์จะได้\\ a_1=\\frac{1}{${a1[i]}},\\ r=-\\frac{1}{${-r[i]}},\\ n=${n[i]} \\\\ $`
    htmlAns[i] += `\\begin{align*}`
    htmlAns[i] += ` จาก\\ S_n&=\\frac{a_1(1-r^n)}{1-r}\\ ; r\\ne 1 \\\\`
    htmlAns[i] += ` \\therefore\\ S_{${n[i]}}&=\\frac{\\frac{1}{${a1[i]}}[1-(-\\frac{1}{${-r[i]}})^{${n[i]}}]}{1+\\frac{1}{${-r[i]}}}  \\\\`
    htmlAns[i] += ` &=\\frac{1}{${a1[i]}}(\\frac{${-r[i]}}{${-(r[i]-1)}})[1-(-\\frac{1}{${-r[i]}})^{${n[i]}}] \\\\`
    htmlAns[i] += ` &=\\frac{${-r[i]/(gcd(r[i],a1[i]*(r[i]-1)))}}{${-(a1[i]*(r[i]-1))/(gcd(r[i],a1[i]*(r[i]-1)))}}[1-(-\\frac{1}{${-r[i]}})^{${n[i]}}]  \\\\`
    htmlAns[i] += `\\end{align*}`
    // htmlAns[i] += ` $ ${space(3)} \\underline{\\text{ตอบ}} `
    // htmlAns[i] += ` ${space(2)}S_{${n[i]}}=\\frac{${-r[i]/(gcd(r[i],a1[i]*(r[i]-1)))}}{${-(a1[i]*(r[i]-1))/(gcd(r[i],a1[i]*(r[i]-1)))}}[1-(-\\frac{1}{${-r[i]}})^{${n[i]}}] $`
    htmlAns[i] += "</div>"

    //4
    i++
    m[i] = random(-7, -2) 
    n[i] = random(5, 10)
    r[i] = random( -9 , -3)
    a[i] = o[i]
    a1[i] = m[i]
    a2[i] = a1[i]*r[i]
    a3[i] = a1[i]*r[i]**2
    a4[i] = a1[i]*r[i]**3

    exam[i] = `$ จงหาผลบวก\\ ${(n[i]).toLocaleString()} \\ พจน์แรกของอนุกรมที่ได้จากลำดับ $`
    exam[i] += `$ ${space(3)} เรขาคณิต\\ -\\frac{1}{${-a1[i]}},\\frac{1}{${a2[i]}},-\\frac{1}{${-a3[i]}},\\frac{1}{${a4[i]}},... $`
    html[i] = exam[i]
    html[i] += "<br>" + space(3)+"<u>วิธีทำ</u> " +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(3)+"<u>ตอบ</u> "+space(1) +createLine(75)
   
    htmlAns[i] = exam[i]
    htmlAns[i] += '<div style="color: red; line-height: 0.5rem;">'
    htmlAns[i] += `$ ${space(3)} \\underline{\\text{วิธีทำ}} ${space(3)} $`
    htmlAns[i] += `$ จากโจทย์จะได้\\ a_1=-\\frac{1}{${-a1[i]}},\\ r=-\\frac{1}{${-r[i]}},\\ n=${n[i]} \\\\ $`
    htmlAns[i] += `\\begin{align*}`
    htmlAns[i] += ` จาก\\ S_n&=\\frac{a_1(1-r^n)}{1-r}\\ ; r\\ne 1 \\\\`
    htmlAns[i] += ` \\therefore\\ S_{${n[i]}}&=\\frac{-\\frac{1}{${-a1[i]}}[1-(-\\frac{1}{${-r[i]}})^{${n[i]}}]}{1+\\frac{1}{${-r[i]}}}  \\\\`
    htmlAns[i] += ` &=-\\frac{1}{${-a1[i]}}(\\frac{${-r[i]}}{${-(r[i]-1)}})[1-(-\\frac{1}{${-r[i]}})^{${n[i]}}] \\\\`
    htmlAns[i] += ` &=-\\frac{${-r[i]/(gcd(r[i],a1[i]*(r[i]-1)))}}{${(a1[i]*(r[i]-1))/(gcd(r[i],a1[i]*(r[i]-1)))}}[1-(-\\frac{1}{${-r[i]}})^{${n[i]}}]  \\\\`
    htmlAns[i] += `\\end{align*}`
    // htmlAns[i] += ` $ ${space(3)} \\underline{\\text{ตอบ}} `
    // htmlAns[i] += ` ${space(2)}S_{${n[i]}}=-\\frac{${-r[i]/(gcd(r[i],a1[i]*(r[i]-1)))}}{${(a1[i]*(r[i]-1))/(gcd(r[i],a1[i]*(r[i]-1)))}}[1-(-\\frac{1}{${-r[i]}})^{${n[i]}}] $`
    htmlAns[i] += "</div>"

    //5
    i++
    // m[i] = random(2, 7) 
    m[i] = 1
    n[i] = random(5, 9)
    r[i] = random( 2 , 6)
    a[i] = o[i]
    a1[i] = m[i]
    a2[i] = a1[i]*r[i]
    a3[i] = a1[i]*r[i]**2
    a4[i] = a1[i]*r[i]**3
    an[i] =  a1[i]*r[i]**(n[i]-1)

    exam[i] = `$ จงหาผลบวกของอนุกรมที่ได้จากลำดับเรขาคณิต $`
    exam[i] += `$ ${space(3)} ${a1[i]},\\ \\frac{1}{${a2[i]}},\\ \\frac{1}{${a3[i]}},\\ \\frac{1}{${a4[i]}},\\ ...,\\frac{1}{${(an[i]).toLocaleString()}} $`
    html[i] = exam[i]
    html[i] += "<br>" + space(3)+"<u>วิธีทำ</u> " +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(3)+"<u>ตอบ</u> "+space(1) +createLine(75)
   
    htmlAns[i] = exam[i]
    htmlAns[i] += '<div style="color: red; line-height: 0.5rem;">'
    htmlAns[i] += `$ ${space(3)} \\underline{\\text{วิธีทำ}} ${space(3)} $`
    htmlAns[i] += `$ จากโจทย์จะได้\\ a_1=\\ ${a1[i]},\\ a_n=\\frac{1}{${(an[i]).toLocaleString()}},\\ r=\\frac{1}{${r[i]}} \\\\ $`
    htmlAns[i] += `\\begin{align*}`
    htmlAns[i] += ` จาก\\ a_n&=a_1r^{n-1} \\\\`
    htmlAns[i] += ` \\frac{1}{${(an[i]).toLocaleString()}}&=(\\frac{1}{${r[i]}})^{n-1} \\\\`
    htmlAns[i] += ` (\\frac{1}{${(r[i])}})^{${n[i]-1}}&=(\\frac{1}{${r[i]}})^{n-1} \\\\`
    htmlAns[i] += ` ${n[i]-1}&=n-1 \\\\`
    htmlAns[i] += ` n&=${n[i]} \\\\`
    htmlAns[i] += ` จาก\\ S_n&=\\frac{a_1(1-r^n)}{1-r}\\ ; r\\ne 1 \\\\`
    htmlAns[i] += ` \\therefore\\ S_{${n[i]}}&=\\frac{${a1[i]}[1-(\\frac{1}{${r[i]}})^{${n[i]}}]}{1-\\frac{1}{${r[i]}}}  \\\\`
    htmlAns[i] += ` &=\\frac{1-\\frac{1}{${(r[i]**n[i]).toLocaleString()}}}{\\frac{${r[i]-1}}{${r[i]}}}  \\\\`
    htmlAns[i] += ` &=\\frac{\\frac{${((r[i]**n[i])-1).toLocaleString()}}{${(r[i]**n[i]).toLocaleString()}}}{\\frac{${r[i]-1}}{${r[i]}}} \\\\`
    htmlAns[i] += ` &=\\frac{${((((r[i]**n[i])-1))/(r[i]-1)).toLocaleString()}}{${((r[i]**n[i])/r[i]).toLocaleString()}} \\\\`
    htmlAns[i] += `\\end{align*}`
    // htmlAns[i] += ` $ ${space(3)} \\underline{\\text{ตอบ}} `
    // htmlAns[i] += ` ${space(2)}S_{${n[i]}}=\\frac{${((((r[i]**n[i])-1))/(r[i]-1)).toLocaleString()}}{${((r[i]**n[i])/r[i]).toLocaleString()}} $`
    htmlAns[i] += "</div>"

    //6
    i++
    m[i] = 1
    n[i] = random(5, 9)
    r[i] = random( 2 , 6)
    a[i] = o[i]
    a1[i] = m[i]
    a2[i] = a1[i]*r[i]
    a3[i] = a1[i]*r[i]**2
    a4[i] = a1[i]*r[i]**3
    an[i] =  a1[i]*r[i]**(n[i]-1)

    exam[i] = `$ จงหาผลบวกของอนุกรมที่ได้จากลำดับเรขาคณิต $`
    exam[i] += `$ ${space(3)} ${a1[i]},\\ \\frac{1}{${a2[i]}},\\ \\frac{1}{${a3[i]}},\\ \\frac{1}{${a4[i]}},\\ ...,\\frac{1}{${(an[i]).toLocaleString()}} $`
    html[i] = exam[i]
    html[i] += "<br>" + space(3)+"<u>วิธีทำ</u> " +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(13) +createLine(75)
    html[i] += "<br>" + space(3)+"<u>ตอบ</u> "+space(1) +createLine(75)
   
    htmlAns[i] = exam[i]
    htmlAns[i] += '<div style="color: red; line-height: 0.5rem;">'
    htmlAns[i] += `$ ${space(3)} \\underline{\\text{วิธีทำ}} ${space(3)} $`
    htmlAns[i] += `$ จากโจทย์จะได้\\ a_1=\\ ${a1[i]},\\ a_n=\\frac{1}{${(an[i]).toLocaleString()}},\\ r=\\frac{1}{${r[i]}} \\\\ $`
    htmlAns[i] += `\\begin{align*}`
    htmlAns[i] += ` จาก\\ a_n&=a_1r^{n-1} \\\\`
    htmlAns[i] += ` \\frac{1}{${(an[i]).toLocaleString()}}&=(\\frac{1}{${r[i]}})^{n-1} \\\\`
    htmlAns[i] += ` (\\frac{1}{${(r[i])}})^{${n[i]-1}}&=(\\frac{1}{${r[i]}})^{n-1} \\\\`
    htmlAns[i] += ` ${n[i]-1}&=n-1 \\\\`
    htmlAns[i] += ` n&=${n[i]} \\\\`
    htmlAns[i] += ` จาก\\ S_n&=\\frac{a_1(1-r^n)}{1-r}\\ ; r\\ne 1 \\\\`
    htmlAns[i] += ` \\therefore\\ S_{${n[i]}}&=\\frac{${a1[i]}[1-(\\frac{1}{${r[i]}})^{${n[i]}}]}{1-\\frac{1}{${r[i]}}}  \\\\`
    htmlAns[i] += ` &=\\frac{1-\\frac{1}{${(r[i]**n[i]).toLocaleString()}}}{\\frac{${r[i]-1}}{${r[i]}}}  \\\\`
    htmlAns[i] += ` &=\\frac{\\frac{${((r[i]**n[i])-1).toLocaleString()}}{${(r[i]**n[i]).toLocaleString()}}}{\\frac{${r[i]-1}}{${r[i]}}} \\\\`
    htmlAns[i] += ` &=\\frac{${(((((r[i]**n[i])-1))/(r[i]-1))/(gcd((((r[i]**n[i])-1))/(r[i]-1),((r[i]**n[i])/r[i])))).toLocaleString()}}{${((r[i]**n[i])/r[i]/(gcd((((r[i]**n[i])-1))/(r[i]-1),((r[i]**n[i])/r[i])))).toLocaleString()}} \\\\`
    
    // htmlAns[i] += ` &= ${(gcd((((r[i]**n[i])-1))/(r[i]-1),((r[i]**n[i])/r[i])))} \\\\`

    htmlAns[i] += `\\end{align*}`
    // htmlAns[i] += ` $ ${space(3)} \\underline{\\text{ตอบ}} `
    // htmlAns[i] += ` ${space(2)}S_{${n[i]}}=\\frac{${((((r[i]**n[i])-1))/(r[i]-1)).toLocaleString()}}{${((r[i]**n[i])/r[i]).toLocaleString()}} $`
    htmlAns[i] += "</div>"

    //7
    i++
    

    //8
    i++
   

    //9
    i++
    

    //10
    i++
    

    //11
    i++
    

    //12
    i++
    

    //13
    i++
    
    
    //14
    i++
    

    //15
    i++
    

    //16
    i++
    

    pageNo=0
    let no = localStorage.getItem("pageNo");
    no++
    // let n = 1
    localStorage.setItem('pageNo', no);

//ส่วนหัวตาราง
    let headerText1 = `$อนุกรมเรขาคณิต2\\ :\\ เศษส่วน$`
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