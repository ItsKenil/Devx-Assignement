'use client';
// ***** start - import from package
import { Provider } from "react-redux";
// ***** end - import from package

// ***** start - import from files
import { store } from "@/src/store";
import { ChildrenTypeComponent } from "@/src/constants/types/types";
// ***** end - import from files

export default function Providers({
    children,
}: ChildrenTypeComponent) {
    return <Provider store={store}>{children}</Provider>;
}
