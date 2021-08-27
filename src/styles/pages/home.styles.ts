import styled from "styled-components"

export const PokemonContainer = styled.div`
	display: grid;
	grid-template-rows: repeat(1, minmax(0, 1fr));
	grid-template-columns: repeat(4, minmax(0, 1fr));
	grid-auto-rows: min-content;
	place-content: center;
	border-top: 1px solid ${props => props.theme.colors.primary};
	@media (min-width: 1920px) {
		grid-template-columns: repeat(5, minmax(0, 1fr));
	}
	@media (max-width: 950px) {
		width: 100%;
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	@media (max-width: 750px) {
		width: 100%;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (max-width: 480px) {
		width: 100%;
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}

	.PokemonSingle {
		display: grid;
		flex-direction: column;
		margin: 15px 15px;
		padding: 12px 0px;
	}

	.image {
		display: flex;
		justify-content: center;
		background-color: #9ca0a6;
	}

	.pokeNum {
		margin-top: 5px;
		margin-left: 14px;
		opacity: 0.7;
	}

	.types {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}

	.notFound {
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		margin-top: 400px;
		text-align: center;
		font-size: 54px;
		font-weight: bold;
		color: red;
		@media (max-width: 600px) {
			width: 100%;
		}
	}

	h2 {
		margin: 15px 20px;
	}
`
export const HeaderContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 15px 15px;
	align-items: center;
	margin-left: 25px;
	font-size: x-large;
	@media (max-width: 600px) {
		justify-content: center;
	}

	h1 {
		text-align: center;
		font-size: 34px;
		color: ${props => props.theme.colors.primary};
		@media (max-width: 600px) {
			width: 100%;
		}
	}

	.searchContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 15px;
		flex: 0 0 300px;
		background-color: #fff;
		height: 35px;
		border-radius: 5px;
		overflow: hidden;
		@media (max-width: 600px) {
			width: 100%;
			flex: 0 1 320px;
		}
	}

	input {
		width: 250px;
		margin-left: 15px;
		padding-left: 10px;
		font-size: 20px;
	}

	.searchBox {
		outline: none;
		border: 0;
		padding: 0.5rem 0.5rem 0.5rem 0;
	}
`

const colorTypes: { [key: string]: string[] } = {
	normal: ["#8fbc8f", "black"],
	fire: ["#FFA500", "black"],
	fighting: ["#8b0000", "white"],
	water: ["#0000FF", "white"],
	flying: ["#ffe4c4", "black"],
	grass: ["#00FF00", "black"],
	poison: ["#A020F0", "white"],
	electric: ["#FFFF00", "black"],
	ground: ["#9b7653", "black"],
	psychic: ["#FFC0CB", "black"],
	rock: ["#654321", "white"],
	ice: ["#f8f8ff", "black"],
	bug: ["#F0E68C", "black"],
	dragon: ["#005A9C", "white"],
	ghost: ["#4B0082", "white"],
	dark: ["#8B4513", "white"],
	steel: ["#A9A9A9", "black"],
	faire: ["#fa8072", "black"]
}

export const PokeType = styled.div`
	text-align: center;
	opacity: 0.9;
	width: 105px;
	border-radius: 5%;
	background-color: ${(props: any) => colorTypes[props.color][0]};
	color: ${(props: any) => colorTypes[props.color][1]};
`
