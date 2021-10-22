const socket = new WebSocket('ws://' + window.location.host);
const button = document.querySelector("a")
const session = document.querySelector("h1")
let count = 1



socket.addEventListener('open', () => {
    console.log('connected');
});
socket.addEventListener('message', (message) => {
    const score = document.querySelector("#score")
    score.innerHTML = `🌍  전 세계 &nbsp:&nbsp ${message.data}`;
});
socket.addEventListener('close', () => {
    console.log('disconnected');
});
button.addEventListener("click", () => {
    socket.send("ddd")
    session.innerText = count++
})