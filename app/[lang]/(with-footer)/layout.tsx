import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'

const Layout = ({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: { lang: string }
}>) => {
	return (
		<>
			{children}
			<Footer lang={params.lang} />
		</>
	)
}

export default Layout
