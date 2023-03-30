export const showCategory = (category: string[]) => {
	if (!category) {
		return '';
	}

	return category[0];
};
