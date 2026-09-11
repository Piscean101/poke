export const items = {
    Evolution: {
        RareCandy: {
        NAME: 'Rare Candy',
        GOLD: 1000,
        ENERGY: 0,
        TYPE: 'Evolve',
        TARGET: 'EXCEPTIONS',
        CONSUME: true
        },
        FireStone: {
        NAME: 'Fire Stone',
        GOLD: 1000,
        ENERGY: 0,
        TYPE: 'Evolve',
        TARGET: 'FLAREON,NINETALES,ARCANINE,MAGMORTAR',
        CONSUME: true
        },
        WaterStone: {
        NAME: 'Water Stone',
        GOLD: 1000,
        ENERGY: 0,
        TYPE: 'Evolve',
        TARGET: 'VAPOREON,POLIWRATH,STARMIE,CLOYSTER,LUDICOLO,HUNTAIL,GOREBYSS',
        CONSUME: true
        },
        LeafStone: {
        NAME: 'Leaf Stone',
        GOLD: 1000,
        ENERGY: 0,
        TYPE: 'Evolve',
        TARGET: 'LEAFEON,VILEPLUME,VICTREEBEL,EXEGGUTOR,SHIFTRY',
        CONSUME: true
        },
        ThunderStone: {
        NAME: 'Thunder Stone',
        GOLD: 1000,
        ENERGY: 0,
        TYPE: 'Evolve',
        TARGET: 'JOLTEON,RAICHU,MAGNEZONE,PROBOPASS,ELECTIVIRE',
        CONSUME: true
        },
        MoonStone: {
        NAME: 'Moon Stone',
        GOLD: 1000,
        ENERGY: 0,
        TYPE: 'Evolve',
        TARGET: 'UMBREON,NIDOQUEEN,NIDOKING,WIGGLYTUFF,CLEFABLE,DELCATTY',
        CONSUME: true
        },
        SunStone: {
        NAME: 'Sun Stone',
        GOLD: 1000,
        ENERGY: 0,
        TYPE: 'Evolve',
        TARGET: 'ESPEON,BELLOSSOM,SUNFLORA',
        CONSUME: true
        },
        DawnStone: {
        NAME: 'Dawn Stone',
        GOLD: 1000,
        ENERGY: 0,
        TYPE: 'Evolve',
        TARGET: 'KINGDRA,GALLADE,FROSLASS',
        CONSUME: true
        },
        DuskStone: {
        NAME: 'Dusk Stone',
        GOLD: 1000,
        ENERGY: 0,
        TYPE: 'Evolve',
        TARGET: 'DUSKNOIR,HONCHKROW,MISMAGIUS',
        CONSUME: true
        },
        ShinyStone: {
        NAME: 'Shiny Stone',
        GOLD: 1000,
        ENERGY: 0,
        TYPE: 'Evolve',
        TARGET: 'SYLVEON,TOGEKISS,ROSERADE',
        CONSUME: true
        },
        IceStone: {
        NAME: 'Ice Stone',
        GOLD: 1000,
        ENERGY: 0,
        TYPE: 'Evolve',
        TARGET: 'GLACEON,GLALIE,ABOMASNOW ',
        CONSUME: true
        },
        LinkCable: {
        NAME: 'Link Cable',
        GOLD: 1000,
        ENERGY: 0,
        TYPE: 'Evolve',
        TARGET: 'ALAKAZAM,GENGAR,GOLEM,MACHAMP,RHYPERIOR,PORYGONZ',
        CONSUME: true
        },
        KingsRock: {
        NAME: `King's Rock`,
        GOLD: 1000,
        ENERGY: 0,
        TYPE: 'Evolve',
        TARGET: 'POLITOED,SLOWKING',
        CONSUME: true
        },
        MetalCoat: {
        NAME: 'Metal Coat',
        GOLD: 1000,
        ENERGY: 0,
        TYPE: 'Evolve',
        TARGET: 'STEELIX,SCIZOR ',
        CONSUME: true
        },
    },
    PokeBalls: {
        PokeBall: {
            NAME: 'Poké Ball',
            COST: 5,
            DESC: 'Use to catch wild Pokémon',
            ENERGY: 0,
            TYPE: 'Capture',
            RATE: [10],
            URL: `https://archives.bulbagarden.net/media/upload/9/93/Bag_Pok%C3%A9_Ball_Sprite.png`,
            CONSUME: true
        },
        GreatBall: {
            NAME: 'Great Ball',
            COST: 15,
            DESC: 'Improved catch rate from Poké Ball',
            ENERGY: 0,
            TYPE: 'Capture',
            RATE: [15],
            URL: `https://archives.bulbagarden.net/media/upload/f/f4/Great_Ball_battle_IV.png`,
            CONSUME: true
        },
        UltraBall: {
            NAME: 'Ultra Ball',
            COST: 50,
            DESC: 'Improved catch rate from Great Ball',
            ENERGY: 1,
            TYPE: 'Capture',
            RATE: [30], 
            URL: `https://archives.bulbagarden.net/media/upload/0/0c/Ultra_Ball_battle_IV.png`,
            CONSUME: true
        },
        MasterBall: {
            NAME: 'Master Ball',
            COST: null,
            DESC: 'Use to catch wild Pokémon without fail',
            ENERGY: 3,
            TYPE: 'Capture',
            RATE: [10000],
            URL: `https://archives.bulbagarden.net/media/upload/6/6d/Bag_Master_Ball_Sprite.png`,
            CONSUME: true
        },
        NetBall: {
            NAME: 'Net Ball',
            COST: 20,
            DESC: 'Good for catching FLYING WATER and BUG Pokémon',
            ENERGY: 0,
            TYPE: 'Capture',
            RATE: [5,25],
            URL: `https://archives.bulbagarden.net/media/upload/a/a6/Net_Ball_battle_IV.png`,
            CONSUME: true
        },
        DiveBall: {
            NAME: 'Dive Ball',
            COST: 20,
            DESC: 'Good for catching Pokémon on SEA Routes',
            ENERGY: 0,
            TYPE: 'Capture',
            RATE: [10,40],
            URL: `https://archives.bulbagarden.net/media/upload/8/83/Dive_Ball_battle_IV.png`,
            CONSUME: true
        },
        DreamBall: {
            NAME: 'Dream Ball',
            COST: 25,
            DESC: 'Good for catching PSYCHIC and FAIRY Pokémon',
            ENERGY: 0,
            TYPE: 'Capture',
            RATE: [10,30],
            URL: `https://archives.bulbagarden.net/media/upload/c/c1/Dream_Ball_summary.png`,
            CONSUME: true
        },
        DuskBall: {
            NAME: 'Dusk Ball',
            COST: 25,
            DESC: 'Good for catching Pokémon on CAVE Routes',
            ENERGY: 0,
            TYPE: 'Capture',
            RATE: [10,30],
            URL: `https://archives.bulbagarden.net/media/upload/b/b5/Dusk_Ball_battle_IV.png`,
            CONSUME: true
        },
        NestBall: {
            NAME: 'Nest Ball',
            COST: 15,
            DESC: 'Exceptionally good for catching COMMON Pokémon',
            ENERGY: 0,
            TYPE: 'Capture',
            RATE: [10,40],
            URL: `https://archives.bulbagarden.net/media/upload/f/f3/Nest_Ball_battle_IV.png`,
            CONSUME: true
        },
        /* INCREASED CATCH RATE: RARE ULTRA MYTHIC LEGEND RARITY */
        PremierBall: {
            NAME: 'Premier Ball',
            COST: 150,
            DESC: 'Exceptionally good for catching RARE Pokémon',
            ENERGY: null,
            TYPE: 'Capture',
            RATE: [30,70],
            URL: `https://archives.bulbagarden.net/media/upload/5/53/Premier_Ball_battle_IV.png`,
            CONSUME: true
        },
        /* RANDOM MON UNCOMMON -> ULTRA */
        CherishBall: {
            NAME: 'Cherish Ball',
            COST: 975,
            DESC: '',
            ENERGY: null,
            TYPE: 'Random',
            RATE: null,
            URL: `https://archives.bulbagarden.net/media/upload/c/c5/Cherish_Ball_battle_IV.png`,
            CONSUME: true
        }
    }
}

const createItem = () => {
    
}

const itemEffects = {
    RareCandy: null
}