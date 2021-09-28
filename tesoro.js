// conocer las dimensiones de la imagen  
// crear un punto aleatorio en el Mapa  
// buscar la distancia entre el punto seleccionado y el tesoro 
// calcular la distancia entre los dos puntos 
// enviar mensajes

const mapa = document.getElementById("img")
const containerAviso = document.getElementById("container--aviso")

const axisX = Math.floor(Math.random()*400)
const axisY = Math.floor(Math.random()*303)
let cont=0;
const instruction = document.getElementById("instruction");
const exit = document.getElementById("exit")
const bgc = document.getElementById("bgc")

document.addEventListener("click", e=>{
    if(e.target.matches("#instruction")) bgc.classList.replace("bgc-exit","bgc")

    if(e.target.matches("#exit"))bgc.classList.replace("bgc", "bgc-exit") 
 
})

mapa.addEventListener("click",e=>{
    cont++;
    let x = e.offsetX - axisX
    let y = e.offsetY - axisY
    let distance = Math.sqrt((x * x)+(y * y))

    if(distance<30){
     
        aviso.innerHTML = `<h1 class="bingo">YOU WON IN ${cont} OPPORTUNITIES</h1>`;
       
        setTimeout(() => {
         location.reload()
        }, 5000);
         
     }
     else if(distance<80) aviso.innerHTML ="Hot"
     else if(distance<150)aviso.innerHTML ="Warm"
     else if(distance<200)aviso.innerHTML ="Cold"
     else if(distance<250) aviso.innerHTML ="Really Cold"
     else aviso.innerHTML =("Away from the treasure")
})  

const count = document.getElementById("count")



const updateCount = ()=>{
    fetch("https://api.countapi.xyz/update/treasuremap/github/?amount=1")
        .then(res=>res.json())
        .then(res=>{
            count.innerHTML = res.value
        })
}

updateCount()






