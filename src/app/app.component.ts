import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    user?: User | null;

    constructor(
        private primengConfig: PrimeNGConfig,
        private accountService: AccountService)  { 
            this.accountService.user.subscribe(x => this.user = x);
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

    logout() {
        this.accountService.logout();
    }
    
}
