# React form with Auth0 authorization

This project was done for showcase purposes for Varaani Works Oy. Huge thanks for their permission to keep this repository public!

## Running the applications

This project is running at https://fi-aquacrest.github.io/react-form-with-auth0/. You will be redirected and required to log in with your email in order to use the application.

To run this project locally, you can download the repository and from the project root, run `npm install` and once done, `npm start`. The app will load and open at [localhost:3000/](localhost:3000/) by default.

## App requirements

The initial requirements for the application were as follows (loosely translated):

- Login with access blocking if not logged in
- Display a simple form page after logging in, asking the user's name, email and age
- Display a second page after submitting the form, which displays the given input in a freeform fashion
- Form must use a form library (formik / react-hook-forms ect.)
- Redux for delivering information between the views
- Navigation bar while logged in, which has a button to return to the form page, a link to varaani.com and a button to log out
- Replace the navigation bar with a hamburger menu on mobile
- Components styled with css-modules, styled-components or similar
- TypeScript must be used
- Tests that test something
