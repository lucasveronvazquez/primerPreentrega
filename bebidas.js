class bebida {
    constructor(nombre, tipo, precio, alcohol, stock){
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
        this.alcohol = alcohol;
        this.stock = stock;
    }
}

const bebidas = []

bebidas.push(new bebida("PEPSI", "GASEOSA", "$299", false, true))
bebidas.push(new bebida("COCA-COLA", "GASEOSA", "$320", false, true ))
bebidas.push(new bebida("FANTA", "GASEOSA", "$250", false, false))
bebidas.push(new bebida("PATAGONIA", "CERVEZA","$499", true, true))
bebidas.push(new bebida("ANDES", "CERVEZA", "$370", true, false))
bebidas.push(new bebida("QUILMES", "CERVEZA", "$350", true, true))
bebidas.push(new bebida("ELEMENTO", "VINO", "$400" , true, true))
bebidas.push(new bebida("RUTINI", "VINO", "$799", true, false))
bebidas.push(new bebida("JACK DANIELS", "WHISKY", "$1200", true, true))
bebidas.push(new bebida("HAVANA", "RON", "$899", true, true ))


console.table(bebidas)

function buscarBebidas(bebidas,nombre){
  
    const bebidaEncontrada = bebidas.find((beb)=>beb.nombre == nombre);
    return bebidaEncontrada; 
}

for (let i=1;i<=5;i++){
    let bebidaBuscada=prompt("Ingresa el nombre de la bebida").toUpperCase();
    const encontrada=buscarBebidas(bebidas, bebidaBuscada);
    if(encontrada != undefined){
        console.log(encontrada);
    }else{
        console.log("Bebida no disponible");
    }
    
}

function buscarTipo(bebidas, tipo){

    const tipoEncontrado = bebidas.filter((el)=>el.tipo.includes(tipo));
    return tipoEncontrado;
}
 
for (let i=1;i<=5;i++){
    let tipoBuscado=prompt("Ingresa el tipo de bebida que buscas").toUpperCase();
    const encontrado = buscarTipo(bebidas, tipoBuscado);
    if(encontrado !=''){
        console.table(encontrado);
    }else{
        console.table("tipo no disponible")
    }
}