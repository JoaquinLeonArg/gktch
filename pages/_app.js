import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Sidebar from 'components/sidebar/sidebar'

// const pagesWithoutSidebar = ['/blog/post/']

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	return (
		<>
			<Head>
				<title>Gakutech</title>
				<link rel="icon" href="/logo.png" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&family=Major+Mono+Display&family=Merriweather:wght@300;400;700;900&family=Overpass:ital,wght@0,300;0,400;0,600;0,700;0,800;1,200;1,300;1,400;1,600;1,700&family=Titillium+Web:wght@300;400;600;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className="border-box flex flex-col md:flex-row bg-dark w-screen h-screen">
				{/* {pagesWithoutSidebar.some((x) => router.route.startsWith(x)) ? (
					<div className="overflow-x-hidden">
						<Component {...pageProps} />
					</div>
				) : (
					<>
						<Sidebar />
						<div className="py-4 overflow-x-hidden">
							<Component {...pageProps} />
						</div>
					</>
				)} */}
				<Sidebar />
				<div className="overflow-x-hidden w-full">
					<Component {...pageProps} />
				</div>
			</div>
		</>
	)
}
export default MyApp
