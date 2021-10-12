import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from 'components/Layout';

import './style.scss'; 

import Section from './Section';
import data from './data.json';

export default (props) => {
  const [display, setDisplay] = useState(false);

  return (
    <Layout className={"CV " + (display ? "show" : "hide")}>
      <button className="hamburger" onClick={() => setDisplay(!display)}>
        <FontAwesomeIcon icon={!display ? "bars" : "times"}/>
      </button>
      <Section className="header" data={data['header-part']}/>
      <Section className="side"   data={data['side-part']}/>
      <Section className="main"   data={data['main-part']}/>
    </Layout>
  );
};