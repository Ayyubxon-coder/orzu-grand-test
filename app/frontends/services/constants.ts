import { StaticImageData } from 'next/image';
import serviceImage from '../../../public/icons/servic 1.png';
import registerImage from '../../../public/icons/IIM-CAT-2020-application-deadline-extended-here’s-all-you-need-to-know 1.png';
import manImage from '../../../public/icons/man-by-truck-guy-delivery-uniform-man-with-clipboard 1.png';

type ServicesContentType = {
  image: StaticImageData;
  content: string;
  title: string;
};
export const servicesContent: ServicesContentType[] = [
  {
    image: serviceImage,
    title: 'СЕРВИС ОБОРУДОВАНИЯ',
    content:
      'Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......',
  },
  {
    image: registerImage,
    title: 'РЕГИСТРАЦИИ',
    content:
      'Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ....',
  },
  {
    image: manImage,
    title: 'УСЛУГИ ЛОГИСТИКИ',
    content:
      'Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей.....',
  },
];
