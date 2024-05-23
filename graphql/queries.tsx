import { gql } from 'graphql-tag'

export const homeData = gql`
	query HomeData($locale: String) {
		homeCollection(limit: 1, locale: $locale) {
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
						titleBottom
						description
						link
						image {
							url
						}
					}
				}
			}
		}
	}
`

export const contactData = gql`
	query ContactData($locale: String) {
		contactCollection(limit: 1, locale: $locale) {
			items {
				seo {
					title
					description
				}
				image {
					url
				}
				email
			}
		}
	}
`
