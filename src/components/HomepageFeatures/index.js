import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';


const FeatureList = [
    {
        title: '',
        button: 'Booking',
        path: '/booking',
        // Svg: require('@site/static/img/aboutneon.svg').default,
        description: (
            <></>
        )
    }, {

        title: '',
        button: 'About',
        path: '/about',
        // Svg: require('@site/static/img/about.svg').default,
        description: (
            <></>
        )
    }
];

function Feature({title, button, path, description}) {
    return (
        <div className={
            clsx('col col--4')
        }>
            <div className="text--center">
                {/* <Svg className={styles.featureSvg} role="img" /> */} </div>
            <div className="text--center padding-horiz--md">

                {/* <h3>{title}</h3> */}
                {/* <p>{description}</p> */}

                {/* <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                      sx={{ height: 140 }}
                      image=""
                      title={title}
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          {title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                      </Typography>
                  </CardContent>
                  <CardActions>

                  </CardActions>
              </Card> */} </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container text--center">
                <h1></h1>
                <div className="button-container">
                    <div className="button-row">
                        <Link className={clsx('margin-left--md', styles.indexTryMeButton)} to={useBaseUrl('register/')}>
                            <Translate>Meld på/Register</Translate>
                        </Link>
                        <Link className={clsx('margin-left--md', styles.indexTryMeButton)} to={useBaseUrl('booking/')}>
                            <Translate>Booking</Translate>
                        </Link>
                    </div>
                    <div className="button-row">
                        <Link className={clsx('margin-left--md', styles.indexTryMeButton)} to={useBaseUrl('offers/')}>
                            <Translate>Tilbud/Offers</Translate>
                        </Link>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {FeatureList.map((props, idx) => (
                            <Feature key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
