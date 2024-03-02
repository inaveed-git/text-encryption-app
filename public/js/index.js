 let icon = document.querySelector(".ri-clipboard-line");
let encryptedText = document.querySelector(".encryptedText")

icon.addEventListener("click" , ()=>{
    navigator.clipboard.writeText(encryptedText.value);
}) 

