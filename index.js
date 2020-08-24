// Your code goes here

let content = document.createElement('p')

content.innerText = "JavaScript is so cool. It lets me add text to me page programmatically.";

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('p').textContent = "This is really cool!";
})
