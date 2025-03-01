# Harsha Fernando - Portfolio

This repository contains the source code for my personal portfolio website. The website showcases my professional journey, skills, and projects. It is built using HTML, CSS, and JavaScript, and is hosted on GitHub Pages.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [JavaScript Functions](#javascript-functions)
  - [revealTimelineItems](#revealtimelineitems)
  - [observeSections](#observesections)
  - [Navbar Toggle](#navbar-toggle)
  - [Typing Effect](#typing-effect)
  - [Overlay Functionality](#overlay-functionality)
- [CSS Styles](#css-styles)
- [Future Improvements](#future-improvements)

## Features

- Responsive design using Bootstrap
- Lazy loading for images to improve performance
- Intersection Observer API for section highlighting and animations
- Typing effect for dynamic text
- Overlay functionality for detailed information on timeline items

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap
- GitHub Pages

## File Structure
my-portfolio/ ├── assets/ ├── css/ ├── js/  ├── index.html └── README.md

## JavaScript Functions

### Reveal Timeline Items
This function reveals timeline items as they come into view when the user scrolls. It adds the `visible` class to the timeline items that are within the viewport.

### Observe Sections
This function uses the Intersection Observer API to observe sections of the page and add or remove the active class based on their visibility in the viewport.

### Navbar Toggle
This function handles the collapse of the navbar when clicking outside of it.

### Typing Effect
This function creates a typing effect for dynamic text on the page.

### Overlay Functionality
This function handles the display of an overlay with detailed information when a timeline item is clicked.

## CSS Styles
The CSS styles define the layout, animations, and visual effects for the portfolio website.

## Future Improvements

Need to improve active link highlighting and nav link scroll because there are still some inconsistencies.
