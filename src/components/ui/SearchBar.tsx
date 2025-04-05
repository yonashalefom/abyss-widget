import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <form className="mx-auto overflow-hidden">
            <label htmlFor="default-search"
                   className="pl-6 mb-2 text-base font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-4 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search"
                       className="block w-full ps-14 py-2 text-base text-gray-900 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-card-bg dark:border-card-hover dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search" required/>
            </div>
        </form>
    );
};

export default SearchBar;
