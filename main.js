const mins = document.getElementById("mins"), 
      secs = document.getElementById("secs"),
      ms = document.getElementById("ms"),
      start = document.getElementById("start"),
      cancel = document.getElementById("stop"),
      reset = document.getElementById("reset"),
      bg = document.getElementById("bg")

let mill = 0
let sec = 0
let min = 0
let myInt;
start.onclick = () => {
  bg.style.animationPlayState = "running"
  myInt = setInterval(() => {
    mill++;
    if(mill >= 80){
      mill = 0
      sec++
      sec < 10 ? secs.innerHTML = "0"+sec : secs.innerHTML = sec;
    }


    ms.innerHTML = ": "+mill;
    if(mill < 10){
      ms.innerHTML = ": 0"+mill
    }


    if(sec > 99){
      sec = 0;
      min++
      mins.innerHTML =  min + " :"
    }
  }, 10);
}

cancel.onclick = () =>{
  clearInterval(myInt)
  bg.style.animationPlayState = "paused"
}

reset.onclick = () => {
  mins.innerHTML = "00 :";
  secs.innerHTML = "00";
  ms.innerHTML   = ": 00";
}
