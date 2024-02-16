window.addEventListener("keydown",function(e){
 let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
 let key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
 if(!audio)return
//  if(audio===null)return
 key.classList.add("playing")
 audio.currentTime=0//if we click on button again and again it wil not wait for first one to end and then play
 audio.play()
 //we can add a setTimeout to remove class after 0.07s (our transition time) but in future if we change transition value then we have to update our settimeout here as well to avoid this conflict we have an event listener called transitionend which fires whenever transition on particular element ends

})
function removePlaying(e){
    //we got alot of transiiton ends like box-shadow border-radius but we only want transform
    // if(e.propertyName==="transform"){
    //     console.log(e.propertyName)
    //     console.log(this)
    // }
e.srcElement.classList.remove("playing")
    

}
let keys=document.querySelectorAll(".keys")
keys.forEach(key=>{
    key.addEventListener("transitionend",removePlaying)

})