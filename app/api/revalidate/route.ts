import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
	const requestHeaders = new Headers(request.headers)
	const secret = requestHeaders.get('x-reval-key')

	if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
		return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
	}

	console.log(request.body)
	/* revalidateTag('posts') */

	return NextResponse.json({ revalidated: true, now: Date.now() })
}
