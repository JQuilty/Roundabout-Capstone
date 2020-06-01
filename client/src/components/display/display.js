//import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as JSOG from 'jsog';
import * as React from 'react';
import * as _ from 'underscore';
import { Fragment, useState, useEffect } from 'react';
import DEMO_DATA from './demo-data';
import { Bracket, BracketGame, BracketGenerator, Model } from 'react-tournament-bracket';

const Display = ({
    Bracket,
    BracketGame,
    BracketGenerator,
    Model
  }) => {

  return (
      <Fragment>
          <h1 className='large text-primary'>Test For Display</h1>
      </Fragment>
      
  );
  };

  export default Display(Bracket, BracketGame, BracketGenerator, Model)