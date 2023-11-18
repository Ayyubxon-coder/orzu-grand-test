import { StaticImageData } from 'next/image';
import doctorImage from '../../../public/icons/20180420_101750 1 (1).png';
import { PRIMARY_COLORS, PRIMARY_COLOR_TYPE } from '@/app/shared';
type LinksType = {
  title: string;
  color: PRIMARY_COLORS;
};
type NewContentType = {
  title: string;
  cardContent: {
    image: StaticImageData;
    title: string;
    date: string;
    content: string;
    buttonColor: PRIMARY_COLOR_TYPE.BLUE | PRIMARY_COLOR_TYPE.GREEN;
  }[];
  links: LinksType[];
};

export const newsContent: NewContentType = {
  title: 'НОВОСТИ',
  cardContent: [
    {
      image: doctorImage,
      title: 'Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича',
      date: '26.07.2021',
      content:
        'С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...',
      buttonColor: PRIMARY_COLOR_TYPE.BLUE,
    },
    {
      image: doctorImage,
      title: 'Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича',
      date: '26.07.2021',
      content:
        'С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...',
      buttonColor: PRIMARY_COLOR_TYPE.GREEN,
    },
    {
      image: doctorImage,
      title: 'Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича',
      date: '26.07.2021',
      content:
        'С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...',
      buttonColor: PRIMARY_COLOR_TYPE.BLUE,
    },
    {
      image: doctorImage,
      title: 'Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича',
      date: '26.07.2021',
      content:
        'С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...',
      buttonColor: PRIMARY_COLOR_TYPE.BLUE,
    },
    {
      image: doctorImage,
      title: 'Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича',
      date: '26.07.2021',
      content:
        'С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...',
      buttonColor: PRIMARY_COLOR_TYPE.GREEN,
    },
    {
      image: doctorImage,
      title: 'Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича',
      date: '26.07.2021',
      content:
        'С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...',
      buttonColor: PRIMARY_COLOR_TYPE.BLUE,
    },
    {
      image: doctorImage,
      title: 'Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича',
      date: '26.07.2021',
      content:
        'С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...',
      buttonColor: PRIMARY_COLOR_TYPE.BLUE,
    },
    {
      image: doctorImage,
      title: 'Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича',
      date: '26.07.2021',
      content:
        'С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...',
      buttonColor: PRIMARY_COLOR_TYPE.GREEN,
    },
    {
      image: doctorImage,
      title: 'Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича',
      date: '26.07.2021',
      content:
        'С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...',
      buttonColor: PRIMARY_COLOR_TYPE.BLUE,
    },
  ],
  links: [
    {
      title: 'Посмотреть все новости',
      color: PRIMARY_COLORS.GREEN,
    },
    {
      title: 'Подписаться на новости',
      color: PRIMARY_COLORS.BLUE,
    },
  ],
};
