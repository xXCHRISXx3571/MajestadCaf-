const elementos = document.querySelectorAll(".reveal");

const observar = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.15
    }
);

elementos.forEach((el) => observar.observe(el));
