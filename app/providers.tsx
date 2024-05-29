'use client';

import GlobalStyles from '@/styles/GlobalStyles';
import { darkTheme } from '@/styles/theme';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryCache, QueryClient, QueryClientConfig } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { Provider } from 'jotai';
import { ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const globalQueryConfig: {
	client: QueryClientConfig;
	server: QueryClientConfig;
} = {
	client: {
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 5,
				gcTime: 1000 * 60 * 60 * 24 * 7 // 1 week (must be greater or equal to the persistOptions.maxAge)
			}
		}
	},
	server: {
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 1,
				gcTime: 1000 * 60 * 1
			}
		}
	}
};

const persistOptions = {
	persister: createSyncStoragePersister({
		storage: typeof document !== 'undefined' ? window.localStorage : undefined,
		key: 'ng-frontend-application',
		throttleTime: 1000
	}),
	maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
};

export const ClientProviders = ({ children }: { children: ReactNode }) => {
	const [queryClient] = useState(() => {
		const queryCache = new QueryCache();

		const queryClient = new QueryClient({
			...globalQueryConfig.client,
			queryCache
		});

		return queryClient;
	});

	return (
		<>
			<PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
				<Provider>
					<ThemeProvider theme={darkTheme}>
						<GlobalStyles />

						{/* ======= End Store ======== */}
						{children}
					</ThemeProvider>
					<ReactQueryDevtools initialIsOpen={false} />
				</Provider>
			</PersistQueryClientProvider>
		</>
	);
};
