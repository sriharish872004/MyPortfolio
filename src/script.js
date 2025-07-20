/* Animation */

  document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-back',
      once: true,
      offset: 100,
    });
  });

  setTimeout(() => {
  AOS.refresh();
}, 100);

window.addEventListener('resize', () => {
    AOS.refreshHard(); 
  });

/* Nav Bar */
const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[data-section]");

  // On scroll: update active class
  window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop - 120) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href").replace("#", "");

    // 👇 Fix: if scrollY is near 0, set Home active
    if (scrollY < 100 && href === "home") {
      link.classList.add("active");
    } else if (href === currentSection) {
      link.classList.add("active");
    }
  });
});

/* DarkMode Button */
const toggleBtn = document.getElementById("toggle");

      // Apply theme based on saved preference
      function applyTheme() {
        const userTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (userTheme === "dark" || (!userTheme && prefersDark)) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
      toggleBtn.addEventListener("click", () => {
        const isDark = document.documentElement.classList.contains("dark");

        if (isDark) {
          localStorage.setItem("theme", "light");
        } else {
          localStorage.setItem("theme", "dark");
        }
        applyTheme(); 
      });
      applyTheme();



                /* Skills */

   
const frontendSkills = [
  { label: "HTML & CSS", value: 90 },
  { label: "Tailwind CSS", value: 85 },
  { label: "JavaScript", value: 80 },
  { label: "React.js", value: 80 },
  { label: "Redux", value: 80 },
  { label: "Figma", value: 60 }
];

const backendSkills = [
  { label: "Java", value: 90 },
  { label: "Spring Boot", value: 80 },
  { label: "PostgreSQL", value: 80 },
  { label: "MongoDB", value: 70 },
  { label: "GitHub", value: 95 },
  { label: "Docker", value: 70 }
];


function createSkillBar({ label, value }) {
  const li = document.createElement("li");

  li.innerHTML = `
    <div class="flex justify-between mb-2 text-sm sm:text-base lg:mb-3">
      <span>${label}</span><span>${value}%</span>
    </div>
    <div class=" bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
  <div class="h-2 rounded-full" style="width: ${value}%; background: linear-gradient(135deg, #a855f7, #7e22ce);"></div>
</div>
  `;

  return li;
}

function renderSkills(skills, containerId) {
  const container = document.getElementById(containerId);
  skills.forEach(skill => {
    container.appendChild(createSkillBar(skill));
  });
}

// Render on page load
document.addEventListener("DOMContentLoaded", () => {
  renderSkills(frontendSkills, "frontend-skills");
  renderSkills(backendSkills, "backend-skills");
});

            /* Projects */

const projects = [
  {
    title: "Ticket Booking",
    techStack: ["HTML", "Bootstrap", "Node.js","MongoDB-Atlas","Render","Netlify"],
    image: "../assets/images/TicketBooking.png",
    codeLink: "https://github.com/sriharish872004/BookMyShow-with-Guvi-backend",
    liveLink: "https://my-bookmyshow-clone.netlify.app/",
    type: "fullstack"
  },
  {
    title: "ECommerce",
    techStack: ["React", "Redux", "Bootstrap", "SpringBoot", "PostgreSQL","Docker"],
    image: "../assets/images/Ecommerce.png",
    codeLink: "https://github.com/sriharish872004/EcommerceBackEnd",
    liveLink: "https://buzzjob.vercel.app",
    type: "fullstack"
  },
  {
    title: "Coffee Shop Landing Page",
    techStack: ["React","Farmer-Motion", "Tailwind", "Netlify"],
    image: "../assets/images/coffee.png",
    codeLink: "https://github.com/sriharish872004/LandingPage-CoffeeBee-Frontend",
    liveLink: "https://landingpage-coffeebee.netlify.app/",
    type: "webapp"
  },
  {
    title: "TODO List",
    techStack: ["HTML", "CSS", "JavaScript","Tailwind","Netlify"],
    image: "../assets/images/ToDo.png",
    codeLink: "https://github.com/sriharish872004/ToDoList",
    liveLink: "https://todo-list-f.netlify.app/",
    type: "webapp"
  },
  {
    title: "QR Generator",
    techStack: ["HTML", "CSS","Tailwind","JavaScript","Netlify"],
    image: "../assets/images/QRCodeGenerator.png",
    codeLink: "https://github.com/sriharish872004/QRGenerator",
    liveLink: "https://qrcodegenerator-f.netlify.app/",
    type: "webapp"
  }
];


  const container = document.getElementById('project-grid');

 function renderProjects(filteredProjects) {
  container.innerHTML = ""; 

  filteredProjects.forEach((project) => {
    const card = document.createElement('div');
    card.className = "rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 bg-gradient-to-r from-purple-600 via-purple-600 to-blue-500 zoom-in-out";

    const techList = project.techStack.map(tech => `<li class="text-xs sm:text-sm text-gray-300 bg-white/20 dark:bg-white/10 px-2 py-1 rounded-xl">${tech}</li>`).join("");

    card.innerHTML = `
      <div class="relative">
        <img src="${project.image}" alt="${project.title}" class="w-full h-48 sm:h-56 md:h-48 object-cover object-center rounded-t-2xl">
        <div class="absolute inset-0 flex items-center justify-center gap-8 bg-black bg-opacity-50 opacity-0 hover:opacity-50 transition">
          <a href="${project.codeLink}" target="_blank" class="text-purple-400 text-2xl hover:scale-110 transition">
              <i class="fas fa-code"></i>
          </a>
          <a href="${project.liveLink}" target="_blank" class="text-purple-400 text-2xl hover:scale-110 transition">
              <i class="fas fa-eye"></i>
          </a>
        </div>
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold text-white">${project.title}</h3>
        <ul class="flex flex-wrap gap-2 mt-3">
          ${techList}
        </ul>
      </div>
    `;
    container.appendChild(card);
  });
}
   // Update active button
  function showProjects(type, clickedBtn) {
    document.querySelectorAll('.project-btn').forEach(btn => {
      btn.classList.remove('active-btn');
    });
    if (clickedBtn) clickedBtn.classList.add('active-btn');

    if (type === 'all') {
      renderProjects(projects);
    } else {
      const filtered = projects.filter(project => project.type === type);
      renderProjects(filtered);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const firstBtn = document.querySelector('.project-btn');
    showProjects('all', firstBtn);
    AOS.refresh();
  });

  /* Mail */
function sendMail() {
    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    emailjs.send("service_byg4i0i", "template_upkyrl5", parms)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);

        // Clear the form
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      }, function (error) {
        console.error("FAILED...", error);
      });

    return false; 
  }