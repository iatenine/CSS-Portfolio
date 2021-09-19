const projectsSection = $("#projects");
const aboutSection = $("#about");
const contactSection = $("#contact");

const phoneLink = $("#phone-contact");

const addProject = (
  title,
  subtitle,
  image,
  altText,
  deploymentLink,
  sourceLink,
  first = false
) => {
  // <a href='${deploymentLink}' target="no_blank"></a>
  const project = $(
    `<div class='gallery'>
        <div class='project-container'>
          <a class="dummy-link">
            <img class='project-image' src="${image}" alt="${altText}"/>
            </a>
          <div class='project-caption'>
            <div class="caption-header">
            <h3>${title}</h3>
            <h4 class="subtitle-label">
              ${subtitle}
            </h4>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-6">
                  <a href="${deploymentLink}" class="caption-link" target="no_blank">
                    <span class="contact-label">
                    Deploy
                    </span>
                    <i class="fa fa-external-link fa-2x" aria-hidden="true"></i> 
                  </a>
                </div>
                <div class="col-6">
                  <a href="${sourceLink}" class="caption-link" target="no_blank">
                    <span class="contact-label">  
                    Source
                    </span>
                    <i class="fa fa-github fa-2x" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
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

const displayNumber = (e) => {
  console.log("hello");
  const verify = confirm("Please verify you are not a robot");
  if (verify) alert("850.405.2403");
};

// Do inital stuff when page loads
$(document).ready(function () {
  addProject(
    "Ultimate System",
    "Steam Match Finding Service",
    "assets/img/previews/ultimate-system-splash.png",
    "Splash page prompting user to login or signup",
    "https://blooming-stream-34219.herokuapp.com/",
    "https://github.com/iatenine/ultimate-system",
    true
  );

  addProject(
    "Currency Exchange App",
    "Current and Historical Forex Data",
    "assets/img/previews/updated-forex-app.png",
    "Form with options to select different currencies and set the date to check the exchange rate",
    "https://iatenine.github.io/currency-exchange-app/",
    "https://github.com/iatenine/currency-exchange-app"
  );

  addProject(
    "Weather Dashboard",
    "Worldwide Weather Data",
    "assets/img/previews/weather-preview-desktop.png",
    "5 day forecast app with city lookup and auto-complete",
    "https://iatenine.github.io/weather-dashboard/",
    "https://github.com/iatenine/weather-dashboard"
  );

  addProject(
    "Tech Blog",
    "Text Based Blog",
    "assets/img/previews/tech-blog-preview.png",
    "User dashboard with options to create, view, update and delete posts",
    "https://immense-stream-52076.herokuapp.com/dashboard",
    "https://github.com/iatenine/tech-blog"
  );

  addProject(
    "Day Planner",
    "Hourly Day Planner",
    "assets/img/previews/planner-preview-desktop.png",
    "Hourly day planner",
    "https://iatenine.github.io/day-planner/",
    "https://github.com/iatenine/day-planner"
  );

  phoneLink.click(displayNumber);
});
