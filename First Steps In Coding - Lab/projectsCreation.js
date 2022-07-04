function projectsCreation(input){
    let name = input[0];
    let projectCount = Number(input[1]);
    let needTime = projectCount * 3
    let result =`The architect ${name} will need ${needTime} hours to complete ${projectCount} project/s.`;
    console.log(result);
}
projectsCreation(["Sanya ", "9 "])
