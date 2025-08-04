# Frontend Mentor - Fylo data storage component solution

This is a solution to the [Fylo data storage component](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n) challenge on [Frontend Mentor](https://www.frontendmentor.io/). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Fylo data storage component solution](#frontend-mentor---fylo-data-storage-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [About Me](#about-me)

## Overview

### The challenge

The challenge is to build out this data storage component and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the site depending on their device's screen **size**

### Screenshot

![](/preview.jpg)

### Links

- Solution URL: [Github/Fylo-data-storage-component](https://github.com/Genrex7/fylo-data-storage-component)
- Live Site URL: [Frontend-Mentor/Fylo-data-storage-component](https://fylo-data-storage-component-two-smoky.vercel.app/)

## My process

### Built with

- ![Vite][vite]
- ![NPM][npm]
- ![HTML][html]
- ![CSS][css]
- ![Tailwind CSS][tailwind-css]
- ![Google fonts][google-fonts]
- ![Flexbox][flexbox]
- ![Mobile-First-Workflow][mobile-first-workflow]

### What I learned

1. **Using `::after` for setting the background image**

   - Learned how to create a full-page or partial-page background image using a pseudo-element (`::after`) without adding extra markup.

   - Useful for adding non-blocking decorative layers behind content

2. Using javascript to make the progress-bar slider work

   - Implemented a simple JavaScript function to update the UI based on the data used by the user / or here, on based on the progress bar value.

   ```JavaScript
     function updateUI(percent) {
     // Clamp percent between 0 and 100
     percent = Math.max(0, Math.min(100, percent));
     progressBar.style.width = percent + '%';
     usedGB = Math.round((percent / 100) * TOTAL_GB);
     gbConsumed.textContent = usedGB;
     gbLeft.textContent = TOTAL_GB - usedGB;
     }
   ```

### Useful resources

- [Vite - DOCS](https://vitejs.dev/guide/) - This helped me understand how to set up a project using Vite and connect it to my HTML and CSS files.
- [Tailwind CSS - DOCS](https://tailwindcss.com/docs/installation/using-vite) - This helped me understand how to use tailwind css for styling the html page.
- [Google Fonts](https://fonts.google.com/) - A great resource for importing fonts easily and making text look unique.

## About Me

- ![Frontend Mentor][frontendmentor] - [@Genrex7](https://www.frontendmentor.io/profile/Genrex7)
- ![Twitter][x] - [@DeepakKMeena07](https://x.com/DeepakKMeena07)

<!-- BADGES -->

[frontendmentor]: https://img.shields.io/badge/Frontend%20Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white
[vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[npm]: https://img.shields.io/badge/NPM-green?style=for-the-badge&logo=npm&logoColor=white
[html]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[css]: https://img.shields.io/badge/CSS-639?style=for-the-badge&logo=css&logoColor=fff
[tailwind-css]: https://img.shields.io/badge/Tailwind_CSS-000?style=for-the-badge&logo=tailwind-css&logoColor=00ADFF
[google-fonts]: https://img.shields.io/badge/Google%20Fonts-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white
[flexbox]: https://img.shields.io/badge/Flexbox-violet?style=for-the-badge&logo=css&logoColor=white
[grid]: https://img.shields.io/badge/Grid-000?style=for-the-badge&logo=css&logoColor=white
[mobile-first-workflow]: https://img.shields.io/badge/Mobile%20First%20Workflow-000?style=for-the-badge&logo=mobile&logoColor=white
[x]: https://img.shields.io/badge/twitter-000?style=for-the-badge&logo=x&logoColor=white
