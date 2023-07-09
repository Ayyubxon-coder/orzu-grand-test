import { Container } from '@/app/components';
import { Title } from '@/app/components/title';

import styles from './styles.module.scss';
import { productsContent } from './constants';
import { ProductCard } from './product-item';

export function Products() {
  return (
    <Container>
      <div className={styles.products}>
        <Title title='ПРОДУКЦИЯ' />

        <div className={styles.wrapper}>
          {productsContent.productCards.slice(0, 3).map((card) => {
            return (
              <ProductCard
                content={card.name}
                image={card.image}
                key={card.name}
              />
            );
          })}
          {productsContent.productCards.slice(3, 6).map((card) => {
            return (
              <ProductCard
                content={card.name}
                image={card.image}
                key={card.name}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
