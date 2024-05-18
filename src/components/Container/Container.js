import './Container.scss';

export default ({ children, classes }) => {
  const container = document.createElement('div');

  if (Array.isArray(classes)) {
    classes.forEach(cls => {
      container.classList.add(cls);
    });
  }

  if (Array.isArray(children)) {
    children.forEach(child => {
      container.appendChild(child);
    });
  }

  return container;
};