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

export const legalData = gql`
	query LegalData($id: String!, $locale: String) {
		legalPage(id: $id, locale: $locale) {
			seo {
				title
				description
			}
			title
			content {
				json
			}
		}
	}
`

export const restaurantData = gql`
	query RestaurantData($locale: String) {
		restaurantCollection(limit: 1, locale: $locale) {
			items {
				logo {
					url
				}
				seo {
					title
					description
				}
				message
				subMessage
				video {
					url
				}
				imageDesktop {
					title
					url
				}
				imageMobile {
					title
					url
				}
				button1Text
				button2Text
				imagesCollection {
					items {
						url
						width
						height
					}
				}
				text1
				text2
			}
		}
	}
`

export const rooftopData = gql`
	query RooftopData($locale: String) {
		rooftopCollection(limit: 1, locale: $locale) {
			items {
				video {
					url
				}
				logoHero {
					url
				}
				logoBlack {
					url
				}
				buttonText
				imagesCollection {
					items {
						url
					}
				}
				instagramUsername
				instagramUrl
				facebookUsername
				facebookUrl
			}
		}
	}
`

export const roomsSlugs = gql`
	query RoomsSlugs {
		roomCollection {
			items {
				slug
			}
		}
	}
`

export const roomData = gql`
	query RoomData($slug: String!, $locale: String) {
		roomCollection(limit: 1, where: { slug: $slug }, locale: $locale) {
			items {
				type
				mainDescription
				video {
					url
				}
				description
				m2
				attributes
				imagesCollection {
					items {
						url
						width
						height
					}
				}
			}
		}
	}
`
