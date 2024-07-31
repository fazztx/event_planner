import React from 'react';

// 1. In this practice exercise you will create one footer component which will be included in the **EventPlanner.jsx** component. 
// With the help of this you will understand the concept of composition if components as well.

// 2. For this you need to right click on **Components** folder after selecting it and select **New File**. 
// Give this new file name Footer.jsx. This will create a new component inside **Components** folder.

// 3. Inside Footer.jsx component, first create basic layout for the function component.
//Hint: Use function component boiler plate to create this layout.

// 4. create one <footer> tag and you can include any information you want to display about the organization.

//Hint: Use footer tag and include multiple tags such as <p>, <div> or <section> tag.

//function Footer() {
const Footer = () => {
    //Function that will always return

    return (

        <footer>
            <h2>Juansin</h2>
            <p>&copy; Event Planner Organization. All rights reserved.</p>
        </footer>
    );

}

//To use it on other components
export default Footer;