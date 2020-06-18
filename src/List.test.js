import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import STORE from './store';

describe('List component', () => {
    // Smoke testing
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List key={1} header={'Hi'} cards={['a', 'b']} />, div);
        ReactDOM.unmountComponentAtNode(div)
    });

    // Snapshot testing
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List  key={1} header={'Hi'} cards={['a', 'b']} />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });

});