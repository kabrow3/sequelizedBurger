# Burger

This is the Eat Da Burger app.

It was completed for the Twelfth Homework Assignment for the Coding Boot Camp.

This is a full stack app that combines both front end and back end coding.

The HTML is rendered with handlebars on the front end displaying a burger image, a list of burgers with buttons next to each burger in the list that allow the user to "devour" the burger, and a text input box where the user can enter the name of a burger they want to add to the list, and a button to submit the burger entered.

The list of burgers is populated from a Sql Database, that is connected to the rest of the app through MySql.

By using Express the app populates the Burger list through a GET request to the MySql database. It allows the user to add a burger the database through a POST request. It allows the user to alter the status of the burgers from undevoured to devoured through a PUT request.