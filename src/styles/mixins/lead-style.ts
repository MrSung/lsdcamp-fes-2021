import { css } from 'styled-components'

import { Style } from '@/styles'

export const leadStyle = css`
  margin-bottom: 36px;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    font-size: 48px;
  }
`
