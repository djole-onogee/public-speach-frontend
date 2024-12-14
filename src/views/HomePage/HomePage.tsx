"use client";
import {
  Container,
  Header,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  TablesWrapper,
  TableWrapper,
} from "./HomePageStyle";

const HomePage = () => {
  const singleTopics = [
    "Public Speaking Tips",
    "Overcoming Stage Fright",
    "Effective Communication",
    "Persuasive Speech",
    "Storytelling Techniques",
    "Impromptu Speaking",
    "Body Language",
    "Voice Modulation",
    "Audience Engagement",
    "Using Visual Aids",
  ];

  const vsTopics = [
    "Confidence vs Arrogance",
    "Prepared Speech vs Impromptu",
    "Logic vs Emotion",
    "Storytelling vs Facts",
    "Formal vs Informal Speech",
    "Humor vs Seriousness",
    "Short Speech vs Long Speech",
    "Live Audience vs Virtual Audience",
    "Speaking vs Listening",
    "Group vs Solo Presentation",
  ];

  return (
    <Container>
      <Header>Public Speech</Header>
      <TablesWrapper>
        <TableWrapper>
          <TableHeader>Single Topics</TableHeader>
          <Table>
            <tbody>
              {singleTopics.map((topic, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{topic}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableWrapper>

        <TableWrapper>
          <TableHeader>VS Topics</TableHeader>
          <Table>
            <tbody>
              {vsTopics.map((topic, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{topic}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      </TablesWrapper>
    </Container>
  );
};

export default HomePage;
