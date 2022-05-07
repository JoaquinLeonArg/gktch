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
