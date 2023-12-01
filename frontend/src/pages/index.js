import { Highlights, Heading, TitleBox, SliderList, Bodys, Calcas, Saias, Coletes } from '@/components/All'
import { Container } from 'react-bootstrap'

const Home = () => {
	return (
		<>
			<Highlights />
			<Bodys title="Bodys" />
			<Calcas title="Calças" />
			<Coletes title="Coletes" />
			<Saias title="Saias" />
		</>
	)
}

export default Home