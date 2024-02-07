<h1 align="center" style="border-bottom: 0 white underline">
    React tailwindcss table
</h1>

<p align="center">
    This package provides a customizable table component built with React.js and styled using Tailwind CSS. With this table component, you can easily integrate tables into your React projects while leveraging the flexibility and utility classes of Tailwind CSS for styling..
</p>

## Installation

You can install the package via npm or yarn:

```js
npm install react-tailwindcss-table
```

or

```js
yarn add react-tailwindcss-table
```

## Usage

To use the table component in your React application, import it and pass the necessary props:

```js
import React from 'react';
import { Table } from 'react-tailwindcss-table'
import type { Column } from 'react-tailwindcss-table';

type Person = {
    id: number;
    name: string;
    age: number;
    city: string;
  }

const MyTableComponent = () => {
  // Sample data
  const data = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 22, city: 'Chicago' }
  ]

  // Define columns
  const columns: Array<Column<Person>> =  [
      {
        key: 'name',
        title: 'Name'
      },
      {
        key: 'age',
        title: 'Age'
      },
      {
        key: 'city',
        title: 'City'
      }
    ];

  return (
    <div>
      <h1>My Table</h1>
      <Table 
      data={data} 
      columns={columns} 
      className={{
        container: "overflow-x-auto",
        wrapper: "inline-block min-w-full align-middle",
        thead: "border-none bg-red-500",
        table: "min-w-full divide-y divide-gray-100",
        tbody: "divide-y divide-gray-100",
        th: "p-3 text-left text-base font-bold text-black",
        td: "whitespace-nowrap px-3 py-4 text-left text-base font-normal text-black",
        empty: "p-6 text-lg text-black"
          }} />
    </div>
  );
};

export default MyTableComponent;
```

## Props

- `Data:`  An array of objects representing the rows of the table. Each object should contain key-value pairs where the keys correspond to column keys.
- `columns:` An array of objects representing the columns of the table. Each object should contain a key (unique identifier for the column) and a title (displayed column header).
- `className:` This prop allows you to style most of the components used by this library.

### className

classNames takes an object with keys to represent the various inner components that react-tailwindcss-table is made up of.

#### All keys

```js
type Props<T> = {
  // ....
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
```

#### Example

```js
import React from 'react';
import { Table } from 'react-tailwindcss-table'
import type { Column } from 'react-tailwindcss-table';

type Person = {
    id: number;
    name: string;
    age: number;
    city: string;
  }

const MyTableComponent = () => {
  // Sample data
  const data = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 22, city: 'Chicago' }
  ]

  // Define columns
  const columns: Array<Column<Person>> =  [
      {
        key: 'name',
        title: 'Name'
      },
      {
        key: 'age',
        title: 'Age'
      },
      {
        key: 'city',
        title: 'City'
      }
    ];

  return (
    <div>
      <h1>My Table</h1>
      <Table 
      data={data} 
      columns={columns} 
      className={{
        container: "overflow-x-auto",
        wrapper: "inline-block min-w-full align-middle",
        thead: "border-none bg-red-500",
        table: "min-w-full divide-y divide-gray-100",
        tbody: "divide-y divide-gray-100",
        th: "p-3 text-left text-base font-bold text-black",
        td: "whitespace-nowrap px-3 py-4 text-left text-base font-normal text-black",
        empty: "p-6 text-lg text-black"
          }} />
    </div>
  );
};

export default MyTableComponent;
```



## Acknowledgements

This package was inspired by the need for a customizable table component for React Tailwind CSS projects. Special thanks to the team members and team leads.