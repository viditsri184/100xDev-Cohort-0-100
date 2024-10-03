import {MainCard}  from "./MainCard"
import {SecondaryCard} from "./SecondaryCard"

export const RevenueCard = () => {
    return (<div className="flex gap-5">
        <MainCard title={"Next Payout"} amount={"2,312.23"} orderCount={23} />
        <SecondaryCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13} />
        <SecondaryCard title={"Amount Processed"} amount={"23,92,312.19"} />
    </div>
    )
}