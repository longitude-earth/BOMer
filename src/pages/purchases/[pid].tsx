import { trpc } from "../../utils/trpc";
import { useRouter } from 'next/router'
import { Shell } from "../../components/shell";
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { formatToCurrency } from "../../utils/formatters";
import { Decimal } from "@prisma/client/runtime";
import Link from "next/link";

export default function ProductPage() {
    const router = useRouter()
    const { pid } = router.query

    const { data, isLoading } = trpc.useQuery(["products.get", { id: parseInt(pid?.toString() || '0') }]);

    if (isLoading) return (<div>loading...</div>)

    return (
        <Shell title={`${data?.name}`}>
            <>

                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">{data?.name}</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">{data?.description}</p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data?.name}</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Description</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data?.description}</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Purcase price</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{formatToCurrency(data?.pricePurchase)}</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Sales price</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{formatToCurrency(data?.priceSell)}</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">About</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                    qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                    pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                </dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                            <div className="flex w-0 flex-1 items-center">
                                                <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                <span className="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <Link href="#" >
                                                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                                                        Download
                                                    </a>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                            <div className="flex w-0 flex-1 items-center">
                                                <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                <span className="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <Link href="#" >
                                                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                                                        Download
                                                    </a>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </>
        </Shell>
    )
}