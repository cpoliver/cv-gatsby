import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

import { CVData, TrainingHistoryItem, WorkHistoryItem } from "./types";

const date = (date: string) => new Date(date).toDateString();

const Section = ({ title, children }) => (
  <Stack>
    <Heading as="h3" size="lg" textTransform="uppercase">
      {title}
    </Heading>
    {children}
  </Stack>
);

const ContactInfo = ({ label, value }) => (
  <Stack spacing={0} borderLeftWidth="1px" borderColor="#ccc" flex={1} pl={2}>
    <Text fontWeight="bold" textTransform="uppercase">
      {label}
    </Text>
    <Text>{value}</Text>
  </Stack>
);

const WorkHistory = ({ history }: { history: WorkHistoryItem[] }) => (
  <Stack spacing={4}>
    {history.map((h) => (
      <Stack key={h.company}>
        <Text>
          {date(h.date.from)} &ndash; {date(h.date.to) ?? "present"}
        </Text>
        <Heading as="h4" size="md">
          {h.role} @ {h.company}
        </Heading>
        <Text>
          {h.location.name} {h.location.isRemote && "(REMOTE)"}
        </Text>
        <Text>{h.description}</Text>
      </Stack>
    ))}
  </Stack>
);

const TrainingHistory = ({ history }: { history: TrainingHistoryItem[] }) => (
  <Stack>
    {history.map((h) => (
      <Stack key={h.institution}>
        <Text>{h.institution}</Text>
        <Text>
          {h.date.from} &ndash; {h.date.to}
        </Text>
        <Text>{h.description}</Text>
      </Stack>
    ))}
  </Stack>
);

export const CV = (cv: CVData) => (
  <Stack spacing={8}>
    <Stack spacing={2}>
      <Heading as="h1" size="xl" fontWeight="normal" m={0}>
        {cv.name}
      </Heading>
      <Heading as="h2" size="xl" m={0}>
        {cv.role}
      </Heading>
    </Stack>

    <Stack direction="row">
      <ContactInfo label="Email" value={cv.email} />
      <ContactInfo label="Phone" value={cv.phone} />
      <ContactInfo label="Location" value={cv.location.name} />
    </Stack>

    <Section title="Personal Profile">{cv.profile}</Section>

    <Section title="Skills & Experience">{cv.skills}</Section>

    <Section title="Education & Training">
      <WorkHistory {...cv.workHistory} />
    </Section>

    <Section title="Education & Training">
      <TrainingHistory {...cv.trainingHistory} />
    </Section>
  </Stack>
);
