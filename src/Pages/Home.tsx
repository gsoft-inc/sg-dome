import { Button, ButtonGroup, Card, Content, Heading, Illustration, Image, Paragraph } from "@orbit-ui/react-components";
import { Sidebar } from "../components";

export function Home() {
    return (
        <div className="flex" style={{ minHeight: "1168px" }}>
            <Sidebar />
            <div className="flex flex-1">
                <div className="mt7 ph4 bg-neutral-50 flex-1">
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
                    <Card className="mt5" fluid orientation="horizontal">
                        <Illustration>
                            <Image alt="Planet over another one" src="https://doodleipsum.com/80x80/flat?i=73074137779d4cb734489ba8aa791468" />
                        </Illustration>
                        <Heading>Why Sharegate is a migration game changer</Heading>
                        <Content>
                            <Paragraph>Hi, I’m Benjamin <span aria-label="wave" role="img">👋</span></Paragraph>
                            <Paragraph>I’m Sharegate's product director, it’s nice to have you! Allow me to take you on a quick product tour and show you why ShareGate is your best ally.</Paragraph>
                        </Content>
                        <ButtonGroup>
                            <Button>Watch</Button>
                            <Button variant="secondary">No thanks</Button>
                        </ButtonGroup>
                    </Card>
                </div>
                <div className="w96 pt7 ph8 bl b--cloud-100 flex items-center flex-column">
                    <div className="mt-auto  mb-auto">
                        <img alt="doodle" className="mb10" src="https://doodleipsum.com/700/flat?i=1dc6272ead803ea1f5efff066ff849eb" />
                        <Heading size="2xs">We know that within most tenants, 17% of teams are inactive.</Heading>
                        <Paragraph className="mt4 mb6">Clean them now and start fresh!</Paragraph>
                        <Button>Discover Teams Management</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
