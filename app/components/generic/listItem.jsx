import React from 'react';

function ListItem(props) {
  const { className, ...originalProps } = props;
  return (
    <li className={`list-item ${className}`} {...originalProps}>
      {props.children}
    </li>
  );
}

ListItem.defaultProps = {
  className: '',
};

ListItem.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.element.isRequired,
};

export default ListItem;
