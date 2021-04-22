# INTERVIEW SCHEDULER
It is a single page application (SPA) called Interview Scheduler, built using the latest tools and techniques such as React. The data is persisted by the API server using a PostgreSQL database and the client application communicates with an API server over HTTP, using the JSON format.

The project implemented unit and integration testing using Jest through the development of the project and End-to-End testing using Cypress upon project completion.

## APP FEATURES
1. Interviews can be booked between Monday and Friday.
2. A user can switch between weekdays.
3. A user can book an interview in an empty appointment slot.
4. Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
5. A user can cancel an existing interview.
6. A user can edit the details of an existing interview.
7. The list of days informs the user how many slots are available for each day.
8. The expected day updates the number of spots available when an interview is booked or canceled.
9. A user is presented with a confirmation when they attempt to cancel an interview.
10. A user is shown an error if an interview cannot be saved or deleted.
11. A user is shown a status indicator while asynchronous operations (Saving or Deleting) are in progress.
12. When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
13. The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## TECHNICAL SPECIFICATIONS
The project uses React, Webpack, Babel, Axios, Storybook, Webpack Dev Server, Jest, Cypress

## Setup
Install dependencies with `npm install`.

## Running Webpack Development Server
npm start

## Running Jest Test Framework
npm test

## Running Storybook Visual Testbed
npm run storybook

## Running Cypress Test Framework
npm run cypress

## Dependencies
- axios
- @testing-library/react-hooks
- @testing-library/jest-dom
- react-test-renderer
- storybook

## Final Product
!["Screenshot of Index Page - Mobile"](https://github.com/caboma/tweeter/blob/master/public/images/Mobile_Index.png)

!["Screenshot of Index Page - Desktop"](https://github.com/caboma/tweeter/blob/master/public/images/index.png)

!["Screenshot of visible New Tweet Form - Mobile"](https://github.com/caboma/tweeter/blob/master/public/images/Mobile_NewTweet_Form.png)

!["Screenshot of visible New Tweet Form - Desktop"](https://github.com/caboma/tweeter/blob/master/public/images/newTweet_Form.png)

!["Screenshot of some Features (Button to Scroll Up / Hover in Tweet) - Mobile"](https://github.com/caboma/tweeter/blob/master/public/images/Mobile_Btn_ScrollUp.png)

!["Screenshot of some Features (Button to Scroll Up / Hover in Tweet) - Desktop"](https://github.com/caboma/tweeter/blob/master/public/images/Btn_to_ScrollUp.png)
