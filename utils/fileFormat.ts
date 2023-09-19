import { format as prettyFormat } from "pretty-format";
import { logLevels as levels } from "../types/LoggerTypes";
// import util from "util";

const formatMsg = (indent: boolean, ...msg: any) => {
	return prettyFormat(msg, {
		highlight: false,
		escapeString: false,
		min: !indent,
		printFunctionName: false,
		printBasicPrototype: true,
		maxDepth: 500,
		maxWidth: 500,
	});
	// return util.format(...msg);
	// return JSON.stringify(msg);
};

const fileFormat = (
	level: levels,
	time: string,
	indent: boolean,
	fileType: "txt" | "json",
	...msg: any[]
) => {
	const levelLog = `[${level}]`.toUpperCase();
	if (fileType === "txt") {
		return `${levelLog} ${time} ${formatMsg(indent, msg)}`;
	} else if (fileType === "json") {
		const key = `${levelLog} ${time}`;
		const value = formatMsg(indent, msg);
		return [key, value];
	}
};

export default fileFormat;
