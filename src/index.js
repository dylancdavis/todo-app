import component from "./baseComponents.js";
import { parse } from 'coolors-io'
import './style.css'
import skeleton from "./skeleton";

// const palette = 'https://coolors.co/b8d8d8-7a9e9f-4f6367-eef5db-fe5f55'
const palette = 'https://coolors.co/f9fafb-6593c2-6eb4a8-f0974e-e8765a'

let colors = parse(palette);
for (let i=0;i<colors.length;i++) {
    document.body.style.setProperty(`--color${i+1}`, colors[i]);
}

// Build Website Skeleton
document.body.appendChild(component.div({
    id: 'content',
    children: skeleton
}))

// Add New project functionality
import projectHandler from "./projectHandler";

const newProjectButton = document.querySelector('.new-project').querySelector('.clickable');

newProjectButton.addEventListener('click',projectHandler.addTemplate);

// start with default template
projectHandler.addTemplate();