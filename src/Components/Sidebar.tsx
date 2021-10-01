import { Text } from "@orbit-ui/react-components";

export function Sidebar() {
    return (
        <div className="w48 flex-shrink-0 flex-column hidden lg:flex br b--cloud-100 pa4">
            <Text size="sm" className="marine-300 ttu pv2">Migration</Text>
            <div className="white bg-marine-500 br2 ph4 pv2 pointer">Migrate</div>
            <Text size="sm" className="mt4 marine-300 ttu pv2">Teams Management</Text>
            <div className="br2 ph4 pv2 pointer hover-white hover-bg-marine-500">Manage</div>
        </div>
    );
}
