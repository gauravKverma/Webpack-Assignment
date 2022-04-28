import {navbar} from "../components/navbar";
console.log('navbar:', navbar)

import {body} from "../components/body";

import "../styles/navbar.css"

import "../styles/body.css"

let navbar_div=document.querySelector("#navbar");
navbar_div.innerHTML=navbar();

let body_section=document.querySelector("#body");
body_section.innerHTML=body();