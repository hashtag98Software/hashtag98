import { gql } from 'graphql-tag'

export const homeData = gql`
	query HomeData {
		homeCollection {
			items {
				seo {
					title
					description
				}
				spacesCollection {
					items {
						sys {
							id
						}
						titleTop
					}
				}
			}
		}
	}
`
