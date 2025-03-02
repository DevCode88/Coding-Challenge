// unit & Price
// 0 to 100 = Rs.4.2/unit
// 100 to 200 = Rs.6/unit
// 200 to 300 = Rs.8/unit
// 300 to 400 = Rs.8/unit
// 400 to 500 = Rs.10/unit
// more than 500 = Rs. 13/unit

let FinalAmount = 0;
let GovDiscount = 500;
let electricity_unit = Number(prompt("Enter Electricity Unit > "))

if(electricity_unit > 500){
    FinalAmount = (electricity_unit - 500) * 13;
    electricity_unit = 500;
}if(electricity_unit > 400 && electricity_unit <= 500){
    FinalAmount += (electricity_unit - 400) * 10;
    electricity_unit = 400;
}if(electricity_unit > 300 && electricity_unit <= 400){
    FinalAmount += (electricity_unit - 300) * 8;
    electricity_unit = 300;
}if(electricity_unit > 200 && electricity_unit <= 300){
    FinalAmount += (electricity_unit - 200) * 6;
    electricity_unit = 200;
}if(electricity_unit > 100 && electricity_unit <= 200){
    FinalAmount += (electricity_unit - 100) * 4;
    electricity_unit = 100;
}
FinalAmount += (electricity_unit * 2.4)

// FinalAmount = FinalAmount - GovDiscount;

// if(GovDiscount > 0 && electricity_unit <= GovDiscount){
//     FinalAmount += - GovDiscount;
// }
console.log(FinalAmount);