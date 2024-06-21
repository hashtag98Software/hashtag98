import { Seo } from 'utils/types/graphql/graphql'

export const generateAppMetadata = ({
	seo,
	lang,
}: {
	seo: Seo
	lang: string
}) => {
	return {
		title: seo.title,
		description: seo.description,
		openGraph: {
			title: seo.title as string,
			description: seo.description as string,
			locale: lang,
			...(seo.openGraphImage?.url && {
				images: seo.openGraphImage.url,
			}),
		},
	}
}
