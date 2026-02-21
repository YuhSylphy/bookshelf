import { Provider } from 'react-redux';

import { store } from '@/core/store';

import './App.css';

import { Counter } from '@/feature/counter';

function App() {
	return (
		<Provider store={store}>
			<Counter />
		</Provider>
	);
}

export default App;
