import { memo } from 'react';

const MenuIcon = ({ openToggle }) => {
  return (
    <label htmlFor='menu-toggle-check' className='LabelMenuIcon'>
      <input type='checkbox' id='menu-toggle-check' onChange={openToggle} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default memo(MenuIcon);