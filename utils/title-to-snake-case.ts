export const titleCaseToSnakeCase = <T extends string | undefined>(
	str?: T
): T => {
	if (str === undefined) return str as T;

	return str
		.replace(/-/g, "_") // Replace hyphens with underscores
		.replace(/\s*([A-Z])/g, "_$1") // Add underscore before uppercase letters
		.replace(/^_/, "") as T; // Remove leading underscore if present
};
