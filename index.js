var buttons = document.getElementsByTagName("button");
var audio = document.getElementById("a");
window.addEventListener('load',function(){
        buttons[0].addEventListener("click",function(){
            audio.load();
        });
        buttons[1].addEventListener("click",function(){
            audio.play();
        });
        buttons[2].addEventListener("click",function(){
                audio.pause();
        });
        audio.addEventListener('loadstart',function(){
            alert("teraz loadstart");
        });
        audio.addEventListener('loadedmetadata',function(){
            alert("loadedmetadata");
        });
        audio.addEventListener('loadeddata',function(){
            alert("teraz pozatek pobierania");
        });
        audio.addEventListener('canplaythrough',function(){
            alert("teraz canplay cale");
        });
    });