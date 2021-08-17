const projectsSection = $("#projects");
const aboutSection = $("#about");
const contactSection = $("#contact");

const addProject = (
  title,
  subtitle,
  image,
  altText,
  deploymentLink,
  first = false
) => {
  const project = $(
    `<div class='gallery'>
        <div class='project-container'>
          <a href='${deploymentLink}' target="no_blank">
            <img class='project-image' src="${image}" alt="${altText}"/>
          </a>
          <div class='project-caption'>
            <h3>${title}</h3>
            <h4>
              ${subtitle}
            </h4>
          </div>
        </div>
      </div>`
  );

  if (first) {
    project.addClass("header");
    projectsSection.find(".header").append(project);
    return;
  }
  projectsSection.find(".main-gallery").append(project);
};

// Do inital stuff when page loads
$(document).ready(function () {
  addProject(
    "Currency Exchange App",
    "Current and Historical Forex Data",
    "assets/img/previews/currency-preview-2.png",
    "Alt Text 1",
    "https://iatenine.github.io/currency-exchange-app/",
    true
  );

  addProject(
    "Weather Dashboard",
    "Worldwide Weather Data",
    "assets/img/previews/weather-preview-desktop.png",
    "Alt Text 2",
    "https://iatenine.github.io/weather-dashboard/"
  );
  addProject(
    "Day Planner",
    "Hourly Day Planner",
    "assets/img/previews/planner-preview-desktop.png",
    "Alt Text 3",
    "https://iatenine.github.io/day-planner/"
  );
});
