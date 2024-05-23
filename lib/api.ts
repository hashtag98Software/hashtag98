import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { contactData, homeData } from 'graphql/queries'
import { getGqlString } from 'utils/helpers/getGqlString'
import { Contact, Home } from 'utils/types/graphql/graphql'

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

type GetData = {
	preview?: boolean
	locale: string
}

export const getHomeData = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: homeData,
		preview,
		variables: { locale },
	})
	return response.data.homeCollection.items[0] as Home
}

export const getContactData = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: contactData,
		preview,
		variables: { locale },
	})
	return response.data.contactCollection.items[0] as Contact
}
