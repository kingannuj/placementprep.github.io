let dt = new Date(new Date().setTime(0));
let time = dt.getTime();
let second = Math.floor((time % (100*60))/1000);
let minute = Math.floor((time%(1000*60*60))/(1000*60));
let timex = 0;
setInterval(function()
{
    if(second<59)
    {
        second++;
    }
    else
    {
        second = 0;
        minute++;
    }
    let formated = second < 10 ? `0${second}`: `${second}` ;
    let formated2 = minute < 10 ? `0${minute}`: `${minute}`;

   document.querySelector('.time').innerHTML = `${formated2} : ${formated}`;

   // formated2.classList.add("time");
   sessionStorage.setItem("minute",minute);
   sessionStorage.setItem("second",second);
},1000)
