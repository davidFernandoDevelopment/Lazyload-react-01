import { lazy } from 'react';

type JSXComponent = () => JSX.Element;

interface IRoute {
    path: string;
    component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: IRoute[];
}

const LazyPage1 = lazy(() => import(/*webpackChunkName: "LazyPage1"*/'../01.-lazyloads/pages/LazyPage1'));
const LazyPage2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/'../01.-lazyloads/pages/LazyPage2'));
const LazyPage3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/'../01.-lazyloads/pages/LazyPage3'));

export const routes: IRoute[] = [
    {
        path: '/lazy1',
        component: LazyPage1,
        name: 'LazyPage-1'
    },
    {
        path: '/lazy2',
        component: LazyPage2,
        name: 'LazyPage-2'
    },
    {
        path: '/lazy3',
        component: LazyPage3,
        name: 'LazyPage-3'
    }
];