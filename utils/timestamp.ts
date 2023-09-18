const timestamp = () => {
	return new Date().toISOString();
};

const formattedTimestamp = () => {
	return new Date().toLocaleString();
};

const offsetTimestamp = () => {
	const now = new Date();
	const date = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
	return date.toISOString().replace(/.*T(.*)Z/, "$1");
};

const onlyTime = () => {
	return new Date().toLocaleTimeString(undefined, {
		hour12: true,
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		fractionalSecondDigits: 3,
	});
};

const getTimestamp = (type: string): (() => string) => {
	switch (type) {
		case "isoTime":
			return timestamp;
		case "dateTime":
			return formattedTimestamp;
		case "12h":
			return onlyTime;
		case "24h":
			return offsetTimestamp;
		default:
			return timestamp;
	}
};

export { getTimestamp };
