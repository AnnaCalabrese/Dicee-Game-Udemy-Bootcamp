// Change images when page refreshes

let random1 = Math.floor(Math.random() * 6) + 1;
let random2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").src = "/images/dice" + random1 + ".png"; 
document.querySelector(".img2").src = "/images/dice" + random2 + ".png"; 

// Display winner in h3

let h3 = document.querySelector("h3")

if (random1 > random2) {
    h3.innerHTML = "Player 1 wins"
} else {
    h3.innerHTML = "Player 2 wins"
}