import React from "react";
import Logo from "@/components/atom/icons/logo";
import { Notification } from "@/components/atom/icons/notification";
import { MyProfile } from "@/components/atom/icons/myProfile";

const SpuerAdminIndex = () => {
    return(

        <div className="flex  justify-between">
        <div className="flex flex-col ">
            <div><Logo/></div>
            <div>Permission</div>
            <div>Plan</div>
            <div>Users</div>
        </div>

        <div className="flex flex-row ">

            <div><p>Plan</p></div>
            <div className="flex flex-row justify-between">
                <div><Notification/></div>
                <div><MyProfile/></div>
                <div className="">Logout</div>
            </div>
            
        </div>
        </div>
    );
}

export default SpuerAdminIndex;