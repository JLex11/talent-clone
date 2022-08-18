import { memo } from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ to, children, color }) => {
  return (
    <Link to={to} className={`LinkButton btn-${color}`}>{children}</Link>
  );
};

export default memo(LinkButton);