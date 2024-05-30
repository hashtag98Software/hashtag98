import s from './page.module.scss'

const Component = () => {
	return (
		<main>
			<section className={s.experiences__hero}>
				{/* {data.video?.url && (
					<video autoPlay muted loop className={s.restaurant__hero__video}>
						<source src={data.video?.url} type="video/mp4" />
						Your browser does not support HTML5 video.
					</video>
				)} */}
			</section>
		</main>
	)
}

export default Component
