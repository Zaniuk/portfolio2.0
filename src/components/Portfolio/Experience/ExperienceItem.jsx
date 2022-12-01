import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Typography } from '@mui/material'
import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';
export default function ExperienceItem({index, title, date, description, company, color}) {
  return (
    <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align={index % 2 === 0 ? "inherit" : "right"}
          variant="body2"
        >
          <Typography sx={{color: color}}>{date}</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant='outlined' sx={{
            color : color,
          }}>
            <ComputerIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h5" component="span" sx={{
            color : color,
          }}>
            {title}
          </Typography>
          <Typography sx={{
            fontSize: "1.1rem",
            fontWeight: "600",
          }}>{company}</Typography>
          <Typography variant='body2'>{description}</Typography>
        </TimelineContent>
      </TimelineItem>
  )
}
