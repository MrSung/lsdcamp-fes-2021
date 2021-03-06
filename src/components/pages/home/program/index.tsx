import { parse, isBefore, isAfter } from 'date-fns'
import styled from 'styled-components'

import { VenueKey } from '@/contents/venue'
import { Style, sectionStyle, containerStyle, headingStyle } from '@/styles'

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
      {contents
        .sort((a, b) => {
          const aed = parse(a.eventDate[0], `MM/dd`, new Date())
          const bed = parse(b.eventDate[0], `MM/dd`, new Date())

          if (isBefore(aed, bed)) {
            return -1
          }
          if (isAfter(aed, bed)) {
            return 1
          }
          return 0
        })
        .sort((a, b) => {
          const avk = Number(a.venue[0])
          const bvk = Number(b.venue[0])

          if (avk < bvk) {
            return -1
          }
          if (avk > bvk) {
            return 1
          }
          return 0
        })
        .sort((a, b) => {
          const asd = parse(
            `${a.eventDate[0]} ${a.startTime}`,
            `MM/dd HH:mm`,
            new Date(),
          )
          const bsd = parse(
            `${b.eventDate[0]} ${b.startTime}`,
            `MM/dd HH:mm`,
            new Date(),
          )

          if (isBefore(asd, bsd)) {
            return -1
          }
          if (isAfter(asd, bsd)) {
            return 1
          }
          return 0
        })
        .map((c) => (
          <ThumbLink
            key={c.id}
            href={c.link}
            labelNo={c.venue[0] as VenueKey}
            src={c.thumbnail.url as StaticImageData}
            alt=""
            width={270}
            height={270}
            time={`${c.eventDate[0]} ${c.startTime}〜${c.endTime}`}
            title={c.title}
            host={c.host}
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
