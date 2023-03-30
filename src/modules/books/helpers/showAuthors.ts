export const showAuthors = (authors: string[]) => {
	if (!authors) {
		return '';
	}

	if (authors.length === 1) {
		return authors[0];
	} else {
		return authors.join(', ');
	}
};
