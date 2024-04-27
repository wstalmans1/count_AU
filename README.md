THIS IS MY MAIN LEARNING REF TO BUILD A SIMPLE DAPP 

initialisations for a local development project with requirements:
1) the project syncs towards a github repository
2) using npm
3) react and web3 for the front-end
4) Hardhat for the backend
5) clean folder structure with one folder for the frontend and one folder for the backend
6) using dotenv for both folders

SYSTEMATIC STEPS
1. Create a Project Directory and Initialize Git
First, create a main project folder and initialize Git to begin tracking your changes:

    mkdir myProject
    cd myProject
    git init

2. Setup GitHub Repository
Create a new repository on GitHub. Link your local repository to the GitHub repository:

    git remote add origin https://github.com/yourusername/myProject.git

3. Create Frontend and Backend Directories
Set up separate directories within your project for frontend and backend:

    mkdir frontend
    mkdir backend

4. Initialize the Frontend (React + Web3)
Navigate to the frontend directory, initialize a new React application, and install Web3:

    cd frontend
    npx create-react-app .
    npm install web3

to check that the react app is working, launch the development server from within the frontend folder:

    npm start

to stop the development server:

    control+c

5. Setup dotenv for Frontend
Set up environment management for your frontend. In the frontend folder:

    npm install dotenv
    touch .env

6. Initialize the Backend (Hardhat)
Navigate to the backend directory and set up Hardhat.

    npm init -y
    npm install --save-dev hardhat
    npx hardhat

Choose the "Create an empty hardhat.config.js" option when prompted, or any other template if you prefer starting with examples.

7. Setup dotenv for Backend
Similarly, set up environment management for your backend.

    npm install dotenv
    touch .env

8. Push Initial Setup to GitHub
Add your initial project setup to version control and push it to GitHub. From the root directory:

    git add .
    git commit -m "Initial project setup with frontend and backend directories"
    git push -u origin main

10. Regularly Update Your GitHub Repository
Make it a practice to regularly commit your changes and push them to GitHub to ensure that your work is safely backed up.

11. Further Development
Continue developing your project:

Develop your React components and integrate Web3 functionalities.
Develop your Solidity smart contracts within the Hardhat framework.
Write and run tests for both frontend and backend.
Regularly update your .env files as needed (remember not to push .env files to GitHub—use .gitignore to exclude them).
By following these steps, you'll set up a structured and scalable development environment tailored to your project requirements, leveraging best practices for version control and package management.
