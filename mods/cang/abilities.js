exports.BattleAbilities = {
	"distortion": {
		desc: "When this Pokemon enters the battlefield, it uses trick room.",
		shortDesc: "On switch-in, this Pokemon summons Trick Room.",
		onStart: function(source) {
			this.setWeather('Trickroom');
		},
		id: "distortion",
		name: "Distortion",
		rating: 5,
		num: 200
	},
	"gravitation": {
		desc: "When this Pokemon enters the battlefield, it uses Gravity.",
		shortDesc: "On switch-in, this Pokemon summons Gravity.",
		onStart: function(source) {
			this.setWeather('Gravity');
		},
		id: "gravitation",
		name: "Gravitation",
		rating: 5,
		num: 201
	},
	"niflheim": {
		desc: "Raises the power of Ice-type moves by 60% while a Hail is in effect. It also gives the user immunity to damage from Hail.",
		shortDesc: "This Pokemon's Ice attacks do 1.6x in Hail; immunity to it.",
		onBasePower: function(basePower, attacker, defender, move) {
			if (this.isWeather('hail')) {
				if (move.type === 'Ice') {
					this.debug('Sand Force boost');
					return basePower * 16/10;
				}
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		},
		id: "niflheim",
		name: "Niflheim",
		rating: 3.5,
		num: 202
	},
	"polarexpress": {
		desc: "Doubles 2.1 Speed in a Hail, and makes the Pokemon immune to Hail damage.",
		shortDesc: "If Hail is active, this Pokemon's Speed is 2.1x; immunity to Hail.",
		onModifySpe: function(speMod, pokemon) {
			if (this.isWeather('hail')) {
				return this.chain(speMod, 2.1);
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		},
		id: "polarexpress",
		name: "Polar Express",
		rating: 4,
		num: 203
	},
	"sapsipper": {
		desc: "When a Pokemon with Sap Sipper is hit with a Grass-type attack, its attack is increased by one level, and the move itself has no effect. If hit by a multi-hit attack like Bullet Seed, it will increase attack by one stage for each hit. The only Grass-type move that will not activate Sap Sipper is Aromatherapy.",
		shortDesc: "This Pokemon's Attack is boosted by 1 if hit by any Grass move; Grass immunity.",
		onStart: function(pokemon) {
		if (pokemon.name === 'Bouffalant') {
		this.add('-message', "BOUFFALANT NO! WATCH OUT FOR THAT TRUCK!");
		this.add('-message', "Boufallant is now Ghost/Normal type (it died)!");
		}
		},
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Grass') {
				this.boost({atk:1});
				return null;
			}
		},
		id: "sapsipper",
		name: "Sap Sipper",
		rating: 3.5,
		num: 157
	},
		"soundproof": {
		desc: "This Pokemon is immune to the effects of sound-based moves, which are: Bug Buzz, Chatter, Echoed Voice, Grasswhistle, Growl, Heal Bell, Hyper Voice, Metal Sound, Perish Song, Relic Song, Roar, Round, Screech, Sing, Snarl, Snore, Supersonic, and Uproar. This ability doesn't affect Heal Bell.",
		shortDesc: "This Pokemon is immune to sound-based moves, except Heal Bell.",
		onStart: function(pokemon) {
		if (pokemon.name === 'Bouffalant') {
		this.add('-message', "BOUFFALANT NO! WATCH OUT FOR THAT TRUCK!");
		this.add('-message', "Boufallant is now Ghost/Normal type (it died)!");
		}
		},
		onTryHit: function(target, source, move) {
			if (target !== source && move.isSoundBased) {
				this.add('-immune', target, '[msg]');
				return null;
			}
		},
		id: "soundproof",
		name: "Soundproof",
		rating: 2,
		num: 43
	},
	"swindler": {
		desc: "When a Pokemon with Sap Sipper is hit with a Grass-type attack, its attack is increased by one level, and the move itself has no effect. If hit by a multi-hit attack like Bullet Seed, it will increase attack by one stage for each hit. The only Grass-type move that will not activate Sap Sipper is Aromatherapy.",
		shortDesc: "This Pokemon's Attack is boosted by 1 if hit by any Grass move; Grass immunity.",
		onStart: function(pokemon) {
			this.add('-message', "You don't want your item, you'd rather have mine.");
			var source = pokemon.side.player;
			var target = pokemon.side.foe.randomActive();
			var yourItem = target.takeItem(source);
			var myItem = pokemon.takeItem(target);
			if (target.item || pokemon.item || (!yourItem && !myItem)) {
				if (yourItem) target.item = yourItem;
				if (myItem) pokemon.item = myItem;
				return false;
			}
			this.add('-activate', pokemon, 'move: Trick', '[of] '+target);
			if (myItem) {
				target.setItem(myItem);
				this.add('-item', target, myItem, '[from] move: Trick');
			}
			if (yourItem) {
				pokemon.setItem(yourItem);
				this.add('-item', pokemon, yourItem, '[from] move: Trick');
			}
		},
		id: "swindler",
		name: "Swindler",
		rating: 5,
		num: 205
	},
	"rockhead": {
		desc: "This Pokemon does not receive recoil damage unless it uses Struggle, it misses with Jump Kick or Hi Jump Kick or it is holding Life Orb, Jaboca Berry or Rowap Berry.",
		shortDesc: "This Pokemon does not take recoil damage besides Struggle, Life Orb, crash damage.",
		onBasePower: function(basePower, attacker, defender, move) {
				if (move.type === 'Rock') {
					this.debug('Rock Head Boost');
					return basePower * 13/10;
				}
			},
		onModifyMove: function(move) {
			delete move.recoil;
		},
		id: "rockhead",
		name: "Rock Head",
		rating: 3,
		num: 69
	},
	"reckless": {
		desc: "When this Pokemon uses an attack that causes recoil damage, or an attack that has a chance to cause recoil damage such as Jump Kick and Hi Jump Kick, the attacks's power receives a 20% boost.",
		shortDesc: "This Pokemon's attacks with recoil or crash damage do 1.2x damage; not Struggle.",
		onStart: function(pokemon) {
		if (pokemon.name === 'Bouffalant') {
		this.add('-message', "BOUFFALANT NO! WATCH OUT FOR THAT TRUCK!");
		this.add('-message', "Boufallant is now Ghost/Normal type (it died)!");
		}
		},
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.name === 'Brave Bird' || move.name === 'Double-Edge' || move.name === 'Flare Blitz' || move.name === 'Head Charge' || move.name === 'Head Smash' || move.name === 'Hi Jump Kick' || move.name === 'Jump Kick' || move.name === 'Submission' || move.name === 'Take Down' || move.name === 'Volt Tackle' || move.name === 'Wood Hammer' || move.name === 'Wild Charge') {
				this.debug('Reckless boost');
				return basePower * 13/10;
				}
		},
		onModifyMove: function(move) {
			delete move.recoil;
		},
		id: "reckless",
		name: "Reckless",
		rating: 4,
		num: 120
	},
	"cloudnine": {
		desc: "When entering a battle, this pokemon clears all weather conditions.",
		shortDesc: "When entering a battle, this pokemon clears all weather conditions.",
		onStart: function(pokemon) {
			this.add('-message', 'The effects of weather disappeared. (placeholder)');
			this.clearWeather();
			this.weatherData.duration = 0;
		},
		id: "cloudnine",
		name: "Cloud Nine",
		rating: 5,
		num: 13
	},
	"sandveil": {
		desc: "This Pokemon's Evasion is boosted by 1.25x if the weather is Sandstorm. This Pokemon is also immune to residual Sandstorm damage.",
		shortDesc: "If Sandstorm is active, this Pokemon's evasion is 1.25x; immunity to Sandstorm.",
		onImmunity: function(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onModifyDef: function(speMod, pokemon) {
			if (this.isWeather('sandstorm')) {
				return this.chainModify(1.1);
			}
		},
		onModifySpD: function(speMod, pokemon) {
			if (this.isWeather('sandstorm')) {
				return this.chainModify(1.1);
			}
		},
		id: "sandveil",
		name: "Sand Veil",
		rating: 1.5,
		num: 8
	},
	"snowcloak": {
		desc: "This Pokemon's Evasion is boosted by 1.25x if the weather is Hail. This Pokemon is also immune to residual Hail damage.",
		shortDesc: "If Hail is active, this Pokemon's evasion is 1.25x; immunity to Hail.",
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		},
		onModifyDef: function(speMod, pokemon) {
			if (this.isWeather('hail')) {
				return this.chainModify(1.1);
			}
		},
		onModifySpD: function(speMod, pokemon) {
			if (this.isWeather('hail')) {
				return this.chainModify(1.1);
			}
		},
		id: "snowcloak",
		name: "Snow Cloak",
		rating: 1,
		num: 81
	},
	"forecast": {
		inherit: true,
		onModifyMove: function(move) {
			if (move.weather) {
				var weather = move.weather;
				move.weather = null;
				move.onHit = function(target, source) {
					this.setWeather(weather, source, this.getAbility('forecast'));
					this.weatherData.duration += 3;
					this.useMove('Update', target);	
					this.useMove('WeatherBall', target);	
				};
				move.target = 'self';
			}
		},
		onusemove: function(pokemon) {
			if (pokemon.baseTemplate.species !== 'Castform' || pokemon.transformed) return;
			var forme = null;
			switch (this.effectiveWeather()) {
			case 'sunnyday':
				if (pokemon.template.speciesid !== 'castformsunny') forme = 'Castform-Sunny';
				break;
			case 'raindance':
				if (pokemon.template.speciesid !== 'castformrainy') forme = 'Castform-Rainy';
				break;
			case 'hail':
				if (pokemon.template.speciesid !== 'castformsnowy') forme = 'Castform-Snowy';
				break;
			default:
				if (pokemon.template.speciesid !== 'castform') forme = 'Castform';
				break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme);
				this.add('-formechange', pokemon, forme);
				this.add('-message', pokemon.name+' transformed! (placeholder)');
			}
		}
	},
	"thickfat": {
		inherit:true,
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		},
	},
	"flowergift": {
		inherit: true,
		onModifyMove: function(move) {
			if (move.id === 'sunnyday') {
				var weather = move.weather;
				move.weather = null;
				move.onHit = function(target, source) {
					this.setWeather(weather, source, this.getAbility('flowergift'));
					this.weatherData.duration = 0;
				};
				move.target = 'self';
				move.sideCondition = 'flowergift';
			}
		},
		onModifyStats: function(stats, pokemon) {
			if (this.isWeather('sunnyday')) {
				if (pokemon.isActive && pokemon.speciesid === 'cherrim' && this.effectData.forme !== 'Sunshine') {
					this.effectData.forme = 'Sunshine';
					this.add('-formechange', pokemon, 'Cherrim-Sunshine');
					this.add('-message', pokemon.name+' transformed! (placeholder)');
					this.boost({spd:1});
				}
			} else if (pokemon.isActive && pokemon.speciesid === 'cherrim' && this.effectData.forme) {
				delete this.effectData.forme;
				this.add('-formechange', pokemon, 'Cherrim');
				this.add('-message', pokemon.name+' transformed! (placeholder)');
			}
		},
		effect: {
			onSwitchInPriority: 1,
			onSwitchIn: function(target) {
				if (!target.fainted) {
					this.boost({spd:1}, target, target, this.getAbility('flowergift'));
				}
				target.side.removeSideCondition('flowergift');
			}
		}
	},
	"solidrock": {
		inherit: true,
		onFoeBasePower: function(basePower, attacker, defender, move) {
			if (this.getEffectiveness(move.type, defender) > 0) {
				this.debug('Solid Rock neutralize');
				return basePower * 1/2;
			}
		}
	},
	"filter": {
		inherit: true,
		onFoeBasePower: function(basePower, attacker, defender, move) {
			if (this.getEffectiveness(move.type, defender) > 0) {
				this.debug('Solid Rock neutralize');
				return basePower * 1/2;
			}
		}
	},
};
