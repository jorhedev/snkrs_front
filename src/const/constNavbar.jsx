export const NAVBAR_LINKS = {
    HOME: ['/trolley'],
    WOMEN: ['/home'],
    MEN: ['/home'],
    KIDS: ['/home'],
    SEARCH: ['/home'],
    FAVORITE: ['/home'],
    TROLLEY: ['/home'],
    LOGIN: [
        '/home',
        '/women',
        '/men',
        '/kids',
        '/user/profile',
        '/user/favorites',
        '/user/record',
        '/user/shopping',
        '/admin/statistics',
        '/admin/sales',
        '/admin/customer',
        '/admin/stock',
        '/admin/product',
        '/admin/brands',
        '/admin/types-categories',
    ]
}

export const DETAIL_PAGE = (path) => { return /^\/detail\/[a-zA-Z0-9]+$/.test(path); }