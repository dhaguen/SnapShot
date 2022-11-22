import React, { useState } from "react";

import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

import img_settings_button_blue from '../settings-button-blue.jpg'
import img_settings_button_gray from '../settings-button-gray.jpg'

// TODO : make interface
export let SETTINGS_NB_IMAGES_PER_PAGE = 128;
export let GALLERY_DEBUG_MODE = false;

function SettingsToggle({ children, eventKey }) {

  const [isExpanded, setExpand] = useState(false);

  const decoratedOnClick = useAccordionButton(eventKey, () => {
    setExpand(!isExpanded);
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

  function onNbImagesPerPageChange(event) {
    handleSubmit(event, history, "LAST_SEARCH")
    SETTINGS_NB_IMAGES_PER_PAGE = event.target.value
  }

  return (
    <form className="settings-form" >
      <label>
        Nombre d'images :
        <select className="settings-select-nbimages" defaultValue={SETTINGS_NB_IMAGES_PER_PAGE} onChange={onNbImagesPerPageChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option alue="4">4</option>
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="128">128</option>
          <option value="1024">1024</option>
        </select>
      </label>
    </form>
  );
};

const Settings = ({ handleSubmit, history }) => {

  return (
    <Accordion defaultActiveKey="1">
      <Card className="settings-card">
        <Card.Header className="settings-card">
          <SettingsToggle eventKey="0">Settings</SettingsToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <SettingsNbImages history={history} handleSubmit={handleSubmit} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Settings
