# De-sky Hotel

This is a hotel web app built with ReactJs. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [To use](#usage)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](src/assets/screenshot.png)

### Links

- Solution URL: (https://github.com/faozziyyah/De-sky-hotel)
- Live link: (https://faozziyyah.github.io/De-sky-hotel/)

## My process

### Built with

- JSX
- CSS
- Flexbox
- [React](https://reactjs.org/) - React: JS library

### What I learned

- How to use animations in React
- Passing props

```React.js
return ( 
        <div className={styles.composition}>
        <img 
        sizes={props.size}
        className={props.className}
        alt={props.alt}
        src={props.src}
        />
        </div>
);
```

## Usage

To use this app, you can clone this repo to your local machine, then yarn install to install dependencies and yarn start to view live on your local host.