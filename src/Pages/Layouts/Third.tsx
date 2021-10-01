import {Sidebar} from "../../Components";
  
export function Third() {
    return (
        <>
            <Sidebar />
            <div className="mt10 flex mw-m" style={{ minHeight: "768px", gap: "2rem" }}>
                <div className="grid grid-rows-auto gap-6 grid-cols-1 lg:grid-cols-2">
                    <h1>test</h1>
                </div>
            <Sidebar />
        </div>
        </>
    );
}
