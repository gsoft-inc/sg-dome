import { Button, ButtonGroup, Card, Content, Div, Heading, Flex, Illustration, Image, Paragraph, Span } from "@sharegate/orbit-ui";
import { Sidebar } from "../Components";

export function Home() {
    return (
        <Flex minWidth="1168px" grow={1}>
            <Sidebar />
            <Flex grow={1}>
                <Flex direction="column" marginTop={7} paddingX={4} shrink={1} grow={1} basis="0%" backgroundColor="neutral-1">
                    <Heading>Welcome to ShareGate Alex!</Heading>
                    <Card fluid>
                        <Heading>Try your first migration</Heading>
                        <Content>
                            <Paragraph>To get the best migration performance you will need to download and install the migration tool. System requirements.</Paragraph>
                        </Content>
                        <ButtonGroup>
                            <Button>Discover Teams Management</Button>
                            <Button variant="secondary">Open migration tool</Button>
                        </ButtonGroup>
                    </Card>
                    <Card marginTop={5} fluid orientation="horizontal">
                        <Illustration>
                            <Image alt="Planet over another one" src="https://doodleipsum.com/80x80/flat?i=73074137779d4cb734489ba8aa791468" />
                        </Illustration>
                        <Heading>Why Sharegate is a migration game changer</Heading>
                        <Content>
                            <Paragraph>Hi, I’m Benjamin <Span aria-label="wave" role="img">👋</Span></Paragraph>
                            <Paragraph>I’m Sharegate's product director, it’s nice to have you! Allow me to take you on a quick product tour and show you why ShareGate is your best ally.</Paragraph>
                        </Content>
                        <ButtonGroup>
                            <Button>Watch</Button>
                            <Button variant="secondary">No thanks</Button>
                        </ButtonGroup>
                    </Card>
                </Flex>
                <Flex alignItems="center" direction="column" width={17} paddingTop={7} paddingX={8} borderLeft="cloud-2">
                    <Div marginY="auto">
                        <Image alt="doodle" marginBottom={10} src="https://doodleipsum.com/700/flat?i=1dc6272ead803ea1f5efff066ff849eb" />
                        <Heading size="2xs">We know that within most tenants, 17% of teams are inactive.</Heading>
                        <Paragraph marginTop={4} marginBottom={6}>Clean them now and start fresh!</Paragraph>
                        <Button>Discover Teams Management</Button>
                    </Div>
                </Flex>
            </Flex>
        </Flex>
    );
}
