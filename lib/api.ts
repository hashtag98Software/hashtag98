import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { homeData } from 'graphql/queries'
import { getGqlString } from 'utils/helpers/getGqlString'
import { Home } from 'utils/types/graphql/graphql'

async function fetchGraphQL({
	query,
	preview = false,
	next,
	variables,
}: {
	query: TypedDocumentNode
	variables?: { [key: string]: any }
	preview?: boolean
	next?: NextFetchRequestConfig
}): Promise<any> {
	return fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${
					preview
						? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
						: process.env.CONTENTFUL_ACCESS_TOKEN
				}`,
			},
			body: JSON.stringify({ query: getGqlString(query), variables }),
			next,
		}
	).then(response => response.json())
}

export const getHomeData = async ({
	preview,
	locale,
}: {
	preview?: boolean
	locale: string
}) => {
	const response = await fetchGraphQL({
		query: homeData,
		preview,
		variables: { locale },
	})
	return response.data.homeCollection.items[0] as Home
}
