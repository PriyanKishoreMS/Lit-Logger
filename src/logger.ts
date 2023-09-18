import { format, getTimestamp } from "../utils";

type logOptions = {
	formatTime: "isoTime" | "dateTime" | "12h" | "24h";
};

const defaultOptions: logOptions = {
	formatTime: "dateTime",
};

type logLevels = "info" | "warn" | "error" | "debug";

class logger {
	options: logOptions;
	constructor(options: Partial<logOptions> = {}) {
		this.options = { ...defaultOptions, ...options };
	}
	private logWithLevel(logLevel: logLevels, ...message: any[]): void {
		const timestampFunction = this.getTimestampFunction();
		console.log(format(logLevel, timestampFunction()), ...message, "\n");
	}
	private getTimestampFunction(): () => string {
		return getTimestamp(this.options.formatTime);
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

export default logger;
