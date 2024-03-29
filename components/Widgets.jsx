import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";


export default function Widgets() {
    return (
        <div className='xl:w-[600px] hidden lg:inline ml-8 spa-y-5'>
            <div className='w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50'>
                <div className='flex items-center p-3 rounded-full relative'>
                <MagnifyingGlassIcon className='h-5 z-50 text-gray-500'/>
                    <input className='absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-2xl focus:bg-white bg-gray-100 ' type='text' placeholder='..Search'/>
                </div>
            </div>
        </div>
    )
}