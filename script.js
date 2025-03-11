const canvas = document.getElementById("countingCanvas");
const ctx = canvas.getContext("2d");

function drawNumberLine() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "20px Arial";

    for (let i = 0; i <= 20; i++) {
        let x = 30 * i + 20;
        ctx.fillText(i, x, 100);
        ctx.beginPath();
        ctx.arc(x, 110, 5, 0, Math.PI * 2);
        ctx.fill();
    }
}

function startCountingOn() {
    drawNumberLine();
    let count = 5;
    let steps = 3;
    let i = 0;

    let interval = setInterval(() => {
        ctx.fillStyle = "red";
        let x = 30 * (count + i) + 20;
        ctx.beginPath();
        ctx.arc(x, 110, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "black";

        i++;
        if (i > steps) clearInterval(interval);
    }, 1000);
}

function startSkipCounting() {
    drawNumberLine();
    let count = 0;
    
    let interval = setInterval(() => {
        ctx.fillStyle = "blue";
        let x = 30 * count + 20;
        ctx.beginPath();
        ctx.arc(x, 110, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "black";

        count += 2;
        if (count > 20) clearInterval(interval);
    }, 1000);
}

drawNumberLine();