import Home from '~/pages/Home';
import Search from '~/pages/Search';
import { DefaultLayout } from '~/components/Layout';
const publicRoutes = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/search',
        component: Search,
        layout: DefaultLayout,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
