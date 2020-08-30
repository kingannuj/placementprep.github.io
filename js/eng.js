let cnt=0;
window.onload = function()
{
    show(cnt);
}


let question1 =[
    {
    id: 1,
    questions :"Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any). (solve as per the direction given above)",
    options: [
       " We discussed about the problem so thoroughly",
        "on the eve of the examination",
        "that I found it very easy to work it out.",
        "No error."

    ] ,
    Answer : "We discussed about the problem so thoroughly"
},
{
questions : "Read each sentence to find out whether there is any grammatical error in it. The error, if any will be in one part of the sentence. The letter of that part is the answer. If there is no error, the answer is 'D'. (Ignore the errors of punctuation, if any). (solve as per the direction given above)",
    options: [
       " If I had known",
       "this yesterday",
       "I will have helped him.",
      " No error."
    ] ,
    Answer :  "I will have helped him."
},
{
    questions : " That which cannot be corrected",
        options: [
            "Unintelligible",
            "Indelible",
            "Illegible",
            "Incorrigible"
        ] ,
        Answer : "Incorrigible"
    },
    {
        questions : "ENORMOUS (opposite)",
            options: [
                "Soft",
                "Average",
                "Tiny",
                "Weak"
            ] ,
            Answer : "Tiny"
        },
        {
            questions : "COMMISSIONED (opposite)",
                options: [
                    "Started",
                    "Closed",
                    "Terminated",
                    "Finished"
                ] ,
                Answer : "Terminated"
            },
            {
                questions : "Vent (similar)",
                    options: [
                        "Opening",
                        "End",
                        "Stodge",
                        "Past Tense of go"
                    ] ,
                    Answer : "Opening"
                },
                {
                    questions : " CANNY  (similar)",
                        options: [
                            "Obstinate",
                            "Handsome",
                            "Clever",
                            "Stout"
                        ] ,
                        Answer : "Clever"
                    },
                    {
                        questions : "To have an axe to grind",
                            options: [
                                "A private end to serve",
                                "To fail to arouse interest",
                                "To work for both sides",
                                "None of these"
                            ] ,
                            Answer :  "A private end to serve"
                        },
                          {
                            questions : "GRAIN:SALT",
                                options: [
                                    "shard:pottery",
                                    "shred:wood",
                                    "blades:grass",
                                    "chip:glass"
                                ] ,
                                Answer : "chip:glass"
                            },
                            {
                                questions : "S1:    A force of exists between everybody in the universe.<br> P :    Normally it is very small but when the one of the bodies is a planet, like earth, the force is considerable. <br>Q :    It has been investigated by many scientists including Galileo and Newton. <br>R :   Everything on or near the surface of the earth is attracted by the mass of earth.<br>S :    This gravitational force depends on the mass of the bodies involved.<br>S6: The greater the mass, the greater is the earth's force of attraction on it. We can call this force of attraction gravity.",
                                    options: [
                                        "QSPR",
                                        "QPSR ",
                                        "PQRS",
                                        "None of these"
                                    ] ,
                                    Answer : "QSPR"
                                },
                                {
                                    questions : " DIVA:OPERA",
                                        options: [
                                            "producer:theatre",
                                            "director:drama",
                                            "conductor:bus",
                                            "thespian:play"
                                        ] ,
                                        Answer : "thespian:play"
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
