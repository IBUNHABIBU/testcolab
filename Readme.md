[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<br />

<p align="center">
  <a href="git@github.com:IBUNHABIBU/testcolab.git">
    <p align="center">
      <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rails/rails.png" alt="Rails" width="100" height="100">
      <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="React" width="100" height="100">
      <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" alt="Redux" width="100" height="100">
    </p>
  </a>

  <h2 align="center"> PORTFOLIO </h2>
  <h3 align="center"> This is the personal porfolio site </h3>

  <p align="center">
    <a href="https://github.com/IBUNHABIBU/testcolab/issues">Report Bug</a>
    <a href="https://github.com/IBUNHABIBU/testcolab/issues">Request Feature</a>
  </p>
</p>

![screenshot](https://github.com/IBUNHABIBU/testcolab/blob/dev/public/HomePage.PNG)

## Table of Contents

* [About the Project](#about-the-project)
* [Story](#story)
  * [Built With](#built-with)
  * [Features](#features)
  * [Requirements](#requirements)
  * [Useful commands](#useful-commands)
  * [Live Demo](#live-demo)
* [Contact](#Authors)
* [Acknowledgements](#Acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project
Car rental is the react front end application that uses rails api to book car rent.

[Link of the backend api](https://github.com/IBUNHABIBU/car-rent-booking-api)

### Story

### Features

- Admin can add skills to the list of skills
- Admin can add projects to the list of projects

## Version2 features

    
<!-- BUILD WITH -->
## Built With

This project was built using these technologies.
* React


### Requirement

- Node.js
- NPM
- big.js
- propTypes

### How to Install 

To run this locally, clone the repository, navigate to it's containing directory.

#### Follow these commands step by step:-

`
 git@github.com:IBUNHABIBU/testcolab.git
`

`
cd testcolab
`

 `$npm install `
 
 
 `$npm run start`
 
Enjoy playing it.

### Testing

 `$npm run test `


## Useful Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm start` | Build project and open web server running project |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |
| `npm run test` | Run all test suites |
| `npm run lint -- --fix` | Fix all lint errors automatically |

<!-- ### How to play -->

<!-- CONTACT -->


## Live Demo
[Live Demo ](salum-microverse-testcolab.netlify.app)

## Challenges faced

It was hard to implement image upload due to the following reasons

* in the front end these methods solved the issues
    
    I used formData
    I used withCredentials: true
    in the formData.append("modelname[attribue]", data)

* setMessage was not working due to history.push(/models)

    after removing it it worked

 After deploying my api to linode server my front end was not showingup
 after inspecting the element I found the following error
 `r.js:187 Mixed Content: The page at 'https://salum-microverse-testcolab.netlify.app/' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://car.darlive.cyou/logged_in'. This request has been blocked; the content must be served over HTTPS.`
 the solution is to use ssl certificate

## Authors

👤 **Salum Habibu** 
    
* Github: [IBUNHABIBU](https://github.com/IBUNHABIBU)
* Twitter: [@ibunhabibu](https://twitter.com/Ibunhabibu)
* LinkedIn: [Salum Habibu Kombo](https://www.linkedin.com/in/salum-habibu/)

## Show your support

Give a :star: if you like this project!


## Acknowledgments
Credits go to  <!--Mr Christian Ceamatu who helped me when I'm stuck. -->
all my standup team for their help.

[Murat Kormaz](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign) for his design idea

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/IBUNHABIBU/testcolab.svg?style=flat-square
[contributors-url]: https://github.com/IBUNHABIBU/testcolab/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/IBUNHABIBU/testcolab.svg?style=flat-square
[forks-url]: https://github.com/IBUNHABIBU/testcolab/network/members
[stars-shield]: https://img.shields.io/github/stars/IBUNHABIBU/testcolab.svg?style=flat-square
[stars-url]: https://github.com/IBUNHABIBU/testcolab/stargazers
[issues-shield]: https://img.shields.io/github/issues/IBUNHABIBU/testcolab.svg?style=flat-square
[issues-url]: https://github.com/IBUNHABIBU/testcolab/issues

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
