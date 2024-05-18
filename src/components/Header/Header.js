import './Header.scss';

import Container from '@components/Container';
import Paragraph from '@components/Paragraph';

export default () => {
  const header = document.createElement('header');

  header.classList.add('header');

  header.appendChild(
    Container({
      children: [
        Paragraph({
          value: 'Dominik Szamburski',
          tag: 'h1',
          attributes: { 'data-i18n-key': 'title' },
          classes: ['title'],
        }),
        Paragraph({
          value: 'Software Engineer',
          tag: 'h2',
          attributes: { 'data-i18n-key': 'subtitle' },
          classes: ['subtitle'],
        }),
      ],
    }),
  );

  header.appendChild(
    Container({
      classes: ['contact'],
      children: [
        Paragraph({
          value: '(+48) 784 764 797',
          tag: 'span',
        }),
        Paragraph({
          value: 'dominikszamburski99@gmail.com',
          tag: 'span',
        }),
        Paragraph({
          value: 'linkedin.com/in/dominik-szamburski/',
          tag: 'span',
        }),
        Paragraph({
          value: 'github.com/nuldark',
          tag: 'span',
        }),
      ],
    }),
  );

  return header;
};