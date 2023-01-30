import component from "./baseComponents.js";
import './style.css'
import skeleton from "./skeleton";
import colorHandler from "./colorHandler.js";

// Initialize Colors
colorHandler();

// Build Website Skeleton
document.body.appendChild(component.div({id: 'content', children: skeleton }))

// Add New project functionality
import projectHandler from "./projectHandler";

// Add functionality to newProjectButton
const newProjectButton = document.querySelector('.new-project').querySelector('.clickable');
newProjectButton.addEventListener('click',projectHandler.addTemplate);

// Start with a template on the page
projectHandler.addTemplate();