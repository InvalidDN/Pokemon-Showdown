// Note: This is the list of formats
// The rules that formats use are stored in data/formats.js

exports.Formats = [

	// Spotlight
	///////////////////////////////////////////////////////////////////

	{
		name: "BST Cup 2500",
		section: "Spotlight",

		ruleset: ['OU'],
		banlist: [],
		validateTeam: function(team, format) {
			var bst = 0;
			for (var i=0; i<team.length; i++) {
				var template = this.getTemplate(team[i].species);
				Object.values(template.baseStats, function(value) {
					bst += value;
				});
			}
			if (bst > 2500) return ['The combined BST of your team is greater than 2500.'];
		}
	},
	{
		name: "CANG Standard",
		section: "Spotlight",

		mod: 'cang',
		ruleset: ['Pokemon', 'cangwarning', 'Standard Pokebank', 'Evasion Abilities Clause'],
		banlist: ['Uber', 'Soul Dew']
	},
	// Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "Breakdown Standard",
		section: "XY Singles",
		
		mod: 'bdtiers',
		effectType: 'Format',
		ruleset: ['Pokemon', 'Standard Pokebank', 'Evasion Abilities Clause', 'banubercombos', 'haxitems', 'ubermegatites'],
		banlist: ['Uber']
	},
	{
		name: "Breakdown Uber",
		section: "XY Singles",

		mod: 'bdtiers',		
		effectType: 'Format',
		ruleset: ['Pokemon', 'Standard Ubers', 'Evasion Abilities Clause'],
		banlist: []
	},
	{
		name: "Breakdown Creative",
		section: "XY Singles",

		mod: 'bdtiers',		
		effectType: 'Format',
		ruleset: ['Pokemon', 'Standard Pokebank', 'Evasion Abilities Clause', 'banubercombos', 'haxitems', 'ubermegatites', 'standardmegatites'],
		banlist: ['OU', 'Uber']
	},
	{
		name: "Breakdown Inspired",
		section: "XY Singles",

		mod: 'bdtiers',		
		effectType: 'Format',
		ruleset: ['Pokemon', 'Standard Pokebank', 'Evasion Abilities Clause', 'banubercombos', 'haxitems', 'ubermegatites', 'standardmegatites', 'creativemegatites'],
		banlist: ['OU', 'Uber', 'UU']
	},
	{
		name: "Breakdown Tesla",
		section: "XY Singles",

		mod: 'bdtiers',		
		effectType: 'Format',
		ruleset: ['Pokemon', 'Standard Pokebank', 'Evasion Abilities Clause', 'banubercombos', 'haxitems', 'ubermegatites', 'standardmegatites', 'creativemegatites', 'inspiredmegatites'],
		banlist: ['OU', 'Uber', 'UU', 'RU']
	},
	{
		name: "Gen 5 Standard",
		section: "BW2 Singles",
		
		mod: 'gen5',
		effectType: 'Format',
		ruleset: ['Pokemon', 'Standard5', 'Evasion Abilities Clause', 'banubercombos5'],
		banlist: ['Uber']
	},
	{
		name: "Gen 5 Ubers",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard Ubers'],
		banlist: []
	},
	{
		name: "Gen 5 Creative",
		section: "BW2 Singles",
		
		mod: 'gen5',
		effectType: 'Format',
		ruleset: ['Standard5', 'banubercombos5'],
		banlist: ['Uber','OU','BL']
	},
	{
		name: "Gen 5 Inspired",
		section: "BW2 Singles",
		mod: 'gen5',
		effectType: 'Format',
		ruleset: ['UU', 'Standard5', 'banubercombos5'],
		banlist: ['Uber','OU','UU','BL2']
	},
	{
		name: " Gen 5 Tesla",
		section: "BW2 Singles",
		
		mod: 'gen5',
		effectType: 'Format',
		ruleset: ['RU', 'Standard5', 'banubercombos5'],
		banlist: ['Uber','OU','UU','BL2','RU','BL3']
	},
	{
		name: "Gen 5 LC",
		section: "BW2 Singles",

		mod: 'gen5',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard5', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Carvanha', 'Meditite', 'Gligar', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma', 'Soul Dew']
	},
	{
		name: "Gen 5 Custom Game",
		section: "BW2 Singles",

		mod: 'gen5',

		canUseRandomTeam: true,
		debug: true,
		maxLevel: 100,
		defaultLevel: 100,
		ruleset: []
	},
	{
		name: "CANG Ubers",
		section: "CANG",

		mod: 'cang',
		ruleset: ['Pokemon', 'cangwarning', 'StandardUbers', 'Evasion Abilities Clause'],
		banlist: []
	},
	{
		name: "CANG Creative",
		section: "CANG",

		mod: 'cang',
		ruleset: ['Pokemon', 'cangwarning', 'Standard Pokebank', 'Evasion Abilities Clause', 'banubercombos', 'haxitems', 'ubermegatites', 'standardmegatites', 'creativemegatites'],
		banlist: ['OU', 'Uber', 'UU']
	},
	{
		name: "CANG Inspired",
		section: "CANG",

		mod: 'cang',
		ruleset: ['Pokemon', 'cangwarning', 'Standard Pokebank', 'Evasion Abilities Clause', 'banubercombos', 'haxitems', 'ubermegatites', 'standardmegatites', 'creativemegatites'],
		banlist: ['OU', 'Uber', 'UU']
	},
	{
		name: "CANG Tesla",
		section: "CANG",

		mod: 'cang',
		ruleset: ['Pokemon', 'cangwarning', 'Standard Pokebank', 'Evasion Abilities Clause', 'banubercombos', 'haxitems', 'ubermegatites', 'standardmegatites', 'creativemegatites', 'inspiredmegatites'],
		banlist: ['OU', 'Uber', 'UU', 'RU']
	},

	{
		name: "Random Battle",
		section: "CANG",

		mod: 'cang',
		team: 'random',
		ruleset: ['PotD', 'cangwarning', 'Freeze Clause', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Unrated Random Battle",
		section: "CANG",

		mod: 'cang',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Random Battle']
	},
	// Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "Doubles Random Battle",
		section: 'Doubles',

		mod: 'bdcap',
		gameType: 'doubles',
		team: 'random',

		debug: true,
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod'],
	},
	{
		name: "Doubles Standard",
		section: 'Doubles',

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard5', 'Evasion Abilities Clause'],
		banlist: ['Unreleased', 'Illegal', 'Soul Dew', 'Uber']
	},
	{
		name: "Uber Doubles",
		section: 'Doubles',

		gameType: 'doubles',

		ruleset: ['Pokemon', 'Standard5', 'Evasion Abilities Clause'],
		banlist: ['Unreleased', 'Illegal']
	},
	{
		name: "Doubles VGC 2013",
		section: 'Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Team Preview VGC', 'Species Clause', 'Item Clause'],
		banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
			'Mewtwo',
			'Mew',
			'Lugia',
			'Ho-Oh',
			'Celebi',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Jirachi',
			'Deoxys', 'Deoxys-Attack', 'Deoxys-Speed', 'Deoxys-Defense',
			'Chatot',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Phione',
			'Manaphy',
			'Darkrai',
			'Shaymin', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Victini',
			'Reshiram',
			'Zekrom',
			'Kyurem', 'Kyurem-Black', 'Kyurem-White',
			'Keldeo', 'Keldeo-Resolute',
			'Meloetta',
			'Genesect'
		]
	},
	{
		name: "Doubles Custom Game",
		section: 'Doubles',

		gameType: 'doubles',

		canUseRandomTeam: true,
		debug: true,
		maxLevel: 100,
		defaultLevel: 100,
		ruleset: []
	},
	{
		name: "Doubles Challenge Cup",
		section: 'Doubles',

		gameType: 'doubles',
		team: 'randomCC',

		ruleset: ['Pokemon', 'HP Percentage Mod']
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////
	{
		name: "Stat Swap Standard",
		section: "Other Metagames",
		
		mod: 'statswap',
		effectType: 'Format',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Evasion Moves Clause'],
		banlist: ['Uber'],
		column: 2
	},
	{
		name: "Ability Exchange",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Ability Exchange Pokemon', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Ignore Illegal Abilities', 'Soul Dew',
			'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Tornadus-Therian', 'Thundurus', 'Reshiram', 'Zekrom', 'Landorus', 'Kyurem-White', 'Genesect', 'Slaking', 'Regigigas'
		]
	},
	{
		name: "Challenge Cup",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Challenge Cup 1-vs-1",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
		onBegin: function() {
			this.debug('Cutting down to 1');
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon'],
		banlist: []
	},
	{
		name: "Balanced Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'OHKO Clause'],
		banlist: ['Wonder Guard', 'Pure Power', 'Huge Power', 'Shadow Tag', 'Arena Trap']
	},
	{
		name: "Monotype",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Same Type Clause', 'Evasion Abilities Clause'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	{
		name: "Tier Shift",
		section: 'Other Metagames',

		mod: 'tiershift',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause'],
		banlist: ['Uber']
	},
	{
		name: "1v1",
		section: 'Other Metagames',

		onBegin: function() {
			this.p1.pokemon = this.p1.pokemon.slice(0,1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Unreleased', 'Illegal', 'Soul Dew',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Blaziken',
			'Darkrai',
			'Deoxys', 'Deoxys-Attack',
			'Dialga',
			'Giratina', 'Giratina-Origin',
			'Groudon',
			'Ho-Oh',
			'Kyogre',
			'Kyurem-White',
			'Lugia',
			'Mewtwo',
			'Palkia',
			'Rayquaza',
			'Reshiram',
			'Shaymin-Sky',
			'Zekrom',
			'Memento', 'Explosion', 'Perish Song', 'Destiny Bond', 'Healing Wish', 'Selfdestruct', 'Lunar Dance', 'Final Gambit',
			'Focus Sash'
		]
	},
	{
		name: "BST Cup 1600",
		section: "Other Metagames",

		ruleset: ['OU'],
		banlist: [],
		validateTeam: function(team, format) {
			var bst = 0;
			for (var i=0; i<team.length; i++) {
				var template = this.getTemplate(team[i].species);
				Object.values(template.baseStats, function(value) {
					bst += value;
				});
			}
			if (bst > 1600) return ['The combined BST of your team is greater than 1600.'];
		}
	},

	// Pokemon XY
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 6] Custom Game",
		section: "Pokémon X/Y",


		canUseRandomTeam: true,
		ruleset: ['teampreview'],
		
		column: 2
	},
	{
		name: "[Gen 6] Doubles Custom Game",
		section: "Pokémon X/Y",

		gameType: 'doubles',

		canUseRandomTeam: true,
		ruleset: ['teampreview']
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 4] OU (beta)",
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],

		column: 2
	},
	{
		name: "[Gen 4] UU (beta)",
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL']
	},
	{
		name: "[Gen 4] LC (beta)",
		section: "Past Generations",

		mod: 'gen4',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Little Cup'],
		banlist: ['Sonic Boom', 'Dragon Rage', 'DeepSeaTooth', 'Berry Juice', 'Scyther', 'Sneasel', 'Yanma', 'Tangela', 'Misdreavus', 'Meditite', 'Murkrow']
	},
	{
		name: "[Gen 4] Hackmons",
		section: "Past Generations",

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod'],
		banlist: []
	},
	{
		name: "[Gen 4] Custom Game",
		section: "Past Generations",

		mod: 'gen4',
		searchShow: false,
		debug: true,
		ruleset: []
	},
	{
		name: "[Gen 3] OU (beta)",
		section: "Past Generations",

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Smeargle + Ingrain'],

		column: 2
	},
	{
		name: "[Gen 3] Hackmons",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod'],
		banlist: []
	},
	{
		name: "[Gen 3] Custom Game",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: []
	},
	{
		name: "[Gen 2] OU (beta)",
		section: "Past Generations",

		mod: 'gen2',
		debug: true,
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Mean Look + Hypnosis + Perish Song']
	},
	{
		name: "[Gen 2] Custom Game",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		ruleset: []
	},
	{
		name: "[Gen 1] OU (beta)",
		section: "Past Generations",

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 1] Custom Game",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		ruleset: []
	}

];
