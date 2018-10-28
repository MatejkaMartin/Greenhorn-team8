import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Input} from '../atoms/Input';
import {Label} from '../atoms/Label';
import {FormGroup} from '../atoms/FormGroup';

export class InputWithLabel extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string
  };

  render() {
    const {
      id,
      type,
      placeholder,
      label,
      value,
      ...rest
    } = this.props;

    return (
    <FormGroup >
    <div class="m-2 font-hairline text-left">
      <Label id={id} label={label}/>
      </div>
      <Input type={type} id={id} placeholder={placeholder} value={value} {...rest}/>
    </FormGroup>
  );
  }
}
