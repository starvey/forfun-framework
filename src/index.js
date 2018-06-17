import { table, tr, td, textNode } from './framework/base-components';

const root = document.querySelector('body')

const tableElement = table({border: 1}, [
    tr({}, [
        td({}, [
            textNode(Math.random())
        ]),
    ]),
]);

root.appendChild(tableElement)
