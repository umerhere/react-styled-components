import { StyledCard } from './styles/Card.styled'

export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}> {/* 2nd image will be on the left on the mobile view */}
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt='' />
      </div>
    </StyledCard>
  )
}
