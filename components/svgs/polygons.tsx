export const SidebarPolygon1 = (props) => (
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

export const BlogCardPolygon1 = (props) => (
	<div>
		<svg
			className="
            absolute bottom-0 right-0 text-main-regular fill-current
            "
			height="80"
		>
			<path d="m 0 40 l 128 0 l 0 -40 z " />
		</svg>
	</div>
)

export const BLTrianglePolygon = (props) => (
	<svg
		className="
            absolute bottom-0 right-0 text-main-regular fill-current
            "
		height={props.heightOffset}
	>
		<path d={'m 0 ' + props.height + ' l ' + props.width + ' 0 l 0 -' + props.height + ' z '} />
	</svg>
)
