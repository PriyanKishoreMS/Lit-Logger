const timestamp = () => {
	return new Date().toISOString();
};

const formattedTimestamp = () => {
	return new Date().toLocaleString();
};

export { timestamp, formattedTimestamp };
