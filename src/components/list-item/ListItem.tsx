import React, {forwardRef} from 'react';
import {Icon} from "@iconify/react";
import Tag from "@/components/ui/Tag";
import {ListItemProps} from './types';
import {Rating} from "@/components/ui/Rating";

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
    (
        {
            title,
            shopName,
            metrics,
            rating,
            tags,
            onItemClick,
        },
        ref
    ) => {

        return (
            <div
                ref={ref}
                role="article"
                tabIndex={onItemClick ? 0 : -1}
                className="dark:bg-card-bg rounded-xl border border-card-hover border-solid p-4 shadow-sm hover:bg-card-mouse-hover transition duration-200 relative cursor-pointer"
                onClick={onItemClick}
            >
                {/* Title Section */}
                <header className="flex justify-between items-center">
                    <h3 className="line-clamp-1 text-lg font-medium text-white">
                        {title}
                    </h3>
                </header>

                {/* Shop Info Section */}
                <div className="flex items-center gap-2">
                    <Rating
                        {...rating}
                        className="shrink-0"
                    />

                    <span className="text-sm font-bold text-gray-300">{rating.value}</span>
                    <div className="flex items-center justify-center">
                        <Icon icon="tabler:currency-bitcoin" className="ml-2 size-5  text-yellow-400"/>
                        <span className="text-sm  font-bold text-gray-300">{metrics.requests}</span>
                    </div>
                    <span className="text-sm italic text-gray-300">{shopName}</span>
                </div>

                {/* Metrics */}
                <div className="flex items-center mt-[2px] text-xs text-gray-300 space-x-2">
                    <div className="flex gap-1 justify-center items-center text-sm font-bold text-buttongray">
                        <p>{metrics.views}</p>
                        <span className="text-xs">views</span>
                    </div>
                    <span className="text-buttongray">•</span>
                    <div className="flex gap-1 justify-center items-center text-sm font-bold text-buttongray">
                        <p>{metrics.requests}</p>
                        <span className="text-xs">requests</span>
                    </div>
                </div>

                {/* Tags */}
                {tags.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </div>
                )}
            </div>
        );
    }
);

ListItem.displayName = 'ListItem';
