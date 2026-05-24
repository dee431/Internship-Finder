const internships = [
  {
    title: "Software Engineering Intern",
    company: "TechLabs",
    location: "Remote / San Francisco, CA",
    description: "Help build internal tools while learning modern web stacks."
  },
  {
    title: "Marketing Analyst Intern",
    company: "BrightReach",
    location: "New York, NY",
    description: "Support product launches with data-backed marketing insights."
  },
  {
    title: "UX Design Intern",
    company: "StudioNorth",
    location: "Austin, TX",
    description: "Collaborate with product teams to design intuitive interfaces."
  },
  {
    title: "Data Science Intern",
    company: "InsightOps",
    location: "Remote",
    description: "Work with big datasets and build predictive dashboards."
  }
];

const listEl = document.getElementById("internshipList");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const yearEl = document.getElementById("year");

const renderInternships = (items) => {
  listEl.innerHTML = "";

  if (!items.length) {
    listEl.innerHTML = '<p class="muted">No internships matched that search.</p>';
    return;
  }

  items.forEach((internship) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${internship.title}</h3>
      <p class="meta">${internship.company} · ${internship.location}</p>
      <p>${internship.description}</p>
      <button type="button" aria-label="Apply to ${internship.title}">Apply</button>
    `;
    listEl.appendChild(card);
  });
};

const filterInternships = () => {
  const query = searchInput.value.toLowerCase();
  const filtered = internships.filter((internship) =>
    `${internship.title} ${internship.company} ${internship.location} ${internship.description}`
      .toLowerCase()
      .includes(query)
  );
  renderInternships(filtered);
};

searchBtn.addEventListener("click", filterInternships);
searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    filterInternships();
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Sending...";
  setTimeout(() => {
    formStatus.textContent = "Thanks! We'll get back to you soon.";
    contactForm.reset();
  }, 600);
});

yearEl.textContent = new Date().getFullYear();
renderInternships(internships);
