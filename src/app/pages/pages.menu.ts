/**
 * Created by adediosf on 15/02/17.
 * Describe the pages for the side-menu bar.
 */
export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Overview',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'cluster',
        data: {
          menu: {
            title: 'Clusters',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 100,
          }
        }
      }
    ]
  }
];
