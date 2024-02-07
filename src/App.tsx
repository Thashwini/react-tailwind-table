import { useMemo } from 'react';
import { Table } from './components/Table'
import { Column } from './components/Table/Table.types';

function App() {

  const tableData = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 22, city: 'Chicago' }
  ]

  type Person = {
    id: number;
    name: string;
    age: number;
    city: string;
  }

  const columns: Array<Column<Person>> = useMemo(() => {
    return [
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
  }, []);

  return (
    <h1 className="text-3xl font-bold underline">
      <Table 
      data={tableData} 
      columns={columns} 
      className={{
        container: "overflow-x-auto",
        wrapper: "inline-block min-w-full align-middle",
        thead: "border-none bg-blue-600",
        table: "min-w-full divide-y divide-gray-100",
        tbody: "divide-y divide-gray-100",
        th: "p-3 text-left text-base font-bold text-black",
        td: "whitespace-nowrap px-3 py-4 text-left text-base font-normal text-black",
        empty: "p-6 text-lg text-black"
          }} />
    </h1>
  )
}

export default App
