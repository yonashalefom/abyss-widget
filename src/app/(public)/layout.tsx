'use client'

import React from 'react';
import Header from "@/layout/header/Header";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type WidgetsLayoutProps = {
    children: React.ReactNode;
};

// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // Global default options
            staleTime: 1000 * 60 * 5, // 5 minutes
            gcTime: 1000 * 60 * 30, // 30 minutes
        },
    },
});

export default function WidgetsLayout({ children }: WidgetsLayoutProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Header/>
            {children}
        </QueryClientProvider>
    );
}
