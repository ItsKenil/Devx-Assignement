'use client'
// ***** start - import from package
import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";
import '@smastrom/react-rating/style.css';
// ***** end - import from package

// ***** start - import from files
import Loader from "../common/Loader";
import { PRODUCT_LISTING_COUNT } from "@/src/constants/constants";
import { ProductDataType, ProductGridProps } from "@/src/constants/types/types";
import ProductFilters from "@/src/components/common/FilterBar";
import ProductCard from "@/src/components/common/ProductCard";
import Pagination from "@/src/components/common/Pagination";
// ***** end - import from files

const ProductGrid = ({ products }: ProductGridProps) => {

  // ***** start - Define state and variables
  const [productList, setProductList] = useState<ProductDataType[]>(products);
  const [loading, setLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  // ***** end - Define state and variables

  // ***** start - Dynamic categories
  const categories = useMemo(() => ["All", ...new Set(productList.map((p) => p.category))], [productList]);
  // ***** end - Dynamic categories

  // ***** start - Add debounced for not call api on every key press
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 800);

    return () => clearTimeout(timer);
  }, [search]);
  // ***** end - Add debounced for not call api on every key press

  // ***** start - Wishlist toggle
  const onClickOnWishlist = useCallback((id: number): void => {
    setProductList((prev) =>
      prev.map((ele) =>
        ele.id === id
          ? { ...ele, addedToWishlist: !ele.addedToWishlist }
          : ele
      )
    );
  }, []);
  // ***** end - Wishlist toggle

  // ***** start - Filter + Sort
  const filteredProducts = useMemo(() => {
    setLoading(true)
    let data = [...productList];

    if (debouncedSearch) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    if (category !== "All") {
      data = data.filter((p) => p.category === category);
    }

    if (sort === "Low - High") data.sort((a, b) => a.price - b.price);
    if (sort === "High - Low") data.sort((a, b) => b.price - a.price);

    setPage(1);
    setLoading(false);
    return data;
  }, [debouncedSearch, category, sort, productList]);
  // ***** end - Filter + Sort

  // ***** start - Pagination logic
  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCT_LISTING_COUNT
  );
  const startIndex = (page - 1) * PRODUCT_LISTING_COUNT;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCT_LISTING_COUNT
  );
  // ***** end - Pagination logic

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Best Sellers</h1>
      <div className="mb-10">
        <ProductFilters
          search={search}
          onSearch={setSearch}
          category={category}
          onCategory={setCategory}
          sort={sort}
          onSort={setSort}
          categories={categories}
        />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {paginatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onWishlistToggle={onClickOnWishlist}
            />
          ))}
        </div>
      )}
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
};

export default React.memo(ProductGrid);
