


$("#handleCalculate").click(handleClick);

function handleClick(){

    let loanAmount = parseFloat($("#principle").val());
    let interestRate = parseFloat($("#interestRate").val());
    let tenure = parseFloat($("#tenureYear").val());
    
    
    if(!loanAmount || !interestRate|| !tenure){
        alert("Please fill the requiired fields");
        return;
    }

    let monthlyRate = (interestRate / 12 / 100);
    let tenureMonths = tenure * 12 ;

    let numerator = (loanAmount * monthlyRate * Math.pow((1 + monthlyRate) , tenureMonths));
    let denominator = (Math.pow((1 + monthlyRate) , tenureMonths) - 1 );
    
    let emiAmount = Math.round( numerator / denominator);
    $("h2").text("Standard EMI Amount: "  + emiAmount);

    let totalPayableAmount = emiAmount * tenureMonths ;

    // current date calcuation
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // target date calculation and conversion into string
    let dateString = $("#closureDate").val();
    let closureDateObj = new Date(dateString);

    const targetMonth = closureDateObj.getMonth();
    const targetYear = closureDateObj.getFullYear();

    let numberOfMonths = (targetYear - currentYear) * 12 + (targetMonth - currentMonth);
    $("#targetMonths").text("Months to Target Payment : " + numberOfMonths);

    let totalMonthlyPayable = Math.round((emiAmount * tenureMonths) / numberOfMonths) ;

    let monthlyExtraPayable = Math.round((totalMonthlyPayable - emiAmount)) ;
    $("#monthlyExtraPayable").text("Monthly Extra Payable : " + monthlyExtraPayable);
    $("#totalMonthlyPayable").text("Total Monthly Payable : " + totalMonthlyPayable);




}





































































// // alert("EMI Caculator");

// $(document).ready(function(){
//     $("#calculate").click(handleCalculate);
// })

// function handleCalculate(){

//     const p = parseFloat($("#principle").val());
//     const r = parseFloat($("#roi").val());
//     const t = parseFloat($("#tenure").val());
    
//     if(!p || !r ||!t){
//         alert("Please fill the required fiels");
//         return;
//     }

//     let monthlyRate = r / 1200 ;
//     let months = t * 12 ;

//     let numerator = p * monthlyRate * Math.pow(1 + monthlyRate , months);
//     let denominator = Math.pow(1 + monthlyRate , months) - 1 ;

    
//     let emiAmount = Math.round(numerator / denominator);
//     $("h2").html("Your monthly EMI is : " + emiAmount);

// }

