import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './index'

describe('<Button />', () => {
  it('should render the button with the text "Load More"', () => {
    render(<Button text='Load more' />)

    expect.assertions(1) // Expero que apenas dos testes de passed
    const button = screen.getByRole('button', { name: /load more/i })
    // Querry não levanta um erro se existir ou não
    // Get joga erro se não achar o elemento
    // ByRole = Por acessibilidade
    expect(button).toBeInTheDocument()
  })

  it('should call function on button click', () => {
    const fn = jest.fn() // Cria uma função simples com o Jest
    render(<Button text='Load more' onClick={fn} />)

    // Preciso clicar no bottão
    // Para isso fireEvent
    const button = screen.getByRole('button', { name: /load more/i })
    fireEvent.click(button)
    expect(fn).toHaveBeenCalled() // Se foi chamada
    expect(fn).toHaveBeenCalledTimes(1) // Quantas vezes foir chamada
  })
  it('should be enable when disabled is false', () => {
    render(<Button text='Load more' disabled />)
    screen.getByRole('button', { name: /load more/i })
    expect(screen.getByRole('button', { name: /load more/i })).toBeDisabled()
  })

  it('should match snapshot', () => {
    const fn = jest.fn()
    const { container } = render(
      <Button text='Load more' disabled onClick={fn} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  // npm test -- --coverage
  // Executa um teste globar e pega áres que não foram realizadas nenhum teste
})
