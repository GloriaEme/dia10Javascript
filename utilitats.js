function mostraInformació(laVariable)
{

    console.log("Contingut",laVariable)
    console.log("Tipus",typeof(laVariable))

    let esArray= Array.isArray(laVariable)
    console.log("És array", esArray)
}