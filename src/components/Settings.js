import React, { useState, useEffect } from "react";

import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

import img_settings_button_blue from '../settings-button-blue.jpg'
import img_settings_button_gray from '../settings-button-gray.jpg'

// TODO : make interface
export let RELATIVE_PATH_BASE_NAME = "/Snapshot_modified_html"
export let SETTINGS_NB_IMAGES_PER_PAGE = 1024;
export let GALLERY_DEBUG_MODE = true;

function SettingsToggle({ children, eventKey }) {

  const isExpanded = parseInt(sessionStorage.getItem('settingsExpanded') || 0);

  const decoratedOnClick = useAccordionButton(eventKey, () => {
    sessionStorage.setItem('settingsExpanded', isExpanded ? 0 : 1);
  });

  return (
    <div className="settings-toggle-box">
      <button
        variant="light"
        size="sm"
        className="settings-toggle-btn"
        onClick={decoratedOnClick}
      >
        {children}
      </button>
      <img src={isExpanded ? img_settings_button_blue : img_settings_button_gray}
        className="settings-toggle-img"
        onClick={decoratedOnClick}>
      </img>
    </div>
  );
}

const SettingsNbImages = ({ handleSubmit, history }) => {

  const [selectedOption, setSelectedOption] = useState(1)

  useEffect(() => {
    const storedSelectedOption = parseInt(sessionStorage.getItem('selectedOption') || SETTINGS_NB_IMAGES_PER_PAGE)
    setSelectedOption(storedSelectedOption)
  }, [])

  function onNbImagesPerPageChange(event) {

    sessionStorage.setItem('infiniteScroll', (event.target.value === '1024') ? 1 : 0);

    setSelectedOption(parseInt(event.target.value))
    sessionStorage.setItem('selectedOption', event.target.value)
    handleSubmit(event, history, "LAST_SEARCH")
  }

  return (
    <form className="settings-form" >
      <label>
        Number of images :
        <select className="settings-select-nbimages" onChange={onNbImagesPerPageChange}>
          <option value="1" selected={selectedOption === 1}>1</option>
          <option value="2" selected={selectedOption === 2}>2</option>
          <option value="3" selected={selectedOption === 3}>3</option>
          <option alue="4" selected={selectedOption === 4} >4</option>
          <option value="8" selected={selectedOption === 8}>8</option>
          <option value="16" selected={selectedOption === 16}>16</option>
          <option value="128" selected={selectedOption === 128}>128</option>
          <option value="1024" selected={selectedOption === 1024}>All</option>
        </select>
      </label>
    </form>
  );
};

const Settings = ({ handleSubmit, history }) => {

  const storedSettingsExpanded = parseInt(sessionStorage.getItem('settingsExpanded') || 0)

  return (

    <Accordion defaultActiveKey="1">
      <Card className="settings-card">
        <Card.Header className="settings-card">
          <SettingsToggle eventKey={`${storedSettingsExpanded}`}>Settings</SettingsToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={`${storedSettingsExpanded}`}>
          <Card.Body>
            <SettingsNbImages history={history} handleSubmit={handleSubmit} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Settings
