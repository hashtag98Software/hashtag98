import s from './Hero.module.scss'

const Hero = () => {
	return (
		<video autoPlay muted loop className={s.hero}>
			<source src="/delete/video.mp4" type="video/mp4" />
			Your browser does not support HTML5 video.
		</video>
	)
}

export default Hero
