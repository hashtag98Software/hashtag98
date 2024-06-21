import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
	const requestHeaders = new Headers(request.headers)
	const secret = requestHeaders.get('x-reval-key')
	const data = await request.json()
	const itemID = data?.sys?.contentType?.sys?.id
	const locales = ['es', 'en']
	const pageIDs = [
		{ id: 'home', path: '/' },
		{ id: 'contact', path: '/contact' },
		{ id: 'rooms', path: '/rooms' },
		{ id: 'restaurant', path: '/restaurant' },
		{ id: 'rooftop', path: '/rooftop' },
		{ id: 'experiences', path: '/experiences' },
	]
	const elementsIDs = ['menu', 'footer', 'header', 'floatingButtons']

	if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
		return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
	}

	if (itemID) {
		const isRoom = itemID === 'room'

		if (isRoom) {
			const roomID = data?.fields?.slug?.es
			if (roomID) {
				const roomPath = `/rooms/${roomID}`
				const pathsToRevalidate = locales.map(locale => `/${locale}${roomPath}`)
				pathsToRevalidate.forEach(locale => revalidatePath(locale))
				return NextResponse.json({
					revalidated: true,
					now: Date.now(),
					paths: pathsToRevalidate,
				})
			}
		}

		const isPage = pageIDs.find(pageID => pageID.id === itemID)
		if (isPage) {
			const pathsToRevalidate = locales.map(
				locale => `/${locale}${isPage.path}`
			)
			pathsToRevalidate.forEach(locale => revalidatePath(locale))
			return NextResponse.json({
				revalidated: true,
				now: Date.now(),
				paths: pathsToRevalidate,
			})
		}

		const isElement = elementsIDs.find(elementID => elementID === itemID)
		if (isElement) {
			revalidateTag(isElement)
			return NextResponse.json({
				revalidated: true,
				now: Date.now(),
				tag: isElement,
			})
		}
	}

	return NextResponse.json({ processed: true, now: Date.now() })
}
