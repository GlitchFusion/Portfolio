const InfoBlock = ({ title, value }) => (
	<div>
		<p className="text-text-muted/50 text-xs tracking-widest mb-3">{title}</p>
		<p className="text-text-muted">{value}</p>
	</div>
);

export default InfoBlock;
