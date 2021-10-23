function makeSocket() {
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
        var socket = new WebSocket('ws://' + window.location.host);
    } else {
        var socket = new WebSocket('wss://' + window.location.host);
    }
    return socket
}
let socket = makeSocket()
const button = document.querySelector("a")
const session = document.querySelector("h1")
const popsound = document.querySelector("audio")
let count = 1



socket.addEventListener('message', (message) => {
    const score = document.querySelector("#score")
    score.innerHTML = `🌍  전 세계 &nbsp:&nbsp ${message.data}`;
});
socket.addEventListener('close', () => {
    socket = makeSocket()
    alert("서버 에러")
});
button.addEventListener("click", () => {
    socket.send("ddd")
    session.innerText = count++
    popsound.volume = 0.5
    popsound.play()
    localStorage.setItem("click", count)
})
window.onkeyup = () => {
    button.click()
};