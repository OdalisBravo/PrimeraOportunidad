//console.log("Programa impuestos");


function impuestos(cost){
    if (cost <= 20){

        return ("sin impuesto");
    } 
    else if (cost >= 20 ){
        return (((cost * 0.30) +  cost).toFixed(2));
    } 
    else if (cost > 100 && cost < 500){
        return (((cost * 0.40) + cost).toFixed(2));
    }
    else if (cost >= 500 ){
        return (((cost * 0.50) + cost).toFixed(2));
    }
}
//console.log("el precio total es: " + impuesto(55.5));