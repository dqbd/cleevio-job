import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { useScroll } from "../utils/hooks"

const Header = styled.div<{ isSticky?: boolean }>`
  position: sticky;
  top: 0;
  background: white;

  padding: 30px 0;

  ${({ isSticky }) => ({
    borderBottom: isSticky ? "10px solid black" : "none",
  })}
`

export default function Page() {
  const scrollY = useScroll()
  return (
    <div>
      <Header isSticky={scrollY > 0}>Hello world</Header>
      {Array(1000)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            css={css`
              padding: 0.5rem;
              background: hsl(${index % 360}, 100%, 50%);
            `}
          >
            Item {index}
          </div>
        ))}
    </div>
  )
}
