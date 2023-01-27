import component from "./baseComponents.js"
import { plusButton } from "./styledComponents"

const banner = component.div({
    class: ['banner'],
    children: [
        component.span({
            class: ['banner-text'],
            text: 'To-Do List'
        })
    ]
})

const newProjectButton = plusButton('new-project','add new project')

const projectContainer = component.div({
    id: ['project-container'],
    children: [ newProjectButton ]
})

const sideBar = component.div({
    id: 'sidebar',
    children: [
        component.span({
            id: 'sidebar-title',
            text: 'sidebar'
        })
    ]
})

const mainContent = component.div({
    id: 'main-content',
    children: [
        sideBar,
        projectContainer
    ]
})

export default [banner, mainContent]