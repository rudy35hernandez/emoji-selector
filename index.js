

const inputBtn = document.getElementById("push-btn")
const inputValue = document.getElementById("emoji-input")

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")


/// Going to create a function for re usibility when we add new emoji

function renderEmojis(arr){
    for (let i = 0; i < arr.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = arr[i]
        emojiContainer.append(emoji)
    }
}



inputBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input");
    if(emojiInput.value){
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        emojiContainer.innerHTML = ""
        renderEmojis(myEmojis)
    }
})