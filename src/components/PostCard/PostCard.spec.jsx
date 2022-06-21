import { render, screen } from '@testing-library/react'
import { PostCart } from '.'
import { mockPostCardProps as props } from './mock'

describe('<PostCard />', () => {
  it('should render PostCARD correctly', () => {
    // Via destructuring da para pegar a propriedade DEBUG, e chamar o método Debug();
    // O método debug irá renderizar o html visivelmente no console;
    render(<PostCart {...props} />)

    // SnapShot, não muda mais nada do componenta apenas testa
    // .toBeInTheDocument() -> Está no documento
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      'img/img.png'
    )

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText('body1')).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<PostCart {...props} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
