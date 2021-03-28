# Ewok

This is a react application that interacts with [SWAPI](https://swapi.dev/), a Star Wars API.

## Description of Problem

The requirements of this application is displaying a list of characters with their name, birth year, height,and mass. 
The table can be navigated using next/prev buttons, and has an adjustment number of elements. Each item in the table
is clickable and brings you to the character page.

The character page displays and the properties of the character and has a back button that brings you back to the list page.

## Description of solution and technical solution

My solution starts with my App.js file. This file renders the navbar which is present for all pages, then uses a router 
to render the different pages. My general architecture involves creating folders for each component to keep things loosely
coupled. Within these folders are all the functions needed to create the component. 

The home page first resolves all the promises from SWAPI, then renders the content via a MaterialUI table element. While
the promise is pending, a loading icon will be displayed to the user.

The character page involves resolving a single promise based on the character then rendering the different properties of
the character.

For this project I chose to use MaterialUI because it made creating the home page table very easy, and I was familiar with
using it.

For the color scheme I wanted to go with something Star Wars esque and really liked the colour scheme of this
[keycap set](https://geekhack.org/index.php?topic=108795.0). It has a nice black and yellow scheme with high contrast
which is ideal for accessibility.

Finally, I used ESLint with the AirBnB style standard to ensure I am adhering to a coding standard throughout my project,
and also because every single coding project should use a linter.

## Trade-offs

One trade-off I made was rendering all of the characters together instead of ten at a time. This allowed me to use the 
MaterialUI feature to adjust the number of elements on a page. However, the drawback to this is that it will impact loading
time of the home page.

One thing I left out was using state to ensure consistency between navigation of a character page and the list page.

Another trade-off is that because I used MaterialUI, I could not run react in strict mode, because `findDOMNode is deprecated in StrictMode`
and MaterialUI relies on it.

## Future improvements

One improvement I want to make is with the UI, its kind of ugly and I know I can do a much better job, particularly with
the character page.

Next, I would also want to render other parts of the API such as the Films, Starships, Vehicles, Species, Planets, and link
them to each other. Ie. Luke Skywalker should link to all his vehicles.

Further, I have used ESLint and created one test for the application. However, I was fairly lax with how strictly I was 
adhering to AirBnB's coding standard, and would want to reduce that in the future. As well, I would add more tests to this 
project to help automate testing instead of doing it manually each time.

Finally, I want to improve my routing, I currently use the `/character/:id` however I want to change that to `/name-of-character`. 

## How to run

`yarn install`

Installs all project dependencies.

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

`yarn lint-fix`

Runs `eslint --fix` on all js and jsx files. Will automatically fix what linter issues it can and then return the results of the linter

`yarn lint`

Runs `eslint` on all js and jsx files. Will return the results of the linter.
