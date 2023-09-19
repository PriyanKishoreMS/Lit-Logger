import fs from "fs";

const fileSize = async (file: string) => {
	const stats = await fs.statSync(file);
	return stats.size;
};

export default fileSize;
