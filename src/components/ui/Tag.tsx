// components/Tag.tsx
import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

// Define our base styles and variants
const tagStyles = cva(
    'inline-block text-xs font-medium px-2.5 py-1 rounded-sm', // base styles
    {
        variants: {
            // Define a "variant" prop for different color schemes if needed
            variant: {
                default: ' bg-colorbadge dark:bg-colorbadge text-gray-300 dark:text-gray-300',
                // You could add more variants here (e.g., primary, secondary etc.)
                primary: 'bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-blue-100',
                secondary: 'bg-green-100 text-green-800 dark:bg-green-600 dark:text-green-100',
            },
            // You can also define a "size" variant if you like,
            // but we already have a small text size defined; customize as needed.
        },
        // Default props for the variants
        defaultVariants: {
            variant: 'default',
        },
    }
);

export interface TagProps
    extends React.HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof tagStyles> {
    children: React.ReactNode;
}

// The Tag component which accepts standard span props in addition to our styling props
const Tag: React.FC<TagProps> = ({ children, className, variant, ...props }) => {
    return (
        <span className={tagStyles({ variant, className })} {...props}>
      {children}
    </span>
    );
};

export default Tag;
