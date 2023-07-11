import { Container, Title, Link } from '@/app/components';

import styles from './styles.module.scss';
import { productsContent } from './constants';
import { ProductCard } from './product-item';

export function Products() {
  return (
    <Container>
      <div className={styles.products}>
        <Title title={productsContent.title} />
        <div className={styles.wrapper}>
          {productsContent.productCards.slice(0, 3).map((card) => {
            return <ProductCard {...card} key={card.content} />;
          })}
          {productsContent.productCards.slice(3, 6).map((card) => {
            return <ProductCard {...card} key={card.content} />;
          })}
        </div>
        <Link className={styles.link} title={productsContent.linkContent} />
        <Title title={productsContent.services} />
      </div>
    </Container>
  );
}
