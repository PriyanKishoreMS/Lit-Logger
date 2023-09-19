import { fileFormat, getTimestamp } from "../utils";
import { fileLogOptions, logLevels } from "../types/LoggerTypes";
import fs from "fs";

const defaultOptions: fileLogOptions = {
	formatTime: "dateTime",
	indent: false,
};

class FileLogger {
	options: fileLogOptions;
	constructor(options: Partial<fileLogOptions> = {}) {
		this.options = { ...defaultOptions, ...options };
	}
	private async logWithLevel(
		logLevel: logLevels,
		...message: any[]
	): Promise<void> {
		const timestampFunction = getTimestamp(this.options.formatTime);
		const out = fileFormat(
			logLevel,
			timestampFunction(),
			this.options.indent,
			...message
		);
		await fs.promises.appendFile("log.txt", out + "\n");
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

export default FileLogger;
