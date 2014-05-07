exports.BattleItems = {
	"suppressionorb": {
      id: "suppressionorb",
      name: "Suppression Orb",
      spritenum: 418,
      fling: {
         basePower: 40
      },
   onStart: function (pokemon) {
        if (pokemon.setAbility('')) {
            this.add('-endability', pokemon, pokemon.ability);
            return;
            }
            return false;
        },
   onModifyPokemon: function(pokemon) {
         pokemon.ignore['Ability'] = true;
      },
      desc: "Reduces the holder's attack 20% and removes the holder's ability"
  },
	"antimattergenerator": {
		id: "antimattergenerator",
		name: "Antimatter Generator",
		spritenum: 221,
		fling: {
			basePower: 160
		},
		num: 282,
		gen: 4,
		desc: "Holder's use of Trick Room lasts 8 turns instead of 5."
	},
	"supermassiveblackhole": {
		id: "supermassiveblackhole",
		name: "Super Massive Black Hole",
		spritenum: 221,
		fling: {
			basePower: 160
		},
		num: 282,
		gen: 4,
		desc: "Holder's use of Gravity lasts 8 turns instead of 5."
	},
  };
