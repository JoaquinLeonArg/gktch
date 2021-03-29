import Post from 'components/blog/post'
import { useRouter } from 'next/router'

const article = {
	title: 'This is a test article with a test title, of course!',
	subtitle: 'Here goes a short description about what this article is going to talk about, duh!',
	author: 'Joaquín León',
	date: new Date(2021, 3, 20),
	image: '/blog_images/test-article.png',
	blocks: [
		{
			type: 'paragraph',
			value:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla mollis ex et fermentum. Nulla facilisi. Vivamus sapien orci, convallis ut ante a, vestibulum finibus velit. Nullam ullamcorper nec odio nec condimentum. Duis ac pulvinar est. In ligula justo, vestibulum ut nunc tristique, condimentum lobortis neque. Duis sagittis convallis molestie. Quisque volutpat mattis euismod. Quisque et consequat arcu, tristique consectetur est. Nunc dui enim, aliquam vitae enim iaculis, efficitur hendrerit nisi. Vestibulum porta ac lectus eu dapibus. Fusce massa urna, vestibulum vel lacinia ut, tempor id felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut luctus vehicula magna, et interdum erat iaculis eget. Sed dictum vehicula nulla, eget pulvinar sapien.',
		},
		{
			type: 'paragraph',
			value:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla mollis ex et fermentum. Nulla facilisi. Vivamus sapien orci, convallis ut ante a, vestibulum finibus velit. Nullam ullamcorper nec odio nec condimentum. Duis ac pulvinar est. In ligula justo, vestibulum ut nunc tristique, condimentum lobortis neque. Duis sagittis convallis molestie. Quisque volutpat mattis euismod. Quisque et consequat arcu, tristique consectetur est. Nunc dui enim, aliquam vitae enim iaculis, efficitur hendrerit nisi. Vestibulum porta ac lectus eu dapibus. Fusce massa urna, vestibulum vel lacinia ut, tempor id felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut luctus vehicula magna, et interdum erat iaculis eget. Sed dictum vehicula nulla, eget pulvinar sapien.',
		},
		{
			type: 'image',
			publicUrl: 'blog_images/test-article.png',
			width: '128',
			height: '72',
		},
		{
			type: 'code',
			lang: 'python',
			value: `def sumar(a: float, b: float) -> float:
                        return a + b`,
		},
	],
}

export default function BlogPostPage(props) {
	const router = useRouter()
	const { post } = router.query
	return <Post post={article}></Post>
}
