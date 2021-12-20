import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

function SvgShare(props: SvgProps) {
	return (
		<Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
			<Path
				d="M12.1014 1.71846C12.0726 1.62 11.9275 1.62 11.8987 1.71846C10.4677 6.61088 6.61091 10.4677 1.71848 11.8987C1.62002 11.9275 1.62002 12.0725 1.71848 12.1013C6.61092 13.5323 10.4677 17.3891 11.8987 22.2815C11.9275 22.38 12.0726 22.38 12.1014 22.2815C13.5324 17.3891 17.3891 13.5324 22.2815 12.1013C22.38 12.0725 22.38 11.9275 22.2815 11.8987C17.3891 10.4677 13.5323 6.61088 12.1014 1.71846Z"
				fill={props.color}
			/>
		</Svg>
	)
}

export default SvgShare