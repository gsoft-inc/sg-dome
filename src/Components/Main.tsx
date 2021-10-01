import { Card, Heading, Paragraph, Content } from "@orbit-ui/react-components";
import {Sidebar} from "./";
  
export function Main() {
    return (
        <div className="mt10 flex mw-m" style={{ minHeight: "768px", gap: "2rem" }}>
            <Sidebar />
            <div className="grid grid-rows-auto gap-6 grid-cols-1 lg:grid-cols-2">
            <Card fluid>
                <Heading>NASA Headquarters</Heading>
                <Content>
                    <Paragraph>
                        NASA Headquarters, officially known as Mary W. Jackson NASA Headquarters or NASA HQ and
                        formerly named Two Independence Square, is a low-rise office building in the
                        two-building Independence Square complex at 300 E Street SW in Washington, D.C.
                    </Paragraph>
                </Content>
            </Card>
            <Card fluid>
                <Heading>NASA Headquarters</Heading>
                <Content>
                    <Paragraph>
                        NASA Headquarters, officially known as Mary W. Jackson NASA Headquarters or NASA HQ and
                        formerly named Two Independence Square, is a low-rise office building in the
                        two-building Independence Square complex at 300 E Street SW in Washington, D.C.
                    </Paragraph>
                </Content>
            </Card>
        </div>
      </div>
    );
}
