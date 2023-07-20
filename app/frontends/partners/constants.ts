import { StaticImageData } from 'next/image';
import aesculapImage from '../../../public/icons/aesculap-b-braun1 1.png';
import aspImage from '../../../public/icons/asp1 1.png';
import bdImage from '../../../public/icons/bd1 1.png';
import biosenseImage from '../../../public/icons/biosense1 1.png';
import cordisImage from '../../../public/icons/cordis1 1.png';
import depuyImage from '../../../public/icons/depuy-synthes-spine-jandj(1) 1.png';
import ehtImage from '../../../public/icons/eth 1.png';
import ehticonImage from '../../../public/icons/ethicon-endo-surgery1 1.png';

type PartnersContentType = {
  title: string;
  cardsContent: {
    image: StaticImageData;
  }[];
};
export const partnersContent: PartnersContentType = {
  title: 'ПАРТНЕРЫ',
  cardsContent: [
    {
      image: aesculapImage,
    },
    {
      image: aspImage,
    },
    {
      image: bdImage,
    },
    {
      image: biosenseImage,
    },
    {
      image: cordisImage,
    },
    {
      image: depuyImage,
    },
    {
      image: ehtImage,
    },
    {
      image: ehticonImage,
    },
  ],
};
