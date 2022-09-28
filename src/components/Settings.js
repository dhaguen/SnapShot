import React from "react";

// TODO : make interface
export let SETTINGS_NB_IMAGES_PER_PAGE = 4;

const Settings = ({ handleSubmit, history }) => {
    
    function onNbImagesPerPageChange(event)
    {
        handleSubmit(event, history, "LAST_SEARCH")
        SETTINGS_NB_IMAGES_PER_PAGE = event.target.value
    }

    return (
        <form className="settings-form" >
            <label>
                Nombre d'images :
                <select className="settings-select-nbimages" defaultValue = {SETTINGS_NB_IMAGES_PER_PAGE}  onChange={onNbImagesPerPageChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option alue="4">4</option>
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="128">128</option>
                </select>
            </label>
        </form>
    );
};

export default Settings
