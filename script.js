const btn = document.getElementById("jokeBtn");
const joke = document.getElementById("joke");

btn.addEventListener("click", getjoke);

async function getjoke() {
    const jokeData = await fetch("https://icanhazdadjoke.com/",{
        headers:{
            'Accept': 'application/json'
        }
    });
    const jokeobj = await jokeData.json()
    joke.innerHTML = jokeobj.joke;
}