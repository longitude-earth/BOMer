import { trpc } from "../../utils/trpc";
import { Shell } from "../../components/shell";
import { formatToCurrency } from "../../utils/formatters";
import Link from "next/link";

export default function SalesPage() {
    const products = trpc.useQuery(["products.getAll"]).data;

    return (
        <Shell title="Sales">
            <div className="">
                <div className="container">
                    {products
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
                                                            Name
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            Description
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            MOQ
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            Purchase price
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            Sell price
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
                                                    {products.map((product) => (
                                                        <tr key={product.id}>
                                                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                                                                <Link href={`/products/${product.id}`}>{`#${product.id}`}</Link>
                                                            </td>
                                                            <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                                                                {product.name}
                                                            </td>
                                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{product.description}</td>
                                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{product.eoq}</td>
                                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{formatToCurrency(product.pricePurchase)}</td>
                                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{formatToCurrency(product.priceSell)}</td>
                                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{product.createdAt.toLocaleDateString()}</td>
                                                            <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                                    Edit<span className="sr-only">, {product.id}</span>
                                                                </a>
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