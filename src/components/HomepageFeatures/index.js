import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Особливий геймплей',
    imgSrc: require('@site/static/img/winter.png').default,
    description: (
      <>
        Кожного сезону на сервер додаються ексклюзивні ігрові механіки, які доповнюють ванільний геймплей.
      </>
    ),
  },
  {
    title: 'Кросплатформність',
    imgSrc: require('@site/static/img/cat.png').default,
    description: (
      <>
        На нашому сервері ви не обмежені у виборі пристрою для гри. Грайте хоч з холодильника чи годинника.
      </>
    ),
  },
  {
    title: 'Історія сервера',
    imgSrc: require('@site/static/img/library.png').default,
    description: (
      <>
        Всі масштабні ігрові події, які відбуваються на сервері, фіксуються на офіційний вікі. А також у вас є можливість створити сторінку про себе. 
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}