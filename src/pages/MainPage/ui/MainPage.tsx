import React from 'react'
import { classNames } from 'shared/lib'

export default function MainPage() {
	return (
		<div
			className={classNames('main', { second: true, test: false }, [
				'dsfsdfsdf',
				'dsfsdfsdf',
			])}
		>
			MainPage
		</div>
	)
}
