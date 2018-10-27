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
      className="bg-transparent hover:bg-green text-green-dark font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded"
      type={type} {...rest}>
      {title ? title : children}
    </button>
);
