import {Icon} from "@iconify/react";
import Tag from "@/components/ui/Tag";

export default function ListItem({ title, rating, shopName, views, requests, tags }) {
    return (
        <div className="dark:bg-card-bg rounded-xl border border-card-hover border-solid p-4 shadow-sm hover:bg-card-mouse-hover transition duration-200 relative cursor-pointer">
            {/* Title */}
            <h3 className=" line-clamp-1 text-lg font-medium text-snow duration-200">{title}</h3>

            {/* Rating and Shop Name */}
            <div className="flex items-center space-x-2">
                <div className="flex" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-2xl text-yellow-400">★</span>
                    ))}
                </div>
                <span className="text-sm font-bold text-gray-300">{rating}</span>
                <div className="flex items-center justify-center">
                    <Icon icon="tabler:currency-bitcoin" className="ml-2 size-5  text-yellow-400"/>
                    <span className="text-sm  font-bold text-gray-300">{requests}</span>
                </div>
                <span className="text-sm italic text-gray-300">{shopName}</span>
            </div>

            {/* Metrics */}
            <div className="flex items-center mt-[2px] text-xs text-gray-300 space-x-2">
                <div className="flex gap-1 justify-center items-center text-sm font-bold text-buttongray">
                    <p>{views}</p>
                    <span className="text-xs">views</span>
                </div>
                <span className="text-buttongray">•</span>
                <div className="flex gap-1 justify-center items-center text-sm font-bold text-buttongray">
                    <p>{requests}</p>
                    <span className="text-xs">requests</span>
                </div>
            </div>

            {/* Tags */}
            <div className="mt-1 flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </div>
        </div>
    );
}
