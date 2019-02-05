import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.jsx';
import './assets/styles/index_compressed.css';
import model_60 from './assets/json/model_60.json';
import model_60D from './assets/json/model_60D.json';
import model_75 from './assets/json/model_75.json';
import model_75D from './assets/json/model_75D.json';
import model_90D from './assets/json/model_90D.json';
import model_P100D from './assets/json/model_P100D.json';

var model_json=[model_60,model_60D,model_75,model_75D,model_90D,model_P100D];
const renderApp = () => {
  ReactDOM.render(<App model_json={model_json}/>, document.getElementById('app'));
};

renderApp();