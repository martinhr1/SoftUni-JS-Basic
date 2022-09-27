function cinema(input){
    let projection = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    sum = 0;

    if(projection === "Premiere"){
        sum = r * c * 12.00;
    }else if(projection === "Normal"){
        sum = r * c * 7.50;
    }else if(projection === "Discount"){
        sum = r * c * 5.00;
    }
    console.log(`${sum.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"])