/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.SITE_URL || 'https://hashtag98.com.co'

module.exports = {
	siteUrl: siteUrl,
	generateRobotsTxt: true,
}
