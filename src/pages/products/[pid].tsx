import { trpc } from "../../utils/trpc";
import { useRouter } from 'next/router'
import Link from "next/link";

export default function ProductPage() {
    const router = useRouter()
    const { pid } = router.query

    const { data, isLoading } = trpc.useQuery(["products.get", { id: parseInt(pid?.toString() || '0')}]);

    if(isLoading) return (<div>loading...</div>)

    return (
        <div className="pt-10 px-20">
            {
                <>
                    <h1>{data?.name}</h1>
                    <div>
                        {data?.description}
                    </div>
                </>
            }
            <h1 className="pt-10 pb-5 text-xl">BOMs</h1>
            {
                data?.Bom.map(Bom => {
                    return (
                        <div>
                            <Link href={`/boms/${Bom.id}`}>{Bom.rootProduct?.name}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}