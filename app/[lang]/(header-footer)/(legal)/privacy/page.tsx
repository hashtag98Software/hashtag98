import { GlobalParams } from 'utils/types/GlobalParams'
import s from '../page.module.scss'
import { draftMode } from 'next/headers'
import { getLegalData } from 'lib/api'
import { notFound } from 'next/navigation'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Privacy = async ({ params: { lang } }: GlobalParams) => {
	const { isEnabled } = draftMode()
	const data = await getLegalData({
		preview: isEnabled,
		locale: lang,
		id: '4qkObT91TTXrtkjMoIVAwI',
	})

	if (!data) {
		notFound()
	}

	return (
		<main className={s.legal}>
			<h1 className={s.legal__title}>{data.title}</h1>
			<div className={s.legal__content}>
				{documentToReactComponents(data.content?.json)}
			</div>
		</main>
	)
}

export default Privacy
