# YourTravel

Welcome to my second website!

This website was build as a **development milestone project** for the completion of the Interactive Frontend Development module and it's part of the learning material for Code Institute's Fullstack Web Developer program.

A live **desktop demo** can be found [here](https://gaspar91.github.io/mlsp2/).

The **source code** for this project can be found [here](https://github.com/gaspar91/mlsp2).


# Table of Contents

- [UX](#ux)
- [Design Process](#design-process)
- [User Stories](#user-stories)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Observations](#observations)
- [Deployment](#deployment)
- [Credits](#credits)


# UX

This website was build as a source of turism in Oslo in order to help travellers and locals to enjoy what the city has to offer.

The website offers users the opportunity to discover the city though their services with a map which provides useful points of interest such as accomodation, restaurants, parks, activities, bars and coffee shops, and a gallery with photos from the city to motivate the users to travel.


# Design Process XXXXXX

You'll be able to view the sketches, wireframes, and mockups for this project in the **Wireframes** folder, located within the **Static** folder in the  [Github project repository](https://github.com/gaspar91/mlsp2).

I used [Balsamiq](https://balsamiq.com/) to build the wireframes, so you might need the program in order to view some of the documents.


# User Stories

### User Story One:

As a person visiting a new place I would like to know witch are the most recommended places to visit and the best accomodations to stay.

### User Story Two:

It's important to me that there are several places to visit to keep me entertained and have a fun experience.

### User Story Three:

It's important to me to see what the city looks like and I would like to see that through social media, with images and other people's comments.

### User Story Three:

Accessibility is fundamental for me, so if I can search for the website when I'm walking or I'm far away from my computer I can just search for it on my phone or tablet.

### User Story Four:

As someone who doesn't like to waist time with giving to much detail, filling up a short and quick form, in order to get more information is really nice and motivates me to do it.

### User Story Five:

It is also important that there is a confirmation of my submission.


# Features

### Existing Features

- All the pages contain a navigation bar with the logo in the top corner left and the pages in the top center of the screen.

- In order to ensure that the user first knows what the website has to offer the homepage contains a “Start” button, In the middle of the screen, that leads to the "About" page.
- The “About” page provides a paragraph with information about what the website refers to and it contains a “Try it” button that will lead to the “Explore” page.
- Once In the “Explore” page the user can browse and click on six different buttons with specific locations.
- When a button is clicked, several markers appear in the map. 
- When the user clicks on one of the markers, a pop-up window appears with the name of the location, a photo and the address.
- If the user clicks on the pop-up window it will open a separate webpage of the specific location.
- The "register" button leads the user to the "Contact" page.
- The “Contact” page contains a small form, in order for the user to resgister if they wish to, and contact social media logos in the right side of the screen in case the user wants more information than the one that is given in the website.
- If the user submites the form without filling it correctly, a pop-up window appears and suggestes that the user fills the form correctly.
- When the user submits the form, a pop-up window appears confirming that it was successfully registered.
- After successfully submitting the form, the owner of the website receives an email with the information that was filled in the form.

### Features Left to Implement

- In future versions of the website I would like to implement some video content and an image gallery in order to make the website more appealing and help the user see what the city has to provide in order to incentivate the user to register.
- I would also like to implement a keyword search box in the nav bar so that if user's wish to search for something by name they can locate something as quick as possible.
- I would also like to create a banner about new events or places that are or will be available.
- I would also like to create a comment page so users can see how satisfied the previous users were with the company and the services provided.
- I believe a Popup Chat Window would be a good way to make the website more efficient if the user needs more information.


# Technologies Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
  - The project uses HTML5 to construct the pages within the application.
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
  - The project uses CSS3 in order to style the HTML5 and Bootstrap elements and components.
- [Bootstrap (ver 4.4.1)](https://getbootstrap.com/)
  - The project uses the Bootstrap 4 grid and components in order to achieve a responsive layout and styling.
- [Jquery (ver 3.4.1)](https://jquery.com/download/)
  - The project uses the Jquery in order to make it much easier to use JavaScript.


# Testing

**1. Logo:**

   1. Go to a page that is not the homepage.
   2. Try to click on the logo and verify that it leads you to the homepage.

**2. Navigation Bar Pages:**

   1. Go to the navigation bar.
   2. Hover over the pages and verify that they change color individualy.
   3. Try to click on them and verify that you are able to go to the page you selected.

**3. Map:**

   1. Go to the Explore page.
   2. Hover over the buttons and verify that they change color.
   3. Try to click on the six first buttons and verify that a number of markers appears in the map.
   4. Try to click on the markers and verify that a pop-up window appears containing the name, address and image of the location.
   5. Try to click on the pop-up window and verify that it opens the webpage of the location in a new window.
   8. Try to close the pop-up window on the "X" and verify that it closes.
   9. Try to click on another button and verify that the markers from the previous button are now replaced by the markers of the new one.
   10. Try to click the last button, "register", and verify that it leads you to the "Contact" page.

**4. Contact form:**

   1. Go to the "Contact" page.
   2. Try to submit the empty form and verify that an error message about the required fields appears.
   3. Try to click on the empty field and verify that the auto-fill is available and when you click on it the name and email are automatically filled.
   4. Try to submit the form without filling in one of the fields and verify that an error message about the required field appears.
   5. Try to fill in the email address field without an "@", "." or a proper pattern in the email and verify that an error message appears explaining that an "@", "." or a valid email is missing and it suggests you should write it correctly.
   6. Try to click on a field and verify that a shadow appears around it.
   7. Try to submit the form, after filling up the fields correctly, and verify that a pop-up window appears confirming that the form was submitted.
   8. When the form is submitted, open your email account and verify that you received an email with a submission (this will only happen if you are the owner of the website).

**5. Social Media Icons:**
   1. Hover over the social media icons and verify that they change color individualy.
   2. Try to click on any social media icon and verify that it opens a new page.


# Observations

- The website has been checked for responsiveness on a multitude of screen sizes from PC to portable devices, such as tablets and mobile phones.

  - As far as vertical screens all features were found to be fully responsive and fit well within each screen size.
  - On the other hand, horizontal screens didn't respond so well and some of the features don't fit properly.

- All HTML code was run through the [W3C HTML Validator](https://validator.w3.org/) and returned no errors.


# Deployment

The website is hosted via [GitHub](https://github.com/), with the source code being available on [my repository](https://github.com/gaspar91/mlsp2).

### How I Did It

- To deploy this project I followed these steps:

    1. Open my [GitHub repository](https://github.com/gaspar91/mlsp2) project page.

    2. Go to **Settings** at the top right of the page.

    3. Scroll down to the **Github Pages** section.

    4. Select **Master Branch** in the *Source* field and save it.

    5. After refreshing the page, go back to **Github Pages** section were now it will say "*Your site is published at*" with a link to the website in front of it.

### How You Can Access It
- In order to run this project locally you should follow these steps:

    1. Click the green *'clone or download'* button in the [GitHub repository](https://github.com/gaspar91/mlsp2) for the project.

    2. Copy the link provided by clicking the **clipboard button** to the right of the link.

    3. In your terminal, type ***git clone***, paste in the previously copied link, and hit return.

    4. The website should now be installed on your device.

- If you already have an account on [GitHub](https://github.com/) then you should follow these steps:

    1. Make sure that you are logged in to your [GitHub account](https://github.com/).

    2. In the [project repository](https://github.com/gaspar91/mlsp2), click the small green button reading **gitpod** which is placed next to the **clone or download** button.
