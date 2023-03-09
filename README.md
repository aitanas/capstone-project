![Lookat logo](/img/Lookat-logo-03.svg)

## Epicodus Capstone
# Design Portfolio and Store


React website serving as a portfolio and online store for graphic designer and illustrator Natalie Shough and her personal brand, Lookat.

## Navigation

»	[Technologies Used](#technologies-used)

»	[Objectives](#objectives)

»	[Component Diagram](#component-diagram)

»	[Initial Mockups](#site-mockups)

»	[Setup & Installation](#setup--installation)

»	[Known Bugs](#known-bugs)

»	[Research Log](#research--planning-log)

»	[Thanks](#thank-you)

»	[License](#license)


---


## Technologies Used

* React
* Next.js
* JavaScript / JSX
* Tailwind CSS
* TypeScript

## Objectives

### Minimum Viable Product

Styled splash page with links to **Portfolio**, **Products**, and **About** sections. Each section will be broken out as follows:

#### About
* Blurb about the brand, Lookat
* Blurb about the designer, Natalie
* Links to relevant social media sites

#### Portfolio
* Photos and examples of illustration / design work
* Designer's resume

#### Products
* List of products
* Read functionality (Detail for each product)


### Stretch Goals

#### Overall
* Utilize Tailwind CSS for site styling
* Add sleek, responsive animation throughout site while user scrolls/navigates
* Ensure site adheres to [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) guidelines

#### Portfolio

* Add responsive JavaScript and CSS to spruce up portfolio works with content details appearing on hover, etc.
* Add CRUD functionality for portfolio works
* Contact form (routed directly to designer's email)

#### Products

* Full CRUD functionality
* Add authorization and authentication: only authenticated users may utilize Create, Update, and Delete functionality
* Add Stripe API functionality to allow users to purchase products directly from the website
* Add a NoSQL database to store products and sales information


## Component Diagram
![Component diagram](/img/component-diagram.png)

## Site Mockups
![Homepage mockup](/img/home-mockup.png)

![Portfolio mockup](/img/portfolio-mockup.png)

![Product page mockups](/img/product-mockup.png)


## Setup & Installation

1. Clone this repository to your workspace.
```
$ git clone https://github.com/aitanas/capstone-project.git
```
2. While in the root folder, navigate to the `lookat` directory.
3. Install packages and dependencies with `npm i` or `npm install`.
4. Build the project in development mode in your localhost:3000 server.
```
$ npm run dev
```
5. Enjoy!

## Known Bugs
* Transitions do not work on the second load-through -- likely a decpreciation issue; needs further research.
* When scrolling down, some images clip into the navigation bar.

## Research & Planning Log
### Friday, 02/17
* **8:15 am** begin filling out capstone proposal
* **8:45 am** capstone research
  * Video (15:00): [Shopify Hydrogen and Oxygen](https://www.youtube.com/watch?v=yvRzIIs6Trw&ab_channel=CodingwithJan-ShopifyDeveloper)
  * Video (7:30): [What is WooCommerce?](https://www.youtube.com/watch?v=kfZMnCGGqYc&ab_channel=IWDAgency)
    * *NTS: both of these options offer far more than I need for simple API integration in an existing web app -- and they have a fair amount of subscription fees. Going to look into other options.*
* **9:10 am** ask ChatGPT for library and framework reccommendations to use for a React web store. ChatGPT suggested I look into the following:
  * **Stripe**
  * **Commerce.js**
  * **Snipcart**
  * **Shopify Buy SDK**
  * **Gatsby + Shopify**
* **9:20 am** Stripe API research
  * Video (23:04): [How To Accept Payments With Stripe](https://www.youtube.com/watch?v=1r-F3FIONl8&ab_channel=WebDevSimplified)
    * WebDevSimplified has an entire video tutorial series on the Stripe API. This looks like a promising stretch goal!
* **10:38 am** Playing with [Typescript](https://www.typescriptlang.org/play)
  * Video: (2:20) [TypeScript in 100 Seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA&ab_channel=Fireship)
    * TypeScript seems to be fairly easy to integrate into existing JavaScript code, just adds a lot more structure for a lot less headache.
* **11:15 am** Reading through TypeScript tutorials, taking notes on implementation within different React frameworks
  * [TypeScript for JS Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
  * [TypeScript with React](https://www.typescriptlang.org/docs/handbook/react.html)
  * [Create React App: TypeScript](https://create-react-app.dev/docs/adding-typescript/)
* **11:50 am** Start Fireship video on JavaScript Frameworks
  * [I built the same app 10 times // Which JS Framework is best?](https://www.youtube.com/watch?v=cuHDQhDhvPE&ab_channel=Fireship)
    * Interested in Next.js for React

> Lunch

* **2:00 pm** Begin Next.js [tutorial](https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website)
* **2:50 pm** Still going through Next.js tutorial
* **3:54 pm** Finish Next.js foundations tutorial. Start going through LHTP React with NoSQL reading
  * *NTS: Check out the [Next.js app tutorial](https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website) after more React foundations*
* **4:40 pm** Reading about different built-in hooks in [React Docs](https://beta.reactjs.org/reference/react)

----
### Friday, 02/24
* **8:05 am** Begin mapping out component diagrams and rough project structure on Figma

* **9:10 am** Continuing work on Figma, and gathering inspo for portfolio portion
  * https://www.jeremiahshoaf.com/
  * https://www.typewolf.com/

* **10:15 am** Finish up basic component diagram
* **10:30 am** Build out basic project structure with Next.js
* **11:00 am** Watching [video about custom hooks](https://www.youtube.com/watch?v=6ThXsUwLWvc&ab_channel=WebDevSimplified)
* **3:00 pm** Finish basic site page mockups on Figma

## Friday, 03/03
* **9:15 am** Learning about state in Next.js; reading [this article](https://blog.logrocket.com/guide-state-management-next-js/)
* **9:50 am** Jumping around [this video](https://www.youtube.com/watch?v=T63nY70eZF0&ab_channel=developedbyed) to review Next.js concepts
* **10:25 am** Still watching above video

## Thank You

* Natalie, for her willingness, creativity, patience, and support
* My fellow Epicodus cohort, for providing unending support and laughs
* [TypeWolf](https://www.typewolf.com/) for curated font suggestions

## License

**MIT License**

Copyright (c) 2023 Aitana Shough

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.