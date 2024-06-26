import { getHeaderData } from 'lib/api'
import Component from './Component'
import { draftMode } from 'next/headers'

const Header = async ({ lang }: { lang: string }) => {
	const { isEnabled } = draftMode()
	const data = await getHeaderData({ preview: isEnabled, locale: lang })

	return <Component data={data} />
}

export default Header
