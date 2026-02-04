// ***** start - import from files
import { SearchInputProps } from "@/src/constants/types/types";
// ***** end - import from files

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search...",
  icon,
}: SearchInputProps) => {
  return (
    <div className="relative flex-1">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full pl-11 pr-4 py-3
          border border-gray-200 rounded-lg
          text-sm text-gray-700
          focus:ring-2 focus:ring-indigo-500
          outline-none
        "
      />
      {icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>
      )}
    </div>
  );
};

export default SearchInput;
