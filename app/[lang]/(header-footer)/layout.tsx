import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout
