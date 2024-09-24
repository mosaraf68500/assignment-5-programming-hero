  
//   hsitory section btn clicked
  
  document.getElementById('donation-btn').
  addEventListener('click', function(){
  document.getElementById('donation-Section').classList.remove('hidden');
  document.getElementById('history-Section').classList.add('hidden')
  document.getElementById("donation-btn").classList.add('bg-[#166e9a]','text-white');

document.getElementById("history-btn").classList.remove('bg-[#166e9a]','text-white');

  });
  
//   history section btn clicked
  document.getElementById('history-btn').
  addEventListener('click', function(){
  document.getElementById('history-Section').classList.remove('hidden');
  document.getElementById('donation-Section').classList.add('hidden')
//   console.log("history btn clicked");
document.getElementById("history-btn").classList.add('bg-[#166e9a]','text-white');

document.getElementById("donation-btn").classList.remove('bg-[#166e9a]','text-white');

// document.getElementById('')

const tID= document.createElement('p');





  });
  