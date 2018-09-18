import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom'

import Layout from './Layout'

ReactDOM.render((
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>
), document.getElementById('react'))
