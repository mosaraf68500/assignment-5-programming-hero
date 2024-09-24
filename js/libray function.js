
//amout 0f donations 
function donateNow(id){
const donation=document.getElementById(id).value;

return parseFloat(donation);


}


// current donation amout function


function currentDonationAmout(id){
    const currentDonation=document.getElementById(id).innerText;
    return parseFloat(currentDonation);

}



// current balance

function getcurrentBalance(id){
    const currentBalance=document.getElementById(id).innerText;
    return parseFloat(currentBalance);

}




// donation && history button click

function getdonationHistory(id){
    document.getElementById('donation-Section').classList.add("hidden");
    document.getElementById('history-Section').classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
    
}