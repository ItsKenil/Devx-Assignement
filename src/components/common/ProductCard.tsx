// ***** start - import from package
import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { useDispatch, useSelector } from "react-redux";
// ***** end - import from package

// ***** start - import from files
import { HeartIcon } from "@/src/assets/Icons";
import Button from "@/src/components/common/Button";
import ImageComponent from "./ImageComponent";
import { ProductDataType } from "@/src/constants/types/types";
import { setCartCount } from "@/src/store/slice/generalSlice";
import { RootState } from "@/src/store";
// ***** end - import from files

const ProductCard = ({ product, onWishlistToggle }: { product: ProductDataType, onWishlistToggle: (id: number) => void }) => {

  // ***** start - define state and variables
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const cartCount = useSelector(
    (state: RootState) => state.general.cartCount
  )
  const dispatch = useDispatch();
  // ***** end - define state and variables

  // ***** start - add to cart button click function
  const handleClick = () => {
    if (status !== "idle") return;

    setStatus("loading");

    setTimeout(() => {
      dispatch(setCartCount(cartCount + 1))
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
      }, 2000);
    }, 1500);
  };
  // ***** end - add to cart button click function

  return (
    <div className="group bg-white rounded-xl border shadow-sm hover:shadow-xl transition">
      {product?.image && (
        <div className="relative overflow-hidden rounded-t-xl h-[300px]">
          <ImageComponent
            src={product.image}
            alt={product.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition"
            sizes="
            (max-width: 639px) 90.2vw,
            (max-width: 767px) 44.06vw,
            (max-width: 1023px) 28.91vw,
            24.88vw"
            height={300}
            width={300}
          />

          {product?.category && (
            <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-4 py-2 rounded-full">
              {product.category}
            </span>
          )}

          <button onClick={() => onWishlistToggle(product.id)} className="absolute top-3 right-3 bg-white p-2 rounded-full shadow cursor-pointer">
            <HeartIcon liked={product.addedToWishlist} />
          </button>
        </div>
      )}

      <div className="p-4 space-y-2">
        {product?.title && (
          <h3 className="font-semibold text-gray-800 line-clamp-2 min-h-[50px]">
            {product.title}
          </h3>
        )}

        <div className="flex items-center justify-between">
          {product?.price && (
            <span className="text-lg font-bold text-indigo-600">
              ${product.price.toFixed(2)}
            </span>
          )}
          <div className="flex">
            {product?.rating?.rate && (
              <Rating className="max-w-[5.5rem] overflow-hidden" readOnly value={product.rating.rate} />
            )}
            {product?.rating?.count && (
              <span className="text-sm text-gray-400">({product.rating.count})</span>
            )}
          </div>
        </div>

        <Button
          onClick={handleClick}
          disabled={status === "loading"}
          className={`
        w-full mt-4 py-3 text-white font-semibold
        ${status === "idle"
              ? "bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 hover:scale-[1.02]"
              : status === "loading"
                ? "bg-gray-400 cursor-wait"
                : "bg-green-500"
            }
      `}
        >
          {status === "idle" && "Add To Cart"}
          {status === "loading" && "Adding..."}
          {status === "success" && "✓ Added"}
        </Button>

      </div>
    </div>
  );
};

export default React.memo(ProductCard);
