
function startProgram(){
    let continueCalc = true;
    window.alert("Welcome to the Simple Summation App!");
    let usersName = window.prompt("Would you mind telling me your name?","User");
    window.alert("Hello " + usersName + "!");

    while(continueCalc){
        let sumNum = window.prompt("Enter two numbers to add together","2+2");
        let summation = addNum(sumNum);
        window.alert(summation);
        let ans = null;
        while(ans !== "yes" || ans !== "no"){
            ans = window.prompt("Would you like to run it again?","yes or no");
            if(ans.lower() === "yes"){
                continueCalc = true;
                break;
            }
            if(ans.lower() === "no"){
                continueCalc = false;
                window.alert("Thank you for using this simple summation calculator!");
                break;
            }
            window.alert("Type in either yes or no so we can confirm");
        }
    }
}
function addNum(sumNumber){
    if(sumNumber !== null){
        let sumArray = sumNumber.split("+");
        let sum = Number(sumArray[0])+Number(sumArray[1]);
        if(sum > 10){
            return "That is a big number!";
        }
        return "That is a small number!";
    }
}