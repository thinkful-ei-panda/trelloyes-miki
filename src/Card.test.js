import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

describe('Card component', () => {
    // Smoke testing
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div)
    });

    // Snapshot testing
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Card key="id" title="title" content="content" />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });

});