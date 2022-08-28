import { trpc } from "../../utils/trpc";
import Link from 'next/link'

export default function MaterialsPage() {
    const materials = trpc.useQuery(["materials.getAll"]);

    return (
        <div className="container px-20 ">
            <div className="container">
                {materials.data
                    ?
                    <table>
                        <thead className="pb-10">
                            <th className="text-md text-left pr-10 pb-2">Material</th>
                            <th className="text-md text-left pr-10 pb-2">Created</th>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {materials.data.map(material => (
                                <tr key={material.id}>
                                    <td className="text-sm text-gray-900 pr-10"><Link href={`/materials/${material.id}`}>{material.name}</Link></td>
                                    <td className="text-sm text-gray-900 pr-10">{material.createdAt.toString()}</td>
                                </tr>))}
                        </tbody>
                    </table>
                    :
                    <p>Loading..</p>}
            </div>
        </div>

    )

}