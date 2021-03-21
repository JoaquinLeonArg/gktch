import { LogoText, MenuItemText } from 'components/typography'
import { useRouter } from 'next/router'
import Image from 'next/image'
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
        md:bg-opacity-0 md:h-auto
        "
	>
		{props.children}
	</div>
)

const Logo = (props) => (
	<div className="hidden md:block">
		<Image src="/logo.png" width="48px" height="48px"></Image>
	</div>
)

const SidebarPolygon1 = (props) => (
	<div
		className="
        hidden
        md:block
        "
	>
		<svg
			className="
            absolute bottom-0 right-0 text-main-regular fill-current
            "
			height="80"
		>
			<path d="m 0 84 l 334 0 l 0 -84 z " />
		</svg>
	</div>
)

const SidebarBackground = (props) => (
	<div
		className="
        text-accent-lighter relative
        md:h-screen md:w-64 md:py-28 md:pb-48 md:bg-main-dark
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
        md:flex-col md:h-full md:bg-opacity-0 md:justify-center md:pb-0 md:pt-0 md:px-0
        "
	>
		{props.children}
	</div>
)

const MenuItem = (props) => {
	const router = useRouter()
	return (
		<div
			className={
				router.pathname.startsWith('/' + props.option)
					? 'text-accent-light md:text-light md:bg-main-regular'
					: 'hover:bg-accent-regular'
			}
		>
			<MenuItemText>
				<div
					className="
                    flex
                    flex-col-reverse px-3 items-center
                    md:flex-row md:px-0 md:justify-end
                    "
				>
					{props.option}
					{props.children}
				</div>
			</MenuItemText>
		</div>
	)
}

interface SidebarProps {}

export default function Sidebar(props: SidebarProps) {
	return (
		<SidebarBackground>
			<SidebarPolygon1 />
			<SidebarContainer>
				<LogoContainer>
					<Logo />
					<LogoText />
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
