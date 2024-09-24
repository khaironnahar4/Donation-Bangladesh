// select section using buttons functionality
// for donation section selection
document.getElementById("donation").addEventListener("click", function(e){
    document.getElementById("donation-section").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");

    e.target.classList.add("bg-green-400");
    document.getElementById("history").classList.remove("bg-green-400");
        
})
// for history section selection
document.getElementById("history").addEventListener("click", function(e){
    document.getElementById("donation-section").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");

    e.target.classList.add("bg-green-400");
    document.getElementById("donation").classList.remove("bg-green-400");
})

// noakhali donation
donation("noakhali-donation-button", "noakhali-donation-input", "noakhali-donation-balance", "Flood Relief in Noakhali");

// feni donation
donation("feni-donation-button", "feni-donation-input", "feni-donation-balance", "Flood Relief in Feni");

// quata donation
donation("quata-donation-button", "quata-donation-input", "quata-donation-balance", "Injured in the Quata Movement");

// close confirmation modal
document.getElementById("close-confirmation-modal")
.addEventListener("click", function(){
    document.getElementById("confirmation-modal")
    .classList.add("hidden");
})
