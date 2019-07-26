/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import useIndexRow from './hooks/useIndexRoll'

const containerCss = ({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.55);
    overflow: hidden;
    position: relative;
`

function Roll({ render, numberOfItems, width, height, duration = 3000 }) {
  const currentIndex = useIndexRow(
    { duration, size: numberOfItems },
    0
  )

  return <div css={containerCss({width, height})}>{render(currentIndex)}</div>
}

export default Roll
