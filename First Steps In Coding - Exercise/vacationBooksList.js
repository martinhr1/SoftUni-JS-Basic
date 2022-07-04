function vacationBooksList(input){
    let pages = Number(input[0]);
    let pagesFor1hour = Number(input[1]);
    let days = Number(input[2]);
    let timeForRead = pages / pagesFor1hour;
    let requiredTimesForRead = timeForRead / days;
    console.log(requiredTimesForRead);
}
vacationBooksList(["432 ", "15 ", "4 "])