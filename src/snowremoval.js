// input cm of snowfall
export function snowremoval(cm){
    // processing
    let equipment = "";
    if (cm <= 1){
        equipment = "broom";
    }else if (cm<=4){
        equipment = "shovel";
    }else if(cm <=10){
        equipment = "electric snow blower";
    }else{
        equipment = "gas snow blower";
    }
    // output
    return(equipment);
}

if (import.meta.main){
    console.log(`for 4 cm of snow the proper equipment is ${snowremoval(4)}`)
}