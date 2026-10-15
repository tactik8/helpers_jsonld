import { _h, helpers } from '../src/index.js';

async function test() {
    let t = new _h.things.Thing();
    t.name = 'bb';

    let t1 = {
        '@type': 'Thing',
        '@id': 'https://www.test.com/thing1#thing',
        name: 'Thing1',
    };
    let t2 = {
        '@type': 'Thing',
        '@id': 'https://www.test.com/thing1#thing',
        name: 'Thing12',
    };

    let t3 = {
        '@type': 'Thing',
        '@id': 'https://www.test.com/thing1#thing',
        name: 'Thing13',
    };

    let db = new _h.datapointHelpers.DataPointDB();

    let m1 = new _h.datapointHelpers.Metadata(
        0.5,
        '2025-01-02',
        'https://www.test.com/execution1#action',
        'https://www.test.com/datafeed1#datafeed',
        'https://www.test.com/datafeeditem1#datafeeditem',
    );
    let m2 = new _h.datapointHelpers.Metadata(
        0.5,
        '2024-01-02',
        'https://www.test.com/execution2#action',
        'https://www.test.com/datafeed2#datafeed',
        'https://www.test.com/datafeeditem1#datafeeditem',
    );
    let m3 = new _h.datapointHelpers.Metadata(
        0.6,
        '2025-01-02',
        'https://www.test.com/execution3#action',
        'https://www.test.com/datafeed3#datafeed',
        'https://www.test.com/datafeeditem1#datafeeditem',
    );

    db.set(t1, m1);
    console.log('m1', db.dataPoints.length);

    db.set(t2, m2);
    console.log('m2', db.dataPoints.length);

    db.set(t3, m3);
    console.log('m3', db.dataPoints.length);

    console.log(db.toString());

    let analysis = _h.datapointHelpers.analysis.analyzeDataPoints(
        db.dataPoints,
    );
    console.log(_h.datapointHelpers.analysis.toString(analysis));
}

async function test2() {
    let baseUrl = 'https://www.test.com';
    let path = '/path1/path2';

    let expected = 'https://www.test.com/path1/path2';

    let result = _h.dataHelpers.url.getUrl(baseUrl, path);

    // let baseUrl = "https://krknapi.com/api"

    //  let c = new _h.ApiClient(baseUrl)
}

async function test3() {
    let value = {
        '@type': 'Thing',
        '@id': 'https://www.test.com/thing#thing1',
        name: 'thing1',
    };

    let item = { id: 'someid', name: 'bob', other: 'other1' };

    let systemID = 'https://www.test.com#WebAPI';
    let tableID = 'product';
    let recordID = item.id;

    let df = new _h.things.DataFeed(systemID, tableID);

    let di = df.add(item, recordID);

    console.log('di;', di.record);

    //let expected = 'json string'

    //let result = _h.dataHelpers.getDataType(JSON.stringify(value))
    //console.log('r', result)
}

async function test4() {
    let d = './testdata/dbDisk';
    let record = {
        '@type': 'Thing',
        '@id': 'https://www.test.com/thing1#thing',
        name: 'Thing1',
    };
    let record_id = record?.['@id'];
    let db = new _h.DbDisk(d);

    await db.purge();

    let a11 = await db.getAll();
    console.log('a11', a11);
    return


    let a1 = await db.exists(record_id);
    console.log('a1', a1);

    let a2 = await db.get(record_id);
    console.log('a2', a2);

    let a3 = await db.set(record);
    console.log('a3', a3);

    let a4 = await db.get(record_id);
    console.log('a4', a4);

     let a5 = await db.delete(record_id);
    console.log('a5', a5);

    let a6 = await db.get(record_id);
    console.log('a6', a6);



}

test4();

function getData() {
    return [
        {
            '@context': 'https://schema.org/',
            '@type': 'Product',
            '@id': 'https://www.mondou.com/fr-CA/nourriture-seche-au-saumon-pour-chien-adulte-sante-de-la-peau-et-de-lestomac-1029352.html',
            name: "Nourriture sèche au saumon pour chien adulte santé de la peau et de l'estomac",
            image: [
                'https://www.mondou.com/dw/image/v2/BGPN_PRD/on/demandware.static/-/Sites-mondou_CA-master/default/dwc741bdfe/images/1029352-0.jpg?sw=550&sh=550&sm=fit',
                'https://www.mondou.com/dw/image/v2/BGPN_PRD/on/demandware.static/-/Sites-mondou_CA-master/default/dw1373e19a/images/1029352-1.jpg?sw=550&sh=550&sm=fit',
            ],
            description:
                "La nourriture sans grain pour chien adulte santé de la peau et de l'estomac Vetdiet est spécialement formulée avec du saumon frais et des ingrédients naturels. Elle offre des niveaux idéaux d’oméga-3 et oméga-6 provenant du saumon, de l'huile de poisson et de l'huile végétale pour une peau et un pelage en santé, ainsi que de l’extrait de racine de chicorée, une source naturelle de prébiotiques, pour une digestion optimale. De plus, des ingrédients tels que la patate douce et les pois constituent une source de glucides faciles à digérer.",
            sku: '1029352',
            mpn: '1029352',
            brand: {
                '@type': 'Brand',
                name: 'Vetdiet',
            },
            offers: {
                url: 'https://www.mondou.com/fr-CA/nourriture-seche-au-saumon-pour-chien-adulte-sante-de-la-peau-et-de-lestomac-1029352.html',
                '@type': 'Offer',
                priceCurrency: 'CAD',
                price: '89.99',
                availability: 'https://schema.org/InStock',
            },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            numberOfItems: 5,
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    item: {
                        name: 'Accueil',
                        '@id': 'https://www.mondou.com/',
                    },
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    item: {
                        name: 'Chien',
                        '@id': 'https://www.mondou.com/fr-CA/chien/',
                    },
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    item: {
                        name: 'Nourriture',
                        '@id': 'https://www.mondou.com/fr-CA/chien/nourriture/',
                    },
                },
                {
                    '@type': 'ListItem',
                    position: 4,
                    item: {
                        name: 'Nourriture sèche',
                        '@id': 'https://www.mondou.com/fr-CA/chien/nourriture/nourriture-seche/',
                    },
                },
                {
                    '@type': 'ListItem',
                    position: 5,
                    item: {
                        name: "Nourriture sèche au saumon pour chien adulte santé de la peau et de l'estomac",
                        '@id': 'https://www.mondou.com/fr-CA/nourriture-seche-au-saumon-pour-chien-adulte-sante-de-la-peau-et-de-lestomac-1029350.html',
                    },
                },
            ],
        },
        {
            '@context': 'https://schema.org/',
            '@id': 'https://www.mondou.com/fr-CA/nourriture-seche-au-saumon-pour-chien-adulte-sante-de-la-peau-et-de-lestomac-1029350.html',
            aggregateRating: {
                '@type': 'AggregateRating',
                itemReviewed: {
                    '@type': 'IndividualProduct',
                    name: "Nourriture sèche au saumon pour chien adulte santé de la peau et de l'estomac",
                },
                ratingValue: '4.7',
                reviewCount: 83,
                bestRating: 5,
            },
        },
        {
            review: [
                {
                    dateCreated: '2024-03-31T16:13:08.000+00:00',
                    datePublished: '2026-10-09T06:12:05.000+00:00',
                    headline: 'Produits de qualité',
                    reviewBody:
                        "Bonjour, mes chiens aiment vos produits. Ils sont en santé et ont un beau poil mais, continuent de perdre beaucoup de poils à l'année longue.\nPour ma part, le seul commentaire que j'ai à faire se tourne vers les sacs. J'achète toujours les plus gros sacs que je dois transporter sur mon épaule et je n'ai jamais compris pourquoi il n'y avait pas de poignée  dans le haut du sac pour faciliter son transport. J'ai un abonnement mais, il m'arrive régulièrement d'aller au magasin pour acheter un sac en surplus parce que ma commande n'arrive pas au moment que j'avais prévu ou encore pour essayer un nouveau produit, comme je viens encore de le faire pour favoriser le nettoyage des dents de ma chienne.",
                    reviewRating: {
                        '@type': 'Rating',
                        ratingValue: 5,
                        bestRating: 5,
                    },
                    author: {
                        type: 'Person',
                        name: 'Cheyenne',
                    },
                    image: [
                        {
                            '@type': 'ImageObject',
                            image: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/c541aaf6-ec84-590d-b99c-55816f6e1f1d',
                            description: 'normal',
                            thumbnail: {
                                '@type': 'ImageObject',
                                name: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/c541aaf6-ec84-590d-b99c-55816f6e1f1d',
                            },
                        },
                        {
                            '@type': 'ImageObject',
                            image: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/dc67e61a-b54a-561d-bc3d-7e5bf2cb1929',
                            description: 'normal',
                            thumbnail: {
                                '@type': 'ImageObject',
                                name: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/dc67e61a-b54a-561d-bc3d-7e5bf2cb1929',
                            },
                        },
                    ],
                },
                {
                    dateCreated: '2024-05-01T18:07:12.000+00:00',
                    datePublished: '2026-09-25T02:41:52.000+00:00',
                    headline: 'Les allergies sont disparues',
                    reviewBody:
                        'J’ai essayé plusieurs marque de nourriture et même du cru. Mon bouledogue anglais faisait des allergies, ses yeux coulait ce qui laissait des traces sur son pelage blanc. Depuis qu’il mangue cette sorte, il n’a plus d’allergie et ses cernes sont disparue après 1 mois.',
                    reviewRating: {
                        '@type': 'Rating',
                        ratingValue: 5,
                        bestRating: 5,
                    },
                    author: {
                        type: 'Person',
                        name: 'MissPoirier',
                    },
                    image: [
                        {
                            '@type': 'ImageObject',
                            image: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/8ea880a1-eceb-5027-b6a8-449a4b523d37',
                            description: 'normal',
                            thumbnail: {
                                '@type': 'ImageObject',
                                name: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/8ea880a1-eceb-5027-b6a8-449a4b523d37',
                            },
                        },
                        {
                            '@type': 'ImageObject',
                            image: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/6b88c5eb-e168-5a7a-905e-bfe31c740922',
                            description: 'normal',
                            thumbnail: {
                                '@type': 'ImageObject',
                                name: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/6b88c5eb-e168-5a7a-905e-bfe31c740922',
                            },
                        },
                    ],
                },
                {
                    dateCreated: '2026-09-25T02:41:13.000+00:00',
                    datePublished: '2026-09-25T14:16:18.000+00:00',
                    headline: 'Très content !!',
                    reviewBody:
                        'Nous avons une belle grosse bouledogue anglais qui faisait des réactions surtout à l’œil droit à répétition. Démangeaison , enfler , pue … les vétérinaire traitaient les symptômes mais jamais le problème. \nEn lisant j’ai vu tout les bons commentaires de cette nourriture pour les Bouledogue !\nQuelques dollars de plus par sac pour éviter plusieurs dollars au vétérinaire et une grosse pitoune plus confortable :) très satisfait !!',
                    reviewRating: {
                        '@type': 'Rating',
                        ratingValue: 5,
                        bestRating: 5,
                    },
                    author: {
                        type: 'Person',
                        name: 'Lisa07',
                    },
                    image: [
                        {
                            '@type': 'ImageObject',
                            image: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/e9bdb4c5-0caf-578f-b5cf-10a8e93e56ab',
                            description: 'normal',
                            thumbnail: {
                                '@type': 'ImageObject',
                                name: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/e9bdb4c5-0caf-578f-b5cf-10a8e93e56ab',
                            },
                        },
                        {
                            '@type': 'ImageObject',
                            image: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/e834abf8-cee9-5a16-9626-7970c90ea989',
                            description: 'normal',
                            thumbnail: {
                                '@type': 'ImageObject',
                                name: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/e834abf8-cee9-5a16-9626-7970c90ea989',
                            },
                        },
                        {
                            '@type': 'ImageObject',
                            image: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/e3b30771-2561-5dc7-8b95-c398f1ea90f2',
                            description: 'normal',
                            thumbnail: {
                                '@type': 'ImageObject',
                                name: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/e3b30771-2561-5dc7-8b95-c398f1ea90f2',
                            },
                        },
                    ],
                },
                {
                    dateCreated: '2024-07-09T16:21:54.000+00:00',
                    datePublished: '2026-08-28T15:16:22.000+00:00',
                    headline: 'Bonne moulée',
                    reviewBody:
                        "Mon chien l'aime beaucoup et ses cousin et cousines aussi qd ils viennent en visite",
                    reviewRating: {
                        '@type': 'Rating',
                        ratingValue: 5,
                        bestRating: 5,
                    },
                    author: {
                        type: 'Person',
                        name: 'Martétine',
                    },
                    image: [
                        {
                            '@type': 'ImageObject',
                            image: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/318fcf51-170c-5068-86dd-38efccf79b28',
                            description: 'normal',
                            thumbnail: {
                                '@type': 'ImageObject',
                                name: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/318fcf51-170c-5068-86dd-38efccf79b28',
                            },
                        },
                        {
                            '@type': 'ImageObject',
                            image: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/68036a0f-09d3-53f3-b155-6f11dba65e21',
                            description: 'normal',
                            thumbnail: {
                                '@type': 'ImageObject',
                                name: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/68036a0f-09d3-53f3-b155-6f11dba65e21',
                            },
                        },
                    ],
                },
                {
                    dateCreated: '2023-12-18T21:14:53.000+00:00',
                    datePublished: '2026-05-03T15:20:44.000+00:00',
                    headline: 'Enfin une formule sans poulet !',
                    reviewBody:
                        'Mes chiens font de beaux cacas avec cette formule . C’est ce que je recherchais! Mon Américain Bully avait déjà fait des éruptions cutanées avec son autre nourriture et celle là à régler le problème. Quand j’ai adopté ma bouledogue français je l’ai mise à cette nourriture aussitôt qu’elle a eu 12 mois et la transition c’est super bien faite. Je recommande',
                    reviewRating: {
                        '@type': 'Rating',
                        ratingValue: 5,
                        bestRating: 5,
                    },
                    author: {
                        type: 'Person',
                        name: 'Lynxotic',
                    },
                    image: {
                        '@type': 'ImageObject',
                        image: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/c49f200a-5107-5c95-a6f9-40273e04084c',
                        description: 'normal',
                        thumbnail: {
                            '@type': 'ImageObject',
                            name: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/c49f200a-5107-5c95-a6f9-40273e04084c',
                        },
                    },
                },
                {
                    dateCreated: '2023-11-05T01:43:17.000+00:00',
                    datePublished: '2026-09-25T02:42:33.000+00:00',
                    headline: 'Gus Afore vetdiet au saumon',
                    reviewBody:
                        'J’ai un bouledogue anglais et il est très sensible au allergie.\nDepuis que je lui donne vetdiet au saumon, c’est le jour et la nuit! De plus j’ajoute des légumes pour varier',
                    reviewRating: {
                        '@type': 'Rating',
                        ratingValue: 5,
                        bestRating: 5,
                    },
                    author: {
                        type: 'Person',
                        name: 'Jojo',
                    },
                    image: {
                        '@type': 'ImageObject',
                        image: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/886cb80e-6bca-5b72-8022-1bfba50f08af',
                        description: 'normal',
                        thumbnail: {
                            '@type': 'ImageObject',
                            name: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/886cb80e-6bca-5b72-8022-1bfba50f08af',
                        },
                    },
                },
                {
                    dateCreated: '2024-03-20T10:53:48.000+00:00',
                    datePublished: '2024-11-20T13:36:57.000+00:00',
                    headline: 'Bouledogue anglais',
                    reviewBody:
                        'Mon chien bouledogue anglais ne fait plus d allergies avec cette nourriture',
                    reviewRating: {
                        '@type': 'Rating',
                        ratingValue: 5,
                        bestRating: 5,
                    },
                    author: {
                        type: 'Person',
                        name: 'Bond  , james',
                    },
                    image: {
                        '@type': 'ImageObject',
                        image: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/f76357e7-095a-507a-990c-baf468a9b604',
                        description: 'normal',
                        thumbnail: {
                            '@type': 'ImageObject',
                            name: 'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86bW9uZG91/f76357e7-095a-507a-990c-baf468a9b604',
                        },
                    },
                },
                {
                    dateCreated: '2025-03-16T16:38:56.000+00:00',
                    datePublished: '2026-08-08T02:18:33.000+00:00',
                    headline: 'trop de plastique dans les boites de livraison',
                    reviewBody:
                        "Je devais commander car c'était trop lourd de l'apporter à pied, mais je suis toujours réticente car chaque fois, vous mettez des metres et metres de plastique gonflé de l'air dans la boite. Je suis satisfaite avec la qualité de la nourriture, mais vous n'avez aucun souci pour l'environnement. J'ai écris et j'ai téléphoné plusieurs fois pour demander que vous ne mettez pas ces sacs plastiques gonflés de l'air, que ce n'est pas necessaire et que c'est mauvais pour l'environnement, mais tous que j'ai eu était des platitudes, genre nous sommes en train de trouver d'autres solutions... des gros mentiries. je vous trouve vraiment lamentable de côté environnment.",
                    reviewRating: {
                        '@type': 'Rating',
                        ratingValue: 2,
                        bestRating: 5,
                    },
                    author: {
                        type: 'Person',
                        name: 'Environnement1',
                    },
                },
            ],
            '@id': 'https://www.mondou.com/fr-CA/nourriture-seche-au-saumon-pour-chien-adulte-sante-de-la-peau-et-de-lestomac-1029350.html',
            '@context': 'https://schema.org',
        },
    ];
}
