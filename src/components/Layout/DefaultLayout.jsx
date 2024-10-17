import Header from '../Header';
import Sidebar from '../Sidebar';
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container w-full max-w-full px-2">
                <Sidebar />
                <div className="content w-full">{children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;
