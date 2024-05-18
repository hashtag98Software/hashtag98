import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
	const requestHeaders = new Headers(request.headers)
	const secret = requestHeaders.get('x-reval-key')
	const data = await request.json()
	const pageTags = [{ tag: 'home', path: '/' }]

	if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
		return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
	}

	if (data?.metadata?.tags) {
		data.metadata.tags.forEach((tag: any) => {
			const validTag = pageTags.find(pageTag => pageTag.tag === tag.sys.id)
			if (validTag) {
				revalidatePath(validTag.path)
			}
		})
	}

	return NextResponse.json({ revalidated: true, now: Date.now() })
}
