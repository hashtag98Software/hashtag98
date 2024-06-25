import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Header from 'components/Header/Header'
import { ContentfulPreviewProvider } from 'components/contentful/contentful-preview-provider'
import { draftMode } from 'next/headers'
import Script from 'next/script'
import FloatingButtons from 'components/FloatingButtons/FloatingButtons'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Hotel - Hashtag98 | El Poblado, Medellín',
	description:
		'Hashtag 98 combina ubicación, diseño interior a la vanguardia y la distribución ideal para brindar una estadía única en el Poblado, Medellín.',
	openGraph: {
		siteName: 'Hashtag98',
		type: 'website',
	},
}

export async function generateStaticParams() {
	return [{ lang: 'es' }, { lang: 'en' }]
}

export default function RootLayout({
	children,
	params,
}: Readonly<{
	params: { lang: string }
	children: React.ReactNode
}>) {
	const { isEnabled } = draftMode()

	return (
		<html lang={params.lang}>
			<body className={inter.className}>
				<ContentfulPreviewProvider
					locale={params.lang}
					enableInspectorMode={isEnabled}
					enableLiveUpdates={isEnabled}
				>
					<Header lang={params.lang} />
					{children}
				</ContentfulPreviewProvider>
				<FloatingButtons lang={params.lang} />
				<div id="experience-popup" />
			</body>
		</html>
	)
}
