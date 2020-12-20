import React from 'react';

import ReactDOM from 'react-dom';
import { StyleSheetManager } from 'styled-components';
import { GlobalStyle } from '../components/theme/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRouter } from './AppRouter';

const queryClient = new QueryClient();

ReactDOM.render(
    <StyleSheetManager disableVendorPrefixes>
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <AppRouter />
        </QueryClientProvider>
    </StyleSheetManager>,
    document.getElementById('root'),
);
