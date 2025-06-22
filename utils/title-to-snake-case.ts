export const titleCaseToSnakeCase = <T extends string | undefined>(
	str?: T
): T => {
	if (str === undefined) return str as T;

	return str.replaceAll(" ", "_") as T; // Add underscore before uppercase letters
};
