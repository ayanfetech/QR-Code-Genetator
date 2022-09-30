//variable declaration

const wrapper = document.querySelector('.wrapper'),
      qrInput = wrapper.querySelector('.form input'),
      generateBtn = wrapper.querySelector('.form button'),
      qrImg = wrapper.querySelector('.qr-code img');

//generating QR Code function
generateBtn.addEventListener('click', ()=>{
   let qrValue = qrInput.value;
   
   generateBtn.innerText = "Generating QR Code...";
   if(!qrValue) return;//if input is empty return from here
//getting QR Code from qrserver
   qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
   qrImg.addEventListener('load', ()=>{
     wrapper.classList.add('active');
     generateBtn.innerText = "Generate QR Code";
   });
});

qrInput.addEventListener('keyup', ()=>{
   if(!qrInput.value){
      wrapper.classList.remove('active')
   }
});
