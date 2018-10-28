import React, { Component } from 'react';
import { Link } from '../atoms/Link';
import { Layout } from '../atoms/Layout';

export class PageMenu extends Component {
  render() {
    return (
      <div class="z-0 w-1/6 h-full absolute pin-y pin-l bg-green-light ">
        <ul class="z-0 mt-20 list-reset">

          <li>
            <button className="bg-transparent hover:bg-grey-lighter text-white font-semibold hover:text-green-light px-10 py-4 hover:border-transparent rounded" to="/dashboards">
              DASHBOARDS
            </button>
          </li>

          <li>
            <button className="bg-transparent hover:bg-grey-lighter text-white font-semibold hover:text-green-light px-16 py-4 hover:border-transparent rounded" to="/tasks">
              TASKS
            </button>
          </li>

          <li>
            <button className="bg-transparent hover:bg-grey-lighter text-white font-semibold hover:text-green-light px-16 py-4 hover:border-transparent rounded" to="/people">
              PEOPLE
            </button>
          </li>
          
        </ul>
      </div>
    );
  }
}
