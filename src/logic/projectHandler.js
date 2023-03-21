import { projectTemplate } from "./styledComponents";
import component from "./baseComponents.js";

let index = 0;

export default {
  addTemplate: (e) => {
    let projectArea = document.getElementById("project-container");
    // Template already exists - return
    if (projectArea.querySelector(".unsaved")) {
      projectArea.querySelector(".unsaved").style.outline =
        "4px solid var(--color2)";
      setTimeout(() => {
        projectArea.querySelector(".unsaved").style.outline = "";
      }, 300);
      return;
    }

    // Get template and insert
    let template = projectTemplate();
    template.dataset.index = index++;
    console.log(template.dataset.index);
    projectArea.insertBefore(
      template,
      projectArea.querySelector(".new-project")
    );

    // Add event listeners to template
    document
      .querySelector(".unsaved .task-list button")
      .addEventListener("click", addItem);
    document
      .querySelector(".unsaved .task-list input")
      .addEventListener("keydown", addIfEnter);
    document
      .querySelector(".unsaved .discard")
      .addEventListener("click", removeTemplate);
    document
      .querySelector(".unsaved .save")
      .addEventListener("click", saveTemplate);

    // Disable button
    toggleAdding();
  },
};

function addItem(e) {
  console.log(e);
  let t = e.target;
  console.log(t);
  let list = t.parentElement;
  let input = t.parentElement.querySelector("input.add-task");
  let btn = t.parentElement.querySelector("button.add-task");
  if (input.value !== "") {
    // grid should handle sorting.
    list.insertBefore(checkboxButton(), btn);
    list.insertBefore(
      component.div({ class: ["display-text"], text: input.value }),
      btn
    );
    list.insertBefore(
      component.div({ class: ["task-buttons"], text: "edit // delete" }),
      btn
    );
  }
  input.value = "";
}

function checkboxButton() {
  let ret = component.button({ class: ["checkbox"] });
  ret.addEventListener("click", () => {
    ret.classList.toggle("completed");
    ret.nextSibling.classList.toggle("completed");
  });
  return ret;
}

function addIfEnter(e) {
  console.log(e);
  if (e.keyCode === 13) addItem(e);
}

function saveTemplate(e) {
  // Check title and remove
  let item = e.target.parentElement;
  let hl = item.querySelector(".header-left");
  let input = hl.querySelector(".project-title");

  // do nothing if title empty
  if (input.value === "") {
    input.style.outline = "4px solid red";
    setTimeout(() => {
      input.style.outline = "";
    }, 500);
    return;
  }

  console.log("saving project item");

  // Remove Save/Discard buttons
  item.removeChild(e.target);
  item.removeChild(item.querySelector(".discard"));

  // Replace input with actual project title
  hl.insertBefore(
    component.div({ class: ["project-title"], text: input.value }),
    hl.firstChild
  );
  hl.removeChild(input);

  item.classList.remove("unsaved");

  // Allow button to add projects again
  toggleAdding();
}

function removeTemplate(e) {
  toggleAdding();
  e.target.parentElement.remove();
}

function toggleAdding() {
  document
    .querySelector(".new-project.plus-button")
    .classList.toggle("disabled");
}
