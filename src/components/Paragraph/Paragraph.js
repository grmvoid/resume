export default ({
  value,
  tag = 'h1',
  attributes = {},
  classes = [],
}) => {
  const paragraph = document.createElement(tag);

  for (const [name, value] of Object.entries(attributes)) {
    paragraph.setAttribute(name, value);
  }

  if (Array.isArray(classes)) {
    classes.forEach(cls => {
      paragraph.classList.add(cls);
    });
  }

  paragraph.textContent = value;

  return paragraph;
};