# Next.js Responsive App Documentation

Welcome to the documentation for the Next.js responsive app. This guide will walk you through setting up and running the app, showcasing its features, explaining its project structure, dependencies, and more.

## Table of Contents

1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Running the App](#running-the-app)
4. [Features and Functionality](#features-and-functionality)
5. [Styling and Layout](#styling-and-layout)
6. [Dependencies](#dependencies)
7. [Known Issues](#known-issues)

## 1. Introduction

The Next.js responsive app is a demonstration of building a mobile-first, responsive, and interactive user interface using Next.js, React, and Sass. The app primarily consists of two main pages: the Posts listing and the Favorite posts listing. Users can engage with the heart icon to add posts to their favorites and later view them on the Favorites page.

## 2. Project Structure

The project is organized as follows:

- **components**: This directory holds React components used throughout the app.
- **pages**: Here, you'll find the Next.js page components for both Posts listing and Favorites listing.
- **styles**: Sass modules for styling the components are stored here.
- **public**: Static assets like images are stored in this directory.
- **db.json**: Mock data for posts.
  
## 3. Running the App

To run the app locally, follow these steps:

1. Open a terminal and navigate to the root folder of the project.
2. Run the following commands:

   ```bash
   cd .\fav-posts\
   npm install
   json-server --watch db.json --port 5000
   npm run dev
   ```

3. The app will be accessible at [http://localhost:3000](http://localhost:3000).
4. The JSON Server is also running, and you can access the mock data at [http://localhost:5000/posts](http://localhost:5000/posts).

## 4. Features and Functionality

The app demonstrates the following features:

- **Posts Listing**: A display of posts fetched from the mock data.
- **Favorite Posts**: Users can mark posts as favorites using the heart icon.
- **Responsive Design**: The app is designed with a mobile-first approach and adapts to various screen sizes.
- **Local Storage**: Utilizes local storage to save and retrieve favorite posts.

## 5. Styling and Layout

The app's styling is managed using Sass. It employs a mobile-first design philosophy and implements responsive layouts to cater to desktop views as well. The navigation bar's position adjusts based on the viewport size.

## 6. Dependencies

The app relies on the following dependencies:

- **Next.js**: A framework for server-rendered React applications.
- **Sass**: A preprocessor for styling components.
- **Font Awesome**: An icon library used for heart and comments icons.

## 7. Known Issues

- Users may experience inconsistencies when accessing the app on older browsers.

Feel free to explore and enjoy the Next.js responsive app! If you encounter any issues or have suggestions, please don't hesitate to get in touch. Your feedback is valuable.