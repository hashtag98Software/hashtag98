import { Restaurant } from 'utils/types/graphql/graphql'
import s from './page.module.scss'
import { Abhaya_Libre } from 'next/font/google'

const Abhaya = Abhaya_Libre({ subsets: ['latin'], weight: '600' })

const Component = ({ data }: { data: Restaurant }) => {
	return (
		<main>
			<section className={s.restaurant__hero}>
				{data.logo?.url && <img src={data.logo?.url} alt="Logo" />}
				{data.video?.url && (
					<video
						autoPlay
						muted
						loop
						playsInline
						className={s.restaurant__hero__video}
					>
						<source src={data.video?.url} type="video/mp4" />
						Your browser does not support HTML5 video.
					</video>
				)}
			</section>
			<section className={s.restaurant__message}>
				<h2 className={`${s.restaurant__message__title} ${Abhaya.className}`}>
					{data.message}
				</h2>
				<p className={s.restaurant__message__text}>{data.subMessage}</p>
			</section>
			<picture>
				{data.imageMobile?.url && (
					<source media="(max-width: 768px)" srcSet={data.imageMobile?.url} />
				)}
				{data.imageDesktop?.url && (
					<img
						src={data.imageDesktop?.url}
						alt={data.imageDesktop?.title || ''}
						className={s.restaurant__image}
					/>
				)}
			</picture>
			<section className={s.restaurant__info}>
				<div className={s.restaurant__info__buttons}>
					<a
						href="http://"
						target="_blank"
						rel="noopener noreferrer"
						className={s.restaurant__info__buttons__item}
					>
						<img
							src="/img/plato1.png"
							alt="Plato"
							className={s.restaurant__info__buttons__item__img}
						/>
						{data.button1Text}
					</a>
					<a
						href="http://"
						target="_blank"
						rel="noopener noreferrer"
						className={s.restaurant__info__buttons__item}
					>
						<img
							src="/img/plato2.png"
							alt="Plato"
							className={s.restaurant__info__buttons__item__img}
						/>
						{data.button2Text}
					</a>
				</div>
				<div className={s.restaurant__info__images}>
					{data.imagesCollection?.items.map(
						img =>
							img?.url && (
								<img
									key={img.url}
									src={img.url}
									width={img.width || undefined}
									height={img.height || undefined}
									alt="Post"
									className={s.restaurant__info__images__item}
								/>
							)
					)}
				</div>
				<h2 className={s.restaurant__info__text1}>{data.text1}</h2>
				<p className={s.restaurant__info__text2}>{data.text2}</p>
			</section>
		</main>
	)
}

export default Component
