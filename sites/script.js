const sections = ["Home","About","Projects","Contact"]

const navList = document.getElementById("navList");
sections.forEach((id) => { 
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "nav-btn";
    btn.textContent = id.charAt(0).toUpperCase() + id.slice(1);
    btn.addEventListener("click", () =>
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"})
    );
    li.appendChild(btn);
    navList.appendChild(li);
});

const observer = new IntersectionObserver(
    (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                document
                    .querySelectorAll(".nav-btn")
                    .forEach((btn) => btn.classList.remove("active"));
                const idx = sections.indexOf(id);
                if (idx >= 0) {
                    const btn = document.querySelectorAll(".nav-btn")[idx];
                    btn.classList.add("active");
                }
            }
        }
    },
    { threshold: 0.55 }
);

sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
});