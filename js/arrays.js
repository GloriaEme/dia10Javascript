console.log("Proves amb arrays")

function demoArrays(){


    //Creem un array buid (llista)

       var persones= []
        //afegir elements

       persones.push("Anna")
       persones.push("Eva")


    
    
    
    //Creem un array i l'inicialitzem

          var alumnes =[ "Pere","Laura","Dani","L\'Alba","1","5","3",]

          alumnes.push("Felip") //afegir alumne
          alumnes.push("Sandra")
          alumnes.pop() //borrar últim alumne
          alumnes.shift() //borra el primer alumne

          alumnes.splice(2,0,"Maria")  //afegeix posicio 2 i borra 0
          alumnes.sort()  //ordena alfabeticament

          alumnes.reverse() //inverteix ordre
        
           
          console.log(persones,alumnes)




        var lletres =["a","b","c","d"]
        var i=0
        for(i;i <100;i=i+2)
        {
           console.log ("posicio",i)
          }

        for(var posicio=0;posicio<lletres.length;posicio++)
        { console.log (lletres[posicio])
               }

        
        
         function mostraInformació(valor,posicio, arrayaoriginal){
                  console.log(posicio)
                  console.log(valor)
              }

       

        
        
        var excel= [
            ["Nom","Edat","esSoci","tel"],
            ["Jordi",42,true,"425141452214"],
            ["Jordi",42,true,"425141452214"],
            ["Jordi",42,false,"425141452214"],
            ["Jordi",42,true,"425141452214"]


        ]
        function mostraInformacioExel(fila,pos){

         if(pos == 0){
            console.log("Estem a la fila0")
         }else{
            console.log("No estem a la fila 01")
            console.log(fila,pos)
            console.log("Nom soci:", fila[0])
            console.log("Edat:", fila[1])

         }

         console.log(fila)
        
    
      }

      excel.forEach(mostraInformacioExel)
}


