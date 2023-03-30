export interface Book {
	id: string;
	selfLink: string;
	volumeInfo: {
		title: string;
		authors: string[];
		description?: string;
		imageLinks?: {
			smallThumbnail: string;
			thumbnail: string;
		};
		categories: string[];
	};
}
