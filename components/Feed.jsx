import {SparklesIcon} from "@heroicons/react/24/outline";
import Input from "@/components/Input";
import Posts from "@/components/Posts";

export default function Feed() {
    const posts = [
        {
            id: "1",
            name: "Dan",
            username: "Dan",
            userImg: "/user.png",
            img: "/images/next.jpg",
            text: "Nice view",
            timestamp: "2 hours ago"
        },
        {
            id: "2",
            name: "Dan",
            username: "Dan",
            userImg: "/user.png",
            img: "/images/one.jpg",
            text: "Ago",
            timestamp: "2 hours ago"
        }
    ]
    return (
        <div className='xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
           <div className='flex py-2 px-3 sticky top-0 x-50 bg-white border-b border-gray-300'>
            <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
            <div className='hoverEffect flex items-center justify-center px-0 ml-auto h-9'>
                <SparklesIcon className='h-5'/>

            </div>
           </div>
            <Input/>
            {posts.map((post) => (
                <Posts key={post.id} post={post}/>
            )) }
        </div>
    )
}