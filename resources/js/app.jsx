import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main';
import '../css/app.css';
import '../css/custom.css';

function App() {
    return (<>
        <Main />
    </>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);