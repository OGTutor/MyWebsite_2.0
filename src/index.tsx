import ReactDOM from 'react-dom/client';
import './assets/styles/globals.scss';
import App from './components/app/App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(<App />);
