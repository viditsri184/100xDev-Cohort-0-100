import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export default function Dashboard() {

    return <div>
        <Appbar user={"Vidit"}/>
        <div className="m-8">
            <Balance amount={"₹40000"}/>
            <Users />
        </div>
    </div>
}