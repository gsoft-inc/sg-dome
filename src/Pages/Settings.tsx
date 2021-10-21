import { Button, Checkbox, Div, Field, Form, Heading, HelpMessage, Label, Paragraph, PasswordInput, TextInput } from "@sharegate/orbit-ui";

export function Settings() {
    return (
        <Div maxWidth="28rem" margin="auto" marginTop={10}>
            <Heading>Settings</Heading>
            <Paragraph>Within this section, you can manage ShareGate Apricot's settings, such as storage and communication options.</Paragraph>
            <Form marginTop={8} fluid>
                <Field required>
                    <Label>Username</Label>
                    <TextInput placeholder="john@spacex.com" />
                </Field>
                <Field required>
                    <Label>Password</Label>
                    <PasswordInput />
                    <HelpMessage>I bet it's a strong one!</HelpMessage>
                </Field>
                <Field>
                    <Checkbox>Remember me</Checkbox>
                </Field>
                <Button type="submit">Login</Button>
            </Form>
        </Div>
    );
}
