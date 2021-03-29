import Image from 'next/image'

export default function parseImage(key, block) {
	return (
		<Image
			key={key}
			src={'/' + block.publicUrl}
			width={block.width}
			height={block.height}
			layout="responsive"
		></Image>
	)
}
