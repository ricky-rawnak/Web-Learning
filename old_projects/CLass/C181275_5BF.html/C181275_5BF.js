function check()
{
var c=0;
var q1=document.quiz.ques1.value;
var q2=document.quiz.ques2.value;
var q3=document.quiz.ques3.value;
var q4=document.quiz.ques4.value;
var q5=document.quiz.ques5.value;
var q6=document.quiz.ques6.value;
var q7=document.quiz.ques7.value;
var q8=document.quiz.ques8.value;
var q9=document.quiz.ques9.value;
var q10=document.quiz.ques10.value;

if (q1=="Canberra") {c++}
if (q2=="Heritage") {c++}
if (q3=="Stroke") {c++}
if (q4=="Older") {c++}
if (q5=="Asia") {c++}
if (q6=="Grass") {c++}
if (q7=="Dhaka") {c++}
if (q8=="Bangla") {c++}
if (q9=="Plants") {c++}
if (q10=="2") {c++}

    document.write(`Right answer : ${c}`+"<br>");
    document.write(`Wrong answer : ${10-c}`);
    
}
