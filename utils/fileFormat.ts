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
	});
	// return util.format(...msg);
	// return JSON.stringify(msg);
};

const fileFormat = (
	level: levels,
	time: string,
	indent: boolean,
	...msg: any[]
) => {
	const levelLog = `[${level}]`.toUpperCase();

	const timeLog = time;
	return `${levelLog} ${timeLog} ${formatMsg(indent, msg)}`;
};

export default fileFormat;
