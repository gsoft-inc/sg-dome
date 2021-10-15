import { Div, Flex, H1 } from "@orbit-ui/react-components";
import { Sidebar } from "../../components";

export function Third() {
    return (
        <>
            <Sidebar />
            <Flex className="mw-m" marginTop={10} style={{ gap: "2rem", minHeight: "768px" }}>
                <Div className="grid grid-rows-auto gap-6 grid-cols-1 lg:grid-cols-2">
                    <H1>test</H1>
                </Div>
                <Sidebar />
            </Flex>
        </>
    );
}
