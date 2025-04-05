'use client';

import {useQuery} from '@tanstack/react-query';
import React from 'react';
import ListItemShimmer from "@/components/ui/loaders/ListItemShimmer";
import {ListItem} from "@/components/list-item/ListItem";
import {useRouter} from "next/navigation";

export type ListItemData = {
    title: string;
    rating: number;
    shopName: string;
    views: string;
    requests: number;
    tags: string[];
};

// region API fetch function with improved error handling
const fetchListItems = async (): Promise<ListItemData[]> => {
    try {
        const response = await fetch(
            process.env.NEXT_PUBLIC_API_URL || 'https://mock.apidog.com/m2/869146-850209-default/15605275'
        );
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch list items:', error);
        throw error;
    }
};
// endregion

// region List components using React Query
function List() {
    const router = useRouter();

    const handleRedirect = () => {
        router.push('/widget-details'); // Redirects to /widget-details
    };

    const {data, isLoading, isError} = useQuery<ListItemData[], Error>({
        queryKey: ['listItems'],
        queryFn: fetchListItems,
        staleTime: 5 * 60 * 1000, // 5 minutes - data considered fresh
        gcTime: 30 * 60 * 1000, // 30 minutes - cached data kept
        retry: 2, // Retry failed requests twice
    });

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Array.from({length: 16}).map((_, index) => (
                    <ListItemShimmer key={index}/>
                ))}
            </div>
        );
    }

    if (isError) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center col-span-full text-red-500">
                    Failed to load data. Please try again later.
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data?.map((item, idx) => (
                <ListItem
                    key={idx}
                    title={item.title}
                    shopName={item.shopName}
                    metrics={{views: item.views, requests: Number(item.requests)}}
                    rating={{value: item.rating}}
                    tags={item.tags}
                    onItemClick={handleRedirect}
                />
            ))}
        </div>
    );
}
// endregion

export default function Widgets() {
    return (
        <div className="container mx-auto px-8 max-w-[820px] pb-4">
            <List/>
        </div>
    );
}
