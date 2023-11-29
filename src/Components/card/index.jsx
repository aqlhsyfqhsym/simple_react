 
export default function Card({ color, style, children }) {
	return (
		<div
			className="card"
			style={{ ...style, backgroundColor: color }} 
		>
			{children}
		</div>
	);
}
