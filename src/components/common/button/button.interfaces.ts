import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	PropsWithChildren
} from 'react';

export interface IButton
	extends PropsWithChildren<
		DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>
	> {
	num: string;
	name: string;
	isActive: boolean;
	activeColor: string;
	onClick: () => void;
}
