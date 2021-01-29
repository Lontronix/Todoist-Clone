import React from 'react';
import {FaPizzaSlice, FAPizzaSlice} from 'react-icons/fa';

export const Header = () => {
   return <header className="header" data-testid="header">
       <nav>
           <div className="logo">
               <img src = "images/logo.png" alt="Todoist Clone"/>
           </div>
           <div className="settings">
               <ul>
                   <li className="settings__add">+</li>
                   <li><FaPizzaSlice></FaPizzaSlice></li>
               </ul>
           </div>
       </nav>
   </header>
};
