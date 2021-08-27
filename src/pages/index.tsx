import React, { useState } from "react"
import { GetServerSideProps } from "next"
import axios from "axios"
import { NextSeo } from "next-seo"

import Card from "../components/Card"
import { PokemonContainer } from "../styles/pages/home.styles"
import Header from "../components/Header"

interface Evolution {
	num: string
	name: string
}

export interface Poke {
	id: number
	num: string
	name: string
	img: string
	type: string[]
	height: string
	weight: string
	candy: string
	candy_count: number
	egg: string
	spawn_chance: number
	avg_spawns: number
	spawn_time: string
	multipliers: number[]
	weaknesses: string[]
	next_evolution: Evolution[]
}

export interface HomeProps {
	pokemons: Poke[]
}

function Home({ pokemons }: HomeProps) {
	const [pokemonList, setPokemonList] = useState(pokemons || [])

	return (
		<>
			<NextSeo title="Pokédex" description="Find all 150 pokemons." />
			<Header pokemon={pokemons} setPokemonList={setPokemonList} />
			<PokemonContainer>
				{Boolean(pokemonList.length) &&
					pokemonList.map(pokemon => {
						return <Card key={pokemon.id} pokemon={pokemon} />
					})}
				{!Boolean(pokemonList.length) && <h2 className="notFound">Pokemon não existe</h2>}
			</PokemonContainer>
		</>
	)
}

export default Home

export async function getServerSideProps(_: GetServerSideProps) {
	const { data } = await axios.get(
		"https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
	)
	const pokemons = data.pokemon
	return {
		props: { pokemons }
	}
}
