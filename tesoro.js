// conocer las dimensiones de la imagen  
// crear un punto aleatorio en el Mapa  
// buscar la distancia entre el punto seleccionado y el tesoro 
// calcular la distancia entre los dos puntos 
// enviar mensajes

const mapa = document.getElementById("img")
const aviso = document.getElementById("aviso")
const axisX = Math.floor(Math.random()*450)
const axisY = Math.floor(Math.random()*338)
let cont=0;
console.log(axisX,axisY);
const instruction = document.getElementById("instruction");
const exit = document.getElementById("exit")
const bgc = document.getElementById("bgc")
mapa.addEventListener("click",e=>{
    cont++;
    let distance = Math.floor(Math.sqrt((e.clientX-axisX)*(e.clientX-axisX)+(e.clientY-axisY)*(e.clientY-axisY)))
    
    if(distance<100){
       aviso.innerHTML = `<h1 class="bingo">YOU HAVE GOT THE TREASURE IN ${cont} OPPORTUNITIES</h1>`;
      
       setTimeout(() => {
        location.reload()
       }, 5000);
        
    }else if(distance<180){
        aviso.innerHTML =("Hot");
    }else if(distance<250){
        aviso.innerHTML =("Warm");
    }else if(distance>250&&distance<299){
        aviso.innerHTML =("Cold");
    }else if(distance>300){
        aviso.innerHTML =("Away from the treasure");
    }


})

instruction.addEventListener("click",()=>{
    console.log("HOLA")
    

    bgc.classList.replace("bgc-exit","bgc");

})

exit.addEventListener("click",()=>{
    console.log("hola")
     bgc.classList.replace("bgc", "bgc-exit") 
})






