import React, { Component } from 'react';
import { Link } from '../atoms/Link';
import { Layout } from '../atoms/Layout';
import logo from '../../img/greenhornlogo.png';
import name from '../../img/ghname.png';
import {PageMenu} from '../molecules/PageMenu';

export class PageHeader extends Component {
  render() {
    return (
      <nav class="shadow-lg fixed w-full flex items-center justify-between bg-cover bg-grey-lighter py-1 px-3">

        <div class="flex items-center flex-no-shrink">
          <a href="#" class="shadow-md inline-block text-sm px-4 py-2 leading-none text-black border rounded border-black hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">
          MENU
          </a>
        </div>

        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <Link className="text-muted" to="/">
            <img src={logo} className="h-16" alt="logo"/>
            </Link>
          </div>
            <div>
              <a href="#" class="shadow-md inline-block text-sm px-4 py-2 leading-none text-black border rounded border-black hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">AVATAR</a>
            </div>
        </div>

      </nav>
    );
  }
}
