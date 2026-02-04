// ***** start - import from files
import { ButtonProps } from "@/src/constants/types/types";
// ***** end - import from files

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        rounded-full font-semibold
        transition-transform duration-200
        active:scale-95
        cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
