const apiUrl = "https://api.quotable.io/random"
const qoute = document.getElementById("qoute")
const author = document.getElementById("author")
const newqoutebtn = document.getElementById("getqoute")
async function getQoute(url){
    const response = await fetch(url)
    var data = await response.json()
    qoute.innerHTML = data.content
    author.innerHTML = data.author
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+qoute.innerHTML+" ---- by "+ author.innerHTML, ("Tweet Window", "width=600, height=300"))
}




