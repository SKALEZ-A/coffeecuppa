import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/dashboard',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'View Page',
    path: '/#',
    icon: <Icon icon="lucide:app-window" width="24" height="24" />,
  },
  {
    title: 'Explore creators',
    path: '/#',
    icon: <Icon icon="mingcute:grid-line" width="24" height="24" />,
  },

  {
    title: 'Supporters',
    path: '/supporters',
    icon: <Icon icon="mdi:find-love" width="24" height="24" />,
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/projects' },
      { title: 'Web Design', path: '/projects/web-design' },
      { title: 'Graphic Design', path: '/projects/graphic-design' },
    ],
  },
  {
    title: 'Messages',
    path: '/#',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '#',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];