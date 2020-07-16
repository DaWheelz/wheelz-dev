import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/wheelz-dev">
          <Image
            src={require('./../../../assets/images/Logo_wheelzdevNew.png')}
            width={100}
            height={20} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;