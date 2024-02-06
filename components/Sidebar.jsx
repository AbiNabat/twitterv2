import Image from "next/image";
import SideBarMenuItems from "@/components/SideBarMenuItems";
import { HashtagIcon, HomeIcon} from "@heroicons/react/16/solid";
import {
    BellIcon,
    BookmarkIcon,
    ClipboardIcon,
    EllipsisHorizontalCircleIcon,
    InboxIcon,
    UserIcon
} from "@heroicons/react/24/outline";

;

export default function Sidebar() {
    return (
        <div className='hidden sm:flex flex-col p-2 xl:items-start fixed'>
        <div className="hoverEffect p-0 hover:bg-blue-100">
            <Image src='/logo.png'
                   alt='logo'
                   width={30}
                   height={30}
                   className=''
                   />
        </div>
            <div className="mt-4 mb-2.5 xl:items-start">
                <SideBarMenuItems text="Home" Icon={HomeIcon} />
                <SideBarMenuItems text="Explore" Icon={HashtagIcon} />
                <SideBarMenuItems text="Notifications" Icon={BellIcon} />
                <SideBarMenuItems text="Messages" Icon={InboxIcon} />
                <SideBarMenuItems text="Bookmark" Icon={BookmarkIcon} />
                <SideBarMenuItems text="Lists" Icon={ClipboardIcon} />
                <SideBarMenuItems text="Profile" Icon={UserIcon} />
                <SideBarMenuItems text="More" Icon={EllipsisHorizontalCircleIcon} />

            </div>
            <button className='bg-blue-500 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-105 text-lg hidden xl:inline'>Tweet</button>

            <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start">
            <Image src="/user.png" alt="user" width={100} height={100} className="rounded-full h-10 w-10" />
                <div className='leading-5 hidden xl:inline'>
                    <h4 className='font-bold'>Dote Pack</h4>
                    <p className='text-gray-500'>tesst@gmail.com</p>
                </div>
                <EllipsisHorizontalCircleIcon className='h-5 xl:ml-8 hidden xl:inline'/>
            </div>

        </div>
    )
}