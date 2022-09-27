function salary(input) {
    let tabsOpen = Number(input[0]);
    let salary = Number(input[1]);
    let n = 0;

    for (let i = 2; i <= tabsOpen; i++) {
        let tabName = input[i]
        if (tabName === "Facebook") {
            salary -= 150;
        } else if (tabName === "Instagram") {
            salary -= 100;
        } else if (tabName === "Reddit") {
            salary -= 50;
        }
    }
    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }

}
salary([
    "10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"
])
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])
