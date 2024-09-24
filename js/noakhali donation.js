
// noakhali section start
 document.getElementById('noakhali-donate-btn')
.addEventListener('click', function(event){

    event.preventDefault();
    const donateAmout=donateNow('noakhali-donation-field');
    const CurrentDonationAmout=currentDonationAmout('noakhali-current-donation-amout');
    const currentBalance=getcurrentBalance('current-balance');
    // donateAmout=donateNow()


    if(typeof donateAmout==='number'  && donateAmout>0 && currentBalance>=donateAmout){
        const newDonationAmout=donateAmout+CurrentDonationAmout;
        document.getElementById('noakhali-current-donation-amout').innerText=newDonationAmout+ " " +"BDT";
        const newCurrentBalance=currentBalance-donateAmout;
        document.getElementById('current-balance').innerText=newCurrentBalance+ " " +"BDT";
        my_modal_1.showModal();
        document.getElementById('noakhali-donation-field').value='';


        
    }
    else{
        alert('Please enter a valid donation amount');
        
    }
});

// noakhali section end





// feni section start
document.getElementById('feni-donate-btn')
.addEventListener('click', function(event){

    event.preventDefault();

    console.log("click feni donation btn");
    const feniDonateAmout=donateNow('feni-donation-field');
    const feniCurrentDonationAmout=currentDonationAmout('feni-current-donation-amout');
    const currentBalance=getcurrentBalance('current-balance');
    


    if(typeof feniDonateAmout==='number'  && feniDonateAmout>0 && currentBalance>=feniDonateAmout){
        const feniNewDonationAmout=feniDonateAmout+feniCurrentDonationAmout;
        document.getElementById('feni-current-donation-amout').innerText=feniNewDonationAmout+ " " +"BDT";
        const newCurrentBalance=currentBalance-feniDonateAmout;
        document.getElementById('current-balance').innerText=newCurrentBalance+ " " +"BDT";
        my_modal_1.showModal();
        document.getElementById('feni-donation-field').value='';


        
    }
    else{
        alert('Please enter a valid donation amount');
    }
});

// feni section end


// Aid for Injured in the Quota Movement



document.getElementById('quata-donate-btn')
.addEventListener('click', function(evet){
    // console.log("quata")

    evet.preventDefault();
    const quataDonateAmout=donateNow('quata-donation-field');
    const quataCurrentDonationAmout=currentDonationAmout('quata-current-donation-amout');
    const currentBalance=getcurrentBalance('current-balance');
    


    if(typeof quataDonateAmout==='number'  && quataDonateAmout>0 && currentBalance>=quataDonateAmout){
        const quataNewDonationAmout=quataDonateAmout + quataCurrentDonationAmout;
        // console.log(quataNewDonationAmout);
        document.getElementById('quata-current-donation-amout').innerText=quataNewDonationAmout+ " " +"BDT";
        const newCurrentBalance=currentBalance-quataDonateAmout;
        // console.log(newCurrentBalance);
        document.getElementById('current-balance').innerText=newCurrentBalance+ " " +"BDT";
        my_modal_1.showModal();
    // const quataDonateAmout=donateNow('quata-donation-field');
    // const quataDonateAmout=donateNow('quata-donation-field');
    document.getElementById('quata-donation-field').value='';
    console.log("click me")

        
    }
    else{
        alert('Please enter a valid donation amount');
    }
});



// Aid for Injured in the Quota Movement

