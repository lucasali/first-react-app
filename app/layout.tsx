import './globals.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<head></head>
			<body>
				<header>
					<h1>Logo</h1>
					<nav>
						<ul>
							<li>
								<a href='/'>Home</a>
							</li>
							<li>
								<a href='/about'>About</a>
							</li>
							<li>
								<a href='/contact'>Contact</a>
							</li>
						</ul>
					</nav>
				</header>
				<aside className=''></aside>
				<main>{children}</main>
			</body>
		</html>
	)
}
