import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
        params: { id: string }
        searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
        { params, searchParams }: Props,
        parent: ResolvingMetadata
): Promise<Metadata> {
        const product = {
                title: `${process.env.APP_NAME} - Home`
        }

        const previousImages = (await parent).openGraph?.images || []

        return {
                ...product,
        }
}

export default function Page({ params, searchParams }: Props) {
        return <h1 className='underline font-extrabold hover:text-orange-600'>Welcome home !!!</h1>
}
