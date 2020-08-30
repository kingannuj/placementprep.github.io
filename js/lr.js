let cnt=0;
window.onload = function()
{
    show(cnt);
}

        let question1 =[
    {
    id: 1,
    questions : "Look at this series: 36, 34, 30, 28, 24, ... What number should come next?",
    options: [
        "20",
        "22",
        "21",
        "18"
    ] ,
    Answer : "22"
},
{
questions : "Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?",
    options: [
        "14",
        "56",
        "22",
        "18"
    ] ,
    Answer : "14"
},

{
    questions : "FAG, GAF, HAI, IAH, __",
        options: [
            "JAK",
            "HGR",
            "MNB",
            "KLO"
        ] ,
        Answer : "JAK"
    },

{
    questions : " DEF, DEF2, DE2F2, ___, D2E2F3",
        options: [
            "D2E2F2",
            "D2EF",
            "D1E4F1",
            "DE2F6"
        ] ,
        Answer : "D2E2F2"
    },

{
    questions : " Pointing to a girl in the photograph, Ajay said, Her mother's brother is the only son of my mother's father.How is the girl's mother related to Ajay ?",
        options: [
            "Aunt",
            "Sister",
            "Mother",
            "None of these"
        ] ,
        Answer : "Aunt"
    },

{
    questions : "Which of the following would mean 'G is the son of H'?",
        options: [
            "H - G + I",
            "H + G + I",
            "H +G x I",
            "H × G + I"
        ] ,
        Answer : "H × G + I"
    },

{
    questions : "Raju walks 80 ms towards south. Then, turns to his right & starts walking straight till he completes another 80 ms. Then, again turning to his left he walks for 60 metres. He then turns to his left & walks for 80 metres. How far is he from his initial position?",
        options: [
            "140 m",
            "80 m",
            "90 m",
            "190 m"
        ] ,
        Answer : "140 m"
    },

{
    questions : "In the evening, Ashmita started walking positioning his back towards the sun. After sometime, she turned left, then turned right and then towards the left again. In which direction is she going now?",
        options: [
            "North",
            "South",
            "East",
            "None of these"
        ] ,
        Answer : "North"
    },

{
    questions : "Ajay drives 3 kilometres North. Then he turns right and drives 4 kilo metres. Now he turns right and drives 5 kilometres. Now turning left, he drives 2 kilometres. Again, he turns left and moves 2 kilometres. Finally turning left he again walks 2 kilometres. In which direction & how far is he from his starting position?",
        options: [
            " 4 kilometres East",
            "1.5 kilometres West",
            "4.5 metres West",
            "None of these"
        ] ,
        Answer : "4 kilometres East"
    },

{
    questions : "Eleven friends M, N, O, P, Q, R, S, T, U, V and W are sitting in the first row of the stadium watching a cricket match.T is to the immediate left of P and third to the right of U.V is the immediate neighbour of M and N and third to the left of S.M is the second to the right of Q, who is at one of the ends.R is sitting next to the right of P and P is second to the right of O.<br>Who is sitting in the center of the row?",
        options: [
            "N",
            "S",
            "O",
            "U"
        ] ,
        Answer : "U"
    },

{
    questions : "Eleven friends M, N, O, P, Q, R, S, T, U, V and W are sitting in the first row of the stadium watching a cricket match.T is to the immediate left of P and third to the right of U.V is the immediate neighbour of M and N and third to the left of S.M is the second to the right of Q, who is at one of the ends.R is sitting next to the right of P and P is second to the right of O.<br> Which of the following people are sitting to the right of S?",
        options: [
            "OTPR",
            "POTR",
            "TPRO",
            "NONE OF THESE "
        ] ,
        Answer : "OTPR"
    },


]
let point =0;
const s = 10;
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
