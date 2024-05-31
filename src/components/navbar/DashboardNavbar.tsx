import React from 'react';
import { Bell, User, Settings, Search, Plus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const DashboardNavbar: React.FC = () => {
    return (
        <div className=" text-white text-sm h-10 flex items-center gap-10 justify-between px-4">
            <div className="flex items-center space-x-4 w-full max-w-[700px]">
                <div className="relative border rounded-md w-full">
                    <input
                        type="text"
                        placeholder="Search people, projects or tasks"
                        className="bg-transparent w-full text-white rounded-full pl-10 pr-4 py-2 focus:outline-none w-64"
                    />
                    <Search size={20} className="absolute top-2 left-3  text-gray-500" />
                </div>
            </div>
            <div className="flex items-center space-x-4">

                <Bell size={20} className="text-gray-500 cursor-pointer" />
                <User size={20} className="text-gray-500 cursor-pointer" />
                <Settings size={20} className="text-gray-500 cursor-pointer" />
                <div className="relative">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;
