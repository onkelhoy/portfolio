import React from 'react';

const Text = ({icon, content, className, ...rest}) => {

  let _icon = null;
  if (icon) {
    _icon = <i>has {icon}</i>
  }

  return (
    <p className={"text " + className} {...rest}>
      {_icon}
      {content}
    </p>
  );
};

const Header = ({icon, content, className, ...rest}) => {

  let _icon = null;
  if (icon) {
    _icon = <i>has {icon}</i>
  }

  return (
    <h1 className={"text " + className} {...rest}>
      {_icon}
      {content}
    </h1>
  );
};