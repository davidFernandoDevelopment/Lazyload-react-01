import { lazy } from 'react';
import { NoLazy } from '../01.-lazyloads/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface IRoute {
    path: string;
    component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: IRoute[];
}

export const routes: IRoute[] = [
    {
        path: '/lazyload',
        component: lazy(
            () => import(
                /*webpackChunkName: "Lazyload"*/
                '../01.-lazyloads/layout/LazyLayout'
            )
        ),
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-lazy',
        component: NoLazy,
        name:'No Lazyloading'
    }
];