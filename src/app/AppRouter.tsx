import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Page1 } from './views/page1/Page1';

export const AppRouter: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/page1' component={Page1} />
                <Route path='/page2' component={Page1} />
            </Switch>
        </BrowserRouter>
    );
};
