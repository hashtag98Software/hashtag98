import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const secret = searchParams.get('secret')
	const path = searchParams.get('path')

	if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
		return new Response('Invalid token', { status: 401 })
	}

	if (!path) {
		return new Response('Invalid path', { status: 401 })
	}

	draftMode().enable()
	redirect(path)
}
