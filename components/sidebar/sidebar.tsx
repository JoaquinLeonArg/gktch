import { CopyrightText, LogoText, MenuItemText } from 'components/typography'
import { BLTrianglePolygon } from 'components/svgs/polygons'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { GiCubes } from 'react-icons/gi'
import { ImParagraphLeft } from 'react-icons/im'
import { MdGames } from 'react-icons/md'
import { BsPersonLinesFill } from 'react-icons/bs'
import { RiMessage2Fill } from 'react-icons/ri'
import React from 'react'

const LogoContainer = (props) => (
	<div
		className="
        flex flex-row justify-center
        bg-main-variation h-full
        md:bg-opacity-0 md:h-auto md:px-8
        "
	>
		{props.children}
	</div>
)

const Logo = (props) => (
	<div className="hidden">
		<Image src="/logo.png" width="48px" height="48px"></Image>
	</div>
)

const SidebarBackground = (props) => (
	<div
		className="
        text-accent-lighter relative
        md:h-screen md:py-28 md:pb-48 md:bg-main-dark
        "
	>
		{props.children}
	</div>
)

const SidebarContainer = (props) => (
	<div
		className="
        flex flex-col
        w-full
        md:h-full
        "
	>
		{props.children}
	</div>
)
const SidebarMenuContainer = (props) => (
	<div
		className="
        flex 
        bg-main-dark pb-2 pt-3 justify-around px-8
        md:flex-col md:h-full md:bg-opacity-0 md:justify-center md:align-middle md:pb-0 md:pt-0 md:px-0 md:mt-8
        "
	>
		{props.children}
	</div>
)

interface MenuItemProps {
	option: string
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
	const router = useRouter()
	return (
		<Link href={'/' + props.option}>
			<div
				className={
					'group cursor-pointer ' +
					(router.pathname.startsWith('/' + props.option)
						? 'text-accent-light md:text-light md:bg-main-regular'
						: 'hover:bg-accent-regular')
				}
			>
				<div
					className={
						MenuItemText + 'flex flex-col-reverse px-3 items-center md:flex-row md:px-0 md:justify-end'
					}
				>
					<div className="group-hover:underline">{props.option}</div>
					{props.children}
				</div>
			</div>
		</Link>
	)
}

export default function Sidebar(props: {}) {
	return (
		<SidebarBackground>
			<div className="hidden md:block">
				<BLTrianglePolygon height="250" width="730" heightOffset="220" />
				<div className={CopyrightText}>© Gakutech 2021</div>
			</div>
			<SidebarContainer>
				<LogoContainer>
					<Logo />
					<div className={LogoText}>Gakutech</div>
				</LogoContainer>
				<SidebarMenuContainer>
					<MenuItem option="blog">
						<ImParagraphLeft className="md:ml-4 inline w-5 h-5" />
					</MenuItem>
					<MenuItem option="games">
						<MdGames className="md:ml-4 inline w-5 h-5" />
					</MenuItem>
					<MenuItem option="mc">
						<GiCubes className="md:ml-4 inline w-5 h-5" />
					</MenuItem>
					<MenuItem option="about">
						<BsPersonLinesFill className="md:ml-4 inline w-5 h-5" />
					</MenuItem>
					<MenuItem option="contact">
						<RiMessage2Fill className="md:ml-4 inline w-5 h-5" />
					</MenuItem>
				</SidebarMenuContainer>
			</SidebarContainer>
		</SidebarBackground>
	)
}
