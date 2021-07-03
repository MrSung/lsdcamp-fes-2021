import styled from 'styled-components'

import { VenueKey } from '@/const/venue'
import { Style } from '@/const/style'
import { sectionStyle, containerStyle, headingStyle } from '@/styles'
import { IProgramData } from '@/pages'
import { ThumbLink } from './thumb-link'

interface IProgramProps {
  sectionId: string
  programData: IProgramData
}

export const Program = ({
  sectionId,
  programData: { contents },
}: IProgramProps) => (
  <Section id={sectionId}>
    <Container>
      <ProgramHeading>program</ProgramHeading>
      {contents.map((c) => (
        <ThumbLink
          key={c.id}
          href={c.link}
          labelNo={c.venue[0] as VenueKey}
          // @ts-expect-error: Fix later...
          src={c.thumbnail.url}
          alt=""
          width={270}
          height={270}
          title={c.title}
        />
      ))}
    </Container>
  </Section>
)

const Section = styled.section`
  ${sectionStyle}

  padding-top: 72px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    padding-bottom: 48px;
  }
`

const Container = styled.div`
  ${containerStyle}

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const ProgramHeading = styled.h2`
  ${headingStyle}

  margin-bottom: 24px;

  @media (min-width: ${Style.BREAKPOINT.MD}px) {
    grid-column: 1 / 5;
    margin-bottom: 32px;
  }
`