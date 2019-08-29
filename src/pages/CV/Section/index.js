import React, { createElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Slider from '../Slider';
import DateInterval from '../DateInterval';

const TYPES = {
  'Slider': Slider,
  'DateInterval': DateInterval,
};

const Part = ({ data: { header, fields = [], subparts = [], }, level = 1 }) => {
  
  let headerContent = header;
  if (header instanceof Object)
  {
    const { icon, text } = header;
    // it has icon
    headerContent = <><FontAwesomeIcon size="xs" icon={icon}/> {text}</>
  }

  const headerElm = createElement(`h${level}`, null, headerContent);
  const fieldsElm = [];
  const subpartsElm = [];

  let idx = 0;
  for (let field of fields) {
    let content = field;
    let className = '';
    if (field instanceof Object)
    {
      const { type, text, icon, ...props } = field;
      let _type = type;
      if (TYPES[type]) _type = TYPES[type];

      content = createElement(_type, props, text);

      if (icon)
      {
        className = 'icon'
        content = <><FontAwesomeIcon size="xs" icon={icon}/> {content}</>
      }
    }

    fieldsElm.push(<div className={'field ' + className} key={idx}>{content}</div>)
    idx++;
  }

  for (let subfield of subparts) {
    subpartsElm.push(
      <div key={idx} className={"sub-field-"+level}>
        <Part data={subfield} level={level + 1}/>
      </div>
    );

    idx++;
  }

  return (
    <>
      {headerElm}
      <div className="part">
      {fieldsElm}
      {subpartsElm}
      </div>
    </>
  )
};

const Section = ({ data, className}) => {

  const parts = [];
  for (let part of data)
  {
    parts.push(<Part key={parts.length} data={part} />);
  }

  return (
    <div className={className}>
      {parts}
    </div>
  );
}

export default Section;