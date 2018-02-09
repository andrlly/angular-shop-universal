import {Component, Inject, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../admin/auth/auth.service';
import { StorageService } from '../../shared/services/storage.service';
import { User } from '../../shared/models/user.model';
import {AppStorage} from '../../../forStorage/universal.inject';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    isLoggedIn = this.authService.isLoggedIn();
    productsCount: number;
    user_name: string;

    constructor(
                private route: ActivatedRoute,
                private router: Router,
                private authService: AuthService,
                private storageService: StorageService,
                @Inject(AppStorage) private appStorage: Storage
    ) {
    }

    ngOnInit() {
        this.authService.getUser(JSON.parse(this.appStorage.getItem('user')))
            .subscribe((user: User) => {
                this.user_name = user['user'].name;
            });
        if (JSON.parse(this.appStorage.getItem('cart'))) {
            this.storageService.cartCount.subscribe(count => {
                console.log(count);
                this.productsCount = count;
            });
        }
    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['']);
    }

}
