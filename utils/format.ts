import chalk from "chalk";
import nicelyFormat from "nicely-format";

const theme = {
	tag: "cyan",
	content: "reset",
	prop: "yellow",
	value: "green",
	number: "green",
	string: "reset",
	date: "green",
	symbol: "red",
	regex: "red",
	function: "blue",
	error: "red",
	boolean: "yellow",
	label: "blue",
	bracket: "grey",
	comma: "grey",
	misc: "grey",
	key: "cyan",
};

const levels = {
	info: "green",
	warn: "yellow",
	error: "red",
	debug: "blue",
	default: "white",
};

const formatMsg = (...msg: any) => {
	const formattedMessages = msg.map((...msg: any) => {
		if (typeof msg === "string") {
			return msg;
		}

		return nicelyFormat(msg, {
			highlight: true,
			min: true,
			theme: theme,
		});
	});
	return formattedMessages;
};

const format = (level: keyof typeof levels, time: string, ...msg: any[]) => {
	const color = levels[level] || "white";
	const levelLog = (chalk as any)[color].inverse.bold(
		`[${level}]`.toUpperCase()
	);
	const timeLog = (chalk as any)["gray"](time);
	return `${timeLog} ${levelLog} ${formatMsg(...msg)}`;
};

export default format;
