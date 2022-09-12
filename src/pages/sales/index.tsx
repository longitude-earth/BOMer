import { trpc } from "../../utils/trpc";
import { Shell } from "../../components/shell";
import { formatToCurrency } from "../../utils/formatters";
import Link from "next/link";

export default function SalesPage() {
    const sales = trpc.useQuery(["sales.getAll"]).data;

    return (
        <Shell title="Sales">
            <div className="">
                <div className="container">
                    {sales
                        ?
                        <div className="">
                            <div className="mt-4 flex flex-col">
                                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-300">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                                        >
                                                            ID
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            Ref
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            Integration
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            Total Price
                                                        </th>

                                                        <th
                                                            scope="col"
                                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            Created
                                                        </th>
                                                        <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6">
                                                            <span className="sr-only">Edit</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white">
                                                    {sales.map((sale) => (
                                                        <tr key={sale.id}>
                                                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                                                                <Link href={`/sales/${sale.id}`}>{`#${sale.id}`}</Link>
                                                            </td>
                                                            <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                                                                {sale.ref}
                                                            </td>
                                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                                                <span className={`inline-flex rounded-full bg-${sale?.Integration?.color + ''}-100 px-2 text-xs font-semibold leading-5 text-${sale?.Integration?.color + ''}-800`}>
                                                                    {sale?.Integration?.name}
                                                                </span>
                                                            </td>
                                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{formatToCurrency(sale.totalPrice)}</td>
                                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{sale.createdAt.toLocaleDateString()}</td>
                                                            <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                                <Link href={`/sales/${sale?.id}`} >
                                                                    <a className="text-indigo-600 hover:text-indigo-900">Open<span className="sr-only">, {sale.id}</span></a>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <p>Loading..</p>}
                </div>
            </div>
        </Shell>
    )
}