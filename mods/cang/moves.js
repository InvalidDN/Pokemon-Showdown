exports.BattleMovedex = {
	stealthrock: {
		inherit: true,
		effect: {
			// this is a side condition
			onStart: function(side) {
				this.add('-sidestart',side,'move: Stealth Rock');
			},
			onSwitchIn: function(pokemon) {
				var factor = 2;
				if (pokemon.hasType('Ground')) factor = 0;
				if (pokemon.hasType('Flying')) factor = 4;
				var damage = this.damage(pokemon.maxhp*factor/16);
			}
		}
	},
	fellstinger: {
		inherit: true,
		basePower: 40,
		priority: 1
	},
	calderabreak: {
		num: 901,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "No one can read this, so it matters not what the description is.",
		shortDesc: "No Crits, may burn.",
		id: "calderabreak",
		isViable: true,
		name: "Caldera Break",
		pp: 5,
		priority: 0,
		onTryHit: function(target, source) {
			if (this.isWeather('gravity')) return;
			if (target.hasType('Flying') || target.ability === 'levitate') return false;
		},
		volatileStatus: 'movesnevercrit',
		onHit: function(target, pokemon) {
			},
		effect: {
			duration: 1,
			onAfterMoveSecondarySelf: function(pokemon, target, move) {
					target.move.critRatio = 0;
			}
		},
		secondary: {
			chance: 20,
			status: 'brn'
		},
		target: "normal",
		type: "Rock"
	},
	absolutezero: {
		num: 902,
		accuracy: 40,
		basePower: 0,
		category: "Status",
		desc: "Freezes the opponent, Accuracy is increased in Hail.",
		shortDesc: "Freezes the target.",
		id: "absolutezero",
		isViable: true,
		name: "Absolute Zero",
		pp: 5,
		priority: 0,
		onModifyMove: function(move) {
			if (this.isWeather('hail')) move.accuracy = 80;
		},
		status: 'frz',
		secondary: false,
		target: "normal",
		type: "Ice"
	},
	acidshot: {
		num: 903,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Hits Steel Types.",
		shortDesc: "Hits Steel Types.",
		id: "acidshot",
		isViable: true,
		name: "Acid Shot",
		pp: 15,
		priority: 0,
		secondary: {
			chance: 20,
			status: 'brn'
		},
		target: "normal",
		affectedByImmunities: false,
		type: "Poison"
	},
	dreameater: {
		inherit: true,
		basePower: 100,
		drain: [1,2],
		basePowerCallback: function(pokemon, target) {
			if (target.status === 'slp') return 100;
			return 50;
		},
		onTryHit: function(target) {
			if (target.status === 'impossiblestatus') {
				return null;
			}
		},
		type: "Ghost"
	},
	triattack: {
		num: 161,
		accuracy: true,
		basePower: 30,
		category: "Special",
		desc: "Hits 3 times. Has a 10% chance to burn, paralyze or freeze the target each time.",
		shortDesc: "hits 3x; 10% chance to paralyze/burn/freeze.",
		id: "triattack",
		name: "Tri Attack",
		pp: 10,
		isViable: true,
		priority: 0,
		multihit: [3,3],
		secondary: {
			chance: 10,
			onHit: function(target, source) {
				var result = this.random(3);
				if (result===0) {
					target.trySetStatus('brn', source);
				} else if (result===1) {
					target.trySetStatus('par', source);
				} else {
					target.trySetStatus('frz', source);
				}
			}
		},
		target: "normal",
		type: "Normal"
	},
	hurricane: {
		inherit: true,
		onModifyMove: function(move) {
			if (this.isWeather('raindance')) move.accuracy = true;
			else if (this.isWeather('hail')) move.accuracy = true;
			else if (this.isWeather('sunnyday')) move.accuracy = 50;
		},
		secondary: {
			chance: 0,
			volatileStatus: 'confusion'
		},
		},
	trickroom: {
		num: 433,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, all active Pokemon with lower Speed will move before those with higher Speed, within their priority brackets. If this move is used during the effect, the effect ends. Priority -7.",
		shortDesc: "For 5 turns, slower Pokemon move first.",
		id: "trickroom",
		isViable: true,
		name: "Trick Room",
		pp: 5,
		priority: -7,
		onHitField: function(target, source, effect) {
			if (this.pseudoWeather['trickroom']) {
				this.removePseudoWeather('trickroom', source, effect, '[of] '+source);
			} else {
				this.addPseudoWeather('trickroom', source, effect, '[of] '+source);
			}
		},
		effect: {
			duration: 5,
			durationCallback: function(target, source, effect) {
				if (source && target.item === 'antimattergenerator') {
					return 8;
				}
				return 5;
			},
			onStart: function(target, source) {
				this.add('-fieldstart', 'move: Trick Room', '[of] '+source);
				this.getStatCallback = function(stat, statName) {
					// If stat is speed and does not overflow (Trick Room Glitch) return negative speed.
					if (statName === 'spe' && stat <= 1809) return -stat;
					return stat;
				}
			},
			onResidualOrder: 23,
			onEnd: function() {
				this.add('-fieldend', 'move: Trick Room');
				this.getStatCallback = null;
			}
		},
		secondary: false,
		target: "all",
		type: "Psychic"
	},
	gravity: {
		num: 356,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the evasion of all active Pokemon is 0.6x. At the time of use, Bounce, Fly, Magnet Rise, Sky Drop, and Telekinesis end immediately for all active Pokemon. During the effect, Bounce, Fly, High Jump Kick, Jump Kick, Magnet Rise, Sky Drop, Splash, and Telekinesis are prevented from being used by all active Pokemon. Ground-type attacks, Spikes, Toxic Spikes, and the Ability Arena Trap can affect Flying-types or Pokemon with the Ability Levitate. Fails if this move is already in effect.",
		shortDesc: "For 5 turns, negates all Ground immunities.",
		id: "gravity",
		isViable: true,
		name: "Gravity",
		pp: 5,
		priority: 0,
		pseudoWeather: 'gravity',
		effect: {
			duration: 5,
			durationCallback: function(target, source, effect) {
				if (source && target.item === 'supermassiveblackhole') {
					return 8;
				}
				return 5;
			},
			onStart: function() {
				this.add('-fieldstart', 'move: Gravity');
			},
			onAccuracy: function(accuracy) {
				if (typeof accuracy !== 'number') return;
				return accuracy * 5/3;
			},
			onModifyPokemonPriority: 100,
			onModifyPokemon: function(pokemon) {
				pokemon.negateImmunity['Ground'] = true;
				var disabledMoves = {bounce:1, fly:1, highjumpkick:1, jumpkick:1, magnetrise:1, skydrop:1, splash:1, telekinesis:1};
				for (var m in disabledMoves) {
					pokemon.disabledMoves[m] = true;
				}
				var applies = false;
				if (pokemon.removeVolatile('bounce') || pokemon.removeVolatile('fly') || pokemon.removeVolatile('skydrop')) {
					applies = true;
					this.cancelMove(pokemon);
				}
				if (pokemon.volatiles['magnetrise']) {
					applies = true;
					delete pokemon.volatiles['magnetrise'];
				}
				if (pokemon.volatiles['telekinesis']) {
					applies = true;
					delete pokemon.volatiles['telekinesis'];
				}
				if (applies) this.add('-activate', pokemon, 'Gravity');
			},
			onBeforeMove: function(pokemon, target, move) {
				var disabledMoves = {bounce:1, fly:1, highjumpkick:1, jumpkick:1, magnetrise:1, skydrop:1, splash:1, telekinesis:1};
				if (disabledMoves[move.id]) {
					this.add('cant', pokemon, 'move: Gravity', move);
					return false;
				}
			},
			onResidualOrder: 22,
			onEnd: function() {
				this.add('-fieldend', 'move: Gravity');
			}
		},
		secondary: false,
		target: "all",
		type: "Psychic"
	},
	lick: {
		num: 122,
		accuracy: 100,
		basePower: 60,
		basePowerCallback: function(pokemon, source) {
			if (source.lastDamage > 0 && pokemon.lastAttackedBy && pokemon.lastAttackedBy.thisTurn) {
				this.debug('Boosted for getting hit by '+pokemon.lastAttackedBy.move);
				return 120;
			}
			return 60;
		},
		category: "Physical",
		desc: "Deals damage to one adjacent target. Power doubles if the user was hit by that target this turn. Makes contact. Priority -4.",
		shortDesc: "Power doubles if user is damaged by the target.",
		id: "lick",
		name: "Lick",
		pp: 10,
		priority: -4,
		isContact: true,
		secondary: false,
		target: "normal",
		type: "Ghost"
	},
	grassknot: {
		inherit: true,		
		basePowerCallback: function(pokemon, target) {
                        var gravm = 1;
                        if (this.isWeather('gravity')) {
                                gravm = 2;
                                this.debug('Doubled bp for gravity.');
                        }      
                        if (target.weightkg > 200) {
                                this.debug('120 bp');
                                return gravm * 120;
                        }
                        if (target.weightkg > 100) {
                                this.debug('100 bp');
                                return gravm * 100;
                        }
                        if (target.weightkg > 50) {
                                this.debug('80 bp');
                                return gravm * 80;
                        }
                        if (target.weightkg > 25) {
                                this.debug('60 bp');
                                return gravm * 60;
                        }
                        if (target.weightkg > 10) {
                                this.debug('40 bp');
                                return gravm * 40;
                        }
                                this.debug('20 bp');
                        return gravm * 20;
                }
		},
	lowkick: {
		inherit: true,		
	basePowerCallback: function(pokemon, target) {
                        var gravm = 1;
                        if (this.isWeather('gravity')) {
                                gravm = 2;
                                this.debug('Doubled bp for gravity.');
                        }      
                        if (target.weightkg > 200) {
                                this.debug('120 bp');
                                return gravm * 120;
                        }
                        if (target.weightkg > 100) {
                                this.debug('100 bp');
                                return gravm * 100;
                        }
                        if (target.weightkg > 50) {
                                this.debug('80 bp');
                                return gravm * 80;
                        }
                        if (target.weightkg > 25) {
                                this.debug('60 bp');
                                return gravm * 60;
                        }
                        if (target.weightkg > 10) {
                                this.debug('40 bp');
                                return gravm * 40;
                        }
                                this.debug('20 bp');
                        return gravm * 20;
                }
		},
	feint: {
		num: 364,
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		desc: "Deals damage to one adjacent target and breaks through Protect and Detect for this turn, allowing other Pokemon to attack the target normally. If the target is a foe, Quick Guard and Wide Guard are also broken for this turn and other Pokemon may attack the target normally. Priority +2.",
		shortDesc: "Nullifies Detect, Protect, and Quick/Wide Guard.",
		id: "feint",
		name: "Feint",
		pp: 10,
		priority: 2,
		isNotProtectable: true,
		onHit: function(target, source) {
			if (target.removeVolatile('protect')) {
				this.add("-activate", target, "move: Feint");
			}
			if (target.side !== source.side) {
				target.side.removeSideCondition('quickguard');
				target.side.removeSideCondition('wideguard');
			}
		},
		basePowerCallback: function(pokemon, target) {
			// you can't get here unless the feint succeeds
			if (target.use('protect')) {
				this.debug('Feint damage boost');
				return 100;
			}
			return 50;
		},
		secondary: false,
		target: "normal",
		type: "Normal"
	},
	explosion: {
		inherit: true,
		basePower: 500
	},
	selfdestruct: {
		inherit: true,
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
				atk: -1
			}
	},
},
	steameruption: {
		num: 904,
		accuracy: 95,
		basePower: 110,
		category: "Special",
		desc: "Deals damage to one adjacent target with a 30% chance to burn it. If the user is frozen, it thaws out just before attacking.",
		shortDesc: "30% chance to burn the target. Thaws user.",
		id: "steameruption",
		isViable: true,
		name: "Steam Eruption",
		pp: 5,
		priority: 0,
		thawsUser: true,
		secondary: {
			chance: 30,
			status: 'brn'
		},
		target: "normal",
		type: "Water"
	},
	diamondstorm: {
		num: 905,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		desc: "Deals damage to one adjacent target with a 30% chance to burn it. If the user is frozen, it thaws out just before attacking.",
		shortDesc: "30% chance to burn the target. Thaws user.",
		id: "diamondstorm",
		isViable: true,
		name: "Diamond Storm",
		pp: 5,
		priority: 0,
		target: "normal",
		type: "Rock"
	},
	hyperspacehole: {
		num: 906,
		accuracy: true,
		basePower: 80,
		category: "Special",
		desc: "Deals damage to one adjacent target with a 30% chance to burn it. If the user is frozen, it thaws out just before attacking.",
		shortDesc: "30% chance to burn the target. Thaws user.",
		id: "hyperspacehole",
		isViable: true,
		name: "Hyperspace Hole",
		pp: 5,
		priority: 0,
		breaksProtect: true,
		onHit: function(target, source) {
			if (target.removeVolatile('protect') || target.removeVolatile('kingsshield') || target.removeVolatile('spikyshield')) {
				this.add("-activate", target, "move: hyperspacehole");
			}
			if (target.side !== source.side) {
				target.side.removeSideCondition('quickguard');
				target.side.removeSideCondition('wideguard');
			}
		},
		target: "normal",
		type: "Psychic"
	},
		update: {
		num: 907,
		accuracy: 100,
		basePower: 0,
		damage: 1,
		category: "Physical",
		desc: "Deals damage to one adjacent target and hits twice. If the first hit breaks the target's Substitute, it will take damage for the second hit. Makes contact.",
		shortDesc: "Hits 2 times in one turn.",
		id: "update",
		name: "Update",
		pp: 30,
		priority: 0,
		isContact: true,
		onHit: function(target, source) {
			this.heal(Math.ceil(2));
		},
		affectedByImmunities: false,
		multihit: 2,
		secondary: false,
		target: "normal",
		type: "Normal"
	}
};
