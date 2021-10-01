import { Button, Field, Label, PasswordInput, Checkbox, TextInput, HelpMessage, Form, Heading, Paragraph } from "@orbit-ui/react-components";
  
export function Settings() {
    return (
        <div className="mw-xs m-auto mt10">
          <Heading>Settings</Heading>
          <Paragraph>Within this section, you can manage ShareGate Apricot's settings, such as storage and communication options.</Paragraph>
          <Form className="mt8" fluid>
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
      </div>
    );
}
