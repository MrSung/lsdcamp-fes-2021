import { css } from 'styled-components'

import { Style } from '@/const/style'

export const leadStyle = css`
  margin-bottom: 36px;
  font-size: 24px;
  font-weight: normal;

  @media (min-width: ${Style.BREAKPOINT.MD}) {
    font-size: 48px;
  }
`