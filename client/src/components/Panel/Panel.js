import React from 'react';

export const Panel = (props) => (
  <div className="panel panel-secondary" {...props}>
    {props.children}
  </div>
)
