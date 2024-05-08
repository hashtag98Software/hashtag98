import Footer from 'components/Footer/Footer'
import s from './SectionFooter.module.scss'

const SectionFooter = () => {
	return (
		<section className={s.section_footer}>
			<div className={s.section_footer__img} />
			<Footer />
		</section>
	)
}

export default SectionFooter
