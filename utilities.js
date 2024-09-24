// function for finding the value of a text input
function findTextInputValue(id){
    return parseFloat(document.getElementById(id).innerText);
}

// function for finding the value of input field
function findInputFieldValue(id){
    return parseFloat(document.getElementById(id).value);
}

// money adding to the donation account function
function addMoney(donationBalanceField, donationBalance, donatedMoney){
    if(!isNaN(donatedMoney) && donatedMoney>0){
        donationBalanceField.innerText = donationBalance + donatedMoney;
    } 
}

// remove money from main account function
function removeMoney(donatedMoney){
    const totalBalance = findTextInputValue("total-balance");
    if(donatedMoney<0 || isNaN(donatedMoney)) {
        alert("Please give a valid amount");
    }else{
        if(totalBalance>donatedMoney) {
            document.getElementById("total-balance").innerText = totalBalance-donatedMoney;
        }
        else{
            alert("Your don't have sufficient balance");
        }
    }        
}

// donation function
function donation(donationButton, donationInput, donationBalance, text){
    document.getElementById(donationButton)
    .addEventListener("click", function(e){
        e.preventDefault();
        const donatedMoney = findInputFieldValue(donationInput);
        const donationBalanceField = document.getElementById(donationBalance);
        const donationTotalBalance = findTextInputValue(donationBalance);
        addMoney(donationBalanceField, donationTotalBalance, donatedMoney);
        removeMoney(donatedMoney);

        // showing modal
        document.getElementById("confirmation-modal").classList.remove("hidden");

        // history created
        history(donatedMoney, text);
    })
}

// history function
function history(donatedMoney, text){
    const history = document.getElementById("history-section");

    const div = document.createElement("div");
    div.classList.add("card", "bg-base-100", "w-full", "shadow-xl", "border", "mt-9");

    div.innerHTML = `
        <div class="card-body">
            <h2 class="card-title">${donatedMoney} Taka is Donated for ${text}, Bangladesh</h2>
            <p>Date : ${new Date()}</p>
        </div>
    `
    history.insertBefore(div, history.childNodes[0]);
    
}
