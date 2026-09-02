const rarities = {
    C: {
        Name: 'Common',
        Code: 'C'
    },
    U: {
        Name: 'Uncommon',
        Code: 'U'
    },
    R: {
        Name: 'Rare',
        Code: 'R'
    },
    X: {
        Name: 'Ultra-Rare',
        Code: 'X'
    },
    M: {
        Name: 'Mythic',
        Code: 'M'
    },
    L: {
        Name: 'Legendary',
        Code: 'L'
    },
    N: {
        Name: 'No-Spawn',
        Code: 'N'
    }
}
const gen1dex = {
    /* 



        STARTER GROUP
        COST: 0 -> 1 -> 2
        STAT TOTALS: 3 -> 5 -> 8



    */
    Abra: {
        NAME: 'Abra',
        HP: 1,
        POW: 2,
        DEF: 0,
        TYPE: ['Psychic'],
        COST: 0,
        RARITY: 'R',
        NEXT: 'Kadabra'
    },
    Kadabra: {
        NAME: 'Kadabra',
        HP: 1,
        POW: 4,
        DEF: 0,
        TYPE: ['Psychic'],
        COST: 1,
        RARITY: 'X',
        NEXT: 'Alakazam'
    },
    Alakazam: {
        NAME: 'Alakazam',
        HP: 2,
        POW: 5,
        DEF: 1,
        TYPE: ['Psychic'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    //
    Charmander: {
        NAME: 'Charmander',
        HP: 1,
        POW: 2,
        DEF: 0,
        TYPE: ['Fire'],
        COST: 0,
        RARITY: 'N',
        NEXT: 'Charmeleon'
    },
    Charmeleon: {
        NAME: 'Charmeleon',
        HP: 1,
        POW: 3,
        DEF: 1,
        TYPE: ['Fire'],
        COST: 1,
        RARITY: 'N',
        NEXT: 'Charizard'
    },
    Charizard: {
        NAME: 'Charizard',
        HP: 3,
        POW: 4,
        DEF: 1,
        TYPE: ['Fire','Flying'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    }, 
    //
    Squirtle: {
        NAME: 'Squirtle',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Water'],
        COST: 0,
        RARITY: 'N',
        NEXT: 'Wartortle'
    },
    Wartortle: {
        NAME: 'Wartortle',
        HP: 2,
        POW: 1,
        DEF: 2,
        TYPE: ['Water'],
        COST: 1,
        RARITY: 'N',
        NEXT: 'Blastoise'
    },
    Blastoise: {
        NAME: 'Blastoise',
        HP: 2,
        POW: 2,
        DEF: 4,
        TYPE: ['Water'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    //
    Bulbasaur: {
        NAME: 'Bulbasaur',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Grass','Poison'],
        COST: 0,
        RARITY: 'N',
        NEXT: 'Ivysaur'
    },
    Ivysaur: {
        NAME: 'Ivysaur',
        HP: 2,
        POW: 1,
        DEF: 2,
        TYPE: ['Grass','Poison'],
        COST: 1,
        RARITY: 'N',
        NEXT: 'Venusaur'
    },
    Venusaur: {
        NAME: 'Venusaur',
        HP: 3,
        POW: 2,
        DEF: 3,
        TYPE: ['Grass','Poison'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },  
    //
    Machop: {
        NAME: 'Machop',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Fighting'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Machoke'
    },
    Machoke: {
        NAME: 'Machoke',
        HP: 2,
        POW: 2,
        DEF: 1,
        TYPE: ['Fighting'],
        COST: 1,
        RARITY: 'R',
        NEXT: 'Machamp'
    },
    Machamp: {
        NAME: 'Machamp',
        HP: 2,
        POW: 5,
        DEF: 1,
        TYPE: ['Fighting'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    //
    Gastly: {
        NAME: 'Gastly',
        HP: 1,
        POW: 2,
        DEF: 0,
        TYPE: ['Ghost','Poison'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Haunter'
    },
    Haunter: {
        NAME: 'Haunter',
        HP: 1,
        POW: 4,
        DEF: 0,
        TYPE: ['Ghost','Poison'],
        COST: 1,
        RARITY: 'R',
        NEXT: 'Gengar'
    },
    Gengar: {
        NAME: 'Gengar',
        HP: 1,
        POW: 6,
        DEF: 1,
        TYPE: ['Ghost','Poison'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    }, 
    //
    Geodude: {
        NAME: 'Geodude',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Rock','Ground'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Graveler'
    },
    Graveler: {
        NAME: 'Graveler',
        HP: 1,
        POW: 1,
        DEF: 3,
        TYPE: ['Rock','Ground'],
        COST: 1,
        RARITY: 'U',
        NEXT: 'Golem'
    },
    Golem: {
        NAME: 'Golem',
        HP: 2,
        POW: 2,
        DEF: 4,
        TYPE: ['Rock','Ground'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    },
    //
    Magnemite: {
        NAME: 'Magnemite',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Electric','Steel'],
        COST: 0,
        RARITY: 'U',
        NEXT: 'Magneton'
    },
    Magneton: {
        NAME: 'Magneton',
        HP: 1,
        POW: 3,
        DEF: 1,
        TYPE: ['Electric','Steel'],
        COST: 1,
        RARITY: 'X',
        NEXT: 'Magnezone'
    },
    Magnezone: {
        NAME: 'Magnezone',
        HP: 1,
        POW: 4,
        DEF: 3,
        TYPE: ['Electric','Steel'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    //
    Horsea: {
        NAME: 'Horsea',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Water'],
        COST: 0,
        RARITY: 'U',
        NEXT: 'Seadra'
    },
    Seadra: {
        NAME: 'Seadra',
        HP: 2,
        POW: 2,
        DEF: 1,
        TYPE: ['Water'],
        COST: 1,
        RARITY: 'X',
        NEXT: 'Kingdra'
    },
    Kingdra: {
        NAME: 'Kingdra',
        HP: 3,
        POW: 3,
        DEF: 2,
        TYPE: ['Water','Dragon'],
        COST: 2,
        RARITY: 'L',
        NEXT: null
    },
    //
    Rhyhorn: {
        NAME: 'Rhyhorn',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Rock','Ground'],
        COST: 0,
        RARITY: 'U',
        NEXT: 'Rhydon'
    },
    Rhydon: {
        NAME: 'Rhydon',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Rock','Ground'],
        COST: 1,
        RARITY: 'X',
        NEXT: 'Rhyperior'
    },
    Rhyperior: {
        NAME: 'Rhyperior',
        HP: 2,
        POW: 3,
        DEF: 3,
        TYPE: ['Rock','Ground'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    //
    Elekid: {
        NAME: 'Elekid',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Electric'],
        COST: 0,
        RARITY: 'R',
        NEXT: 'Electabuzz'
    },
    Electabuzz: {
        NAME: 'Electabuzz',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Electric'],
        COST: 1,
        RARITY: 'X',
        NEXT: 'Electivire'
    },
    Electivire: {
        NAME: 'Electivire',
        HP: 3,
        POW: 3,
        DEF: 2,
        TYPE: ['Electric'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    //
    Magby: {
        NAME: 'Magby',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Fire'],
        COST: 0,
        RARITY: 'R',
        NEXT: 'Magmar'
    },
    Magmar: {
        NAME: 'Magmar',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Fire'],
        COST: 1,
        RARITY: 'X',
        NEXT: 'Magmortar'
    },
    Magmortar: {
        NAME: 'Magmortar',
        HP: 3,
        POW: 3,
        DEF: 2,
        TYPE: ['Fire'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    /* SECONDARY GROUP 



        COST: 0 -> 1 -> 2
        STAT TOTALS: 3 -> 5 -> 7



    */
    Pidgey: {
        NAME: 'Pidgey',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Normal','Flying'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Pidgeotto'
    },
    Pidgeotto: {
        NAME: 'Pidgeotto',
        HP: 2,
        POW: 2,
        DEF: 1,
        TYPE: ['Normal','Flying'],
        COST: 1,
        RARITY: 'U',
        NEXT: 'Pidgeot'
    },
    Pidgeot: {
        NAME: 'Pidgeot',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Normal','Flying'],
        COST: 2,
        RARITY: 'R',
        NEXT: null
    },
    //
    Nidoran: {
        NAME: 'Nidoran',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Poison'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Nidorino,Nidorina'
    },
    Nidorino: {
        NAME: 'Nidorino',
        HP: 2,
        POW: 2,
        DEF: 1,
        TYPE: ['Poison'],
        COST: 1,
        RARITY: 'R',
        NEXT: 'Nidoking'
    },
    Nidorina: {
        NAME: 'Nidorina',
        HP: 2,
        POW: 2,
        DEF: 1,
        TYPE: ['Poison'],
        COST: 1,
        RARITY: 'R',
        NEXT: 'Nidoqueen'
    },
    Nidoking: {
        NAME: 'Nidoking',
        HP: 2,
        POW: 3,
        DEF: 2,
        TYPE: ['Poison','Ground'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    },
    Nidoqueen: {
        NAME: 'Nidoqueen',
        HP: 2,
        POW: 2,
        DEF: 3,
        TYPE: ['Poison','Ground'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    },
    //
    Oddish: {
        NAME: 'Oddish',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Grass','Poison'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Gloom'
    },
    Gloom: {
        NAME: 'Gloom',
        HP: 2,
        POW: 1,
        DEF: 2,
        TYPE: ['Grass','Poison'],
        COST: 1,
        RARITY: 'U',
        NEXT: 'Vileplume'
    },
    Vileplume: {
        NAME: 'Vileplume',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Grass','Poison'],
        COST: 2,
        RARITY: 'X',
        NEXT: null
    },
    //
    Poliwag: {
        NAME: 'Poliwag',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Water'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Poliwhirl'
    },
    Poliwhirl: {
        NAME: 'Poliwhirl',
        HP: 2,
        POW: 2,
        DEF: 1,
        TYPE: ['Water'],
        COST: 1,
        RARITY: 'R',
        NEXT: 'Poliwrath'
    },
    Poliwrath: {
        NAME: 'Poliwrath',
        HP: 3,
        POW: 3,
        DEF: 1,
        TYPE: ['Water','Fighting'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    },
    //
    Bellsprout: {
        NAME: 'Bellsprout',
        HP: 1,
        POW: 2,
        DEF: 0,
        TYPE: ['Grass','Poison'],
        COST: 0,
        RARITY: 'U',
        NEXT: 'Weepinbell'
    },
    Weepinbell: {
        NAME: 'Weepinbell',
        HP: 1,
        POW: 3,
        DEF: 1,
        TYPE: ['Grass','Poison'],
        COST: 1,
        RARITY: 'R',
        NEXT: 'Victreebel'
    },
    Victreebel: {
        NAME: 'Victreebel',
        HP: 2,
        POW: 3,
        DEF: 2,
        TYPE: ['Grass','Poison'],
        COST: 2,
        RARITY: 'X',
        NEXT: null
    },
    //
    Cleffa: {
        NAME: 'Cleffa',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Fairy'],
        COST: 0,
        RARITY: 'R',
        NEXT: 'Clefairy'
    },
    Clefairy: {
        NAME: 'Clefairy',
        HP: 2,
        POW: 1,
        DEF: 2,
        TYPE: ['Fairy'],
        COST: 1,
        RARITY: 'X',
        NEXT: 'Clefable'
    },
    Clefable: {
        NAME: 'Clefable',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Fairy'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    },
    //
    Igglybuff: {
        NAME: 'Igglybuff',
        HP: 2,
        POW: 1,
        DEF: 0,
        TYPE: ['Normal','Fairy'],
        COST: 0,
        RARITY: 'R',
        NEXT: 'Jigglypuff'
    },
    Jigglypuff: {
        NAME: 'Jigglypuff',
        HP: 2,
        POW: 1,
        DEF: 2,
        TYPE: ['Normal','Fairy'],
        COST: 1,
        RARITY: 'M',
        NEXT: 'Wigglytuff'
    },
    Wigglytuff: {
        NAME: 'Wigglytuff',
        HP: 4,
        POW: 1,
        DEF: 2,
        TYPE: ['Normal','Fairy'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    //
    Zubat: {
        NAME: 'Zubat',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Poison','Flying'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Golbat'
    },
    Golbat: {
        NAME: 'Golbat',
        HP: 2,
        POW: 2,
        DEF: 1,
        TYPE: ['Poison','Flying'],
        COST: 1,
        RARITY: 'R',
        NEXT: 'Crobat'
    },
    Crobat: {
        NAME: 'Crobat',
        HP: 3,
        POW: 3,
        DEF: 1,
        TYPE: ['Poison','Flying'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    },
    //
    Porygon: {
        NAME: 'Porygon',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Normal'],
        COST: 0,
        RARITY: 'R',
        NEXT: 'Porygon2'
    },
    Porygon2: {
        NAME: 'Porygon2',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Normal'],
        COST: 1,
        RARITY: 'M',
        NEXT: 'PorygonZ'
    },
    PorygonZ: {
        NAME: 'Porygon-Z',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Normal'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    /*



        FAST GROUP
        COST: 0 -> 0 -> 1
        STAT TOTALS: 3 -> 4 -> 6



    */
    Caterpie: {
        NAME: 'Caterpie',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Bug'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Metapod'
    },
    Metapod: {
        NAME: 'Metapod',
        HP: 1,
        POW: 0,
        DEF: 3,
        TYPE: ['Bug'],
        COST: 0,
        RARITY: 'U',
        NEXT: 'Butterfree'
    },
    Butterfree: {
        NAME: 'Butterfree',
        HP: 2,
        POW: 1,
        DEF: 3,
        TYPE: ['Bug','Flying'],
        COST: 1,
        RARITY: 'R',
        NEXT: null
    },
    //
    Weedle: {
        NAME: 'Weedle',
        HP: 1,
        POW: 2,
        DEF: 0,
        TYPE: ['Bug','Poison'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Kakuna'
    },
    Kakuna: {
        NAME: 'Kakuna',
        HP: 1,
        POW: 0,
        DEF: 3,
        TYPE: ['Bug','Poison'],
        COST: 0,
        RARITY: 'U',
        NEXT: 'Beedrill'
    },
    Beedrill: {
        NAME: 'Beedrill',
        HP: 2,
        POW: 2,
        DEF: 2,
        TYPE: ['Bug','Poison'],
        COST: 1,
        RARITY: 'R',
        NEXT: null
    },
    /*
    
    
    
        PSEUDO-LEGEND GROUP
        COST: 1 -> 2 -> 3
        STAT TOTALS: 
    
    
    
    */
    Dratini: {
        NAME: 'Dratini',
        HP: 1,
        POW: 2,
        DEF: 0,
        TYPE: ['Dragon'],
        COST: 1,
        RARITY: 'M',
        NEXT: 'Dragonair'
    },
    Dragonair: {
        NAME: 'Dragonair',
        HP: 1,
        POW: 0,
        DEF: 3,
        TYPE: ['Dragon'],
        COST: 2,
        RARITY: 'L',
        NEXT: 'Dragonite'
    },
    Dragonite: {
        NAME: 'Dragonite',
        HP: 2,
        POW: 2,
        DEF: 2,
        TYPE: ['Dragon'],
        COST: 3,
        RARITY: 'N',
        NEXT: null
    },
    /* 
    
    
    
        TWO STAGE GROUP - COMMON
        COST: 0 -> 1
        STAT TOTALS: 3 -> 6
    
    
    
    */
    Rattata: {
        NAME: 'Rattata',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Normal'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Raticate'
    },
    Raticate: {
        NAME: 'Raticate',
        HP: 2,
        POW: 3,
        DEF: 1,
        TYPE: ['Normal'],
        COST: 1,
        RARITY: 'U',
        NEXT: null
    },
    //
    Spearow: {
        NAME: 'Spearow',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Normal','Flying'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Fearow'
    },
    Fearow: {
        NAME: 'Fearow',
        HP: 2,
        POW: 2,
        DEF: 2,
        TYPE: ['Normal','Flying'],
        COST: 1,
        RARITY: 'R',
        NEXT: null
    },
    //
    Ekans: {
        NAME: 'Ekans',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Poison'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Arbok'
    },
    Arbok: {
        NAME: 'Arbok',
        HP: 2,
        POW: 2,
        DEF: 2,
        TYPE: ['Poison'],
        COST: 1,
        RARITY: 'R',
        NEXT: null
    },
    //
    Sandshrew: {
        NAME: 'Sandshrew',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Ground'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Sandslash'
    },
    Sandslash: {
        NAME: 'Sandslash',
        HP: 1,
        POW: 3,
        DEF: 2,
        TYPE: ['Ground'],
        COST: 1,
        RARITY: 'U',
        NEXT: null
    },
    //
    Paras: {
        NAME: 'Paras',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Bug','Grass'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Parasect'
    },
    Parasect: {
        NAME: 'Parasect',
        HP: 2,
        POW: 2,
        DEF: 2,
        TYPE: ['Bug','Grass'],
        COST: 1,
        RARITY: 'U',
        NEXT: null
    },
    //
    Mankey: {
        NAME: 'Mankey',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Fighting'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Primeape'
    },
    Primeape: {
        NAME: 'Primeape',
        HP: 2,
        POW: 3,
        DEF: 1,
        TYPE: ['Fighting'],
        COST: 1,
        RARITY: 'R',
        NEXT: null
    },
    //
    Psyduck: {
        NAME: 'Psyduck',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Water'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Golduck'
    },
    Golduck: {
        NAME: 'Golduck',
        HP: 2,
        POW: 2,
        DEF: 2,
        TYPE: ['Water'],
        COST: 1,
        RARITY: 'R',
        NEXT: null
    },
    //
    Ponyta: {
        NAME: 'Ponyta',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Fire'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Rapidash'
    },
    Rapidash: {
        NAME: 'Rapidash',
        HP: 2,
        POW: 2,
        DEF: 2,
        TYPE: ['Fire'],
        COST: 1,
        RARITY: 'U',
        NEXT: null
    },
    //
    Seel: {
        NAME: 'Seel',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Water'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Dewgong'
    },
    Dewgong: {
        NAME: 'Dewgong',
        HP: 2,
        POW: 2,
        DEF: 2,
        TYPE: ['Water','Ice'],
        COST: 1,
        RARITY: 'X',
        NEXT: null
    },
    //
    Koffing: {
        NAME: 'Koffing',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Poison'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Weezing'
    },
    Weezing: {
        NAME: 'Weezing',
        HP: 1,
        POW: 1,
        DEF: 4,
        TYPE: ['Poison'],
        COST: 1,
        RARITY: 'R',
        NEXT: null
    },
    //
    Goldeen: {
        NAME: 'Goldeen',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Water'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Seaking'
    },
    Seaking: {
        NAME: 'Seaking',
        HP: 1,
        POW: 3,
        DEF: 2,
        TYPE: ['Water'],
        COST: 1,
        RARITY: 'U',
        NEXT: null
    },
    /*
    
    
    
    TWO STAGE GROUP - UNCOMMON
    COST: 1 -> 2
    STAT TOTALS: 4 -> 7
    
    
    
    */
   Pikachu: {
       NAME: 'Pikachu',
       HP: 1,
       POW: 2,
       DEF: 1,
       TYPE: ['Electric'],
       COST: 0,
       RARITY: 'U',
       NEXT: 'Raichu'
   },
   Raichu: {
       NAME: 'Raichu',
       HP: 2,
       POW: 3,
       DEF: 2,
       TYPE: ['Electric'],
       COST: 1,
       RARITY: 'X',
       NEXT: null
   },
   //
   Venonat: {
       NAME: 'Venonat',
       HP: 2,
       POW: 1,
       DEF: 1,
       TYPE: ['Bug','Poison'],
       COST: 0,
       RARITY: 'U',
       NEXT: 'Venomoth'
    },
    Venomoth: {
        NAME: 'Venomoth',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Bug','Poison'],
        COST: 1,
        RARITY: 'X',
        NEXT: null
    },
    //
    Diglett: {
        NAME: 'Diglett',
        HP: 1,
        POW: 2,
        DEF: 1,
        TYPE: ['Ground'],
        COST: 0,
        RARITY: 'U',
        NEXT: 'Dugtrio'
    },
    Dugtrio: {
        NAME: 'Dugtrio',
        HP: 2,
        POW: 4,
        DEF: 1,
        TYPE: ['Ground'],
        COST: 1,
        RARITY: 'R',
        NEXT: null
    },
    //
    Meowth: {
        NAME: 'Meowth',
        HP: 1,
        POW: 2,
        DEF: 1,
        TYPE: ['Normal'],
        COST: 0,
        RARITY: 'U',
        NEXT: 'Persian'
    },
    Persian: {
        NAME: 'Persian',
        HP: 2,
        POW: 4,
        DEF: 1,
        TYPE: ['Normal'],
        COST: 1,
        RARITY: 'M',
        NEXT: null
    },
    //
    Tentacool: {
        NAME: 'Tentacool',
        HP: 2,
        POW: 1,
        DEF: 1,
        TYPE: ['Water','Poison'],
        COST: 0,
        RARITY: 'U',
        NEXT: 'Tentacruel'
    },
    Tentacruel: {
        NAME: 'Tentacruel',
        HP: 2,
        POW: 1,
        DEF: 4,
        TYPE: ['Water','Poison'],
        COST: 1,
        RARITY: 'X',
        NEXT: null
    },
    //
    Doduo: {
        NAME: 'Doduo',
        HP: 2,
        POW: 1,
        DEF: 1,
        TYPE: ['Normal','Flying'],
        COST: 0,
        RARITY: 'U',
        NEXT: 'Dodrio'
    },
    Dodrio: {
        NAME: 'Dodrio',
        HP: 2,
        POW: 3,
        DEF: 2,
        TYPE: ['Normal','Flying'],
        COST: 1,
        RARITY: 'R',
        NEXT: null
    },
    //
    Grimer: {
        NAME: 'Grimer',
        HP: 1,
        POW: 1,
        DEF: 2,
        TYPE: ['Poison'],
        COST: 1,
        RARITY: 'U',
        NEXT: 'Muk'
    },
    Muk: {
        NAME: 'Muk',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Poison'],
        COST: 2,
        RARITY: 'X',
        NEXT: null
    },
    //
    Shellder: {
        NAME: 'Shellder',
        HP: 1,
        POW: 1,
        DEF: 2,
        TYPE: ['Water','Ice'],
        COST: 1,
        RARITY: 'U',
        NEXT: 'Cloyster'
    },
    Cloyster: {
        NAME: 'Cloyster',
        HP: 1,
        POW: 2,
        DEF: 4,
        TYPE: ['Water','Ice'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    },
    //
   Drowzee: {
        NAME: 'Drowzee',
        HP: 1,
        POW: 1,
        DEF: 2,
        TYPE: ['Psychic'],
        COST: 1,
        RARITY: 'U',
        NEXT: 'Hypno'
    },
    Hypno: {
        NAME: 'Hypno',
        HP: 2,
        POW: 2,
        DEF: 3,
        TYPE: ['Psychic'],
        COST: 2,
        RARITY: 'X',
        NEXT: null
    },
    //
   Krabby: {
        NAME: 'Krabby',
        HP: 1,
        POW: 1,
        DEF: 2,
        TYPE: ['Water'],
        COST: 1,
        RARITY: 'U',
        NEXT: 'Kingler'
    },
    Kingler: {
        NAME: 'Kingler',
        HP: 1,
        POW: 3,
        DEF: 3,
        TYPE: ['Water'],
        COST: 2,
        RARITY: 'R',
        NEXT: null
    },
    //
   Voltorb: {
        NAME: 'Voltorb',
        HP: 1,
        POW: 2,
        DEF: 1,
        TYPE: ['Electric'],
        COST: 1,
        RARITY: 'U',
        NEXT: 'Electrode'
    },
    Electrode: {
        NAME: 'Electrode',
        HP: 1,
        POW: 4,
        DEF: 2,
        TYPE: ['Electric'],
        COST: 2,
        RARITY: 'X',
        NEXT: null
    },
    //
    MimeJr: {
        NAME: 'Mime Jr.',
        HP: 1,
        POW: 1,
        DEF: 2,
        TYPE: ['Psychic','Fairy'],
        COST: 1,
        RARITY: 'U',
        NEXT: 'MrMime'
    },
    MrMime: {
        NAME: 'Mr. Mime',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Psychic','Fairy'],
        COST: 2,
        RARITY: 'X',
        NEXT: null
    },
    /* 
    
    
    
    TWO STAGE GROUP - RARE
    COST: 1 -> 2
    STAT TOTALS: 4 -> 8
    
    
    
    
    */
   Vulpix: {
        NAME: 'Vulpix',
        HP: 2,
        POW: 2,
        DEF: 0,
        TYPE: ['Fire'],
        COST: 1,
        RARITY: 'R',
        NEXT: 'Ninetails'
    },
    Ninetails: {
        NAME: 'Ninetails',
        HP: 2,
        POW: 4,
        DEF: 2,
        TYPE: ['Fire'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    },
    //
   Slowpoke: {
        NAME: 'Slowpoke',
        HP: 2,
        POW: 1,
        DEF: 1,
        TYPE: ['Water','Psychic'],
        COST: 1,
        RARITY: 'R',
        NEXT: 'Slowbro,Slowking'
    },
    Slowbro: {
        NAME: 'Slowbro',
        HP: 3,
        POW: 1,
        DEF: 4,
        TYPE: ['Water','Psychic'],
        COST: 2,
        RARITY: 'X',
        NEXT: null
    },
   Slowking: {
        NAME: 'Slowking',
        HP: 4,
        POW: 2,
        DEF: 2,
        TYPE: ['Water','Psychic'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    //
   Exeggcute: {
        NAME: 'Exeggcute',
        HP: 1,
        POW: 1,
        DEF: 2,
        TYPE: ['Grass','Psychic'],
        COST: 1,
        RARITY: 'R',
        NEXT: 'Exeguttor'
    },
    Exeggutor: {
        NAME: 'Exeggutor',
        HP: 2,
        POW: 4,
        DEF: 2,
        TYPE: ['Grass','Psychic'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    },
    //
   Cubone: {
        NAME: 'Cubone',
        HP: 1,
        POW: 1,
        DEF: 2,
        TYPE: ['Ground'],
        COST: 1,
        RARITY: 'R',
        NEXT: 'Marowak'
    },
    Marowak: {
        NAME: 'Warowak',
        HP: 2,
        POW: 2,
        DEF: 3,
        TYPE: ['Ground'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    },
    //
    Tangela: {
        NAME: 'Tangela',
        HP: 1,
        POW: 1,
        DEF: 2,
        TYPE: ['Grass'],
        COST: 1,
        RARITY: 'R',
        NEXT: 'Tangrowth'
    },
    Tangrowth: {
        NAME: 'Tangrowth',
        HP: 2,
        POW: 2,
        DEF: 3,
        TYPE: ['Grass'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    //
    Staryu: {
        NAME: 'Staryu',
        HP: 1,
        POW: 2,
        DEF: 1,
        TYPE: ['Water'],
        COST: 1,
        RARITY: 'R',
        NEXT: 'Starmie'
    },
    Starmie: {
        NAME: 'Starmie',
        HP: 2,
        POW: 4,
        DEF: 1,
        TYPE: ['Water','Psychic'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    },
    //
    Lickitung: {
        NAME: 'Lickitung',
        HP: 2,
        POW: 1,
        DEF: 1,
        TYPE: ['Normal'],
        COST: 1,
        RARITY: 'R',
        NEXT: 'LickiLicky'
    },
    Lickilicky: {
        NAME: 'Lickilicky',
        HP: 4,
        POW: 1,
        DEF: 2,
        TYPE: ['Normal'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    },
    //
    Scyther: {
        NAME: 'Scyther',
        HP: 1,
        POW: 2,
        DEF: 1,
        TYPE: ['Bug','Flying'],
        COST: 1,
        RARITY: 'R',
        NEXT: 'Scizor'
    },
    Scizor: {
        NAME: 'Scizor',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Bug','Steel'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    //
    Smoochum: {
        NAME: 'Smoochum',
        HP: 1,
        POW: 2,
        DEF: 1,
        TYPE: ['Ice','Psychic'],
        COST: 1,
        RARITY: 'R',
        NEXT: 'Jynx'
    },
    Jynx: {
        NAME: 'Jynx',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Ice','Psychic'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    },
    //
    Omanyte: {
        NAME: 'Omanyte',
        HP: 1,
        POW: 2,
        DEF: 1,
        TYPE: ['Water','Rock'],
        COST: 1,
        RARITY: 'X',
        NEXT: 'Omastar'
    },
    Omastar: {
        NAME: 'Omastar',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Water','Rock'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    },
    //
    Kabuto: {
        NAME: 'Kabuto',
        HP: 1,
        POW: 2,
        DEF: 1,
        TYPE: ['Water','Rock'],
        COST: 1,
        RARITY: 'X',
        NEXT: 'Kabutops'
    },
    Kabutops: {
        NAME: 'Kabutops',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Water','Rock'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    },
   /*
   
    

        TWO STAGE GROUP - ULTRA
        COST: 1 -> 3
        STAT TOTALS: 4 -> 9

    
    
    */
    Growlithe: {
        NAME: 'Growlithe',
        HP: 1,
        POW: 2,
        DEF: 1,
        TYPE: ['Fire'],
        COST: 1,
        RARITY: 'X',
        NEXT: 'Arcanine'
    },
    Arcanine: {
        NAME: 'Arcanine',
        HP: 3,
        POW: 4,
        DEF: 2,
        TYPE: ['Fire'],
        COST: 3,
        RARITY: 'L',
        NEXT: null
    },
    //
    Onix: {
        NAME: 'Onix',
        HP: 1,
        POW: 1,
        DEF: 2,
        TYPE: ['Rock','Ground'],
        COST: 1,
        RARITY: 'X',
        NEXT: 'Steelix'
    },
    Steelix: {
        NAME: 'Steelix',
        HP: 2,
        POW: 2,
        DEF: 5,
        TYPE: ['Ground','Steel'],
        COST: 3,
        RARITY: 'L',
        NEXT: null
    },
    //
    Chansey: {
        NAME: 'Chansey',
        HP: 3,
        POW: 0,
        DEF: 1,
        TYPE: ['Normal'],
        COST: 1,
        RARITY: 'X',
        NEXT: 'Blissey'
    },
    Blissey: {
        NAME: 'Blissey',
        HP: 6,
        POW: 1,
        DEF: 2,
        TYPE: ['Normal'],
        COST: 3,
        RARITY: 'L',
        NEXT: null
    },
    //
    Magikarp: {
        NAME: 'Magikarp',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Water'],
        COST: 0,
        RARITY: 'C',
        NEXT: 'Gyarados'
    },
    Gyarados: {
        NAME: 'Gyarados',
        HP: 2,
        POW: 2,
        DEF: 2,
        TYPE: ['Water','Flying'],
        COST: 1,
        RARITY: 'R',
        NEXT: null
    },
    /* 
    
    

        TWO STAGE GROUP - SPECIAL / BRANCHING
        COST: 0 -> 2
        STAT TOTALS: 3 -> 7
    
    

    */
   Tyrogue: {
        NAME: 'Tyrogue',
        HP: 1,
        POW: 1,
        DEF: 1,
        TYPE: ['Fighting'],
        COST: 0,
        RARITY: 'X',
        NEXT: 'Hitmonlee,Hitmonchan,Hitmontop'
    },
    Hitmonlee: {
        NAME: 'Hitmonlee',
        HP: 1,
        POW: 4,
        DEF: 2,
        TYPE: ['Fighting'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
   Hitmonchan: {
        NAME: 'Hitmonchan',
        HP: 2,
        POW: 2,
        DEF: 3,
        TYPE: ['Fighting'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    Hitmontop: {
        NAME: 'Hitmontop',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Fighting'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    //
    Eevee: {
        NAME: 'Eevee',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Normal'],
        COST: 0,
        RARITY: 'M',
        NEXT: 'Flareon,Jolteon,Vaporeon,Leafeon,Glaceon,Espeon,Umbreon,Sylveon'
    },
    Flareon: {
        NAME: 'Flareon',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Fire'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    Jolteon: {
        NAME: 'Jolteon',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Electric'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    Vaporeon: {
        NAME: 'Vaporeon',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Water'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    Espeon: {
        NAME: 'Espeon',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Psychic'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    Umbreon: {
        NAME: 'Umbreon',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Dark'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    Leafeon: {
        NAME: 'Leafeon',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Grass'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    Glaceon: {
        NAME: 'Glaceon',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Ice'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    Sylveon: {
        NAME: 'Sylveon',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Fairy'],
        COST: 2,
        RARITY: 'N',
        NEXT: null
    },
    /* 
    
    
    
        SINGLE STAGE GROUP - COMMON
        COST: 1
        STAT TOTALS: 5
    
    
    
    */
    Farfetchd: {
        NAME: `Farfetch'd`,
        HP: 2,
        POW: 2,
        DEF: 1,
        TYPE: ['Normal','Flying'],
        COST: 1,
        RARITY: 'C',
        NEXT: null
    },
    //
    Ditto: {
        NAME: `Ditto`,
        HP: 2,
        POW: 2,
        DEF: 1,
        TYPE: ['Normal'],
        COST: 1,
        RARITY: 'C',
        NEXT: null
    },
    /*
    
    
    
        SINGLE STAGE GROUP - RARE
        COST: 2
        STAT TOTALS: 7
    
    
    
    */
    Kangaskhan: {
        NAME: 'Kangaskhan',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Normal'],
        COST: 2,
        RARITY: 'R',
        NEXT: null
    },
    //
    Pinsir: {
        NAME: 'Pinsir',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Bug'],
        COST: 2,
        RARITY: 'R',
        NEXT: null
    },
    //
    Tauros: {
        NAME: 'Tauros',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Normal'],
        COST: 2,
        RARITY: 'R',
        NEXT: null
    },
    //
    Lapras: {
        NAME: 'Lapras',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Water','Ice'],
        COST: 2,
        RARITY: 'R',
        NEXT: null
    },
    //
    Aerodactyl: {
        NAME: 'Aerodectyl',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Rock','Flying'],
        COST: 2,
        RARITY: 'R',
        NEXT: null
    },
    /*
    
    
    

            SINGLE STAGE GROUP - MYTHIC
            COST: 3
            STAT TOTALS: 8

    

    
    */
    Snorlax: {
        NAME: 'Snorlax',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Normal'],
        COST: 2,
        RARITY: 'M',
        NEXT: null
    },
    /*
    
    
    

            SINGLE STAGE GROUP - LEGENDARY
            COST: 4
            STAT TOTALS: 12

    

    
    */
    Articuno: {
        NAME: 'Articuno',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Ice','Flying'],
        COST: 4,
        RARITY: 'L',
        NEXT: null
    },
    //
    Zapdos: {
        NAME: 'Zapdos',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Electric','Flying'],
        COST: 4,
        RARITY: 'L',
        NEXT: null
    },
    //
    Moltres: {
        NAME: 'Moltres',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Fire','Flying'],
        COST: 4,
        RARITY: 'L',
        NEXT: null
    },
    //
    Mewtwo: {
        NAME: 'Mewtwo',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Psychic'],
        COST: 4,
        RARITY: 'L',
        NEXT: null
    },
    //
    Mew: {
        NAME: 'Mew',
        HP: 3,
        POW: 2,
        DEF: 2,
        TYPE: ['Psychic'],
        COST: 4,
        RARITY: 'L',
        NEXT: null
    },
}

const pokedex = [...Object.entries(gen1dex)]

export { pokedex, rarities };