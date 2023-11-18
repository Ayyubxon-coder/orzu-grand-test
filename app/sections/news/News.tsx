import { ArrowButton, Container, Link, Title } from '@/app/components';

import styles from './styles.module.scss';
import { newsContent } from './constants';
import { NewsCard } from './news-card';
import { ARROW_POSITION } from '@/app/shared';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css';

export function News() {
  return (
    <Container>
      <div className={styles.news}>
        <Title title={newsContent.title} />
        <div className={styles.cards}>
          <ArrowButton className={styles.arrow} />
          <Swiper
            slidesPerView={3}
            modules={[FreeMode, Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {newsContent.cardContent.map((card, index) => (
              <SwiperSlide key={index}>
                <NewsCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
          <ArrowButton
            className={styles.right__arrow}
            position={ARROW_POSITION.RIGHT}
          />
        </div>
        <div className={styles.link__wrapper}>
          {newsContent.links.map((el) => {
            return <Link {...el} key={el.title} />;
          })}
        </div>
      </div>
    </Container>
  );
}
