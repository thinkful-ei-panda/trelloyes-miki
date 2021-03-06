import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import store from './store'

describe('App component', () => {
    // Smoke testing
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App store={store}/>, div);
        ReactDOM.unmountComponentAtNode(div)
    });

    // Snapshot testing
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<App store={store}/>)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });

});