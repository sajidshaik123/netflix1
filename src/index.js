import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './App';
import { GlobalStyles } from './global-styles';
// import images from '../public/images';
render(
<>
<GlobalStyles />
<App />
</>,document.getElementById('root'));

