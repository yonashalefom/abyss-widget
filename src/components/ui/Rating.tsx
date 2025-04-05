import { ListItemRating } from "@/components/list-item/types";

type RatingProps = ListItemRating & {
    className?: string;
};

export const Rating = ({
                           value,
                           ariaLabel = `Rating: ${value} out of 5`,
                           className = "",
                       }: RatingProps) => {
    const normalizedValue = Math.min(Math.max(value, 0), 5);
    const fullStars = Math.round(normalizedValue); // Using round instead of floor

    return (
        <div
            className={`flex ${className}`}
            role="img"
            aria-label={ariaLabel}
        >
            {[...Array(5)].map((_, i) => (
                <span
                    key={i}
                    className={`text-2xl ${i < fullStars ? 'text-yellow-500' : 'text-gray-300'}`}
                >
                    {i < fullStars ? '★' : '☆'}
                </span>
            ))}
        </div>
    );
};
