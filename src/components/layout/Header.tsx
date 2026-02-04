'use client'
// ***** start - import from package
import { useSelector } from "react-redux";
// ***** end - import from package

// ***** start - import from files
import { CartIcon } from "@/src/assets/Icons";
import { RootState } from "@/src/store";
// ***** end - import from files

export default function Header() {

  // ***** start - define state and variable
  const cartCount = useSelector(
    (state: RootState) => state.general.cartCount
  )
  // ***** end - define state and variable

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-end">
        <button
          className="
            relative
            p-2 rounded-full
            text-indigo-600
            transition-all duration-300
            active:scale-95
          "
        >
          <CartIcon />

          {cartCount > 0 && (
            <span
              className="
                absolute -top-0 -right-0
                min-w-[18px] h-[18px]
                px-1
                bg-indigo-600 text-white text-xs
                rounded-full
                flex items-center justify-center
                scale-100
                transition-transform duration-300
              "
            >
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}