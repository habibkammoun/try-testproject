import React from "react";
import { ReactDOM } from "react";
import './styles2.css';
import FormButton from "./FormButton";
import FormCreateAccount from "./FormCreateAccount";
import {useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";


const MenuForm = props =>
(
  
    <div>
      
      <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    
    <h1>|-MENU-|</h1>
    
    <button href="#" class="btn">Home</button>
    <button href="#" class="btn">Camera #1</button>
    <button href="#" class="btn">Camera #2</button>
    <button href="#" class="btn">Mixage</button>
    
    <p class="footer">©2022 COPYRIGHT</p>
  </body>
      </div>

    );

    export default MenuForm;
    
    
    

    
    