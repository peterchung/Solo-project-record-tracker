import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
// const App = () => {
//     return <div>main container test</div>;
// }


root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);