import type { AppProps } from 'next/app';
import { FavoriteSongsProvider } from '../src/context/FavoriteSongsContext';
import '../styles/base/_reset.scss';
import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FavoriteSongsProvider>
      <Component {...pageProps} />
    </FavoriteSongsProvider>
  );
}

export default MyApp;
