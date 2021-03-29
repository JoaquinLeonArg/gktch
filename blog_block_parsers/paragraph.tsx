import { BlogParagraphText } from 'components/typography'

export default function parseParagraph(key, block) {
	return (
		<div key={key} className={BlogParagraphText}>
			{block.value}
		</div>
	)
}
