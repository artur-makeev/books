export const showAllCategory = (category: string[]) => {
	if (!category) {
		return '';
	}

	return category.join(' / ');
};
