import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

import { routeInfo } from '@buildmotion/dashboard-types';

declare const $: any;

//Metadata




//Menu Items
export const ROUTES: routeInfo.RouteInfo[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard',
    },
];
@Component({
    selector: 'bv-bim-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})
export class SidebarComponent implements OnInit {
    public menuItems!: any[];
    ps: any;
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter((menuItem) => menuItem);
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>(
                document.querySelector('.sidebar .sidebar-wrapper')
            );
            this.ps = new PerfectScrollbar(elemSidebar);
        }
    }
    updatePS(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            this.ps.update();
        }
    }
    isMac(): boolean {
        let bool = false;
        if (
            navigator.platform.toUpperCase().indexOf('MAC') >= 0 ||
            navigator.platform.toUpperCase().indexOf('IPAD') >= 0
        ) {
            bool = true;
        }
        return bool;
    }
}
