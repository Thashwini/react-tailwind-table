import { ReactElement } from "react";

export interface ColumnProps<T> {
    key: string;
    title: string | ReactElement;
    width?: number;
    render?: (column: ColumnProps<T>, item: T) => ReactElement;
  }