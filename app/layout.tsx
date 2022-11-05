import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';
import { ThemeConfig } from '../src/config/theme.config';
import { StoreProdiver } from '../src/store';
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="es">
      <head></head>
      <body>
        <ThemeConfig>
          <StoreProdiver>
            <Navbar color={true} />
            {children}
            <Footer />
          </StoreProdiver>
        </ThemeConfig>
      </body>
    </html>
  );
}
