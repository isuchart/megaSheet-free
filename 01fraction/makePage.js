function makePage(n){
    let $pgExam = $("#page-exam")
    let $pgAnswer = $("#page-answer")
    for(let i=1;i<=n;i+=2){
        let box ='<div class="box">'
        box += '<div class="item">'
        box += '<div class="detail" id="exam'+i+'">'
        box += '<p>question1tttt</p>'
        box += '</div>'
        box += '</div>'
        box += '<div class="item">'
        box += '<div class="detail" id="exam'+(i+1)+'">'
        box += '<p>question2tttt</p>'
        box += '</div>'
        box += '</div>'
        box += '</div>'
        $pgExam.append(box);

        let box2 ='<div class="box">'
        box2 += '<div class="item">'
        box2 += '<div class="detail" id="answer'+i+'">'
        box2 += '<p>question1tttt</p>'
        box2 += '</div>'
        box2 += '</div>'
        box2 += '<div class="item">'
        box2 += '<div class="detail" id="answer'+(i+1)+'">'
        box2 += '<p>question2tttt</p>'
        box2 += '</div>'
        box2 += '</div>'
        box2 += '</div>'
        $pgAnswer.append(box2);
    }
}