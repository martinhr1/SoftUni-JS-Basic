function operationsBetweenNumbers(input){
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];
    sum = 0;
    result = '';
    if(operator === "+"){
        sum = N1 + N2;
        if (sum % 2 === 0){
            result = 'even';
        }else{
            result = 'odd'
        }
        console.log(`${N1} ${operator} ${N2} = ${sum} - ${result}`);
    }else if(operator === "-"){
        sum = N1 - N2;
        if (sum % 2 === 0){
            result = 'even';
        }else{
            result = 'odd'
        }
        console.log(`${N1} ${operator} ${N2} = ${sum} - ${result}`);
    }else if(operator === "*"){
        sum = N1 * N2;
        if (sum % 2 === 0){
            result = 'even';
        }else{
            result = 'odd'
        }
        console.log(`${N1} ${operator} ${N2} = ${sum} - ${result}`);
    }
    if(operator === "/"){
        if(N2 === 0){
            console.log(`Cannot divide ${N1} by zero`);
        }else{
        sum = N1 / N2;
        console.log(`${N1} ${operator} ${N2} = ${(sum).toFixed(2)}`);}
    }
    if(operator === "%"){
        if(N2 === 0){
            console.log(`Cannot divide ${N1} by zero`);
        }else{
        sum = N1 % N2;
        console.log(`${N1} ${operator} ${N2} = ${sum}`);}
    }
}
// operationsBetweenNumbers(["112", "0", "/"])