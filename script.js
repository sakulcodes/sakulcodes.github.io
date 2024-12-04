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
    const dt = 0.008; // Adjusted step size to control speed
    const sigma = 10, rho = 28, beta = 8 / 3;

    function drawLorenz() {
        // Lorenz equations update
        let dx = sigma * (y - x) * dt;
        let dy = (x * (rho - z) - y) * dt;
        let dz = (x * y - beta * z) * dt;

        x += dx;
        y += dy;
        z += dz;

        // Scale and translate to fit canvas
        const scale = 12;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const px = centerX + x * scale;
        const py = centerY - z * scale; // Flip vertically for better visualization

        // Draw the point with a bold, vibrant color
        ctx.fillStyle = '#ff4500'; // Bright orange-red color for bold visibility
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, 2 * Math.PI); // Slightly larger point size
        ctx.fill();

        requestAnimationFrame(drawLorenz);
    }

    drawLorenz();
});
