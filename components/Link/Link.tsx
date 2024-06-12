'use client'
import NextLink, { LinkProps } from 'next/link'
import { useParams } from 'next/navigation'
import { FC, HTMLProps, PropsWithChildren } from 'react'

const Link: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
	children,
	href,
	...props
}) => {
	const params = useParams<{ lang: string }>()
	const lang = params.lang
	const hrefWithLang = lang === 'es' ? href : `/${lang}${href}`

	return (
		<NextLink href={hrefWithLang} {...props}>
			{children}
		</NextLink>
	)
}

export default Link
