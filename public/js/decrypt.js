let icon = document.querySelector(".ri-clipboard-line");
let originalText = document.querySelector(".originalText")

icon.addEventListener("click" , ()=>{
    navigator.clipboard.writeText(originalText.value);
}) 

