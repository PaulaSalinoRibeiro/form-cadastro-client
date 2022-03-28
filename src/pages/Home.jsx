import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </nav>
      </>
    )
  }
}

export default Home;