import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';
import Template from './Template';
import TemplateList from './TemplateList';
import TemplateCreator from './TemplateCreator';

import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path="/templates" component={TemplateList} />
    <Route path="/templates/new" component={TemplateCreator} />
    <Route path="/templates/:templateId" component={Template} />
  </Router>
), document.getElementById('root') )
