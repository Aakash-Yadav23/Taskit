'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Home, Menu, FolderDot, Bug, StickyNote, Calendar, LogOut } from 'lucide-react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const linkClasses = (path: string) =>
        `flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-xl ${pathname === path ? 'bg-purple-500' : ''}`;

    return (
        <div className={`h-screen overflow-y-scroll text-white ${isOpen ? 'w-56' : 'w-20'} transition-width duration-300`}>
            <div className={`flex items-center justify-between w-full h-16 p-4`}>
                <h1 className={`text-lg font-bold w-fit transition-opacity transition-all ease-in-out duration-300 ${isOpen ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
                    Taskit
                </h1>
                <button onClick={toggleSidebar}>
                    <Menu className="h-5 w-5 text-white" />
                </button>
            </div>
            <nav className="flex flex-col text-sm p-4 space-y-2">
                <Link href="/dashboard" className={linkClasses('/dashboard')}>
                    <Home size={20} />
                    <span className={`${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>Dashboard</span>
                </Link>
                <Link href="/projects" className={linkClasses('/projects')}>
                    <FolderDot size={20} />
                    <span className={`${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>Projects</span>
                </Link>
                <Link href="/issues" className={linkClasses('/issues')}>
                    <Bug size={20} />
                    <span className={`${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>Issues</span>
                </Link>
                <Link href="/boards" className={linkClasses('/boards')}>
                    <StickyNote size={20} />
                    <span className={`${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>Boards</span>
                </Link>
                <Link href="/calendar" className={linkClasses('/calendar')}>
                    <Calendar size={20} />
                    <span className={`${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>Calendar</span>
                </Link>
            </nav>
            <div className="absolute bottom-4 w-full px-4">
                <Link href="/logout" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                    <LogOut size={20} />
                    <span className={`${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>Log out</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
