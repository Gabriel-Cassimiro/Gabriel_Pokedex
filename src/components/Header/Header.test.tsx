import { render, screen, fireEvent, waitFor } from "@testing-library/react"

import Header, { HeaderProps } from "./index"
import { charmander, squirtle } from "../../tests/mocks/pokemons.mock"
import { TestProvider } from "../../tests/utils"

describe("Test Header component", () => {
	const setPokemonListMock = jest.fn()

	function Element({ pokemon, setPokemonList }: HeaderProps) {
		return (
			<TestProvider>
				<Header pokemon={pokemon} setPokemonList={setPokemonList} />
			</TestProvider>
		)
	}

	beforeEach(() => {
		jest.clearAllMocks()
	})

	it("should render correctly", () => {
		const { container } = render(
			<Element pokemon={[charmander, squirtle]} setPokemonList={jest.fn()} />
		)

		expect(container).toMatchSnapshot()
	})

	it("should update input value correctly when searching for charmander", async () => {
		render(<Element pokemon={[charmander, squirtle]} setPokemonList={setPokemonListMock} />)

		const input = screen.getByTestId("search-input") as HTMLInputElement

		expect(input.value).toBe("")
		fireEvent.change(input, { target: { value: "charmander" } })
		expect(input.value).toBe("charmander")

		await waitFor(() => expect(setPokemonListMock).toHaveBeenCalledWith([charmander]), {
			timeout: 500
		})
	})

	it("should update input value correctly when searching for pokemon that does not exists", async () => {
		const { container } = render(
			<Element pokemon={[charmander, squirtle]} setPokemonList={setPokemonListMock} />
		)

		const input = screen.getByTestId("search-input") as HTMLInputElement

		expect(input.value).toBe("")
		fireEvent.change(input, { target: { value: "some-value" } })
		expect(input.value).toBe("some-value")

		await waitFor(() => expect(setPokemonListMock).toHaveBeenCalledWith([]), {
			timeout: 500
		})
	})
})
