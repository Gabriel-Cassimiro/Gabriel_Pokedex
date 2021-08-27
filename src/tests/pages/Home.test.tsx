import React from "react"
import { render, screen } from "@testing-library/react"
import { GetServerSideProps } from "next"

import Home, { HomeProps, getServerSideProps } from "../../pages/index"
import { TestProvider } from "../utils"
import { charmander, squirtle } from "../mocks/pokemons.mock"

jest.mock("axios", () => {
	const { charmander, squirtle } = require("../mocks/pokemons.mock")
	//No need to use jest-mock-axios library because there is only one single get.
	return {
		get(_: string) {
			return {
				data: {
					pokemon: [charmander, squirtle]
				}
			}
		}
	}
})

describe("Tests Home page", () => {
	function Element({ pokemons }: HomeProps) {
		return (
			<TestProvider>
				<Home pokemons={pokemons} />
			</TestProvider>
		)
	}

	it("should render correctly when receiving pokemon array length bigger than 0", () => {
		const { container } = render(<Element pokemons={[charmander, squirtle]} />)

		expect(screen.getByText("Charmander")).toBeInTheDocument()
		expect(screen.getByText("Squirtle")).toBeInTheDocument()

		expect(container).toMatchSnapshot()
	})

	it("should render correctly when receiving pokemon array length equals 0", () => {
		const { container } = render(<Element pokemons={[]} />)

		expect(screen.getByText("Pokemon não existe")).toBeInTheDocument()

		expect(container).toMatchSnapshot()
	})

	it("should return props pokemons", async () => {
		const result = await getServerSideProps({} as GetServerSideProps)

		expect(result).toEqual({
			props: { pokemons: [charmander, squirtle] }
		})
	})
})
