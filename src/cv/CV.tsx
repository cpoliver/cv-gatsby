import * as React from "react";
import {
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import { format } from "date-fns";

import { CVData, TrainingHistoryItem, WorkHistoryItem } from "./types";

const date = (date: string) => format(new Date(date), "MMMM yyyy");

const ContactInfo = ({ label, value }) => (
  <Stack spacing={0} borderLeftWidth="1px" borderColor="#ccc" flex={1} pl={2}>
    <Text fontWeight="bold" textTransform="uppercase">
      {label}
    </Text>
    <Text>{value}</Text>
  </Stack>
);

const Section = ({ title, children }) => (
  <Stack>
    <Heading as="h3" size="lg" textTransform="uppercase">
      {title}
    </Heading>
    <Text>{children}</Text>
  </Stack>
);

const DateRange = ({ to, from }: { to?: string; from: string }) => (
  <Text textTransform="uppercase" flex={1}>
    {date(from)} &ndash; {to ? date(to) : "Present"}
  </Text>
);

const Bullets = ({ items }: { items: string[] }) => (
  <UnorderedList>
    {items.map((item, i) => (
      <ListItem key={i}>
        <Text>{item}</Text>
      </ListItem>
    ))}
  </UnorderedList>
);

const WorkHistory = ({ history }: { history: WorkHistoryItem[] }) => (
  <Stack spacing={4}>
    {history.map((h) => (
      <Stack key={h.company} borderTopWidth="1px" pt={2}>
        <Stack direction="row">
          <DateRange {...h.date} />
          <Stack direction="row">
            <Text>
              {h.location.name} {h.location.isRemote && "(Remote)"}
            </Text>
            {h.location.flagUrl && (
              <Image
                w="24px"
                src={h.location.flagUrl}
                alt={`${h.location.name}`}
              />
            )}
          </Stack>
        </Stack>
        <Heading as="h4" size="md">
          {h.role} @ {h.company}
        </Heading>

        <Bullets items={h.description} />
      </Stack>
    ))}
  </Stack>
);

const TrainingHistory = ({ history }: { history: TrainingHistoryItem[] }) => (
  <Stack spacing={4}>
    {history.map((h) => (
      <Stack key={h.institution}>
        <DateRange {...h.date} />
        <Heading as="h4" size="md">
          {h.institution}
        </Heading>
        <Bullets items={h.description} />
      </Stack>
    ))}
  </Stack>
);

export const CV = (cv: CVData) => (
  <Stack spacing={8} p={16}>
    <Stack spacing={2}>
      <Heading as="h1" size="2xl" fontWeight="normal" m={0}>
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

    <Section title="Work History">
      <WorkHistory history={cv.workHistory} />
    </Section>

    <Section title="Education & Training">
      <TrainingHistory history={cv.trainingHistory} />
    </Section>
  </Stack>
);
