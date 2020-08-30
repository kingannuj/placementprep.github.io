let cnt=0;
window.onload = function()
{
    show(cnt);
}

        let question1 =[
    {
    id: 1,
    questions :"Which of the following is the correct order of evaluation for the below expression? <br>z = x + y * z / 4 % 2 - 1",
    options: [
        "* / % + - =",
        "* / + % - =",
        "/ * + - % =",
        "+ - * / % ="
    ] ,
    Answer : "* / % + - ="
},
{
questions : "What will be the output <br> #include<stdio.h>int main()<br>{<br> int j=1;<br> while(j <= 255)<br>{<br>printf('%c %d\n', j, j);<br>j++;<br> return 0;<br>}",
    options: [
        "255 times",
        "240 times",
        "260times",
        "None of these"
    ] ,
    Answer : "255 times"
},
{
    questions : " Which of the following is not logical operator?  ",
        options: [
            "&",
            "&&",
            "|| ",
            "None of these"
        ] ,
        Answer : "&"
    },
    {
        questions : "In which header file is the NULL macro defined?",
            options: [
                "stdio.h and stddef.h",
                "math.h",
                "stdio.h",
                "None of these"
            ] ,
            Answer : "stdio.h and stddef.h"
        },
        {
            questions : "The library function used to find the last occurrence of a character in a string is ",
                options: [
                    "strrchr()",
                    "strstr()",
                    "laststr()",
                    "None of these"
                ] ,
                Answer : "strrchr()"
            },
            {
                questions : " What will happen if in a C program you assign a value to an array element whose subscript exceeds the size of array?",
                    options: [
                        "The program may crash if some important data gets overwritten.",
                        "The element will be set to 0.",
                        "The array size would appropriately grow.",
                        "None of these"
                    ] ,
                    Answer : "The program may crash if some important data gets overwritten."
                },
                {
                    questions : " What are the different types of real data type in C ?",
                        options: [
                            "float, double, long double",
                            "double, long int, float",
                            "float, double",
                            "None of these"
                        ] ,
                        Answer : "float, double, long double"
                    },
                    {
                        questions : " Input/output function prototypes and macros are defined in which header file?",
                            options: [
                                "stdio.h",
                                "conio.h",
                                "math.h",
                                "None of these"
                            ] ,
                            Answer : "stdio.h"
                        },
                          {
                            questions : "What is stderr ?",
                                options: [
                                    "standard error streams",
                                    "standard error",
                                    "standard streams",
                                    "None of these"
                                ] ,
                                Answer : "standard error streams"
                            },
]
let point =0;
let s = 10;
function next()
{

    let ans = document.querySelector("li.option.active").innerHTML;
    console.log(ans);
    if(ans==question1[cnt].Answer)
    {
      point = point+s;
      sessionStorage.setItem("points",point);
    }

if(cnt == question1.length-1)
{

    if(confirm("Press OK to submit your test"));
    {
        location.href="../End.html";
    }
}
 cnt++;
 show(cnt);
}
/*function ans()
{
    let x = document.querySelector('.solution');
    x.innerHTML = `<h3> Answer :- ${question1[cnt].Answer}</h3>`;
}*/

function show(count) {
    let ques = document.querySelector('.qa').innerHTML= `<h2>${question1[count].questions}</h2>
    <ul class="option_group">
    <li class="option">${question1[count].options[0]}</li>
    <li class="option">${question1[count].options[1]}</li>
    <li class="option">${question1[count].options[2]}</li>
    <li class="option">${question1[count].options[3]}</li></ul>`;
    toggle();
}
function toggle(){
    let option = document.querySelectorAll("li.option");
    for(let i=0;i<option.length;i++)
    {
        option[i].onclick = function(){
            for(let j=0;j<option.length;j++)
            {
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

// Show quoted text
