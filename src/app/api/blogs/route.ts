import { endpoints, getListData } from '@/libs/microcms';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	try {
		const params = request.nextUrl.searchParams;
		const endpoint = params.get('endpoint') as keyof typeof endpoints;
		const query = params.get('query');
		if (!endpoint || !(endpoint in endpoints)) {
			return NextResponse.json(
				{ error: 'Invalid or missing endpoint' },
				{ status: 400 },
			);
		}
		const queries = query ? JSON.parse(query) : undefined;
		const data = await getListData(endpoint, queries);
		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: (error as Error).message || 'Server error' },
			{ status: 500 },
		);
	}
}
