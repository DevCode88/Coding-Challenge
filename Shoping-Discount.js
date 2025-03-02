// Shop Discount

Answer = Number(prompt("What is your final Answer ?"));
if(isNaN(Answer)){
    console.log("Worng Value!")
}else if(Answer >= 0 && Answer <= 5000){
    let discount = 0;
    let fAnswer = (Math.floor((Answer*discount)/100));
    console.log("Final Answer with 0% Discount : " + (Answer - fAnswer));
}
else if(Answer >= 5001 && Answer <= 8000){
    let discount = 5;
    // // Answer = Answer * discount / 100;
    let dAnswer = (Math.floor((Answer*discount)/100));
    console.log("User Perched Answer 5000 to 8000 : -" + dAnswer)
    console.log("Final Answer with 5% Discount " + (Answer - dAnswer));
}
else if(Answer >= 8001 && Answer <= 10000){
    let discount = 10;
    let dAnswer = (Math.floor((Answer*discount)/100));
    console.log("User Perched Answer 8001 to 10000 : -" + dAnswer)
    console.log("Final Answer with 10% Discount " + (Answer - dAnswer))
}
else if(Answer >= 10001 && Answer <= 15000){
    let discount = 15;
    let dAnswer = (Math.floor((Answer*discount)/100));
    console.log("User Perched Answer 8001 to 10000 : -" + dAnswer)
    console.log("Final Answer with 15% Discount " + (Answer - dAnswer))
}
else if(Answer >= 15001 && Answer <= 20000){
    let discount = 20;
    let dAnswer = (Math.floor((Answer*discount)/100));
    console.log("User Perched Answer 8001 to 10000 : -" + dAnswer)
    console.log("Final Answer with 20% Discount " + (Answer - dAnswer))
}
else{
    console.log("'Maximum Discount 20%'")
}