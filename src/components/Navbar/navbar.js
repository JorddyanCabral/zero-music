import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';

import { routes } from '../../helpers/routes';
import { primaryColor, textColor, secondaryColor } from '../../utils/colors';
const logoPath = require('../../images/louise.png');

const StyledNavbar = styled.nav`
     display: flex;
     flex-direction: row;
     background-color: ${ primaryColor };
     align-items: center;
     justify-content: space-around;
     padding: 20px 0;

     img {
          width: 32px;
          height: 32px;
     }

     a.brand {
          display: flex;
          flex-direction: row;
          font-size: 1.4rem;
          color: ${ textColor };
          font-family: 'Dancing script', cursive;
          align-items: center;
     }

     button.link {
          color: ${ secondaryColor };
          font-size: 1rem;
          background: none;
          border: none;
          transition: all 0.3s;
     
          &:hover {
               color: ${ darken(0.5,secondaryColor) };
               cursor: pointer;
          }
     }

     a.active {
          color: ${ darken(0.5,secondaryColor) };
     }

     ul {
          display: flex;
          flex-direction: row;
          width: 80%;
     }

     li {
          margin: 0 10px;
     }
     
     @media screen and (max-width: 576px){
          ul {
               width: 60%;
          }
     }
`;

export function Navbar({ location }){

     // States
     const [ clicked, setClick ] = useState(false);
     const [ path, setPath ] = useState("");

     // Handle functions
     const handleClick = path => {
          setPath(path);
          setClick(true);
     }

     return (
          <StyledNavbar>
               <a className="brand" href="/">
                    <img src={ logoPath } alt="Logo" />
                    Zero music
               </a>

               <ul>
                    {
                         routes.map( ({ text, path }) => (
                              <li key={ text }>
                                   <button 
                                        className={ `link ${path === location ? 'active' : ''}` } 
                                        onClick={ () => handleClick(path) }
                                   > 
                                        { text } 
                                   </button>
                              </li>
                         ))
                    }
               </ul>

               { clicked ? <Redirect to={ path } /> : null }
          </StyledNavbar>
     )

}