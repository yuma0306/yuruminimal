import { AppBlock } from '@/components/AppBlock/AppBlock';
import { AppBreadcrumb } from '@/components/AppBreadcrumb/AppBreadcrumb';
import { AppMain } from '@/components/AppMain/AppMain';
import { AppNotFound } from '@/components/AppNotFound/AppNotFound';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { HolizonalSpacer } from '@/components/HolizonalSpacer/HolizonalSpacer';
import { Wrapper } from '@/components/Wrapper/Wrapper';
import {
	getCommonMetadata,
	getDefaultOpenGraph,
	siteMeta,
} from '@/constants/siteMeta';
import { siteRoutes } from '@/constants/siteRoutes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	...getCommonMetadata(),
	title: `${siteRoutes.notFound.text}${siteMeta.titleSuffix}`,
	description: `${siteRoutes.notFound.text}${siteMeta.descriptionSuffix}`,
	openGraph: getDefaultOpenGraph(),
	alternates: {
		canonical: siteRoutes.notFound.path,
	},
	robots: {
		index: false,
		follow: false,
	},
};

export default function NotFoundPage() {
	const breadcrumbItems = [
		{
			text: siteRoutes.home.text,
			link: siteRoutes.home.path,
		},
		{
			text: siteRoutes.notFound.text,
			link: siteRoutes.notFound.path,
		},
	];
	return (
		<Wrapper>
			<Header />
			<AppMain>
				<HolizonalSpacer>
					<AppBreadcrumb items={breadcrumbItems} />
				</HolizonalSpacer>
				<HolizonalSpacer>
					<AppBlock>
						<AppNotFound />
					</AppBlock>
				</HolizonalSpacer>
			</AppMain>
			<Footer />
		</Wrapper>
	);
}
