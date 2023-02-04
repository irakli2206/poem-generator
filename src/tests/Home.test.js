import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Home from '../pages/Home'

test('if input is empty generate button is disabled', async () => {
  render(<Home />)

  const input = await screen.findByRole('textbox')
  const button = await screen.findByText('Generate')

  expect(button).toBeDisabled()

  userEvent.type(input, 'friends')

  expect(button).toBeEnabled()
})
