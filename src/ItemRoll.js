/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { Motion, spring } from 'react-motion'

const imgCss = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`

const isPreviousCss = css`
    z-index: 1;
`

const isCurrentCss = css`
    z-index: 2;
`

function ItemRoll({ source, isCurrent, isPrevious, css }) {
  return (
    <Motion
      defaultStyle={{ x: 0 }}
      style={{
        x: spring(isCurrent ? 0 : isPrevious ? 600 : -600)
      }}
    >
      {({ opacity, x }) => (
        <img
          css={[imgCss, isPrevious && isPreviousCss, isCurrent && isCurrentCss, css]}
          src={source}
          style={{ opacity, transform: `translateX(${x}px)` }}
          alt='roll item'
        />
      )}
    </Motion>
  )
}

export default ItemRoll
