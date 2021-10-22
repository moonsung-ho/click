const socket = new WebSocket('wss://' + window.location.host);
const button = document.querySelector("a")
const session = document.querySelector("h1")
let count = 1



socket.addEventListener('message', (message) => {
    const score = document.querySelector("#score")
    score.innerHTML = `🌍  전 세계 &nbsp:&nbsp ${message.data}`;
});
socket.addEventListener('close', () => {
    alert("서버 에러")
});
button.addEventListener("click", () => {
    socket.send("ddd")
    session.innerText = count++
})