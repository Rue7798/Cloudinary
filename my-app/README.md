## Cloudinary Project
Cloudinary Project is a client-side app that shows available photos randomly in a grid. The user is able to create tags (in which each tag has a label and a color), and assign tags to the photos. They app also shows the assigned images according to tabs at the bottom of the page. 

## Features
Once the user is signed in (according to the assumption below), they will see an arbitray image grid. The user will be able to create a list of tags (in the left side of the app), in which each tag has a color and a label. Once the tags are created, if the user clicks on the tag icon, they can assign one or more tags to the photo. Once the pic is assigned, it goes into the tags catagories. Unassigned images remain at the top. Tags can be edited and deleted, and photos can be reassigned. 

## What did I learn
Due to the minimal time I had to develop the app, along with the difficulties of the task, I learned basics in Bootstrap since it makes web development easier and faster. Disclaimer: I am in no way a professional in Bootstrap, only a beginner. 

## Development
Upon running this repository, first install git and npm.
 In the project directory, you can run:
 git clone.........
 npm install
 npm i react
 cd my-app
 npm start

 ## Used Technologies
 This project is  basic and easy to follow. These are the technologies which are used:
 React: This project was developed using React.Js. React is a JavaScript library for building user interfaces.
 Axios: Axios is a Promise based HTTP client for the browser and node.js. 
 Bootstrap: Bootstrap is an HTML, CSS and JavaScript framework for developing a responsive and mobile friendly website.
 React Icons: Used React Icons for the tag icon.

 ## Asumptions
We assume in this project that each user is able to sign in using a password and an email or a username. Thus, once they are signed in, their information regarding the actions they took in the projec is saved. When running the app currently, there is no sign-in page, and so the assumption is that what we are seeing is what is available to each user once they are signed in. 

 ## QA Tests
 User information: one of the tests that should be run is to check if the user's details are already saved- thus when the user attempts to sign in, and system checks if their information i already present, they will be able to access the app- if not, they will recieve an alert that the detail do not match the data.
User authentication:"User Authentication is a process that verifies a person’s identity allowing them access to an online service, connected device, or other resource" (hypr.com). requiring the user to login using an email/id/username and a password to confirm that they are indeed authorized to acceess the project. Single-factor authentication should be enough for this type of project that does not contain any sensitive information.
Tags: If a user creates a tag, the system will check and see if this tag already exists- if it does, they will recieve an error that this tag exists already. 
Word Filter: Since we're creating an app in which users can tag photos, its important to include a test that would filter abusive or hurtful comments towards others.  


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)








