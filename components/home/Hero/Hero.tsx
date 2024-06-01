import { Home } from 'utils/types/graphql/graphql'
import s from './Hero.module.scss'

const Hero = ({ data }: { data: Home }) => {
	return (
		<video autoPlay muted loop playsInline className={s.hero}>
			{data.videoMobile?.url && (
				<source
					src={data.videoMobile.url}
					type="video/mp4"
					media="(max-width: 768px)"
				/>
			)}
			{data.videoDesktop?.url && (
				<source src={data.videoDesktop.url} type="video/mp4" />
			)}
			Your browser does not support HTML5 video.
		</video>
	)
}

export default Hero
