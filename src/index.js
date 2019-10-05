import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from './App';
import TodoStore from './stores/TodoStore';

const Root = (
    <Provider TodoStore={TodoStore}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
