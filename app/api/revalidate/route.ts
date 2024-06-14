import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
	const requestHeaders = new Headers(request.headers)
	const secret = requestHeaders.get('x-reval-key')
	const data = await request.json()
	const itemID = data?.sys?.contentType?.sys?.id
	const pageIDs = [
		{ id: 'home', path: '/' },
		{ id: 'contact', path: '/contact' },
		{ id: 'rooms', path: '/rooms' },
		{ id: 'restaurant', path: '/restaurant' },
		{ id: 'rooftop', path: '/rooftop' },
		{ id: 'experiences', path: '/experiences' },
	]
	const elementsIDs = ['menu']

	if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
		return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
	}

	if (itemID) {
		const isRoom = itemID === 'room'

		if (isRoom) {
			const roomID = data?.fields?.slug?.es
			if (roomID) {
				const roomPath = `/room/${roomID}`
				revalidatePath(roomPath)
				return NextResponse.json({ revalidated: true, now: Date.now() })
			}
		}

		const isPage = pageIDs.find(pageID => pageID.id === itemID)
		if (isPage) {
			revalidatePath(isPage.path)
			return NextResponse.json({ revalidated: true, now: Date.now() })
		}

		const isElement = elementsIDs.find(elementID => elementID === itemID)
		if (isElement) {
			revalidateTag(isElement)
			return NextResponse.json({ revalidated: true, now: Date.now() })
		}
	}

	return NextResponse.json({ processed: true, now: Date.now() })
}
