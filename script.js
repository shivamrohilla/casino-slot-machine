import './style.css'

let value1 = document.getElementById("value1")
let value2 = document.getElementById("value2")
let value3 = document.getElementById("value3")
let inpspeed = document.getElementById("speed")
let btnspin = document.getElementById('btnspin')
let btnstop = document.getElementById('btnstop')
let resulth1 = document.getElementById("result")
let speedvar =2
inpspeed.value=""
let values = [
    '😇','🤪','😇','🥰','🤪','🤪','😍','😍','😇','😃','😇','🤪','🤪','😇','😍','😍'
]
function generateRandom(){

    return values[Math.floor(Math.random()*16)]

}

// for the first time we generate random values ourself

value1.textContent = generateRandom()
value2.textContent = generateRandom()
value3.textContent = generateRandom()



let emojiInterval=null;
let clrtimeout=null



btnspin.onclick = ()=>{
    // btnstop.onclick()
    btnstop.disabled = false;
    btnspin.disabled=true;
    speed.disabled = true

    // clearInterval(emojiInterval)
    

    emojiInterval= setInterval(()=>{

            value1.textContent = generateRandom()
            value2.textContent = generateRandom()
            value3.textContent = generateRandom()
        
             
    } , (1/speedvar)*1000)
   


  
    
    

    document.documentElement.style.setProperty('--anime' , "slotspin 10 calc(1s/var(--speed))")
    // clearTimeout(clrtimeout)
    
    clrtimeout= setTimeout(()=>{

        btnstop.onclick()
    } , (1/speedvar)*1000*10)

}

btnstop.onclick = ()=>{

    document.documentElement.style.setProperty('--anime' , "")
    clearInterval(emojiInterval)
    emojiInterval=null;
    clearTimeout(clrtimeout)
    btnstop.disabled = true;
    btnspin.disabled=false;
    speed.disabled = false





    if(value1.textContent == value2.textContent && value1.textContent == value3.textContent){

        resulth1.textContent = "YOU WON!!"
        resulth1.style.setProperty("color" , "green")
        return
    }
    resulth1.textContent = "YOU LOSE!!"
    resulth1.style.setProperty("color" , "red")


}

speed.onchange = ()=>{

    document.documentElement.style.setProperty('--speed' , inpspeed.value)
    speedvar = inpspeed.value
}
