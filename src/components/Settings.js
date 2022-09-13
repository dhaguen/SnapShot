import React, { useState } from "react";

import { NavLink } from 'react-router-dom';

const Settings = ({ handleSubmit, history }) => {
    
    function handleChange(event)
    {
        handleSubmit(event, history, event.target.value)
    }

    return (

        <form className="settings-form" >
            <label>
                 
                <select onChange={handleChange}>
                    <option value="grapefruit">Pamplemousse</option>
                    <option value="lime">Citron vert</option>
                    <option value="coconut">Noix de coco</option>
                    <option value="mango">Mangue</option>
                </select>
            </label>
        </form>
    );
};

export default Settings