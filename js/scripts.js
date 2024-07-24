const skills = [
    { name: "Python", logo: "images/skills/Python-logo.svg", rating: 5, group: "programming-languages" },
    { name: "Flutter", logo: "images/skills/flutter-logoo.png", rating: 3, group: "programming-languages" },
    { name: "Dart", logo: "images/skills/Dart-logo.png", rating: 3, group: "programming-languages" },
    { name: "Java", logo: "images/skills/Java-logo.svg", rating: 3, group: "programming-languages" },
    { name: "C/C++", logo: "images/skills/C-logo.svg", rating: 4, group: "programming-languages" },
    { name: "HTML", logo: "images/skills/HTML5-logo.svg", rating: 4, group: "web-development" },
    { name: "CSS", logo: "images/skills/CSS3-logo.svg", rating: 4, group: "web-development" },
    { name: "JavaScript", logo: "images/skills/JavaScript-logo.png", rating: 4, group: "web-development" },
    { name: "SQL", logo: "images/skills/Sql_logo.png", rating: 5, group: "database-management" },
    { name: "MySQL", logo: "images/skills/mysql.svg", rating: 4, group: "database-management" },
    { name: "R", logo: "images/skills/R-logo.svg", rating: 5, group: "database-management" },
    { name: "Tableau", logo: "images/skills/Tableau-Logo.png", rating: 5, group: "database-management" },
    { name: "Power BI", logo: "images/skills/powerbi.png", rating: 4, group: "database-management" },
    { name: "TensorFlow", logo: "images/skills/Tensorflow-logo.svg", rating: 5, group: "machine-learning" },
    { name: "Keras", logo: "images/skills/Keras-logo.svg", rating: 5, group: "machine-learning" },
    { name: "PyTorch", logo: "images/skills/PyTorch-logo.svg", rating: 4, group: "machine-learning" }
];

const createSkillItem = (skill) => {
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skill');

    const logoImg = document.createElement('img');
    logoImg.src = skill.logo;
    logoImg.alt = `${skill.name} logo`;
    logoImg.classList.add('logo');
    skillDiv.appendChild(logoImg);

    const skillName = document.createElement('span');
    skillName.textContent = skill.name;
    skillDiv.appendChild(skillName);

    const starsDiv = document.createElement('div');
    starsDiv.classList.add('stars');

    for (let i = 0; i < 5; i++) {
        const starSpan = document.createElement('span');
        starSpan.classList.add(i < skill.rating ? 'star-filled' : 'star-empty');
        starsDiv.appendChild(starSpan);
    }

    skillDiv.appendChild(starsDiv);

    return skillDiv;
};

const skillsContainer = document.getElementById('skills-container');
skills.forEach(skill => {
    const skillItem = createSkillItem(skill);
    document.getElementById(skill.group).appendChild(skillItem); // Append to the correct group
});

document.addEventListener('DOMContentLoaded', function () {
    const timelineData = [
        {
            type: 'education',
            title: 'MSc. in Computer Science',
            date: '01/2022 – 12/2023',
            logo: 'images/Education/umsl.png',
            description: 'University of Missouri-St. Louis'
        },
        {
            type: 'education',
            title: 'Certificate in AI',
            date: '01/2022 – 05/2023',
            logo: 'images/Education/umsl.png',
            description: 'University of Missouri-St. Louis'
        },
        {
            type: 'experience',
            title: 'Graduate Teaching Assistant, Grading, Monitoring and Teaching, MO, USA',
            date: '01/2023 – 12/2023',
            description: 'University of Missouri-St. Louis'
        },
        {
            type: 'education',
            title: 'MSc. in Information Technology',
            date: '09/2018 – 07/2021',
            logo: 'images/Education/pihe.png',
            description: 'Pooyandegan Institute of Higher Educations(PIHE)'
        },
        {
            type: 'experience',
            title: 'Data Analyst- Internship',
            date: '08/2019 – 08/2020',
            description: 'Research Lab, PIHE'
        },
        {
            type: 'education',
            title: 'BE in Civil Engineering',
            date: '09/2014 – 09/2018',
            logo: 'images/Education/aihe.JPG',
            description: 'Ayandegan Institute of Higher Education'
        }
    ];

    const timeline = document.getElementById('timeline');
    timelineData.forEach((item, index) => {
        // Set specific items to the left or right
        let positionClass;
        if (item.title.includes('MSc. in Computer Science') || item.title.includes('Certificate') || item.title.includes('MSc. in Information Technology') || item.title.includes('BE in Civil Engineering')) {
            positionClass = 'left';
        } else {
            positionClass = 'right';
        }

        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${positionClass}`;
        timelineItem.setAttribute('data-date', item.date); // Set the date as a data attribute
        
        const timelineContent = document.createElement('div');
        timelineContent.className = 'timeline-content';

        if (item.type === 'education') {
            timelineContent.innerHTML = `
                <div class="education-item">
                    <img src="${item.logo}" alt="${item.title} Logo" class="edu-logo">
                    <div>
                        <h3>${item.title}</h3>
                        <p><em>${item.description}</em></p>
                    </div>
                </div>
            `;
        } else {
            timelineContent.innerHTML = `
                <div class="experience-item">
                    <h3>${item.title}</h3>
                    <p><em>${item.description}</em></p>
                </div>
            `;
        }

        timelineItem.appendChild(timelineContent);
        timeline.appendChild(timelineItem);
    });

    const items = document.querySelectorAll('.timeline-item');

    const isInViewport = el => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const run = () =>
        items.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('show');
            }
        });

    // Events
    window.addEventListener('load', run);
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run);
});
