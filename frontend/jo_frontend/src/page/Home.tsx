import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/home.css';

export default function Home() {
    return(
        <Container className="mt-5">
            <h1 className="text-center mb-4">Qui sommes-nous ?</h1>
            <Row>
                <Col md={6}>
                    <h2>Notre réussite</h2>
                    <p>
                    Mercadona se distingue de ses concurrents grâce à sa politique de promotions fréquentes 
                    qui permet aux clients de réaliser des économies considérables sur plus de 100 produits à tout moment de l'année.
                    </p>
                    <br/>
                    <h2>L'écologie au coeur de notre dispositif</h2>
                    <p>
                    Chez Mercadona, nous sommes engagés envers l'environnement et agissons 
                    activement pour réduire notre impact, en recyclant et en réduisant notre consommation d'énergie.
                    </p>
                </Col>
                <Col md={6}>
                    <h2> Notre éthique de travail</h2>
                    <p>
                    Le succès ne se mesure pas seulement à la richesse ou au prestige, mais aussi à la manière dont nous avons atteint nos objectifs. Chez Mercadona, nous sommes fiers de notre éthique de travail acharné, de notre intégrité et de notre respect envers nos employés, nos clients et notre environnement..
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <br/>
                    <h2>Nous sommes passionnément engagés envers nos clients !</h2>
                    <p>Chez Mercadona, nous plaçons nos clients au centre de toutes nos actions. Nous sommes passionnés par l'offre de produits de qualité supérieure à des prix compétitifs, tout en fournissant un service client exceptionnel. Nous sommes résolument engagés à répondre aux besoins de nos clients les plus exigeants, 
                        tout en préservant notre engagement envers l'environnement. Nous cherchons constamment à améliorer nos processus afin de garantir une expérience de magasinage agréable et gratifiante pour tous nos clients.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
