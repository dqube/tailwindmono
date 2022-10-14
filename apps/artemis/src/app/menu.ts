import { MenuItem } from '@app/navigations';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'MAIN',
      separator: false,
      items: [
        {
          icon: 'dashboard',
          label: 'Dashboard',
          route: '/booking',
          children: [{ label: 'booking', route: '/booking/list' }],
        },
        {
          icon: 'discover',
          label: 'Discover',
          route: '/discover',
        },
        {
          icon: 'users',
          label: 'Users',
          route: '/users',
        },
        {
          icon: 'documents',
          label: 'Documents',
          route: '/documents',
        },
        {
          icon: 'applications',
          label: 'Applications',
          route: '/applications',
        },
        {
          icon: 'pages',
          label: 'Pages',
          route: '/pages',
        },
        {
          icon: 'pages',
          label: 'Auth',
          route: '/auth',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
      ],
    },
    {
      group: 'secondary',
      separator: true,
      items: [
        {
          icon: 'pages',
          label: 'Download',
          route: '/download',
        },
        {
          icon: 'pages',
          label: 'Gift Card',
          route: '/gift',
        },
        {
          icon: 'pages',
          label: 'Users',
          route: '/users',
        },
      ],
    },
    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'pages',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'pages',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'pages',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    },
  ];
}
