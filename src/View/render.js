import ReactDOM from 'react-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';

export function renderDOM(app) {
    const container = document.getElementById('root')
    const root = createRoot(container)
    root.render(
        <React.StrictMode>{app}</React.StrictMode>,
    )
    // ReactDOM.render(
    //     <React.StrictMode>{app}</React.StrictMode>,
    //     document.getElementById('root')
    // );
}

export function renderView(parent, Views) {
    parent.state = parent.state || {};
    const { view, ContentView } = parent.state;
    const View = view === 'Wrapper'
        ? ContentView
        : Views[view];
    const Wrapper = Views['Wrapper'];
    const props = { ...parent.props, ...parent.state, parent };
    const content = <View {...props} />;
    return <Wrapper {...{ content }} />;
}