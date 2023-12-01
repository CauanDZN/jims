import { Highlights, Heading, TitleBox, SliderList, Bodys, Calcas, Saias, Coletes } from '@/components/All'
import { Container } from 'react-bootstrap'
import Head from 'next/head'

const Home = () => {
	return (
		<>
			<Head>
				<title>Jim&apos;s Corporation</title>
			</Head>
			<Highlights />
			<Bodys title="Bodys" />
			<Calcas title="Calças" />
			<Coletes title="Coletes" />
			<Saias title="Saias" />
		</>
	)
}

export default Home