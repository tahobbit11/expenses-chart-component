# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![](./images/Screenshot%202023-06-24%20194245.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/expenseschartcomponent-t21fLmxcEe](https://www.frontendmentor.io/solutions/expenseschartcomponent-t21fLmxcEe)
- Live Site URL: [https://tahobbit11.github.io/expenses-chart-component/](https://tahobbit11.github.io/expenses-chart-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
- JSON

### What I learned

I learned how to target specific elements in a forEach loop so they could be used to change different aspects of the site

To see how you can add code snippets, see below:

```html
<div class="graph-container">
            <p class="spending-day" style="visibility: hidden;"></p>
            <div class="graph"></div>
            <p class="day"></p>
          </div>
```
```css
     .spending-day {
      font-size: .6em;
      padding: 2px;
      background-color: black;
      color: white;
      border-radius: 2px;
      margin-bottom: 5px;
     }
```
```js
graphs.forEach((graph, index) => {
    spending.forEach((spend, spends) => {
        graph.addEventListener("click", () => {
            if(spend.style.visibility == "hidden" && spends == index){
                spend.style.visibility = "visible";
            } else {
                spend.style.visibility = "hidden";
            }    
        })
    })
    if(date === index){
        graph.style.backgroundColor = "hsl(186, 34%, 60%)";
    } else {
        graph.style.backgroundColor = "hsl(10, 79%, 65%)";
    }
});
```

### Continued development

I can come back in the future to make little animations for when text pops up or when it changes colors

## Author

- Frontend Mentor - [@tahobbit11](https://www.frontendmentor.io/profile/tahobbit11)
