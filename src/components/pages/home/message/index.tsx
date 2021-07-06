import styled, { css } from 'styled-components'

import katy from '@/images/katy.jpg'
import flower from '@/images/flower.jpg'
import { Style } from '@/const/style'
import {
  sectionStyle,
  containerStyle,
  headingStyle,
  leadStyle,
  inlineBlockStyle,
} from '@/styles'
import { LineBreak } from '@/components/parts'
import { LayerImage } from './layer-image'

interface IMessageProps {
  sectionId: string
}

export const Message = ({ sectionId }: IMessageProps) => (
  <Section id={sectionId}>
    <Container>
      <MessageHeading>message</MessageHeading>
      <Lead>
        未完成な自分から
        <InlineBlock>はじめよう</InlineBlock>
      </Lead>
      <ImageContainerFirst>
        <LayerImage
          src={katy}
          alt="ケイティ"
          width={450}
          height={600}
          layerPosition="leftBottom"
          layerColor={Style.COLOR.MANGO_TANGO}
        />
      </ImageContainerFirst>
      <ParagraphFirst>
        <LineBreak>{`いつかではなく\n"今" の自分を見て`}</LineBreak>
      </ParagraphFirst>
      <ImageContainerSecond>
        <LayerImage
          src={flower}
          alt="花"
          width={600}
          height={450}
          layerPosition="rightBottom"
          layerColor={Style.COLOR.STRAW}
        />
      </ImageContainerSecond>
      <ParagraphSecond>
        <LineBreak>{`今のあなただからできることが\nきっとあるよ`}</LineBreak>
      </ParagraphSecond>
    </Container>
  </Section>
)

const Section = styled.section`
  ${sectionStyle}

  @media (max-width: ${Style.BREAKPOINT.MD - 1}px) {
    margin-bottom: 144px;
  }
`

const Container = styled.div`
  ${containerStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    display: grid;
    grid-template-columns: 520px 1fr;
    grid-template-rows: 198px 108px 108px 1fr;
  }
`

const MessageHeading = styled.h2`
  ${headingStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`

const Lead = styled.h3`
  ${leadStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin-bottom: 0;
    margin-left: 50px;
  }
`

const ImageContainerFirst = styled.div`
  margin-bottom: 40px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 1 / 2;
    grid-row: 2 / 5;
    margin-left: -40px;
  }
`

const ImageContainerSecond = styled.div`
  margin-bottom: 40px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    padding-left: 50px;
  }
`

const paragraphStyle = css`
  margin-bottom: 24px;
  font-size: 18px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    margin-left: 50px;
    font-size: 24px;
  }
`

const ParagraphFirst = styled.p`
  ${paragraphStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`

const ParagraphSecond = styled.p`
  ${paragraphStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`

const InlineBlock = styled.span`
  ${inlineBlockStyle}
`
