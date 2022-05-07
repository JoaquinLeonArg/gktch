import parseBlocks from 'blog_block_parsers/blocks'
import { BlogTitleText, BlogSubtitleText } from 'components/typography'
import Image from 'next/image'

export default function Post(props) {
	return (
		<div className="bg-main-variation py-16 max-w-5xl min-w-xl mx-auto">
			<div className={BlogTitleText + 'px-16 py-6 md:px-32'}>{props.post.title}</div>

			<div className={BlogSubtitleText + 'px-16 mb-4 md:my-8'}>{props.post.subtitle}</div>

			<Image src={props.post.image} width="1280" height="400" layout="responsive"></Image>
			<div className="mx-8 mt-4">{parseBlocks(props.post.blocks)}</div>
		</div>
	)
}
