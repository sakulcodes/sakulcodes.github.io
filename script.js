document.addEventListener("DOMContentLoaded", function () {
    // Lorenz Attractor Canvas Setup
    const canvas = document.getElementById("lorenzAttractorCanvas");
    const ctx = canvas.getContext("2d");

    // Make canvas size responsive
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let x = 1, y = 1, z = 1; // Initial conditions for better visibility
    const dt = 0.005; // Reduced step size to slow down the plotting
    const sigma = 10, rho = 28, beta = 8 / 3;

    function drawLorenz() {
        // Clear the canvas with a transparent black for the trailing effect
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'; // Faint white background to create trailing effect
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Lorenz equations update
        let dx = sigma * (y - x) * dt;
        let dy = (x * (rho - z) - y) * dt;
        let dz = (x * y - beta * z) * dt;

        x += dx;
        y += dy;
        z += dz;

        // Scale and translate to fit canvas
        const scale = 10;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const px = centerX + x * scale;
        const py = centerY + z * scale;

        // Draw the point
        ctx.fillStyle = '#000000'; // Black color to contrast with the background
        ctx.beginPath();
        ctx.arc(px, py, 1, 0, 2 * Math.PI);
        ctx.fill();

        setTimeout(() => {
            requestAnimationFrame(drawLorenz);
        }, 20); // Slows down the animation further
    }

    drawLorenz();
});
