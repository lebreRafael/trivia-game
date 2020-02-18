import React from 'react';
import './SvgIcon.css';

interface Props {
  name: string, // symbol id minus "icon-"
  title?: string,
}

function SvgIcon(props: Props) {
  const { name, title } = props;

  return (
    <i className="svg-icon" title={title}>
      <svg className={'svg-icon__' + name}>
        <use xlinkHref={'#icon-' + name} />
      </svg>
    </i>
  );
}

export default SvgIcon;
