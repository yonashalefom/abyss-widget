import ContentLoader from "react-content-loader";

const ListItemShimmer: React.FC = () => {
    return (
        <div className="dark:bg-card-bg bg-card-bg  rounded-xl border border-card-hover border-solid shadow-sm p-4">
            <ContentLoader
                speed={2}
                width="100%"
                height={104}
                backgroundColor="#262830"
                foregroundColor="#3a3d49"
                className="w-full"
            >
                {/* Title */}
                <rect x="0" y="0" rx="4" ry="4" width="70%" height="20" />

                {/* Rating */}
                <rect x="0" y="34" rx="3" ry="3" width="110" height="16" />
                {/* Rating Number */}
                <rect x="120" y="34" rx="3" ry="3" width="20" height="16" />
                {/* Bitcoin icon + requests */}
                <rect x="150" y="34" rx="3" ry="3" width="30" height="16" />
                {/* Shop name */}
                <rect x="190" y="34" rx="3" ry="3" width="35%" height="16" />

                {/* Metrics */}
                <rect x="0" y="62" rx="3" ry="3" width="80" height="12" />
                <rect x="90" y="62" rx="3" ry="3" width="50" height="12" />

                {/* Tags */}
                <rect x="0" y="84" rx="4" ry="4" width="60" height="20" />
                <rect x="70" y="84" rx="4" ry="4" width="60" height="20" />
                <rect x="140" y="84" rx="4" ry="4" width="60" height="20" />
            </ContentLoader>
        </div>
    );
};

export default ListItemShimmer;
