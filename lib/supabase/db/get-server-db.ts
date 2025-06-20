import type { Database } from "@/types/supabase";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const getServerDB = async () => {
	const cookieStore = await cookies();

	return createServerClient<Database>(
		// Pass Supabase URL and anonymous key from the environment to the client
		process.env.NEXT_PUBLIC_SUPABASE_URL,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,

		// Define a cookies object with methods for interacting with the cookie store and pass it to the client
		{
			cookies: {
				// The get method is used to retrieve a cookie by its name
				getAll() {
					return cookieStore.getAll();
				},
				// The set method is used to set a cookie with a given name, value, and options
				setAll(cookiesToSet) {
					try {
						cookiesToSet.forEach(({ name, value, options }) =>
							cookieStore.set(name, value, options)
						);
					} catch {
						// The `setAll` method was called from a Server Component.
						// This can be ignored if you have middleware refreshing
						// user sessions.
					}
				},
				// The remove method is used to delete a cookie by its name
			},
		}
	);
};
