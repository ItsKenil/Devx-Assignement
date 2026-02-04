// ***** start - import from files
import { ChevronLeftIcon, ChevronRightIcon } from "@/src/assets/Icons";
import PaginationButton from "@/src/components/common/PaginationButton";
import { PaginationProps } from "@/src/constants/types/types";
import { getPageNumbers } from "@/src/utils/utils";
// ***** end - import from files

export default function Pagination({
    page,
    totalPages,
    onPageChange,
}: PaginationProps) {
    if (totalPages <= 1) return null;

    const pages = getPageNumbers(page, totalPages);

    return (
        <div className="flex items-center justify-center gap-2 mt-12">
            {/* Prev */}
            <PaginationButton
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
            >
                <ChevronLeftIcon />
            </PaginationButton>

            {/* Page numbers */}
            {pages.map((p, index) =>
                p === "..." ? (
                    <span
                        key={`dots-${index}`}
                        className="px-2 text-indigo-400 select-none"
                    >
                        …
                    </span>
                ) : (
                    <PaginationButton
                        key={p}
                        isActive={page === p}
                        onClick={() => onPageChange(p)}
                    >
                        {p}
                    </PaginationButton>
                )
            )}

            {/* Next */}
            <PaginationButton
                disabled={page === totalPages}
                onClick={() => onPageChange(page + 1)}
            >
                <ChevronRightIcon />
            </PaginationButton>
        </div>
    );
}
