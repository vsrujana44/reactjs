import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import EmployeePage from './containers/EmployeePage';
import NotFoundPage from './components/NotFoundPage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="employee" component={EmployeePage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
