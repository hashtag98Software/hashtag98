import { Home, Maybe } from 'utils/types/graphql/graphql'
import s from './Hero.module.scss'

const Hero = ({ video }: { video?: Maybe<string> }) => {
	return (
		<video autoPlay muted loop playsInline className={s.hero}>
			{video && <source src={video} type="video/mp4" />}
			Your browser does not support HTML5 video.
		</video>
	)
}

export default Hero
