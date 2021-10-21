import { Flex, Grid, H1 } from "@sharegate/orbit-ui";
import { Sidebar } from "../../Components";

export function Third() {
    return (
        <>
            <Sidebar />
            <Flex minHeight="768px" gap="2rem" marginTop={10}>
                <Grid gap="6" gridColumnSpan={{ base: 1, lg: 2 }}>
                    <H1>test</H1>
                </Grid>
                <Sidebar />
            </Flex>
        </>
    );
}
