import React, { Component } from 'react';
import { Link } from '../atoms/Link';
import logo from '../../img/greenhornlogo.png';
import {Button} from '../atoms/Button';

export class PageHeader extends Component {
  render() {
    return (
      <nav class="shadow-lg fixed w-100 flex items-center justify-between bg-cover bg-grey-lighter py-1 px-3">

        <div class="flex items-center flex-no-shrink">
          <Button href="#">
          MENU
          </Button>
        </div>

        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <Link className="text-muted" to="/">
            <img src={logo} className="h-16" alt="logo"/>
            </Link>
          </div>
            <div>
              <Button href="#">
              AVATAR
              </Button>
            </div>
        </div>
      </nav>
    );
  }
}
