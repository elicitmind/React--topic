import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router} from "react-router-dom"

import './index.css';
import App from './App';

// wrap your main component with BrowserRouter
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
