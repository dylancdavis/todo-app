# CoreTask

CoreTask is a todo-list application created in React. It allows the user to create and save multiple projects, each of which corresponds to a togglable to-do list. 

### Running CoreTask

To get started, [clone](https://git-scm.com/docs/git-clone) the respository with git, then, in the terminal, execute the command `npm run server` to get the local database running. Then, in a separate terminal, run `npm run start` to launch the application itself.

###### CoreTask as it appears when first launched.
![coretask-home](https://user-images.githubusercontent.com/104338788/230452414-93702b79-698b-4b1a-8274-7dfa5c7f43de.png)

To store your first project, you'll need to type something into the box labeled "Project Name", then click the checkmark box to the right. The project becoming colored indicates that it's been saved to the local database, and will persist upon page refresh. Tasks can be added by typing into the "add a task..." area within a project, then pressing the + icon to the left.

Project names cannot be edited once created, but tasks can be edited by clicking directly on them, altering their value, then clicking the checkmark button that appears to the right. Created tasks can be toggled as completed or not by clicking the white box to their left.

##### CoreTask with multiple projects and their tasks
![coretask-withtasks](https://user-images.githubusercontent.com/104338788/230452446-2b35c692-55eb-4c94-8309-4bbbf12a7175.png)

All of the styling for this application was done with native CSS.
