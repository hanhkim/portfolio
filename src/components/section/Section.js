import React from 'react';
import './Section.css';
import * as classnames from 'classnames';

const Section = ({ className, children, ...rest }) => {
  return (
    <section className={classnames('section', className)} {...rest}>
      {children}
    </section>
  );
};

export default Section;
