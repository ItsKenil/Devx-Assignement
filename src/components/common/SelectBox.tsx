// ***** start - import from files
import { SelectBoxProps } from "@/src/constants/types/types";
// ***** end - import from files

const SelectBox = ({ value, onChange, options }: SelectBoxProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        px-4 py-3 rounded-lg
        border border-gray-200 bg-white
        text-sm text-gray-700
        focus:ring-2 focus:ring-indigo-500
      "
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
