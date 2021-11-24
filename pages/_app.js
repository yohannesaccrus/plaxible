import { Fragment } from 'react'
import PlausibleProvider from 'next-plausible'

const App = ({ Component, pageProps }) => {
	return (
		<Fragment>
			<PlausibleProvider domain="example.com" selfHosted={true} customDomain={'http://www.plaxible.xyz'}>
				<h1>Test Next</h1>
				<Component {...pageProps} />
			</PlausibleProvider>
		</Fragment>
	)
}

export default App