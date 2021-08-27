import { Poke } from "../../pages"

export const charmander: Poke = {
	id: 4,
	num: "004",
	name: "Charmander",
	img: "http://www.serebii.net/pokemongo/pokemon/004.png",
	type: ["Fire"],
	height: "0.61 m",
	weight: "8.5 kg",
	candy: "Charmander Candy",
	candy_count: 25,
	egg: "2 km",
	spawn_chance: 0.253,
	avg_spawns: 25.3,
	spawn_time: "08:45",
	multipliers: [1.65],
	weaknesses: ["Water", "Ground", "Rock"],
	next_evolution: [
		{
			num: "005",
			name: "Charmeleon"
		},
		{
			num: "006",
			name: "Charizard"
		}
	]
}

export const squirtle: Poke = {
	id: 7,
	num: "007",
	name: "Squirtle",
	img: "http://www.serebii.net/pokemongo/pokemon/007.png",
	type: ["Water"],
	height: "0.51 m",
	weight: "9.0 kg",
	candy: "Squirtle Candy",
	candy_count: 25,
	egg: "2 km",
	spawn_chance: 0.58,
	avg_spawns: 58,
	spawn_time: "04:25",
	multipliers: [2.1],
	weaknesses: ["Electric", "Grass"],
	next_evolution: [
		{
			num: "008",
			name: "Wartortle"
		},
		{
			num: "009",
			name: "Blastoise"
		}
	]
}
