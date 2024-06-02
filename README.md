# React-Intro


React JS
.ts

SPA (Single Page Application) => Whole website contains a single HTML Page
Components (Grp codes)
Data Binding => Uni Directional, flow of the data
Virtual DOM
                            home.jsx 

        BannerSaction.jsx           Navbar.jsx              section.jsx         footer.jsx


                                    homePage.jsx          aboutUs.jsx



Virtual DOM:

        I updated <p> in <body> -----------> Virtual Dom -------> DOM ------> HTML Manipulations reflected on web page


SPA: 

index.html
    <html>
        <body>
            <div id="root">
            </div>
        </body>    
    </html>


Components:
    >> Class Components (Older version)
    >> Function Components (Newest Edition)



Redux  (State Management)
Hooks  (Lifecycle Methods)


npx => node package execution
npx create-react-app project-name

## RUN:
cd (projectName)
npm start


### Components and Workflow
## State & Props

### State =>  Data required for a component

<!-- var name = "DevTown" -->
<!-- state = {
    [
        {

        },
        {

        }
    ]
} -->

### Hooks -> useState(), setState()

import {useState} from "react";
const [variable, function] = useState();
const [count, setCount] = useState();

const [num, setNum] useState(0);
num += 1;


btn => 

### Props (Where we will be passing data among the components)
## Parent Node -> Child Node
## eg: App.js -> ClassComponent.jsx | FunctionComponent.jsx

<FunctionComponent name="DevTown" age={20} />


