import React from "react"
import Image from "next/image"
import { PokeType } from "../../styles/pages/home.styles"
import { Poke } from "../../pages"

export interface CardProps {
	pokemon: Poke
}

const Card: React.FC<CardProps> = ({ pokemon }) => {
	return (
		<div className="PokemonSingle" key={pokemon.id}>
			<div className="image">
				<Image
					src={pokemon.img}
					alt={pokemon.name}
					height={150}
					width={150}
					layout={"fixed"}
				></Image>
			</div>

			<div className="pokeNum">#{pokemon.num}</div>
			<h2>{pokemon.name}</h2>
			<div className="types">
				{pokemon.type.map(types => {
					return (
						<PokeType key={types} color={types.toLowerCase()}>
							{types}
						</PokeType>
					)
				})}
			</div>
		</div>
	)
}

export default Card
