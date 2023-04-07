# CoreTask

CoreTask is a todo-list application created in React. It allows the user to create and save multiple projects, each of which corresponds to a togglable to-do list.

### Starting CoreTask

##### Online (with local storage)

The simplest way to get stared with CoreTask is to go directly to its [live demo](https://dylancdavis.github.io/todo-app/) hosted on GitHub pages. Data will be stored in your browser's local storage, so it will persist between page refreshes.

##### Hosted

CoreTask is by default configured to interact with a backend API, and will only default to local storage when it's unable to connect to one. To run a locally hosted version of CoreTask, [clone](https://git-scm.com/docs/git-clone) the respository with git, then, in the terminal, execute the command `npm run server` to start running a local database (on port 3001).

Then, in a separate terminal, run `npm run start` to launch the application itself in the browser. Data will be saved in the local server, which stores its data in the `db.json` file in the repository. Alternatively, the URL the frontend interacts with can be modified directly by changing the `baseURL` variable located in `localService.js`.

### Using CoreTask

Once you either visit the live site, or host your own version, CoreTask should appear like this below:

###### CoreTask as it appears when first launched.
![CoreTask on startup, with no projects](https://user-images.githubusercontent.com/104338788/230452414-93702b79-698b-4b1a-8274-7dfa5c7f43de.png)

To store your first project, you'll need to type something into the box labeled "Project Name", then click the checkmark box to the right. The project becoming colored indicates that it's been saved, and will persist upon page refresh. Tasks can be added by typing into the "add a task..." area within a project, then pressing the + icon to the left.

Project names cannot be edited once created, but tasks can be edited by clicking directly on them, altering their value, then clicking the checkmark button that appears to the right. Created tasks can be toggled as completed or not by clicking the white box to their left.

###### CoreTask with multiple projects and their tasks
![CoreTask with two projects](https://user-images.githubusercontent.com/104338788/230452446-2b35c692-55eb-4c94-8309-4bbbf12a7175.png)

CoreTask's color scheme can also be modified by providing it with a new color scheme from [Coolors](https://coolors.co/). To apply a new color scheme, visit Coolors and generate a color palette of four colors (additional colors are ignored), then paste the site's link into the prompt provided upon clicking "change colors". The page will automatically re-render with the new colors.

##### CoreTask with some alternate color palettes
![CoreTask with a green-orange color palette](https://user-images.githubusercontent.com/104338788/230635621-642a5e59-6e8c-48ee-ba06-fece3ba26520.png)

![CoreTask with an aqua-yellow color palette](https://user-images.githubusercontent.com/104338788/230635638-bbf06737-842f-4af4-8570-70e5c784f460.png)



All of the styling for this application was done with native CSS.
