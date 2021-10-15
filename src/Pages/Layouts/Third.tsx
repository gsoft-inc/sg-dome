import { Sidebar } from "../../components";
import { Div, H1, Flex } from "@orbit-ui/react-components";

export function Third() {
    return (
        <>
            <Sidebar />
            <Flex marginTop={10} className="mw-m" style={{ minHeight: "768px", gap: "2rem" }}>
                <Div className="grid grid-rows-auto gap-6 grid-cols-1 lg:grid-cols-2">
                    <H1>test</H1>
                </Div>
                <Sidebar />
            </Flex>
        </>
    );
}
