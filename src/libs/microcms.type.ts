import type {
	MicroCMSContentId,
	MicroCMSDate,
	MicroCMSImage,
} from 'microcms-js-sdk';

export type BlogType = {
	id: MicroCMSContentId;
	title: string;
	content: string;
	eyecatch?: MicroCMSImage;
	label: string;
	category: CategoryType;
	recommend: boolean;
} & MicroCMSDate;

export type CategoryType = {
	id: MicroCMSContentId;
	name: string;
} & MicroCMSDate;
