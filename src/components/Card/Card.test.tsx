import { render, screen } from "@testing-library/react"

import Card, { CardProps } from "./index"
import { charmander } from "../../tests/mocks/pokemons.mock"
import { TestProvider } from "../../tests/utils"

describe("Test Card component", () => {
	function Element({ pokemon }: CardProps) {
		return (
			<TestProvider>
				<Card pokemon={pokemon} />
			</TestProvider>
		)
	}

	beforeEach(() => {
		jest.clearAllMocks()
	})

	it("should render correctly", () => {
		const { container } = render(<Element pokemon={charmander} />)

		expect(screen.getByText("Charmander")).toBeInTheDocument()

		expect(container).toMatchSnapshot()
	})
})
