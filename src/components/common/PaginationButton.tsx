// ***** start - import from files
import { PaginationButtonProps } from "@/src/constants/types/types";
// ***** end - import from files

export default function PaginationButton({
    children,
    isActive = false,
    disabled = false,
    onClick,
}: PaginationButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
        w-10 h-10 flex items-center justify-center
        rounded-full text-sm font-medium
        transition-all duration-300 ease-out
        transform
        ${isActive
                    ? "bg-indigo-600 text-white scale-110 shadow-md"
                    : "border border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:scale-105"
                }
        ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
      `}
        >
            {children}
        </button>
    );
}
