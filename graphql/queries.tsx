import { gql } from 'graphql-tag'

export const homeData = gql`
	query HomeData($locale: String) {
		homeCollection(limit: 1, locale: $locale) {
			items {
				video {
					url
				}
				rooms {
					button
					roomsCollection {
						items {
							type
							mainDescription
							slug
							imagesCollection(limit: 1) {
								items {
									url
								}
							}
						}
					}
				}
				spacesCollection {
					items {
						sys {
							id
						}
						titleTop
						titleBottom
						description
						mobileDescription
						link
						mobileImage {
							url
						}
						image {
							url
						}
					}
				}
				experiences1Collection {
					items {
						name
						description
						imagePreview {
							url
						}
						video {
							url
						}
						phone {
							text
							href
						}
					}
				}
				experiences2Collection {
					items {
						name
						description
						imagePreview {
							url
						}
						video {
							url
						}
						phone {
							text
							href
						}
					}
				}
				experiences3Collection {
					items {
						name
						description
						imagePreview {
							url
						}
						video {
							url
						}
						phone {
							text
							href
						}
					}
				}
			}
		}
	}
`

export const homeSeo = gql`
	query HomeSeo($locale: String) {
		homeCollection(limit: 1, locale: $locale) {
			items {
				seo {
					title
					description
					openGraphImage {
						url
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
				imagesCollection {
					items {
						url
						width
						height
					}
				}
				video2 {
					url
				}
				booking
				menu {
					url
				}
				button1Text
				button2Text
				postImagesCollection {
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

export const restaurantSeo = gql`
	query RestaurantSeo($locale: String) {
		restaurantCollection(limit: 1, locale: $locale) {
			items {
				seo {
					title
					description
					openGraphImage {
						url
					}
				}
			}
		}
	}
`

export const rooftopData = gql`
	query RooftopData($locale: String) {
		rooftopCollection(limit: 1, locale: $locale) {
			items {
				logoHero {
					url
				}
				videoHero {
					url
				}
				message1
				video {
					url
				}
				message2
				buttonText
				buttonText2
				booking
				menu {
					url
				}
				message3
				imagesGalleryCollection {
					items {
						url
						width
						height
					}
				}
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

export const rooftopSeo = gql`
	query RooftopSeo($locale: String) {
		rooftopCollection(limit: 1, locale: $locale) {
			items {
				seo {
					title
					description
					openGraphImage {
						url
					}
				}
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
				relatedCollection {
					items {
						type
						slug
						imagesCollection(limit: 1) {
							items {
								url
							}
						}
					}
				}
			}
		}
	}
`

export const roomsData = gql`
	query RoomsData($locale: String) {
		roomsCollection(limit: 1, locale: $locale) {
			items {
				button
				roomsCollection {
					items {
						type
						mainDescription
						slug
						imagesCollection(limit: 1) {
							items {
								url
							}
						}
					}
				}
			}
		}
	}
`

export const roomsSeo = gql`
	query RoomsSeo($locale: String) {
		roomsCollection(limit: 1, locale: $locale) {
			items {
				seo {
					title
					description
					openGraphImage {
						url
					}
				}
			}
		}
	}
`

export const experiencesData = gql`
	query ExperiencesData($locale: String) {
		experiencesPageCollection(limit: 1, locale: $locale) {
			items {
				title
				subTitle
				video {
					url
				}
				experiencesCollection {
					items {
						image {
							url
						}
						video {
							url
						}
						name
						description
						phone {
							text
							href
						}
					}
				}
			}
		}
	}
`

export const experiencesSeo = gql`
	query ExperiencesSeo($locale: String) {
		experiencesPageCollection(limit: 1, locale: $locale) {
			items {
				seo {
					title
					description
					openGraphImage {
						url
					}
				}
			}
		}
	}
`

export const menuData = gql`
	query MenuData($locale: String) {
		menuCollection(limit: 1, locale: $locale) {
			items {
				name
				linksCollection {
					items {
						text
						href
					}
				}
			}
		}
	}
`

export const headerData = gql`
	query HeaderData($locale: String) {
		headerCollection(limit: 1, locale: $locale) {
			items {
				menu {
					name
					linksCollection {
						items {
							text
							href
						}
					}
				}
				logo {
					url
				}
				linksCollection {
					items {
						text
						href
					}
				}
				callToAction {
					text
					href
				}
			}
		}
	}
`

export const footerData = gql`
	query FooterData($locale: String) {
		footerCollection(limit: 1, locale: $locale) {
			items {
				image {
					url
				}
				linksCollection {
					items {
						text
						href
					}
				}
				address {
					text
					href
				}
				email {
					text
					href
				}
				listCollection {
					items {
						text
						href
					}
				}
				text {
					json
				}
				logo {
					url
				}
			}
		}
	}
`

export const floatingButtonsData = gql`
	query FloatingButtonsData($locale: String) {
		floatingButtonsCollection(limit: 1, locale: $locale) {
			items {
				activeWhatsapp
				whatsapp
				activeAsksuite
				asksuiteScriptSrc
			}
		}
	}
`
