function password(input){
    let index = 0;
    let username = input[0];
    let password = input[1];
    let data = password;
    while(password === data){
        console.log(`Welcome ${username}!`);

        password = input[index];
        index++
    }
}
password([
"Nakov",
"1234",
"Pass",
"1324",
"1234"])