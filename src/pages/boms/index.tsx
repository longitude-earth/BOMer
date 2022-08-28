import { trpc } from "../../utils/trpc";
import Link from 'next/link'

export default function BomsPage() {
    const boms = trpc.useQuery(["boms.getAll"]);

    return (
        <div className="container px-20 ">
            <div className="container">
                {boms.data
                    ?
                    <table>
                        <thead className="pb-10">
                            <th className="text-md text-left pr-10 pb-2">Boms</th>
                            <th className="text-md text-left pr-10 pb-2">Created</th>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {boms.data.map(bom => (
                                <tr key={bom.id}>
                                    <td className="text-sm text-gray-900 pr-10"><Link href={`/boms/${bom.id}`}>{bom.id}</Link></td>
                                    <td className="text-sm text-gray-900 pr-10">{bom.createdAt.toString()}</td>
                                </tr>))}
                        </tbody>
                    </table>
                    :
                    <p>Loading..</p>}
            </div>
        </div>

    )

}