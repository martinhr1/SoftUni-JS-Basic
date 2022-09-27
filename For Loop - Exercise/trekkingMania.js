function trekkingMania(input){
    let climbersCount = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kalimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeople = 0;
    for(let i = 1; i < input.length; i++){
        let people = Number(input[i]);
        totalPeople += people;
        if(people <= 5){
            musala += people;
        }else if(people >= 6 && people <= 12){
            monblan += people;
        }else if(people >= 13 && people <= 25){
            kalimandjaro += people;
        }else if(people >= 26 && people <= 40){
            k2 += people;
        }else{
            everest += people;
        }
    }

    console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kalimandjaro / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);
}
// trekkingMania([
//     "10",
//     "10",
//     "5",
//     "1",
//     "100",
//     "12",
//     "26",
//     "17",
//     "37",
//     "40",
//     "78"
// ])
trekkingMania([
    "5",
    "25",
    "41",
    "31",
    "250",
    "6"
])
