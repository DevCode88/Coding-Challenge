// Valid Voter

const Answer = Number(prompt("What is your age ?"));
if(isNaN(Answer)){
    console.log("Worng Value!")
}else if(Answer >= 18){
    console.log("'Your Is Valid'")
}else{
    console.log("'Your Vote Not Valid'")
}

