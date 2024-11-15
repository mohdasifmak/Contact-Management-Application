Contact Management System
A Contact Management System built with HTML, CSS, Bootstrap, javaScript, Node.js, Express and MongoDB, allowing users to manage contact information efficiently. This project supports adding, editing and deleting contacts with a responsive UI.

Features
CRUD Operations: Create, Read, Update, Delete contacts.
User Interface: Bootstrap-styled forms and tables for easy navigation.
Responsive Design: Ensures compatibility across devices.
API Integration: Backend APIs for handling requests.
Dynamic Data Management: MongoDB for storing contact information.

Tech Stack
Backend: Node.js, Express.js
Database: MongoDB
Frontend: HTML, CSS, Bootstrap, JavaScript

Installation Prerequisites
Node.js
MongoDB
Git installed on your system.
Setup Instructions
Clone the Repository

Install Dependencies:

bash
npm install

Add the following variables:

Copy code
PORT=3000
MONGO_URI=mongodb://localhost:27017/contact_management
Seed the Database:

Run the script to insert dummy data:
node index.js

Start the Application:
node app.js

Access the App:

Open your browser and navigate to:
http://localhost:3000
