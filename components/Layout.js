// fonts
import { Roboto } from '@next/font/google';

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
});

// Components
import Nav from '../components/Nav';
import Header from '../components/Header';

const Layout = ({ children }) => {
    return (
        <div
            className={`page bg-white/20 text-white bg-cover bg-no-repeat ${roboto.className} font-roboto relative`}
        >
            <Nav />
            {children}
        </div>
    );
};

export default Layout;
