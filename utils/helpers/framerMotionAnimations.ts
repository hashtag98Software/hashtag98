import { HTMLMotionProps, Variants } from 'framer-motion'

export const animationOnScreenContainer: HTMLMotionProps<any> = {
	initial: 'offscreen',
	whileInView: 'onscreen',
	viewport: { amount: 0.2 },
}

export const buttonAnimation: HTMLMotionProps<any> = {
	whileHover: { scale: 1.2 },
	whileTap: { scale: 0.8 },
}

export const fade_in: Variants = {
	offscreen: {
		opacity: 0,
		translateX: 100,
	},
	onscreen: {
		opacity: 1,
		translateX: 0,
		transition: {
			type: 'spring',
			duration: 1,
		},
	},
}

export const menuItemsAnimation = (i: number) => ({
	offscreen: {
		opacity: 0,
		translateX: -100,
	},
	onscreen: {
		opacity: 1,
		translateX: 0,
		transition: {
			type: 'spring',
			duration: 0.2 * (i + 1),
		},
	},
})
