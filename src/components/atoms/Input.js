import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Input extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string
  };

  onChange = event => {
    const {id, onChange} = this.props;
    const {value} = event.target;

    if (!onChange) {
      return;
    }

    onChange(id, value);
  };

  render() {
    const {
      id,
      type,
      placeholder,
      value,
      ...rest
    } = this.props;

    return (
      <input
      className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-green"
      id={id}
      type={type}
      placeholder={placeholder}
      value={value || ''} {...rest} />
    );
  }
}
