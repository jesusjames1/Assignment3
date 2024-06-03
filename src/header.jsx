import React from "react";
import "./index.css";
import "./App.css";

const date=new Date();
const currentYear=date.getFullYear();
console.log(currentYear);

let birthYear=prompt('Enter your birthYear');

let birthName=prompt('Enter your Name');
let birthYear1 = Number(birthYear);
let birthYear2 = currentYear - birthYear1;


function Header() {

if ( birthYear2 > 16 ) {
    return <p className="intro1">Congratulations {birthName}! You can apply for a driver's license.</p>
} else {
    return <p className="intro">Sorry, you cannot apply at this time</p>
}
}

  export default Header;