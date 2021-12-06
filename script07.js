
function calcular(){
 let kg= document.getElementById("txtkg")
 let ms= document.getElementById("txtalt")
 let resultado= document.getElementById("res")
  let peso= Number(kg.value)
  let altura= Number(ms.value)
 let conta = peso/(altura*altura)
 
 if( conta <=18.5 ) {
     resultado.innerHTML='Magreza Excessiva'

 }else if(conta >18.5 && conta <=24.9){
     resultado.innerHTML='Normal '

 }else if(conta >25.0 && conta<=29.9){
     resultado.innerHTML='Sobrepeso'

 }else if( conta >30.0 && conta <=39.9){
     resultado.innerHTML='Obesidade'

 }else{
     resultado.innerHTML='Obesidade Morbida'
 }
}    



    

    
    
        
        
    
