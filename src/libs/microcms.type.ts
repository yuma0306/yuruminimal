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
	tags: TagType[];
	recommend: boolean;
	description: string;
} & MicroCMSDate;

export type TagType = {
	id: MicroCMSContentId;
	name: string;
} & MicroCMSDate;

export type InfoType = {
	id: MicroCMSContentId;
	title: string;
	content: string;
	description: string;
} & MicroCMSDate;
