'use strict';
console.log("CNN");

    var title=document.getElementsByClassName("pg-headline")[0];
    var firstpar=document.getElementsByClassName("el__leafmedia el__leafmedia--sourced-paragraph")[0];
    console.log(firstpar);
    var input =title.innerHTML + " " +firstpar.innerHTML;
    var footer = document.getElementsByClassName("zn-body__paragraph zn-body__footer")[0];
    var output="<p>asdasdsads</p><p>agadhgagadgadg</p>"
    var content = document.getElementsByClassName("zn-body-text")[0];
    console.log(firstpar.innerHTML);
    console.log(footer);
    content.innerHTML=firstpar.innerHTML + output + '<p class="zn-body__paragraph zn-body__footer"> This article was generated by a ROBOT</p>';
