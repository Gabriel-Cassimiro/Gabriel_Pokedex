import React, { useState, useEffect } from "react"
import { HeaderContainer } from "../../styles/pages/home.styles"
import { GoSearch } from "react-icons/go"
import { useDebounce } from "react-use"
import { Poke } from "../../pages/index"

export interface HeaderProps {
	pokemon: Poke[]
	setPokemonList: React.Dispatch<React.SetStateAction<Poke[]>>
}

function Index({ pokemon, setPokemonList }: HeaderProps) {
	const [search, setSearch] = useState("")

	useDebounce(
		() => {
			const filteredValue = pokemon.filter(value => {
				if (search === "") {
					return value
				} else if (value.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
					return value
				} else if (value.num.includes(search)) {
					return value
				}
			})
			setPokemonList(filteredValue)
		},
		450,
		[search]
	)

	return (
		<HeaderContainer>
			<h1> Pokédex </h1>
			<div className="searchContainer">
				<GoSearch color={"black"} size={25} />
				<input
					data-testid="search-input"
					className="searchBox"
					type="text"
					value={search}
					placeholder="Search..."
					onChange={e => {
						setSearch(e.target.value)
					}}
				/>
			</div>
		</HeaderContainer>
	)
}

export default Index
