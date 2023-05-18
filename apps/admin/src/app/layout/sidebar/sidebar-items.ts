import { RouteInfo } from './sidebar.metadata';
export const ROUTES: RouteInfo[] = [

  // Admin Modules

  {
    path: '/admin/dashboard/main',
    title: 'MENUITEMS.DASHBOARD.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: []
  },

  // Categories Modules

  {
    path: '',
    title: 'Categories',
    iconType: 'material-icons-two-tone',
    icon: 'category',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/category/all-categories',
        title: 'All Categories',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/category/add-category',
        title: 'Add Category',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      }
    ],
  },

  // Products Modules

  {
    path: '',
    title: 'PRODUCTS',
    iconType: 'material-icons-two-tone',
    icon: 'inventory',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/product/all-products',
        title: 'All Products',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/product/add-product',
        title: 'Add Product',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      }
    ],
  },

   // Orders Modules

  {
    path: '',
    title: 'Orders',
    iconType: 'material-icons-two-tone',
    icon: 'shopping_cart',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/order/all-orders',
        title: 'All Orders',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/order/add-order',
        title: 'Add Order',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      }
    ],
  },


   // Users Modules

  {
    path: '',
    title: 'USERS',
    iconType: 'material-icons-two-tone',
    icon: 'people',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/user/all-users',
        title: 'All Users',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      }
    ],
  },


  
  // Common Module

  // {
  //   path: '',
  //   title: 'Authentication',
  //   iconType: 'material-icons-two-tone',
  //   icon: 'supervised_user_circle',
  //   class: 'menu-toggle',
  //   groupTitle: false,
  //   badge: '',
  //   badgeClass: '',
  //   role: ['Admin'],
  //   submenu: [
  //     {
  //       path: '/authentication/signin',
  //       title: 'Sign In',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/authentication/signup',
  //       title: 'Sign Up',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/authentication/forgot-password',
  //       title: 'Forgot Password',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/authentication/locked',
  //       title: 'Locked',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/authentication/page404',
  //       title: '404 - Not Found',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/authentication/page500',
  //       title: '500 - Server Error',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //   ],
  // },
  // {
  //   path: '',
  //   title: 'Extra Pages',
  //   iconType: 'material-icons-two-tone',
  //   icon: 'description',
  //   class: 'menu-toggle',
  //   groupTitle: false,
  //   badge: '',
  //   badgeClass: '',
  //   role: ['Admin'],
  //   submenu: [
  //     {
  //       path: '/extra-pages/blank',
  //       title: 'Blank Page',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //   ],
  // },
  // {
  //   path: '',
  //   title: 'Multi level Menu',
  //   iconType: 'material-icons-two-tone',
  //   icon: 'slideshow',
  //   class: 'menu-toggle',
  //   groupTitle: false,
  //   badge: '',
  //   badgeClass: '',
  //   role: ['Admin'],
  //   submenu: [
  //     {
  //       path: '/multilevel/first1',
  //       title: 'First',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/',
  //       title: 'Second',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-sub-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [
  //         {
  //           path: '/multilevel/secondlevel/second1',
  //           title: 'Second 1',
  //           iconType: '',
  //           icon: '',
  //           class: 'ml-menu2',
  //           groupTitle: false,
  //           badge: '',
  //           badgeClass: '',
  //           role: [''],
  //           submenu: [],
  //         },
  //         {
  //           path: '/',
  //           title: 'Second 2',
  //           iconType: '',
  //           icon: '',
  //           class: 'ml-sub-menu2',
  //           groupTitle: false,
  //           badge: '',
  //           badgeClass: '',
  //           role: [''],
  //           submenu: [
  //             {
  //               path: '/multilevel/thirdlevel/third1',
  //               title: 'third 1',
  //               iconType: '',
  //               icon: '',
  //               class: 'ml-menu3',
  //               groupTitle: false,
  //               badge: '',
  //               badgeClass: '',
  //               role: [''],
  //               submenu: [],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       path: '/multilevel/first3',
  //       title: 'Third',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //   ],
  // }



];