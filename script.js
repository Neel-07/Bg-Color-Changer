const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;

const StartBgcolorchange = function(){
    if(!intervalId){
      intervalId = setInterval(changecolor,1000);
    }
    function changecolor (){
        document.body.style.backgroundColor = randomColor();
    }
};

const StopBgcolorchange = function(){
    clearInterval(intervalId);
    intervalId = null;
};


document.querySelector("#start").addEventListener("click",StartBgcolorchange);

document.querySelector("#stop").addEventListener("click",StopBgcolorchange);
