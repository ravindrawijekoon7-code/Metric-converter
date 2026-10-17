let num= document.getElementById("inputbox")
const button= document.getElementById("conbt")
const len= document.getElementById("len")
const vol= document.getElementById("vol")
const mas= document.getElementById("mas")

button.addEventListener("click",function(){
    for(let i=1; i<4; i++)
        if (i==1){
            let f = (num.value*3.281).toFixed(3)
            let m = (num.value/3.281).toFixed(3)
            len.innerHTML=`<p class="Black">${num.value} meters = ${f}feet | ${num.value} feet = ${m}meters</p>`
            len.style.padding="2px 3px"
        }
        else if(i==2){
            let g = (num.value*0.264).toFixed(3)
            let l = (num.value/0.264).toFixed(3)
            vol.innerHTML=`<p class="Black">${num.value} liters = ${g}gallons | ${num.value} gallons = ${l}liters<p>`
            vol.style.padding="2px 3px"
        }
        else{
            let p = (num.value*2.204).toFixed(3)
            let k = (num.value/2.204).toFixed(3)
            mas.innerHTML=`<p class="Black">${num.value} kilos = ${p}pounds | ${num.value} pounds = ${k}kilos</p>`
            mas.style.padding="2px 3px"
        }
})