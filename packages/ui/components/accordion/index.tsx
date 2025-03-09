import * as React from 'react'
import type { FC } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import type { AccordionPropsType } from '../../types'
import { ArrowDownIcon } from '../icons'

export const OstiganAccordion: FC<AccordionPropsType> = ({
  title,
  description,
}) => {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) => (_e: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Accordion
      expanded={expanded === 'panel1'}
      sx={{
        bgcolor: 'var(--trueGray-100)',
        boxShadow: '0 0 0',
      }}
      onChange={handleChange('panel1')}
    >
      <AccordionSummary
        expandIcon={<ArrowDownIcon className="w-5 h-5" />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}
