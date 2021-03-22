import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import { Link } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className='nav'>
            <div>WestSide University</div> 
            <div className='link-wrap'>
              <ul>
                <Link className='links'><li>Home</li></Link>
                <Link className='links'><li>About</li></Link> 
              </ul>
            </div>
          </nav>
          {routes}
        </div>
      </HashRouter>
    )
  }
}