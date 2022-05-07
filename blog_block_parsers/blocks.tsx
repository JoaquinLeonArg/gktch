import parseParagraph from './paragraph'
import parseImage from './image'

const parsers = {
	paragraph: parseParagraph,
	image: parseImage,
}

export default function parseBlocks(postBlocks: Array<any>) {
	return (
		<div>
			{postBlocks.map((block, index) => {
				return parsers[block.type] ? (
					parsers[block.type](index, block)
				) : (
					<div key="index">Unrecognized block type {block.type}</div>
				)
			})}
		</div>
	)
}
