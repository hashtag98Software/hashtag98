import s from './Hero.module.scss'

const Hero = () => {
	return (
		<video autoPlay muted loop className={s.hero}>
			<source
				src="https://s3-figma-videos-production-sig.figma.com/video/1367241879391302405/TEAM/bd45/ebb5/-efc7-4ea2-8b9f-cb3f51d04bd3?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M8IS8wFzk8zW0cpT7HaPCtHQB4YJyxN7MGm3MmU3vRVxJh4fZ3H3ytVHQeMyPEJGCgDx8S4N0C3Bqbhv7077mU3sikWv7AM8XRVK0nKtjtMjFaguwf7rbQ0-t8lVCO~HbbNeMyfo-s4oQ0zD0kB1FetObgm6zjOYlxtXBBA74aWludWhxaj0L7qZurF~zTkLm4C612xJKetGaPNXDySyGgX5pazDIvq8u7a854TWvEjaUWbVaCah31HtSvbziLzoybSNzfzA~5G6fxZU6e6wsp56ykNdYuICPiL5PWmB4-GmtjwXE~E1c0z0tXfu7PSgUW5RQRRRQGHCrFNsmwBH6g__"
				type="video/mp4"
			/>
			Your browser does not support HTML5 video.
		</video>
	)
}

export default Hero
