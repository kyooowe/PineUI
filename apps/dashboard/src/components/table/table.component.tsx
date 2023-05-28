import { twMerge } from "tailwind-merge";

interface ITableProps<T> {
    tableClassName?: string;
    headClassName?: string;
    bodyClassName?: string;
    column: string[];
    rows: T[] | null;
}

const Table = <T extends object>({ tableClassName, headClassName, bodyClassName, column, rows }: ITableProps<T>) => {

    const tableClass = twMerge("table-auto text-sm text-left text-gray-500 dark:text-gray-400", tableClassName)
    const tHeadClass = twMerge("text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-900 dark:text-gray-400", headClassName)
    const tBodyClass = twMerge("bg-gray-200 dark:bg-gray-800", bodyClassName)

    return (
        <div className="overflow-x-auto">
            <table className={tableClass}>
            <thead className={tHeadClass}>
                <tr>
                    {
                        column.map((col: string, i: number) => (
                            <th
                                key={i}
                                className={`px-6 py-4 ${i === 0 ? 'rounded-tl-lg' : i === column.length - 1 ? 'rounded-tr-lg' : ''}`}
                            >
                                {col}
                            </th>
                        ))
                    }
                </tr>
            </thead>

            <tbody className={tBodyClass}>
                {
                    rows === null ? (
                        <tr>
                            <th colSpan={3} className="py-2 rounded-b-lg"><p className="text-center">No Data</p></th>
                        </tr>
                    ) : (
                            rows.map((item: T, i: number) => (
                                <tr key={i}>
                                {Object.values(item).map((value: any, innerIndex) => (
                                    <th
                                        key={innerIndex}
                                        className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ${i === rows.length - 1 && innerIndex === 0 ? 'rounded-bl-lg' : i === rows.length - 1 && innerIndex === column.length - 1 ? 'rounded-br-lg' : ''}`}
                                        >
                                        {value}
                                    </th>
                                ))}
                            </tr>
                        ))
                    )
                }
            </tbody>
        </table>
        </div>
    )
}

export default Table