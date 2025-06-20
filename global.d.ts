import type en from "@/dictionary/en.json";

type Messages = typeof en;

declare global {
	// Use type safe message keys with `next-intl`
	type IntlMessages = Messages;

	namespace NodeJS {
		interface ProcessEnv {
			// Supabase
			NEXT_PUBLIC_SUPABASE_URL: string;
			NEXT_PUBLIC_SUPABASE_ANON_KEY: string;

			// Firebase
			NEXT_PUBLIC_API_KEY;
			NEXT_PUBLIC_AUTH_DOMAIN;
			NEXT_PUBLIC_PROJECT_ID;
			NEXT_PUBLIC_STORAGE_BUCKET;
			NEXT_PUBLIC_MESSAGING_SENDER_ID;
			NEXT_PUBLIC_APP_ID;
			NEXT_PUBLIC_MEASUREMENT_ID;

			// Sitemap
			NEXT_SITE_URL: string;
		}
	}
}
