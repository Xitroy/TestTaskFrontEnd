import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import Surface from './components/Surface'
import Dialog from './components/Dialog'

test('renders header without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Header/>);
});

test('renders contactform without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ContactForm/>);
});

test('renders surface without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Surface/>);
});

it('renders dialog without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Dialog/>);
});

