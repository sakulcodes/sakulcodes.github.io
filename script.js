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

    let x = 0.01, y = 0, z = 0; // Initial conditions
    const dt = 0.01;
    const sigma = 10, rho = 28, beta = 8 / 3;

    function drawLorenz() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Slight opacity for trailing effect
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

        ctx.fillStyle = '#ff7e5f'; // Color of the attractor
        ctx.beginPath();
        ctx.arc(px, py, 1, 0, 2 * Math.PI);
        ctx.fill();

        requestAnimationFrame(drawLorenz);
    }

    drawLorenz();
});

// Optional: Add smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
