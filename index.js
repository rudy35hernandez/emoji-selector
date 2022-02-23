

const inputValue = document.getElementById("emoji-input")
const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiInput = document.getElementById("emoji-input")
const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const shiftBtn = document.getElementById("shift-btn")
const popBtn = document.getElementById("pop-btn")

/// Going to create a function for re usibility when we add new emoji

function renderEmojis(arr){
    emojiContainer.innerHTML = ""

    for (let i = 0; i < arr.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = arr[i]
        emojiContainer.append(emoji)
    }
}



pushBtn.addEventListener("click", function(){
    if(emojiInput.value){
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis(myEmojis)
    }
})


unshiftBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input");
    if(emojiInput.value){
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis(myEmojis)
    }
})


shiftBtn.addEventListener("click", function(){
    myEmojis.shift()
    renderEmojis(myEmojis)
})

popBtn.addEventListener("click", function(){
    myEmojis.shift()
    renderEmojis(myEmojis)
})