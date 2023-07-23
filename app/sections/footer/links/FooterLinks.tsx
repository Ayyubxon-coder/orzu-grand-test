import { FooterLink } from './FooterLink/FooterLink';
import { FooterTitle } from './FooterTitle';
import { footerLinksContent } from './constants';
import styles from './styles.module.scss';
export function FooterLinks() {
  return (
    <div className={styles.links}>
      {footerLinksContent.map((content) => {
        return (
          <div className={styles.main__wrapper} key={content.title}>
            <FooterTitle title={content.title} />

            <div className={styles.links__wrapper}>
              {content.links.map((item) => {
                return (
                  <FooterLink
                    key={item.link}
                    type={item.type}
                    link={item.link}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
