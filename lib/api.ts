import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import {
	contactData,
	homeData,
	legalData,
	restaurantData,
	rooftopData,
} from 'graphql/queries'
import { getGqlString } from 'utils/helpers/getGqlString'
import {
	Contact,
	Home,
	LegalDataQuery,
	Restaurant,
	Rooftop,
} from 'utils/types/graphql/graphql'

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

interface GetLegalData extends GetData {
	id: string
}
export const getLegalData = async ({ preview, id, locale }: GetLegalData) => {
	const response = await fetchGraphQL({
		query: legalData,
		preview,
		variables: { id, locale },
	})
	return response.data.legalPage as LegalDataQuery['legalPage']
}

export const getRestaurantData = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: restaurantData,
		preview,
		variables: { locale },
	})
	return response.data.restaurantCollection.items[0] as Restaurant
}

export const getRooftopData = async ({ preview, locale }: GetData) => {
	const response = await fetchGraphQL({
		query: rooftopData,
		preview,
		variables: { locale },
	})
	return response.data.rooftopCollection.items[0] as Rooftop
}
