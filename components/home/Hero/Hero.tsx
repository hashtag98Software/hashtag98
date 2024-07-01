import { Home, Maybe } from 'utils/types/graphql/graphql'
import s from './Hero.module.scss'

const Hero = ({
	video,
	videoMobile,
}: {
	video?: Maybe<string>
	videoMobile?: Maybe<string>
}) => {
	return (
		<video autoPlay muted loop playsInline className={s.hero}>
			{videoMobile && (
				<source src={videoMobile} type="video/mp4" media="(max-width: 768px)" />
			)}
			{video && <source src={video} type="video/mp4" />}
			Your browser does not support HTML5 video.
		</video>
	)
}

export default Hero
