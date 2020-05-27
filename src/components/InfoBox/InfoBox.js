import React from 'react';
import Classes from './InfoBox.module.css';

export default function InfoBox({ children, className }) {
  return (
    <div className={[className, Classes.box].join(' ')}>
      <div className={Classes.arrow} />
      <div className={Classes.contentBox}>{children}</div>
    </div>
  );
}
