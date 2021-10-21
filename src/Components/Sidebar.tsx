import { Flex, Text } from "@sharegate/orbit-ui";

export function Sidebar() {
    return (
        <Flex visibility={{ base: "hidden", md: "visible" }} direction="column" shrink={0} padding={4} borderRight="cloud-2" width={14}>
            <Text color="marine-6" textTransform="uppercase" paddingY={2} size="sm">Migration</Text>
            <Text color="white" backgroundColor="marine-6" borderRadius={2} paddingX={4} paddingY={2} cursor="pointer">Migrate</Text>
            <Text color="marine-4" marginTop={4} textTransform="uppercase" paddingY={2} size="sm">Teams Management</Text>
            <Text borderRadius={2} paddingX={4} paddingY={2} cursor="pointer" colorHover="white" backgroundColorHover="marine-6">Manage</Text>
        </Flex>
    );
}
