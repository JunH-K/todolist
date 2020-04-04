import React from 'react';
import PropTypes from 'prop-types';
import { MoreActionStyle, MoreActonContainerStyle } from './Style';

const MoreAction = ({
  onClickOutside,
  onClickMenuItem,
  menus = [],
  children,
}) => {
  return (
    <MoreActonContainerStyle onClick={onClickOutside} data-name="outside">
      <MoreActionStyle className="more-action-menu" onClick={onClickMenuItem}>
        {menus.map((item, index) => {
          if (!item) {
            return <hr key={index} />;
          }
          return (
            <div className="menu" data-menu={item.key} key={item.key}>
              {item.name}
            </div>
          );
        })}
        {children}
      </MoreActionStyle>
    </MoreActonContainerStyle>
  );
};

MoreAction.propTypes = {
  onClickOutside: PropTypes.func.isRequired,
  onClickMenuItem: PropTypes.func.isRequired,
  menus: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoreAction;
