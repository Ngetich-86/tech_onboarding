/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/project.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "my first portfolio🎉",
    description:
      "I can create modern and dynamic frontend web portfolio using HTML, CSS, JavaScript, and ReactJS.",
    url: "https://github.com/Ngetich-86/",
  },
  {
    title: "Fronted Web Development for Beginners",
    description:"I can create modern and dynamic frontend web applications using HTML, CSS, JavaScript, and ReactJS.",
    url: "https://github.com/Ngetich-86/react-portfolio",
  },
  {
    title: "Backend Development",
    description:"I have the ability to develop server-side applications using Node.js and Express.js. With this skill set, I can create and deploy web applications that handle server-side logic and interact with databases. I am proficient in creating RESTful APIs, handling HTTP requests, and using middleware to enhance functionality and security.My skill is an asset in many industries, including e-commerce, finance, healthcare, and technology.",
    url: "https://github.com/Ngetich-86",
  },
  {
    title: "UI/UX Design",
    description:
      "I can create modern and dynamic frontend web applications using HTML, CSS, JavaScript, and ReactJS.",
    url: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
