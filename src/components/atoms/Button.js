import React from 'react';
import classNames from 'classnames';
//import Button from '@material-ui/core/Button';

export const Button = ({
  title,
  type = 'button',
  variant = 'primary',
  size,
  className,
  children,
  ...rest
}) => (
  <button
    className={classNames('btn btn-lg btn-success', `btn-${variant}`, size ? `btn-${size}`: null,className,)}
    type={type} {...rest}>
    {title ? title : children}
</button>
);
