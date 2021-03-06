import styled from 'styled-components'

import { Style } from '@/styles'
import { VenueKey, venue } from '@/contents/venue'

interface IVenueLabelProps {
  labelNo: VenueKey
}

export const VenueLabel = ({ labelNo }: IVenueLabelProps) => (
  <Wrapper>
    <Container labelNo={labelNo}>{venue[labelNo].text}</Container>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 16px;
  background-color: ${Style.COLOR.GREEN_SHEEN};

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    padding: 18px 24px 18px 0;
  }
`

interface IContainerProps {
  labelNo: IVenueLabelProps['labelNo']
}

const Container = styled.div<IContainerProps>`
  height: 44px;
  padding: 0 16px;
  background-color: ${({ labelNo }) => venue[labelNo].color};
  line-height: 44px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    font-size: 18px;
  }
`
