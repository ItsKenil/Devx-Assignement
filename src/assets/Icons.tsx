// ***** start - Wishlist icon
export const HeartIcon = ({
    width = 24,
    height = 24,
    className = "",
    liked = false
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            width={width}
            height={height}
            className={className}
        >
            <path d="M93.99 8.97c-21.91 0-29.96 22.39-29.96 22.39s-7.94-22.39-30-22.39c-16.58 0-35.48 13.14-28.5 43.01s58.56 67.08 58.56 67.08 51.39-37.21 58.38-67.08c6.98-29.87-10.56-43.01-28.48-43.01" fill={liked ? '#f44336' : '#fff'} />
            <path
                d="M30.65 11.2c17.2 0 25.74 18.49 28.5 25.98.39 1.07 1.88 1.1 2.33.06L64 31.35C60.45 20.01 50.69 8.97 34.03 8.97c-6.9 0-14.19 2.28-19.86 7.09 5.01-3.29 10.88-4.86 16.48-4.86M93.99 8.97c-5.29 0-10.11 1.15-13.87 3.47 2.64-1.02 5.91-1.24 9.15-1.24 16.21 0 30.72 12.29 24.17 40.7-5.62 24.39-38.46 53.98-48.49 65.27-.64.72-.86 1.88-.86 1.88s51.39-37.21 58.38-67.08c6.98-29.86-10.53-43-28.48-43"
                fill={liked ? '#c33' : '#fff'}
            />
            <path
                d="M17.04 24.82c3.75-4.68 10.45-8.55 16.13-4.09 3.07 2.41 1.73 7.35-1.02 9.43-4 3.04-7.48 4.87-9.92 9.63-1.46 2.86-2.34 5.99-2.79 9.18-.18 1.26-1.83 1.57-2.45.46-4.22-7.48-5.42-17.78.05-24.61M77.16 34.66c-1.76 0-3-1.7-2.36-3.34 1.19-3.02 2.73-5.94 4.58-8.54 2.74-3.84 7.95-6.08 11.25-3.75 3.38 2.38 2.94 7.14.57 9.44-5.09 4.93-11.51 6.19-14.04 6.19"
                fill={liked ? '#ff8a80' : '#fff'}
            />
            <path
                d="M93.99 8.97c-21.91 0-29.96 22.39-29.96 22.39s-7.94-22.39-30-22.39c-16.58 0-35.48 13.14-28.5 43.01s58.56 67.08 58.56 67.08 51.39-37.21 58.38-67.08c6.98-29.87-10.56-43.01-28.48-43.01"
                fill="none"
                stroke={liked ? '#fff' : '#000'}
                strokeWidth={1}
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
}
// ***** end - Wishlist icon

// ***** start - Search icon
export const SearchIcon = ({
    width = 24,
    height = 24
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
        </svg>
    )
}
// ***** end - Search icon

// ***** start - Previous icon
export const ChevronLeftIcon = () => (
    <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);
// ***** end - Previous icon

// ***** start - Next icon
export const ChevronRightIcon = () => (
    <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);
// ***** end - Next icon

// ***** start - Cart icon
export const CartIcon = ({
    width = 24,
    height = 24
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path>
    </svg>
);
// ***** end - Cart icon
