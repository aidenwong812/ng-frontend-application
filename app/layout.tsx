import { ClientProviders } from './providers';
import StyledComponentsRegistry from './registry';

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<link rel='manifest' href='/manifest.json' crossOrigin='use-credentials' />

				<meta name='application-name' content='Node Guardians' />
				<meta name='theme-color' content='#151515' />
			</head>

			<body>
				<StyledComponentsRegistry>
					<ClientProviders>{children}</ClientProviders>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
