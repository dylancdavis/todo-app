import { projectTemplate } from "./styledComponents";
import component from "./baseComponents.js";

let index = 0;

export default {
    addTemplate: () => {
        let projectArea = document.getElementById('project-container')
        if (projectArea.querySelector('.unsaved')) {
            projectArea.querySelector('.unsaved').style.outline = "4px solid var(--color2)"
            setTimeout(() => {projectArea.querySelector('.unsaved').style.outline = ""},300)
            return
        }
        // Get template and insert
        let template = projectTemplate();
        template.dataset.index = index++;
        console.log(template.dataset.index);
        projectArea.insertBefore(template, projectArea.querySelector('.new-project'))

        document.querySelector('.unsaved .new-task button').addEventListener('click',addItem);
        document.querySelector('.unsaved .new-task input').addEventListener('keydown',addIfEnter);
        document.querySelector('.unsaved .discard').addEventListener('click',removeTemplate);
        document.querySelector('.unsaved .save').addEventListener('click',saveTemplate);

    },    
}

function addItem(e) {
    let t = e.target;
    console.log(t);
    let list = t.parentElement.parentElement.querySelector('ul');
    let input = t.parentElement.querySelector('input')
    if (input.value !== '') list.appendChild(component.li({text: input.value}))
    input.value = ''
}

function addIfEnter(e) {
    console.log(e);
    if (e.keyCode === 13) addItem(e)
}

function saveTemplate(e) {
    // Check title and remove
    let item = e.target.parentElement;
    let hl = item.querySelector('.header-left');
    let input = hl.querySelector('.project-title')

    // do nothing if title empty
    if (input.value === '') {
        input.style.outline = '4px solid red'
        setTimeout(() => {input.style.outline = ''},500)
        return
    }
    
    console.log('saving project item');

    // Remove Save/Discard buttons
    item.removeChild(e.target)
    item.removeChild(item.querySelector('.discard'))

    // Replace input with actual project title
    hl.insertBefore(component.div({class: ['project-title'], text: input.value}),hl.firstChild)
    hl.removeChild(input)

    item.classList.remove('unsaved')

}

function removeTemplate(e) {
    e.target.parentElement.remove();
}


