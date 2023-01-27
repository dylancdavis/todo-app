export default {
    div: o => newElement('div',o),
    span: o => newElement('span',o),
    button: o => newElement('button',o),
    img: o => newImg(o),
    ul: o => newElement('ul',o),
    li: o => newElement('li',o)
}

// Central function that builds HTML elements from provided objects
function newElement(type,obj) {
    let ret = document.createElement(type);
    if ('text' in obj) ret.textContent = obj.text
    if ('id' in obj) ret.id = obj.id
    if ('class' in obj) {
        for (let c in obj.class) {
            ret.classList.add(obj.class[c])
        }
    }
    if ('children' in obj) {
        for (let i=0; i< obj.children.length; i++) {
            ret.appendChild(obj.children[i])
        }
    }
    return ret
}

function newImg(obj) {
    let ret = document.createElement('img');
    if ('src' in obj) ret.setAttribute('src',obj.src)
    if ('alt' in obj) ret.setAttribute('alt',obj.alt)
    if ('class' in obj) {
        for (let c in obj.class) {
            ret.classList.add(obj.class[c])
        }
    }
    return ret
}