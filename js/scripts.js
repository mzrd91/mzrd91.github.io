/* =========================================================
   Ryan Zaroudi — Portfolio scripts
   1. Data (skills, timeline)
   2. Rendering (skills, timeline)
   3. UI behavior (nav, reveal, active link, back-to-top)
   ========================================================= */

/* ---------------------------------------------------------
   1. DATA — edit these to update the site content
   --------------------------------------------------------- */

/* Skill categories. Each skill can include an optional `logo`. */
const skillCategories = [
    {
        title: "Programming",
        icon: '<path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z"/>',
        skills: [
            { name: "Python", logo: "images/skills/Python-logo.svg" },
            { name: "Java", logo: "images/skills/Java-logo.svg" },
            { name: "C / C++", logo: "images/skills/C-logo.svg" },
            { name: "Dart", logo: "images/skills/Dart-logo.png" }
        ]
    },
    {
        title: "Web & App Development",
        icon: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 6h-2.5a15.6 15.6 0 0 0-1.3-3.4A8 8 0 0 1 18.9 8ZM12 4c.8 1 1.5 2.4 1.9 4h-3.8c.4-1.6 1.1-3 1.9-4ZM4.3 14a8 8 0 0 1 0-4h2.9a16.6 16.6 0 0 0 0 4H4.3Zm.8 2h2.5c.3 1.2.8 2.4 1.3 3.4A8 8 0 0 1 5.1 16Zm2.5-8H5.1a8 8 0 0 1 3.8-3.4C8.4 5.6 7.9 6.8 7.6 8ZM12 20c-.8-1-1.5-2.4-1.9-4h3.8c-.4 1.6-1.1 3-1.9 4Zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4Zm.8 5.4c.5-1 1-2.2 1.3-3.4h2.5a8 8 0 0 1-3.8 3.4ZM16.8 14a16.6 16.6 0 0 0 0-4h2.9a8 8 0 0 1 0 4h-2.9Z"/>',
        skills: [
            { name: "HTML", logo: "images/skills/HTML5-logo.svg" },
            { name: "CSS", logo: "images/skills/CSS3-logo.svg" },
            { name: "JavaScript", logo: "images/skills/JavaScript-logo.png" },
            { name: "Flutter", logo: "images/skills/flutter-logoo.png" }
        ]
    },
    {
        title: "Data & Visualization",
        icon: '<path d="M3 3h2v16h16v2H3V3Zm4 10h2v4H7v-4Zm4-4h2v8h-2V9Zm4-3h2v11h-2V6Z"/>',
        skills: [
            { name: "R", logo: "images/skills/R-logo.svg" },
            { name: "Tableau", logo: "images/skills/tabl_logo.png" },
            { name: "Power BI", logo: "images/skills/powerbi.png" }
        ]
    },
    {
        title: "Databases",
        icon: '<path d="M12 2c4.4 0 8 1.3 8 3v14c0 1.7-3.6 3-8 3s-8-1.3-8-3V5c0-1.7 3.6-3 8-3Zm6 5.4C16.6 8.4 14.5 9 12 9s-4.6-.6-6-1.6V12c0 .7 2.4 2 6 2s6-1.3 6-2V7.4ZM12 4C8.4 4 6 5.3 6 6s2.4 2 6 2 6-1.3 6-2-2.4-2-6-2Zm6 11.4C16.6 16.4 14.5 17 12 17s-4.6-.6-6-1.6V19c0 .7 2.4 2 6 2s6-1.3 6-2v-3.6Z"/>',
        skills: [
            { name: "SQL", logo: "images/skills/Sql_logo.png" },
            { name: "MySQL", logo: "images/skills/mysql.svg" }
        ]
    },
    {
        title: "AI & Machine Learning",
        icon: '<path d="M9 2h6v2h2a2 2 0 0 1 2 2v2h2v2h-2v2h2v2h-2v2a2 2 0 0 1-2 2h-2v2H9v-2H7a2 2 0 0 1-2-2v-2H3v-2h2v-2H3v-2h2V8a2 2 0 0 1 2-2h2V2Zm0 6v8h6V8H9Z"/>',
        skills: [
            { name: "TensorFlow", logo: "images/skills/Tensorflow-logo.svg" },
            { name: "Keras", logo: "images/skills/Keras-logo.svg" },
            { name: "PyTorch", logo: "images/skills/PyTorch-logo.svg" }
        ]
    },
    {
        // Text-only chips — customize this list with the tools/platforms you use.
        title: "Tools & Platforms",
        icon: '<path d="M19.4 13a7.8 7.8 0 0 0 0-2l2-1.6-2-3.4-2.4 1a7.6 7.6 0 0 0-1.7-1l-.4-2.5H10.1l-.4 2.5a7.6 7.6 0 0 0-1.7 1l-2.4-1-2 3.4L3.6 11a7.8 7.8 0 0 0 0 2l-2 1.6 2 3.4 2.4-1c.5.4 1.1.7 1.7 1l.4 2.5h3.8l.4-2.5c.6-.3 1.2-.6 1.7-1l2.4 1 2-3.4-2-1.6ZM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>',
        skills: [
            { name: "Git & GitHub" },
            { name: "Jupyter Notebook" },
            { name: "VS Code" },
            { name: "Microsoft Excel" }
        ]
    }
];

/* Generic fallback icon for timeline cards without a logo. */
const fallbackIcon = '<path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.2-8 5v3h16v-3c0-2.8-3.6-5-8-5Z"/>';

/* Work experience (most recent first). */
const experience = [
    { title: "Grants Specialist", org: "Ho-Chunk Nation", date: "May 2025 – Present", logo: "images/Education/seal.jpg" },
    { title: "Proposal Specialist", org: "Spectrum Enterprise (Contract)", date: "Oct 2024 – Mar 2025", logo: "images/Education/Spectrum.JPG" },
    { title: "Graduate Teaching Assistant", org: "University of Missouri–St. Louis", date: "Jan 2023 – Dec 2023", logo: "images/Education/umsl.png" },
    { title: "Data Analyst — Internship", org: "Research Lab, PIHE", date: "Aug 2019 – Aug 2020", logo: "images/Education/pihe.png" }
];

/* Education (most recent first). */
const education = [
    { title: "MSc in Computer Science", org: "University of Missouri–St. Louis", date: "Jan 2022 – Dec 2023", logo: "images/Education/umsl.png" },
    { title: "Certificate in Artificial Intelligence", org: "University of Missouri–St. Louis", date: "Jan 2022 – May 2023", logo: "images/Education/umsl.png" },
    { title: "MSc in Information Technology", org: "Pooyandegan Institute of Higher Education (PIHE)", date: "Sep 2018 – Jul 2021", logo: "images/Education/pihe.png" },
    { title: "BE in Civil Engineering", org: "Ayandegan Institute of Higher Education", date: "Sep 2014 – Sep 2018", logo: "images/Education/aihe.JPG" }
];

/* ---------------------------------------------------------
   2. RENDERING
   --------------------------------------------------------- */

const svg = (paths, cls) =>
    `<svg viewBox="0 0 24 24" aria-hidden="true"${cls ? ` class="${cls}"` : ""}>${paths}</svg>`;

function renderSkills() {
    const grid = document.getElementById("skills-grid");
    if (!grid) return;

    grid.innerHTML = skillCategories
        .map((category) => {
            const chips = category.skills
                .map((skill) => {
                    if (skill.logo) {
                        return `<li class="chip">
                            <img class="chip__logo" src="${skill.logo}" alt="" loading="lazy" width="24" height="24">
                            ${skill.name}
                        </li>`;
                    }
                    return `<li class="chip chip--text">${skill.name}</li>`;
                })
                .join("");

            return `<article class="skill-card reveal">
                <div class="skill-card__head">
                    <span class="skill-card__icon">${svg(category.icon)}</span>
                    <h3 class="skill-card__title">${category.title}</h3>
                </div>
                <ul class="chip-list">${chips}</ul>
            </article>`;
        })
        .join("");
}

function timelineCard(item) {
    const marker = item.logo
        ? `<img class="tl-card__logo" src="${item.logo}" alt="${item.org} logo" loading="lazy" width="44" height="44">`
        : `<span class="tl-card__logo tl-card__logo--fallback">${svg(fallbackIcon)}</span>`;

    return `<article class="tl-card reveal">
        <div class="tl-card__top">
            ${marker}
            <div>
                <span class="tl-card__date">${item.date}</span>
                <h4 class="tl-card__title">${item.title}</h4>
            </div>
        </div>
        <p class="tl-card__org">${item.org}</p>
    </article>`;
}

function renderTimeline() {
    const expTrack = document.getElementById("experience-track");
    const eduTrack = document.getElementById("education-track");

    if (expTrack) expTrack.innerHTML = experience.map(timelineCard).join("");
    if (eduTrack) eduTrack.innerHTML = education.map(timelineCard).join("");
}

/* ---------------------------------------------------------
   3. UI BEHAVIOR
   --------------------------------------------------------- */

function initNav() {
    const header = document.getElementById("site-header");
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("nav-menu");
    const links = Array.from(document.querySelectorAll(".nav__link"));

    // Solid header background after scrolling a little.
    const onScroll = () => {
        header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Mobile menu toggle.
    const closeMenu = () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
    };

    toggle.addEventListener("click", () => {
        const open = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    links.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });

    // Active section highlighting.
    const sections = links
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const id = entry.target.id;
                links.forEach((link) =>
                    link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`)
                );
            });
        },
        { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
}

function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !items.length) {
        items.forEach((item) => item.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target);
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((item) => observer.observe(item));
}

function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;

    const onScroll = () => {
        btn.classList.toggle("is-visible", window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

function initFooterYear() {
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
}

/* ---------------------------------------------------------
   Init
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    renderSkills();
    renderTimeline();
    initNav();
    initReveal();
    initBackToTop();
    initFooterYear();
});
