







document.getElementById('donation-btn')
.addEventListener('click', function(){
    document.getElementById("donation-btn").classList.add('bg-[#166e9a]','text-white');
   document.getElementById("history-btn").classList.remove('bg-[#166e9a]','text-white');

   getdonationHistory('donation-Section');
    

});


document.getElementById('history-btn')
.addEventListener('click', function(){
//     document.getElementById("donation-btn").classList.add('bg-[#166e9a]','text-white');
//    document.getElementById("history-btn").classList.remove('bg-[#166e9a]','text-white');
document.getElementById("history-btn").classList.add('bg-[#166e9a]','text-white');

document.getElementById("donation-btn").classList.remove('bg-[#166e9a]','text-white');

getdonationHistory('history-Section');
    

});