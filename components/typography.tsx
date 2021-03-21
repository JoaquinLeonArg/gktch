export const LogoText = (props) => {
	return (
		<h3
			className="
            font-logo uppercase block
            py-2 text-xl w-screen bg-none text-center
            md:py-1 md:text-right md:px-4 md:text-2xl md:w-auto md:bg-opacity-0 md:self-center md:bg-main-dark"
		>
			Gakutech
		</h3>
	)
}

export const MenuItemText = (props) => {
	return (
		<h3 className="cursor-pointer inline-block uppercase font-menu text-sm md:text-right md:text-lg md:my-1 md:py-1 md:w-full md:pr-16">
			{props.children}
		</h3>
	)
}

export const TitleText = (props) => {
	return <h1>{props.children}</h1>
}
