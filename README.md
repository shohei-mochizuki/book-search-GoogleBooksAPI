# Portfolio - React [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## DESCRIPTION 
This application allows you to search books online using Google Books API. You can save your favorite books and see the list of them.

## TABLE OF CONTENTS
[INSTALLATION](#installation)<br>
[USAGE](#usage)<br>
[LICENSE](#license)<br>
[CONTRIBUTION](#contribution)<br>
[TESTS](#tests)<br>
[SCREENSHOTS](#screenshots)<br>
[QUESTIONS](#questions)

## INSTALLATION 
### HEROKU
If you access the application on [Heroku](https://book-search-googlebooksapi.herokuapp.com/), you can use the application on Heroku.

### LOCAL
This application requires 1.JavaScript, 2.Node.JS (version 16, not the latest), 3.Node package manager and 4.MongoDB. In a blank folder, put necessary files (refer to the [TESTS section](#tests) for the details) and open the command line. In the command line, move to this folder and then type "npm install". Make sure that a folder called "node_modules" and a file called package-lock.json are created in all the root, server and client folders. Then type "npm run develop" and the homepage will show up automatically.

## USAGE 
On the landing page, you can search books by typing key words in the input form at the top. When you click "Submit Search", your search result will show up.<br>
When you click "Login/Sign Up" button at the right top corner of the page, it will take you to Login/Signup form and once you are logged in or signed up, you will see a button "Save this Book!" at the bottom of each movie section. Once you saved the movie, you can see this movie on the page "See Your Books", which you can find in the navigation bar. On this "See Your Books" page, you can also delete books from your favorite by clicking the button "Delete this Book!".<br>
Once you finish using this website, you can logout by clicking the button "Logout" in the navigation bar.

## LICENSE 
MIT:<br>
Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the “Software”), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
permit persons to whom the Software is furnished to do so.

## CONTRIBUTION 
Feel free to develop this application by forking the GitHub repository or give me advice on what I can improve on this portfolio. I am always open to any suggestions and ideas!

## TESTS 
If you access the application on [Heroku](https://book-search-googlebooksapi.herokuapp.com/), you can test the application on Heroku. If you would like to test it on your local computer, copy the following files and folder to your computer:
```md
.
├── client/
|   ├── public/
|   |   ├── favicon.ico
|   |   ├── index.html
|   |   ├── logo192.png
|   |   ├── logo512.png
|   |   ├── manifest.json
|   |   └── robots.txt
|   ├── src/
|   |   ├── components
|   |   |   ├── LoginForm.js
|   |   |   ├── Navbar.js
|   |   |   └── SignupForm.js
|   |   ├── pages
|   |   |   ├── SavedBooks.js
|   |   |   └── SearchBooks.js
|   |   ├── utils
|   |   |   ├── API.js
|   |   |   ├── auth.js
|   |   |   ├── localStorage.js
|   |   |   ├── mutations.js
|   |   |   └── queries.js
|   |   ├── App.js
|   |   ├── index.css
|   |   └── index.js
|   └── package.json
├── server/
|   ├── config/
|   |   └── connection.js
|   ├── models/
|   |   ├── Book.js
|   |   ├── index.js
|   |   └── User.js
|   ├── schemas/
|   |   ├── index.js
|   |   ├── resolvers.js
|   |   └── typeDefs.js
|   ├── utils/
|   |   └── auth.js
|   ├── package.json
|   └── server.js
└── package.json
``` 

## SCREENSHOTS

### Login/Signup prompt
![image](https://user-images.githubusercontent.com/121307266/227832522-ac596fb6-9a3c-4872-8114-35661a278893.png)

### Book search page
![image](https://user-images.githubusercontent.com/121307266/227832556-a3e3907c-ac63-4db3-b1be-388ad7fa2fac.png)

### Saved books page
![image](https://user-images.githubusercontent.com/121307266/227832587-15ac4204-4a74-46d0-b408-bcbb2e79b878.png)

## QUESTIONS 
If you have any questions, feel free to reach out to me!<br>
GitHub page: [https://github.com/shohei-mochizuki](https://github.com/shohei-mochizuki)<br>
Email: [shohei.mochizuki.jp@gmail.com](mailto:shohei.mochizuki.jp@gmail.com)
