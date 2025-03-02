// INR Denomination

FinalAmount = 321;
console.log("Denomination Amount > " + FinalAmount)

if(FinalAmount >= 500){
    console.log("Rs.500 Notes : " + Math.floor(FinalAmount/500));
    FinalAmount = FinalAmount % 500;
    console.log(FinalAmount)
}
if(FinalAmount >= 200){
    console.log("Rs.200 Notes : " + Math.floor(FinalAmount/200));
    FinalAmount = FinalAmount % 200;
    console.log(FinalAmount)
}
if(FinalAmount >= 100){
    console.log("Rs.100 Notes : " + Math.floor(FinalAmount/100));
    FinalAmount = FinalAmount % 100;
    console.log(FinalAmount)
}
if(FinalAmount >= 50){
    console.log("Rs.50 Notes : " + Math.floor(FinalAmount/50));
    FinalAmount = FinalAmount % 50;
    console.log(FinalAmount)
}
if(FinalAmount >= 20){
    console.log("Rs.20 Notes : " + Math.floor(FinalAmount/20));
    FinalAmount = FinalAmount % 20;
    console.log(FinalAmount)
}
if(FinalAmount >= 10){
    console.log("Rs.10 Notes : " + Math.floor(FinalAmount/10));
    FinalAmount = FinalAmount % 10;
    console.log(FinalAmount)
}
if(FinalAmount >= 5){
    console.log("Rs.5 Notes : " + Math.floor(FinalAmount/5));
    FinalAmount = FinalAmount % 5;
    console.log(FinalAmount)
}
if(FinalAmount >= 2){
    console.log("Rs.2 Notes : " + Math.floor(FinalAmount/2));
    FinalAmount = FinalAmount % 2;
    console.log(FinalAmount)
}
if(FinalAmount === 1){
    console.log("Rs.1 Notes : " + Math.floor(FinalAmount/1));
    FinalAmount = FinalAmount % 1;
    console.log(FinalAmount)
}