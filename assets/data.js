const pelisData= [
    {
        id: 1,
        name: "Casablanca",
        price: 200,
        category: "classic",
        duration: "1h 42min",
        year: 1942,
        director: "Michael Curtiz",
        actors: ["Humphrey Bogart", "Ingrid Bergman"] ,
        ranking: 9,
        poster: "./assets/img/poster/casablanca.jpg",
        synopsis: "Un cínico expatriado norteamericano, dueño de un café, se debate entre ayudar o no a su antigua amante y a su marido fugitivo a escapar de los nazis en el Marruecos francés.",
    },
    {
        id: 2,
        name: "Citizen Kane",
        price: 200,
        category: "classsic",
        duration: "1h 59min",
        year: 1941,
        director: "Orson Welles",
        actors: ["Orson Welles", "Joseph Cotten"],
        ranking: 10,
        poster: "./assets/img/poster/citizenkane.jpg",
        synopsis: "Tras la muerte de un magnate de la industria editorial, los periodistas se apresuran a descubrir el significado de la última palabra que pronunció.",
    },
    {
        id: 3,
        name: "Sunset Blvd.",
        price: 200,
        category: "classic",
        duration: "1h 50min",
        year: 1950,
        director: "Billy Wilder",
        actors: ["William Holden", "Gloria Swanson"],
        ranking: 9.5,
        poster: "./assets/img/poster/sunsetb.jpg",
        synopsis: "Un guionista es contratado para reescribir el guion de una estrella de cine mudo en decadencia y acaba desarrollando una peligrosa relación.",
    },
    {
        id: 4,
        name: "Das Cabinet des Dr. Caligari",
        price: 100,
        category: "cult",
        duration: "50min",
        year: 1920,
        director: "Robert Wiene",
        actors: ["Werner Krauss", "Lil Dagover"],
        ranking: 8,
        poster: "./assets/img/poster/cabinetdrcaligari.jpg",
        synopsis: "El doctor Caligari, un hipnotista, usa a Cesare, sonámbulo, para cometer asesinatos.",
    },
    {
        id: 5,
        name: "Nosferatu",
        price: 100,
        category: "cult",
        duration: "1h 34min",
        year: 1922,
        director: "F.W. Murnau",
        actors: ["Max Schreck", "Greta Schröder"],
        ranking: 8.5,
        poster: "./assets/img/poster/nosferatu.jpg",
        synopsis: "El vampiro conde Orlok manifiesta su interés por una nueva residencia y por la esposa del agente inmobiliario Hutter.",
    },
    {
        id: 6,
        name: "The Texas Chain Saw Massacre",
        price: 250,
        category: "horror",
        duration: "1h 23min",
        year: 1974,
        director: "Tobe Hooper",
        actors: ["Marilyn Burns", "Edwin Neal"],
        ranking: 7.5,
        poster: "./assets/img/poster/chainsaw.jpg",
        synopsis: "Cinco amigos se dirigen a una zona rural de Texas para visitar la tumba de un abuelo. En el camino se topan con lo que parece ser una casa abandonada, solo para descubrir algo siniestro dentro. Algo armado con una motosierra.",
    },
    {
        id: 7,
        name: "Dead Ringers",
        price: 300,
        category: "horror",
        duration: "1h 56min",
        year: 1988,
        director: "David Cronenberg",
        actors: ["Jeremy Irons", "Geneviève Bujold"],
        ranking: 9.5,
        poster: "./assets/img/poster/deadringers.jpg",
        synopsis: "Los ginecólogos gemelos aprovechan al máximo el hecho de que nadie puede diferenciarlos, hasta que una mujer les enfrenta.",
    },
    {
        id: 8,
        name: "In the Mouth of Madness",
        price: 250,
        category: "horror",
        duration: "1h 35min",
        year: 1994,
        director: "John Carpenter",
        actors: ["Sam Neill", "Julie Carmen"],
        ranking: 7.5,
        poster: "./assets/img/poster/inthemouth.jpg",
        synopsis: "Un investigador de seguros sospecha del impacto que los libros de terror de cierto autor tienen en su audiencia.",
    },
    {
        id: 9,
        name: "My Best Friend's Wedding",
        price: 150,
        category: "romance",
        duration: "1h 45min",
        year: 1997,
        director: "P.J. Hogan",
        actors: ["Julia Roberts", "Dermot Mulroney"],
        ranking: 7,
        poster: "./assets/img/poster/mybestfriend.jpg",
        synopsis: "Cuando el amigo de toda la vida de una mujer le revela que está comprometido, ella se da cuenta de que le quiere y se lanza a por él, a pocos días de la boda.",
    },
    {
        id: 10,
        name: "Kaze no tani no Naushika",
        price: 300,
        category: "cult",
        duration: "1h 57min",
        year: 1984,
        director: "Hayao Miyazaki",
        actors: ["Sumi Shimamoto", "Mahito Tsujimura"],
        ranking: 10,
        poster: "./assets/img/poster/naussicaa.jpg",
        synopsis: "Nausicaä, una princesa guerrera pero pacifista, lucha para evitar que dos naciones en guerra se destruyan a si mismas y al planeta, que se está muriendo",
    },
    {
        id: 11,
        name: "Pulp Fiction",
        price: 400,
        category: "cult",
        duration: "2h 34min",
        year: 1994,
        director: "Quentin Tarantino",
        actors: ["Uma Thurman", "Bruce Willis"],
        ranking: 8.5,
        poster: "./assets/img/poster/pulpfiction.jpg",
        synopsis: "Las vidas de dos mafiosos, un boxeador, la esposa de un gánster y un par de bandidos se entrelazan en cuatro historias de violencia y redención.",
    },
    {
        id: 12,
        name: "The Rocky Horror Picture Show",
        price: 100,
        category: "cult",
        duration: "1h 40min",
        year: 1975,
        director: "Jim Sharman",
        actors: ["Susan Sarandon", "Tim Curry"],
        ranking: 7,
        poster: "./assets/img/poster/rockyhorror.jpg",
        synopsis: "Una pareja de novios que se acaban de comprometer sufren una avería en una zona aislada y deben hacer una visita a la extraña residencia del Dr. Frank-N-Furter.",
    },
    {
        id: 13,
        name: "Rosemary's Baby",
        price: 200,
        category: "horror",
        duration: "2h 17min",
        year: 1968,
        director: "Roman Polanski",
        actors: ["Mia Farrow", "John Cassavetes"],
        ranking: 8.3,
        poster: "./assets/img/poster/rosemarybb.jpg",
        synopsis: "Una joven pareja, que intenta tener un bebé, se muda a un envejecido y ornamentado edificio de apartamentos en Central Park West, donde se verá rodeada de peculiares vecinos.",
    },
    {
        id: 14,
        name: "Singin in the Rain",
        price: 250,
        category: "classic",
        duration: "1h 43min",
        year: 1952,
        director: "Stanley Donen",
        actors: ["Gene Kelly", "Debbie Reynolds"],
        ranking: 9.3,
        poster: "./assets/img/poster/singinintherain.jpg",
        synopsis: "Una estrella del cine mudo se enamora de una corista justo cuando él y su compañero de pantalla intentan hacer la difícil transición al cine sonoro en el Hollywood de los años 20.",
    },
    {
        id: 15,
        name: "Dune",
        price: 500,
        category: "action",
        duration: "2h 35min",
        year: 2021,
        director: "Denis Villeneuve",
        actors: ["Timothée Chalamet", "Rebecca Ferguson"],
        ranking: 6.5,
        poster: "./assets/img/poster/dune.jpg",
        synopsis: "Adaptación de la novela de ciencia ficción de Frank Herbert sobre el hijo de una familia noble que trata de vengarse de la muerte de su padre y al mismo tiempo salvar un planeta que se le ha encomendado proteger.",
    },
    {
        id: 16,
        name: "Doctor Zhivago",
        price: 200,
        category: "classic",
        duration: "3h 17min",
        year: 1965,
        director: "David Lean",
        actors: ["Omar Sharif", "Julie Christie"],
        ranking: 9.3,
        poster: "./assets/img/poster/drzhivago.jpg",
        synopsis: "La vida de un médico y poeta ruso que, aunque está casado con otra persona, se enamora de la esposa de un activista político y pasa por dificultades durante la Primera Guerra Mundial y luego la Revolución de Octubre.",
    },
    {
        id: 17,
        name: "Knives Out",
        price: 500,
        category: "comedy",
        duration: "2h 10min",
        year: 2019,
        director: "Rian Johnson",
        actors: ["Daniel Craig", "Ana de Armas"],
        ranking: 7.3,
        poster: "./assets/img/poster/knivesout.jpg",
        synopsis: "Un detective investiga la muerte del patriarca de una familia excéntrica y conflictiva.",
    },
    {
        id: 18,
        name: "Parasite",
        price: 500,
        category: "comedy",
        duration: "2h 12min",
        year: 2019,
        director: "Bong Joon Ho",
        actors: ["Song Kang-ho", "Cho Yeo-jeong"],
        ranking: 9.7,
        poster: "./assets/img/poster/parasite.jpg",
        synopsis: "La familia Ki-taek, todos desempleados, se ve envuelta en un incidente con la rica y glamurosa familia Parks.",
    },
    {
        id: 19,
        name: "Everything Everywhere All at Once",
        price: 600,
        category: "action",
        duration: "2h 19min",
        year: 2022,
        director: "Daniel Scheinert",
        actors: ["Michelle Yeoh", "Jamie Lee Curtis"],
        ranking: 8,
        poster: "./assets/img/poster/everythingall.jpg",
        synopsis: "Una anciana inmigrante china se ve envuelta en una loca aventura, donde ella sola puede salvar el mundo explorando otros universos que se conectan con sus vidas pasadas.",
    },
    {
        id: 20,
        name: "Thor: Love and Thunder",
        price: 700,
        category: "action",
        duration: "1h 58min",
        year: 2022,
        director: "Taika Waititi",
        actors: ["Chris Hemsworth", "Natalie Portman"],
        ranking: 6.5,
        poster: "./assets/img/poster/thorlove.jpg",
        synopsis: "Thor reclama la ayuda de Valquiria, Korg y su exnovia Jane Foster para luchar contra Gorr el Dios Carnicero, que pretende extinguir a los dioses.",
    },
    {
        id: 21,
        name: "Notting Hill",
        price: 200,
        category: "romance",
        duration: "2h 4min",
        year: 1999,
        director: "Roger Michell",
        actors: ["Hugh Grant", "Julia Roberts"],
        ranking: 7.5,
        poster: "./assets/img/poster/nottinghill.jpg",
        synopsis: "La vida de un simple librero cambia cuando conoce a la estrella de cine más famosa del mundo.",
    },
    {
        id: 22,
        name: "Love Actually",
        price: 250,
        category: "romance",
        duration: "2h 15min",
        year: 2003,
        director: "Richard Curtis",
        actors: ["Emma Thompson", "Bill Nighy"],
        ranking: 8,
        poster: "./assets/img/poster/loveactually.jpg",
        synopsis: "Las vidas de ocho parejas muy diferentes que se ocupan de sus vidas amorosas durante un mes frenético antes de Navidad en Londres.",
    },
    {
        id: 23,
        name: "About Time",
        price: 400,
        category: "romance",
        duration: "2h 3min",
        year: 2013,
        director: "Richard Curtis",
        actors: ["Domhnall Gleeson", "Rachel McAdams"],
        ranking: 9,
        poster: "./assets/img/poster/abouttime.jpg",
        synopsis: "A los 21 años, Tim descubre que puede viajar en el tiempo y cambiar lo que ocurre y ha ocurrido en su propia vida. Su decisión de hacer de su mundo un lugar mejor, consiguiendo una novia, resulta no ser tan fácil como podría pensarse.",
    },
    {
        id: 24,
        name: "When Harry Met Sally...",
        price: 200,
        category: "romance",
        duration: "1h 35min",
        year: 1989,
        director: "Rob Reiner",
        actors: ["Billy Crystal", "Meg Ryan"],
        ranking: 9.5,
        poster: "./assets/img/poster/harrymetsally.jpg",
        synopsis: "Harry y Sally se conocen de hace años y son buenos amigos, pero temen que acostarse arruinaría su relación.",
    },
]