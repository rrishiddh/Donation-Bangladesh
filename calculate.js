// history & donation Button 
const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');


function buttonToggle(id){
    document.getElementById('historySection').classList.add('hidden');
    document.getElementById('donationSection').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
};



donationBtn.addEventListener('click', function(){
    buttonToggle("donationSection");
    if (donationBtn.classList.contains('bg-[#f5f5f5]')) {
        donationBtn.classList.remove('bg-[#f5f5f5]');
        donationBtn.classList.add('bg-[#B4F461]');
    }
    if (historyBtn.classList.contains('bg-[#B4F461]')) {
        historyBtn.classList.remove('bg-[#B4F461]');
        historyBtn.classList.add('bg-[#f5f5f5]');
    }
})
historyBtn.addEventListener('click', function(){
    buttonToggle('historySection');
    if (historyBtn.classList.contains('bg-[#f5f5f5]')) {
        historyBtn.classList.remove('bg-[#f5f5f5]');
        historyBtn.classList.add('bg-[#B4F461]');
    }
    if (donationBtn.classList.contains('bg-[#B4F461]')) {
        donationBtn.classList.remove('bg-[#B4F461]');
        donationBtn.classList.add('bg-[#f5f5f5]');
    }
})

// Donation Calculate 

const inputButton1 = document.getElementById('inputBtn1');
const inputButton2 = document.getElementById('inputBtn2');
const inputButton3 = document.getElementById('inputBtn3');
let totalDonationAmount1 = parseFloat(document.getElementById('totalDonation1').innerText);
let totalDonationAmount2 = parseFloat(document.getElementById('totalDonation2').innerText);
let totalDonationAmount3 = parseFloat(document.getElementById('totalDonation3').innerText);
let myAccountBalance = parseFloat(document.getElementById('myBalance').innerText);



// History section 

const historySection = document.getElementById('historySection');
const transactionHistory = document.getElementById('transactionHistory');

function transitionContainer(money,place) {
    const transaction = document.createElement('div');
    transaction.classList.add('border-2', 'border-gray', 'p-4', 'rounded-lg', 'mb-4');
    transaction.innerHTML = `

        <p class="font-bold">${money} Taka is ${place}</p>
        <p>Transaction Time: ${new Date()}</p>
            
    `;
    transactionHistory.appendChild(transaction);   
};

// inputCalculation

function donationCalculation(id){
    let donationInputValue = parseFloat(document.getElementById(id).value);

    if(isNaN(donationInputValue) === true  || donationInputValue <= 0){
        return alert("Please put a valid number to donate") ;
    }

    if(id === 'donationInput1'){
        totalDonationAmount1 += donationInputValue;
        myAccountBalance = myAccountBalance-donationInputValue;
        document.getElementById('myBalance').innerText = myAccountBalance; 
        document.getElementById('totalDonation1').innerText = totalDonationAmount1 ;
        inputModal1.showModal();
        const donatedTitle = document.getElementById('donateTitle1').innerText;
        transitionContainer(donationInputValue,donatedTitle);  
        document.getElementById('donationInput1').value = "";

    }
    else if(id === 'donationInput2'){
        totalDonationAmount2 += donationInputValue ;
        myAccountBalance = myAccountBalance-donationInputValue;
        document.getElementById('myBalance').innerText = myAccountBalance;  
        document.getElementById('totalDonation2').innerText = totalDonationAmount2 ;
        inputModal2.showModal();
        const donatedTitle = document.getElementById('donateTitle2').innerText;
        transitionContainer(donationInputValue,donatedTitle);
        document.getElementById('donationInput2').value = "";
    }
    else{
        totalDonationAmount3 += donationInputValue ;
        myAccountBalance = myAccountBalance-donationInputValue;
        document.getElementById('myBalance').innerText = myAccountBalance;  
        document.getElementById('totalDonation3').innerText = totalDonationAmount3 ;
        inputModal3.showModal();
        const donatedTitle = document.getElementById('donateTitle3').innerText;
        transitionContainer(donationInputValue,donatedTitle);
        document.getElementById('donationInput3').value = "";
    }   
}

// function call 

inputButton1.addEventListener('click',function(){
    donationCalculation('donationInput1');
    

})
inputButton2.addEventListener('click',function(){
    donationCalculation('donationInput2');
})
inputButton3.addEventListener('click',function(){
    donationCalculation('donationInput3');
})
