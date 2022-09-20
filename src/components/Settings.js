import React from "react";

// TODO : make interface
export let SETTINGS_NB_IMAGES_PER_PAGE = 4;


const Settings = ({ handleSubmit, history }) => {
    
    function onNbImagesPerPageChange(event)
    {
        handleSubmit(event, history, "last search")
        SETTINGS_NB_IMAGES_PER_PAGE = event.target.value
    }

    return (
        <form className="settings-form" >
            <label>
                Nombre d'images par page :
                <select onChange={onNbImagesPerPageChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4" selected>4</option>
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="32">32</option>
                </select>

            </label>
        </form>
    );
};

export default Settings
