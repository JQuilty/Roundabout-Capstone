import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
    return (
      <div>
        <section>
          <header>
            <div>
              <ul>
              <Link to="/tournaments">
          <Button variant="primary" size="lg">
              Organizer
          </Button>{' '}
              </Link>
                
          <Button variant="primary" size="lg">
              Public
          </Button>{' '}
              </ul>
            </div>
          </header>
        </section>
      </div>

    );
  }
}