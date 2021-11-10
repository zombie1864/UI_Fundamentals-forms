# MVP Checklist 

The following will highlight key features of this project, which is a basic to do list. The design architecture of the codebase focuses on seperation of concern principles, in which the code is divided into application logic, business logic, and views logic (aka templates). The code design follows modern functional components and keeps modular design principles to allow expansion of codebase and to follow testing in isolation design patterns. The following below is a breakdown of feature and time estimations on deliverables. 

# Planing Phase (Est. 0.5 Day)

In this phase i broke down all project requirements and planned how to meet each specs using react. For this task i did not used any state manager such as Redux as doing so would over complicate the correct methodologies needed to solve said task. Instead i opt for a simpler solution which only involves react. React-router-dom and react-icons where the only third party dependencies used for this project. 

# Feature 1: Login (Est. 1.5 Day) 

The login portion was achieved using basic HTML form. Utilizing react features the login form is a controlled component in which the login state changes upon user interaction. Validators were also implemented to each form field to ensure user input data is "clean data" that can be propagated without too much "cleaning" of the data. Validators also enforce correct input by allowing react to display errors on the UI layer of the application. Basic testing was added to validate the business logic of validators under the test dir. However a more robust testing is adviced but is outside the scope of this project. 

# Feature 2: List Page (Est. 1.5 Day)

Upon succesful login, typically an HTTP request is sent to server. In this early scope of the project - cors preflight is triggered indicating server-side issue with handling preflight OPTIONS. Assumption at this stage was made to assume success HTTP response from server and bypass the propagation of data from backend server to frontend by making use of local storage. Local storage allows data to persist in the frontend without the use of a backend server. 


# Styling (Est. 1.5 Day)

This stage nears the end of project development lifecycle in which styling is added to ensure a pleasing view of UI layer. CSS was used with no assistence from 3rd party libaries such as bootstrap or material UI. 

# UI Testing and Debug (Est 0.5 Day)

Testing on UI layer entails to search for buggy behavior that the client would experience. To solve any buggy behavior testing was implemented and logging the propagation of data was utilized. Logging propagation of data is essential for when event handlers are implemented. 

# Future Improvements

Beyound the scope of the initial purpose of this project i aim to include more features. Such as allowing user to use app upon loading to home page. Users with accounts can login in and experience more features like archeiving there task and seeing through them, adding reminders, categorizing task into different levels of priorities, allowing a single task item to contain multiple sub-task (steps for a plan) and possibly more. 