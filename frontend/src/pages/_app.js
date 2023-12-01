import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global-styles'
import { theme } from '../styles/theme'
import { Header } from '../components/All'
import '../styles/vendors/index.scss'

const MyApp = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Header />
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	)
}

export default MyApp