import { CardTitleText, CardDescriptionText } from 'components/typography'
import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
	title: string
	description: string
	articleRoute: string
}

export const BlogCardsContainer = (props) => {
	return (
		<div className="flex flex-wrap justify-center box-border max-w-max">
			<BlogCard
				title="The post title goes here: an honest opinion"
				description="An interesting article about how coding is great and you should learn it.
            Another paragraph can go here.
            And here too!"
				articleRoute="test-article"
			/>
			<BlogCard
				title="The post title goes here: an honest opinion"
				description="An interesting article about how coding is great and you should learn it.
            Another paragraph can go here.
            And here too!"
				articleRoute="test-article"
			/>
			<BlogCard
				title="The post title goes here: an honest opinion"
				description="An interesting article about how coding is great and you should learn it.
            Another paragraph can go here.
            And here too!"
				articleRoute="test-article"
			/>
			<BlogCard
				title="The post title goes here: an honest opinion"
				description="An interesting article about how coding is great and you should learn it.
            Another paragraph can go here.
            And here too!"
				articleRoute="test-article"
			/>
			<BlogCard
				title="The post title goes here: an honest opinion"
				description="An interesting article about how coding is great and you should learn it.
            Another paragraph can go here.
            And here too!"
				articleRoute="test-article"
			/>
			<BlogCard
				title="The post title goes here: an honest opinion"
				description="An interesting article about how coding is great and you should learn it.
            Another paragraph can go here.
            And here too!"
				articleRoute="test-article"
			/>
			<BlogCard
				title="The post title goes here: an honest opinion"
				description="An interesting article about how coding is great and you should learn it.
            Another paragraph can go here.
            And here too!"
				articleRoute="test-article"
			/>
			<BlogCard
				title="The post title goes here: an honest opinion"
				description="An interesting article about how coding is great and you should learn it.
            Another paragraph can go here.
            And here too!"
				articleRoute="test-article"
			/>
			<BlogCard
				title="The post title goes here: an honest opinion"
				description="An interesting article about how coding is great and you should learn it.
            Another paragraph can go here.
            And here too!"
				articleRoute="test-article"
			/>
			<BlogCard
				title="The post title goes here: an honest opinion"
				description="An interesting article about how coding is great and you should learn it.
            Another paragraph can go here.
            And here too!"
				articleRoute="test-article"
			/>
		</div>
	)
}

const BlogCard = (props: BlogCardProps) => (
	<Link href={'/blog/post/' + props.articleRoute}>
		<div className="group cursor-pointer box-content w-72 h-96 p-4 m-4 bg-main-variation text-light border-2 border-opacity-0 border-accent-light hover:text-accent-light hover:border-opacity-100">
			<div className="border-2 border-dark group-hover:border-accent-light">
				<Image
					layout="responsive"
					src={'/blog_images/' + props.articleRoute + '.png'}
					width="256"
					height="128"
				/>
			</div>
			<div className={CardTitleText + 'py-4 group-hover:underline'}>{props.title}</div>
			<div className={CardDescriptionText + 'text-accent2-light group-hover:text-accent-light'}>
				{props.description}
			</div>
		</div>
	</Link>
)
