import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  showSidebar: boolean = false;
  activeLink: string = 'users';
  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private service: UserServiceService,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID to check platform type
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.checkIfCardComponentActive();
    });

    // Check if running in the browser to safely access localStorage
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      this.isLoggedIn = token !== null;
    }

    this.checkIfCardComponentActive();
  }

  checkIfCardComponentActive(): void {
    this.showSidebar =
      this.router.url.includes('/cards') ||
      this.router.url.includes('/donars') ||
      this.router.url.includes('/request') ||
      this.router.url.includes('/bloodDetails') ||
      this.router.url.includes('/addadmin');
  }

  setActiveLink(link: string) {
    this.activeLink = link;

    switch (link) {
      case 'users':
        this.router.navigate(['/cards']);
        break;
      case 'admin':
        this.router.navigate(['/admin']);
        break;
      case 'donars':
        this.router.navigate(['/donars']);
        break;
      case 'requests':
        this.router.navigate(['/request']);
        break;
      case 'blood-details':
        this.router.navigate(['/bloodDetails']);
        break;
      case 'addadmin':
        this.router.navigate(['/addadmin']);
        break;
    }
  }

  logout() {
    this.service.logout();
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token'); // Safely remove token in the browser
    }
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
