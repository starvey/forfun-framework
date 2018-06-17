export function setAttributes (element, props) {
    Object.keys(props).forEach((propKey) => {
        const propValue = props[propKey];
        element.setAttribute(propKey, propValue);
    });
}