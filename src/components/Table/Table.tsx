
import styles from './Table.module.css';
import { twMerge } from 'tailwind-merge';
import { Column } from './Table.types';

type Props<T> = {
  columns: Array<Column<T>>;
  data?: T[];
  className: {
    container: string;
    wrapper: string;
    thead: string;
    table: string;
    tbody: string;
    th: string;
    td: string;
    empty?: string;
  }
};

const Table = <T,>({ data, columns, className }: Props<T>) => {
  
    const headers = columns.map((column, index) => {
      return (
        <th key={`headCell-${index}`} scope="col" className={twMerge(styles.th, className.th)}>
          {column.title}
        </th>
      );
    });
  
    const rows =
      !data?.length ? (
        <tr>
          <td colSpan={columns.length} className={styles.empty}>
            No Data
          </td>
        </tr>
      ) : (
        data.map((row, index) => {
          return (
            <tr key={`row-${index}`}>
              {columns.map((column, index2) => {
                const value =
                  column.render
                    ? column.render(column, row as T)
                    : (row[column.key as keyof typeof row] as string);
                return (
                  <td key={`cell-${index2}`} className={twMerge(styles.td, className.td)}>
                    {value}
                  </td>
                );
              })}
            </tr>
          );
        })
      );
  
    return (
      <div className={twMerge(styles.container, className.container)}>
        <div className={twMerge(styles.wrapper, className.wrapper)}>
          <table className={twMerge(styles.table, className.table)}>
            <thead className={twMerge(styles.thead, className.thead)}>
              <tr>{headers}</tr>
            </thead>
            <tbody className={twMerge(styles.tbody, className.tbody)}>{rows}</tbody>
          </table>
        </div>
      </div>
    );
  };

export default Table