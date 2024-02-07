import {FaceSmileIcon, PhotoIcon} from "@heroicons/react/24/outline";


export default function Input(){
    return (
        <div className='flex border-b border-gray-200 p-3 space-x-3'>
            <img src='/user.png' alt='user' className='w-11 h-11 rounded-full cursor-pointer hover:brightness-105'/>
            <div className='w-full'>
                <div className='divide-y divide-gray-200'>
                <textarea className='w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700' rows={2} placeholder='Whats hapens?'/>
                </div>
                <div className='flex items-center justify-between pt-2.5'>
                    <div className='flex'>
                        <PhotoIcon className='h-10 w-10 hoverEffect p-2 text-sky-500 bg-sky-100'/>
                        <FaceSmileIcon className='h-10 w-10 hoverEffect p-2 text-sky-500 bg-sky-100' />
                    </div>
                    <button className='bg-blue-500 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50' disabled >Tweet</button>
                </div>
            </div>

        </div>
    )
}