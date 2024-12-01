// src/App.jsx
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import MovieList from './components/MovieList';
import Nav from './components/Nav';

function App() {
    return (
        <Provider store={store}>
          <Nav/>
            <MovieList />
        </Provider>
    );
}

export default App;