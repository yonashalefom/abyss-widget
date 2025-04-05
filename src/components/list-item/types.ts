export interface ListItemMetrics {
    views: number;
    requests: number;
}

export interface ListItemRating {
    value: number;
    ariaLabel?: string;
}

export interface ListItemProps {
    title: string;
    shopName: string;
    metrics: ListItemMetrics;
    rating: ListItemRating;
    tags: string[];
    className?: string;
    children?: React.ReactNode;
    onItemClick?: () => void;
    renderTitle?: (title: string) => React.ReactNode;
    renderShopInfo?: (shopName: string) => React.ReactNode;
}
