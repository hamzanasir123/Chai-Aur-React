import React from '/React';

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Click Me To Visit Google'
)

ReactDOM.createRoot(document.getElementById('root').render(
    reactElement
))
