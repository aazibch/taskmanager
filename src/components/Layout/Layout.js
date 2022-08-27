import Header from './Header/Header';
import Footer from './Footer/Footer';

import classes from './Layout.module.css';

function Layout(props) {
    return (
        <div className={classes.layout}>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;
