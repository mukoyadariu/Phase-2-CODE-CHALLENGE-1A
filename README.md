Mini Web App for Bank Transactions 

Welcome to the Mini Web App for Bank Transactions! In this project, you'll be building a React application that will allow you to practice and demonstrate your skills in working with components, props, state, events, and data fetching in React. The main goal of this project is to create a user-friendly web app that displays a list of your recent bank transactions and allows you to perform various actions on them, such as filtering, adding, and deleting transactions.
Project Overview

This project aims to create a React web application that interacts with a local JSON DB server to fetch and display bank transaction data. Before you start coding, it's essential to plan and ideate your app, deciding on the user interface and how information will be presented on the page. Take some time to think through the design and structure to ensure a smooth development process.
Requirements

Before diving into the project, please make sure to meet the following requirements:

    Have a well-written README file to document your project and guide others on how to run and use your application effectively.

    Fetch data from a local server running the JSON DB server. A sample database file (db.json) is provided for you to use as your server's DB.

Project Setup & Pre-requisite Data

Follow these steps to set up your project and ensure you have the necessary data for your server:

    Create a new project directory where you'll store all your project files.

    In the project directory, create a db.json file using the provided data or modify it as needed for your application's transactions.

    To run the backend server, execute the following command in your terminal: json-server --watch db.json

    Test your server by visiting this route in your browser: http://localhost:8001/transactions

Project Setup

Now that you have your plan and data in place, let's set up your project environment:

    Create a new project folder in your preferred development environment.

    Create a new GitHub repository for your project (please make it private to protect your work).

    Add your TM (Teaching Mentor) as a contributor to the project. This will enable them to evaluate your project for grading purposes. Rest assured, they won't steal your code!

    Regularly commit your work to the repository to track your progress throughout the development process.

Project Guidelines

Adhering to the following guidelines will help ensure a well-structured and functional project:
Core Deliverables

As a user, the following functionalities should be available to you:

    View a table of all transactions, displaying essential details like date, description, and amount.

    Fill out and submit a form to add a new transaction. This will add the new transaction to the table. Note that the new transaction doesn't have to be persisted to the backend; local changes are sufficient.

    Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be displayed in the transactions table.

Bonus Deliverables

The following bonus deliverables are optional, but if you want an extra challenge, give them a try! Completing bonus deliverables won't impact your score but can be a valuable learning experience:

    Sort transactions alphabetically by category or description. This feature will allow users to arrange transactions in ascending or descending order based on their preferences.

    Implement the ability to delete a transaction. When a user clicks on the delete option, the transaction should be removed from the table.
