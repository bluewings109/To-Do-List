const clock = document.body.querySelector("#clock h2");

function paintCurrentTime(){
  const curDate = new Date();
  const curHour = curDate.getHours().toString().padStart(2,"0");
  const curMin = curDate.getMinutes().toString().padStart(2,"0");
  const curSec = curDate.getSeconds().toString().padStart(2,"0");

  clock.innerText=`${curHour}:${curMin}:${curSec}`
}

paintCurrentTime();
setInterval(paintCurrentTime,1000);
