import { LINK_TYPE } from './FooterLink';

export const footerLinksContent = [
  {
    title: 'О компании',
    links: [
      {
        link: 'История',
        type: LINK_TYPE.DEFAULT,
      },
      {
        link: 'Партнеры',
        type: LINK_TYPE.DEFAULT,
      },
      {
        link: 'Вакансии',
        type: LINK_TYPE.DEFAULT,
      },
    ],
  },
  {
    title: 'Продукция',
    links: [
      {
        link: 'Эндоваскулярная хирургия',
        type: LINK_TYPE.DEFAULT,
      },
      {
        link: 'Аритмология',
        type: LINK_TYPE.DEFAULT,
      },
      {
        link: 'Кардиохирургия',
        type: LINK_TYPE.SELECTED,
      },
      {
        link: 'Лабораторная диагностика',
        type: LINK_TYPE.DEFAULT,
      },
      {
        link: 'Хирургия',
        type: LINK_TYPE.DEFAULT,
      },
      {
        link: 'Эндоурология',
        type: LINK_TYPE.DEFAULT,
      },
      {
        link: 'Нейрохирургия',
        type: LINK_TYPE.DEFAULT,
      },
      {
        link: 'Анестезиология и реанимация',
        type: LINK_TYPE.DEFAULT,
      },
      {
        link: 'Диабет',
        type: LINK_TYPE.DEFAULT,
      },
    ],
  },
  {
    title: 'Услуги',
    links: [
      {
        link: 'Сервис',
        type: LINK_TYPE.DEFAULT,
      },
      {
        link: 'Регистрации',
        type: LINK_TYPE.DEFAULT,
      },
      {
        link: 'Услуги логистики',
        type: LINK_TYPE.DEFAULT,
      },
    ],
  },
];
