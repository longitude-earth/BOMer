import { trpc } from "../../utils/trpc";
import { Shell } from "../../components/shell";
import Link from "next/link";

export default function ProductsPage() {
    const suppliers = trpc.useQuery(["suppliers.getAll"]).data;

    return (
        <Shell title="Suppliers">
            <div className="">
                    {suppliers
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
                                                            Email
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            VAT
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            Phone
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            Website
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            Webshop
                                                        </th>
                                                        <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6">
                                                            <span className="sr-only">Edit</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white">
                                                    {suppliers.map((supplier) => (
                                                        <tr key={supplier.id}>
                                                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                                                                <Link href={`/products/${supplier.id}`}>{`#${supplier.id}`}</Link>
                                                            </td>
                                                            <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                                                                {supplier.name}
                                                            </td>
                                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{supplier.email}</td>
                                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{supplier.vat}</td>
                                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{supplier.phone}</td>
                                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{supplier.website}</td>
                                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{supplier.shop}</td>
                                                            <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                                <Link href="#" >
                                                                    <a className="text-indigo-600 hover:text-indigo-900">
                                                                        Edit<span className="sr-only">, {supplier.id}</span>
                                                                    </a>
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
        </Shell>
    )
}