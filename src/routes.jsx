import React from 'react';
import { Router, Route, Link, browserHistory, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import Template from './Template';
import TemplateList from './TemplateList';
import TemplateCreator from './TemplateCreator';


export default ( <Router history={ browserHistory }>
    <Route path="/" >
      <IndexRedirect to="items" />
      <Route name="template-list" path="items" >
        <IndexRoute component={TemplateList} />
        <Route name="template-create" path="new" component={TemplateCreator} />
        <Route name="template-view" path=":templateId" component={Template} />
        <Route name="template-edit" path=":templateId/edit" component={TemplateCreator} />
      </Route>
    </Route>
  </Router>);
