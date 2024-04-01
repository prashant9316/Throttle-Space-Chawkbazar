import { NextSeo } from 'next-seo';
// import Header from '@components/layout/header/header';
import { default as Footer } from '@components/layout/footer/footer-two';
import MobileNavigation from '@components/layout/mobile-navigation/mobile-navigation';
import Search from '@components/common/search';
import CookieBar from '@components/common/cookie-bar';
import { useAcceptCookies } from '@utils/use-accept-cookies';
import Button from '@components/ui/button';
import { useTranslation } from 'next-i18next';
// import HeaderTwo from './header/header-two';
import HeaderThree from '@components/layout/header/header-three';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
	const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
	const { t } = useTranslation('common');
	return (
		<div className="flex flex-col min-h-screen">
			<NextSeo
				additionalMetaTags={[
					{
						name: 'viewport',
						content: 'width=device-width, initial-scale=1.0',
					},
				]}
				title="ThrottleSpace - Your FPV Store"
				description="Get all your FPV Stuff needs fulfilled and shipped the same day. We have a wide range of products."
				canonical="https://www.throttlespace.in/"
				openGraph={{
					url: 'https://www.throttlespace.in/',
					title: 'ThrottleSpace - Your FPV Store',
					description:
						"Get all your FPV Stuff needs fulfilled and shipped the same day. We have a wide range of products.",
					images: [
						{
							url: '/assets/images/og-image-01.png',
							width: 800,
							height: 600,
							alt: 'Og Image Alt',
						},
						{
							url: '/assets/images/og-image-02.png',
							width: 900,
							height: 800,
							alt: 'Og Image Alt Second',
						},
					],
				}}
			/>
			<HeaderThree />
			<main
				className="relative flex-grow"
				style={{
					minHeight: '-webkit-fill-available',
					WebkitOverflowScrolling: 'touch',
				}}
			>
				{children}
			</main>
			<Footer />
			<MobileNavigation />
			<Search />
			<CookieBar
				title={t('text-cookies-title')}
				hide={acceptedCookies}
				action={
					<Button onClick={() => onAcceptCookies()} variant="slim">
						{t('text-accept-cookies')}
					</Button>
				}
			/>
		</div>
	);
}
