

const inputBtn = document.getElementById("push-btn")
const inputValue = document.getElementById("emoji-input")

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")

for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
}


inputBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input");
    if(emojiInput.value){
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
    }
})