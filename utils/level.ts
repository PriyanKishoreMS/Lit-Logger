const levels = {
	info: "\x1b[32m",
	warn: "\x1b[33m",
	error: "\x1b[31m",
	debug: "\x1b[34m",
	default: "\x1b[37m",
};

const end = "\x1b[0m";

const level = (level: keyof typeof levels, message: string) => {
	return `${levels[level]}${message}${end}`;
};

export default level;
