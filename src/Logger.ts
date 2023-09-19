import { format, getTimestamp } from "../utils";
import { logOptions, logLevels } from "../types/LoggerTypes";

const defaultOptions: logOptions = {
	formatTime: "dateTime",
};

class Logger {
	options: logOptions;
	constructor(options: Partial<logOptions> = {}) {
		this.options = { ...defaultOptions, ...options };
	}
	private logWithLevel(logLevel: logLevels, ...message: any[]): void {
		const timestampFunction = getTimestamp(this.options.formatTime);
		console.log(format(logLevel, timestampFunction()), ...message, "\n");
	}
	info(...args: any[]) {
		this.logWithLevel("info", ...args);
	}
	warn(...args: any[]) {
		this.logWithLevel("warn", ...args);
	}
	error(...args: any[]) {
		this.logWithLevel("error", ...args);
	}
	debug(...args: any[]) {
		this.logWithLevel("debug", ...args);
	}
}

export default Logger;
