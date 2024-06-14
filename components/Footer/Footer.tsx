import Link from 'components/Link/Link'
import s from './Footer.module.scss'
import { getFooterData } from 'lib/api'
import { draftMode } from 'next/headers'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Footer = async ({ lang }: { lang: string }) => {
	const { isEnabled } = draftMode()
	const data = await getFooterData({ preview: isEnabled, locale: lang })

	return (
		<footer className={s.section_footer}>
			<div
				className={s.section_footer__img}
				style={{ backgroundImage: `url(${data.image?.url})` }}
			/>
			<div className={s.section_footer__footer}>
				<div className={s.section_footer__footer__content}>
					<nav className={s.section_footer__footer__content__nav}>
						<ul className={s.section_footer__footer__content__nav__list}>
							{data.linksCollection?.items.map(item => (
								<li key={item?.text}>
									<Link
										className={
											s.section_footer__footer__content__nav__list__item
										}
										href={item?.href || '/'}
									>
										{item?.text?.toLocaleLowerCase()}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className={s.section_footer__footer__content__info}>
						<ul className={s.section_footer__footer__content__info__list}>
							<li>
								<a
									href={data.address?.href || '/'}
									target="_blank"
									rel="noopener noreferrer"
								>
									{data.address?.text}
								</a>
							</li>
							<li>
								<a href={data.email?.href || '/'}>{data.email?.text}</a>
							</li>
						</ul>
						<ul className={s.section_footer__footer__content__info__list}>
							{data.listCollection?.items.map(item => (
								<li key={item?.text}>
									<a href={item?.href || '/'}>{item?.text}</a>
								</li>
							))}
						</ul>
					</div>
					<div className={s.section_footer__footer__content__text}>
						{documentToReactComponents(data.text?.json)}
					</div>
					<Link
						href="/"
						aria-label="Hashtag98 Logo"
						className={s.section_footer__footer__content__logo}
					>
						<img
							src={data.logo?.url || '/img/logo.png'}
							alt="Hashtag98 Logo"
							width={106}
							height={57}
						/>
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
