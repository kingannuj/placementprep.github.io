let cnt=0;
window.onload = function()
{
    show(cnt);
}

let question1 =[
    {
    id: 1,
    questions :"A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is",
    options: [
        "40 Kmph",
        "50 Kmph",
        "54 Kmph",
        "55 Kmph"
    ] ,
    Answer : "50 kmph"
},
{
questions : "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
    options: [
        "240 m",
        "122 m",
        "300 m",
        "None of these"
    ] ,
    Answer : "240 m"
},
{
    questions : " The H.C.F. of two numbers is 23 and the other two factors of their L.C.M. are 13 and 14. The larger of the two numbers is:?",
        options: [
            "240 ",
            "322 ",
            "300 ",
            "None of these"
        ] ,
        Answer : "322"
    },
    {
        questions : "The greatest number of four digits which is divisible by 15, 25, 40 and 75 is:?",
            options: [
                "9600",
                "8220",
                "9300",
                "None of these"
            ] ,
            Answer : "9600"
        },
        {
            questions : "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit??",
                options: [
                    "240 %",
                    "122 %",
                    "70 %",
                    "None of these"
                ] ,
                Answer : "70 %"
            },
            {
                questions : " In how many different ways can the letters of the word 'LEADING' be arranged in such a way that the vowels always come together??",
                    options: [
                        "2404",
                        "1280",
                        "5040",
                        "None of these"
                    ] ,
                    Answer : "5040 "
                },
                {
                    questions : " Two pipes A and B can fill a cistern in 37 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:?",
                        options: [
                            "9 min",
                            "12 min",
                            "30 min",
                            "None of these"
                        ] ,
                        Answer : "9 min"
                    },
                    {
                        questions : "Today is Monday. After 61 days, it will be:?",
                            options: [
                                "saturday",
                                "monday",
                                "sunday",
                                "None of these"
                            ] ,
                            Answer : "saturday"
                        },
                          {
                            questions : "The difference between simple and compound interests compounded annually on a certain sum of money for 2 years at 4% per annum is Re. 1. The sum (in Rs.) is:?",
                                options: [
                                    "640",
                                    "622 ",
                                    "625",
                                    "None of these"
                                ] ,
                                Answer : "625"
                            },
                            {
                                questions : "A alone can do a piece of work in 6 days and B alone in 8 days. A and B undertook to do it for Rs. 3200. With the help of C, they completed the work in 3 days. How much is to be paid to C:?",
                                    options: [
                                        "640",
                                        "400 ",
                                        "800",
                                        "None of these"
                                    ] ,
                                    Answer : "400"
                                },
                                {
                                    questions : " X and Y can do a piece of work in 20 days and 12 days respectively. X started the work alone and then after 4 days Y joined him till the completion of the work. How long did the work last?",
                                        options: [
                                            "10 day",
                                            "5 day  ",
                                            "20 day",
                                            "None of these"
                                        ] ,
                                        Answer : "10 day"
                                    },
                                    {
                                        questions : "A, B and C can complete a piece of work in 24, 6 and 12 days respectively. Working together, they will complete the same work in:",
                                            options: [
                                                "1/24 day",
                                                "7/24 day",
                                                "24/7 day",
                                                "None of these"
                                            ] ,
                                            Answer : "24/7 day"
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
  point+=s;
  sessionStorage.setItem("points",point);
}
if(cnt == question1.length-1)
{
    if(confirm("you have done all the questions"));
    {
        location.href="../html/end.html";
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
function show(count){
    let ques = document.querySelector('.qa');
    ques.innerHTML = `<h2>${question1[count].questions}</h2> <ul class="option_group"><li class="option">${question1[count].options[0]}</li><li class="option">${question1[count].options[1]}</li><li class="option">${question1[count].options[2]}</li><li class="option">${question1[count].options[3]}</li></ul>`;
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
