# Recipe for JSX

## Story

Your beloved English Grandma, Henrietta Talia Margaret Lillyanna, loves her recipes.
She spent a lifetime collecting incredible and unique meals and she asks you to help to create a digital collection.
The web site will be made by React but you are not that familiar in JSX.
That's why you start with making one of her recipe in the form of JSX.

## What are you going to learn?

- JSX
- Undestanding the structure of the script `create-react-app`
- adding css file to react project
- adding css style to react project
- displaying lists of objects in react

## Tasks

1. Create a page which holds the structure and data of [the following recipe](https://vintagerecipecards.com/2011/05/24/perfection-salad/).
    - The name of the food is visible in the page as a level 1 header.
    - The image of the food is visible under the name.
    - There is a level 2 heading which sais "Ingredients".
    - The ingredients are presented as bulleted list.
    - The measurements in the ingredient lines are emphesised, while the name od the ingredient is not.
    - There is a level 2 heading which sais "Preparation".
    - The preparation steps are presented as numbered list.
    - All sentences of each step are in separate lines. (separated with `<p>` paragraphs or with `<br>` tags)
    - All ingredients in the preparation list are highlighted with bolder font style.
    - The browsers tab displays the recipe name.

2. Display each ingredient from the list `productList` on a separate line
    - When opening the page with `npm start` you see a list of 11 ingredients

3. The image for the perfection salad is served from the user's computer
    - When inspecting the image in the developer tools you can see the `img` tag has the `src` property with the value a path from the local computer (opposed to an url path )

4. Import the css defined classes in `App.css`
    - When opening the page with `npm start` the content is aligned vertically

5. Center the header with the text horizontally `Perfection Salad` using inline style
    - When inspecting the header in the developer tools you can see the `h1` tag has the `style` property with the value `text-align: center`

## General requirements

- The content of the page is rendered as jsx
- The `index.html` contains only the root `div` tag

## Hints

- once you start the project you first need to install the react library with `npm install`
- once all the react libraries are installed, you can start the project  with `npm start`
- Start editing the `App.js` based on the requirements.

## Background materials

- <i class="far fa-exclamation"></i> [Introduction to JSX](https://reactjs.org/docs/introducing-jsx.html)
- <i class="far fa-exclamation"></i> [Display lists in React](https://scotch.io/starters/react/handling-lists-in-react-jsx)
- <i class="far fa-book-open"></i> [Importing css files to react](https://create-react-app.dev/docs/adding-a-stylesheet/)
- <i class="far fa-book-open"></i> [Adding css styles to react](https://www.w3schools.com/react/react_css.asp)
- <i class="far fa-book-open"></i> [Debugging a React project](https://blog.logrocket.com/debug-react-applications-with-the-new-react-devtools/)
