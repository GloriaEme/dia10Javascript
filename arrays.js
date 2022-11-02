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
}

