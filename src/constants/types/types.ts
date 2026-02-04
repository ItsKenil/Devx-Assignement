export type FetchPriority = "high" | "low" | "auto";

export type LoadingType = "lazy" | "eager";

export type ImageComponentPropsType = {
    src: string;
    alt?: string;
    sizes?: string;
    loading?: LoadingType;
    height: number;
    width: number;
    fetchPriority?: FetchPriority;
    className?: string;
    wrapperClassName?: string;
};

export type ProductRatingType = {
  rate: number;
  count: number;
};

export type ProductDataType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRatingType;
  addedToWishlist: boolean;
};

export type ProductGridProps = {
  products: ProductDataType[];
};

export type GeneralState = {
  cartCount: number;
};

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export type ProductFiltersProps = {
  search: string;
  onSearch: (v: string) => void;
  category: string;
  onCategory: (v: string) => void;
  sort: string;
  onSort: (v: string) => void;
  categories: string[];
};

export type PaginationProps = {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export type PaginationButtonProps = {
    children: React.ReactNode;
    isActive?: boolean;
    disabled?: boolean;
    onClick?: () => void;
};

export type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
};

export type SelectBoxProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

export type ChildrenTypeComponent = {
    children?: React.ReactNode;
};
