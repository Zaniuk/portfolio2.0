import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import React from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Typography } from "@mui/material";

export default function AboutItemMobile({ title, description }) {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <AutoAwesomeIcon />
            </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant="h6" component="span">
                {title}
            </Typography>
            <Typography>{description}</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
