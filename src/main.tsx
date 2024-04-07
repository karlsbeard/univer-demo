import { createRoot } from 'react-dom/client';
import pkg from '../package.json';

import styles from './styles.module.less';


function Examples() {
  const demos = [{
      title: '📊 Sheets',
      href: './sheets/',
  }, {
      title: '📝 Docs',
      href: './docs/',
  }];

  return (
      <section className={styles.examples}>
          <header className={styles.header}>
              <img className={styles.logo} src="/favicon.svg" alt="Univer" draggable={false} />
              <h1 className={styles.title}>
                  <span>Univer</span>
                  <sup>{pkg.version}</sup>
              </h1>
          </header>

          <section className={styles.list}>
              {demos.map((demo) => (
                  <a key={demo.title} className={styles.btn} href={demo.href}>
                      <span className={styles.text}>{demo.title}</span>
                      <span className={styles.shimmer} />
                  </a>
              ))}
          </section>
      </section>
  );
}

createRoot(document.getElementById('app')!).render(<Examples />);
