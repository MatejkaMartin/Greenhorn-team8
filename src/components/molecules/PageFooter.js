import React, {Component} from 'react';
import {Layout} from '../atoms/Layout';
import {Paragraph} from '../atoms/Paragraph';

export class PageFooter extends Component {
  render() {
    return (
      <div class="shadow-inner sticky pin-x pin-b p-1 bg-grey-light text-grey-dark">
        © Team08 - GREENHORN - {new Date().getFullYear()}
      </div>
    );
  }
}
