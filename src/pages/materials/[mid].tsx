import { useRouter } from 'next/router'

export default function MaterialPage() {
    const router = useRouter()
    const { mid } = router.query

    //const { data, isLoading } = trpc.useQuery(["materials.get", { id: parseInt(mid?.toString() || '0')}]);

    //if(isLoading) return (<div>loading...</div>)

    return (
        <div className="pt-10 px-20 ">
            material
        </div>

    )

}