// ***** start - import from files
import { ProductFiltersProps } from "@/src/constants/types/types";
import SearchInput from "./SearchInput";
import SelectBox from "./SelectBox";
import { SearchIcon } from "@/src/assets/Icons";
// ***** end - import from files

const ProductFilters = ({
  search,
  onSearch,
  category,
  onCategory,
  sort,
  onSort,
  categories,
}: ProductFiltersProps) => {
  return (
    <div className="
      bg-white border border-gray-200 rounded-xl
      p-4 flex flex-col gap-4
      md:flex-row md:items-center
      shadow-sm
    ">
      <SearchInput
        value={search}
        onChange={onSearch}
        placeholder="Search products..."
        icon={<SearchIcon width={18} height={18} />}
      />

      <div className="hidden md:block h-10 w-px bg-gray-200" />

      <SelectBox
        value={category}
        onChange={onCategory}
        options={categories}
      />

      <SelectBox
        value={sort}
        onChange={onSort}
        options={[
          "Sort by",
          "Low - High",
          "High - Low",
        ]}
      />
    </div>
  );
};

export default ProductFilters;
