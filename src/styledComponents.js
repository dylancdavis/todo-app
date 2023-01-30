import component from "./baseComponents.js"
import plusImage from "./plus-symbol-button.png"
import check from './check.png'
import close from './close.png'

function plusButtonBase() {
    return component.button({
        class: ['clickable'],
        children: [ component.img({src: plusImage}) ]
    })
}

export function plusButton (aClass,text) { return component.div({
    class: [aClass, 'plus-button'],
    children: [
        plusButtonBase(),
        component.span({
            class: ['display-text'],
            text: text
        })
    ]
})}

export function projectTemplate () {
    return component.div({
        class: ['project-item','unsaved'],
        children: [projectItemHeader(), projectItemBody(), projectSave(), projectDiscard()]
    })
}

function projectSave() {
    return component.img({
        src: check,
        class: ['save']
    })
}

function projectDiscard() {
    return component.img({
        src: close,
        class: ['discard']
    })
}

function projectItemHeader() {
    return component.div({
        class: ['header'],
        children: [ projectHeaderLeft(), projectHeaderRight()]
    })
}

function projectHeaderLeft() {
    return component.div({
        class: ['header-left'],
        children: [ projectTitle(), addTagsButton(), ]
    })
}

function projectTitle() {
    let ret = document.createElement('input')
    ret.setAttribute('type','text')
    ret.setAttribute('placeholder','Project Name')
    ret.classList.add('project-title')
    return ret;
}

function addTagsButton() {
    return plusButton('add-tags','add tags')
}

function projectHeaderRight() {
    return component.div({
        class: ['header-right'],
        children: [
            component.div({
                class: ['due-date'],
                text: 'Due Date'
            })
        ]
    })
}

function projectItemBody() { return component.div({
        class: ['body'],
        children: [
            component.div({
                class: ['task-container'],
                children: [
                    component.div({class: ['header'], text: 'Task List'}),
                    taskList()
                ]
            })
        ]
    })
}

function taskList() {
    return component.div({
        class: ['task-list'],
        children: [
            component.button({class: ['add-task'], text: '+'}),
            (() => {
                let ret = document.createElement('input')
                ret.classList.add('add-task')
                ret.setAttribute('type','text')
                ret.setAttribute('placeholder','add a task...')
                return ret
            })()
        ]
    })
}

function convertToSaved(project) {
    console.log('converting to saved');
}