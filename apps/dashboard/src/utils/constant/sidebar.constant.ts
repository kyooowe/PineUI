import { ISidebarMenu } from '../../interface/components/sidebar.interface'

export const CSideBarMenu: ISidebarMenu[] = [
    {
        name: 'Dashboard',
        path: '/pages/dashboard',
        childPath: ['/pages/dashboard'],
    },
    {
        name: 'Students',
        path: '/pages/students/list',
        childPath: [
            '/pages/students/list',
            '/pages/students/create',
            '/pages/students/update',
        ],
    },
]
