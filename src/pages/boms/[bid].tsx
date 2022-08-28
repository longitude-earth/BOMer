import { trpc } from "../../utils/trpc";
import { useRouter } from 'next/router'

export default function BomPage() {
    const router = useRouter()
    const { bid } = router.query

    const { data, isLoading } = trpc.useQuery(["boms.get", { id: parseInt(bid?.toString() || '0')}]);

    if(isLoading) return (<div>loading...</div>)

    return (
        <div className="pt-10 px-20 ">
            {
                <div><pre>{JSON.stringify(data, null, 2) }</pre></div>
            }
        </div>

    )

}