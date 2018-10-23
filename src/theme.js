import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import green from '@material-ui/core/colors/green';
import React from 'react';

// This document contains the reusable styled components.

// The operator '&&' force the styling of material design
export const StyledButton = styled(({ color, ...other }) => (
  <Button {...other} classes={{ label: 'label' }} />
))`
  background: white;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);

  & .label {
    color: ${props => props.color};
  }
`;


// export default LoginButton;

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;

export const Title2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`;
