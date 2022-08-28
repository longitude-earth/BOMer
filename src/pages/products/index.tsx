import { trpc } from "../../utils/trpc";
import Link from 'next/link'

export default function ProductsPage() {
    const products = trpc.useQuery(["products.getAll"]);

    return (
        <div className="container px-20 ">
            <div className="container">
                {products.data
                    ?
                    <table>
                        <thead className="pb-10">
                            <th className="text-md text-left pr-10 pb-2">Material</th>
                            <th className="text-md text-left pr-10 pb-2">Supplier</th>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {products.data.map(product => (
                                <tr key={product.id}>
                                    <td className="text-sm text-gray-900 pr-10"><Link href={`/products/${product.id}`}>{product.name}</Link></td>
                                    <td className="text-sm text-gray-900 pr-10">{product.supplier?.name}</td>
                                </tr>))}
                        </tbody>
                    </table>
                    :
                    <p>Loading..</p>}
            </div>
        </div>

    )

}