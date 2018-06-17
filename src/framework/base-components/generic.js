import { setAttributes } from '../utils/set-attributes';
import { appendChildren } from '../utils/append-children';

export const generic = (tagName, props, children) => {
    const element = document.createElement(tagName);
    setAttributes(element, props);
    appendChildren(element, children);
    return element;
};