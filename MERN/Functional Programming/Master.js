const pokémon = Object([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    

    const oddListPkmn = pokémon.filter( p => p.id %3 );
    const greaterListPkmn = pokémon.filter( p => p.id >99 );
    const fireListPkmn = pokémon.filter( p => p.types.includes("fire"));
    const normalListPkmn = pokémon.filter( p => p.types.includes("normal"));
    const poisonListPkmn = pokémon.filter( p => p.types=="poison");
    const ndflyingListPkmn = pokémon.filter( p => p.types[1]=="flying");
    const hybredListPkmn = pokémon.filter( p => p.types.length>1);
    const fitypes = pokémon.map(x=>x.types).flat().filter(x=>x.startsWith("fi"));
    const fitypes5 = pokémon.filter(p=> true)
    console.log(pokémon.sort((a,b)=>{
        nameA=a.types[0];
        nameB=b.types[0];
    //     if (nameA < nameB) {
    //     return -1;
    //   }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;}));
    // console.log(oddListPkmn.map(name=>name.name));
    // console.log(fireListPkmn.map(name=>name.name));
    // console.log(pokémon.map(name=>name.name));
    // console.log(greaterListPkmn.map(name=>name.name));
    // console.log(poisonListPkmn.map(name=>name.name));
    // console.log(ndflyingListPkmn.map(name=>name.name));
    // console.log(normalListPkmn.length);
    
    const zaki =[...pokémon];
    console.log(zaki);
    