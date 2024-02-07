import { ReactElement } from "react";

export interface Column<T> {
    key: string;
    title: string | ReactElement;
    width?: number;
    render?: (column: Column<T>, item: T) => ReactElement;
  }