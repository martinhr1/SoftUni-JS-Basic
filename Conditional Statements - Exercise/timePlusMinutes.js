function timePlusMinutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    
    let hoursToMinute = hours * 60;
    let totalMinutes = hoursToMinute + minutes + 15;

    let minToHour = Math.floor(totalMinutes / 60);
    let min = totalMinutes % 60;

    if (minToHour === 24) { minToHour = 0;};
    if(min < 10){
        console.log(`${minToHour}:0${min}`);
    }else{  
        console.log(`${minToHour}:${min}`);
    }
}

timePlusMinutes(["23", "49"])