import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  // basket$: Observable<IBasket>;
  basket$: Observable<any> | undefined;
  // currentUser$: Observable<IUser>;
  currentUser$: Observable<any> | undefined;

  constructor(
    // private basketService: BasketService, private accountService: AccountService
  ) { }

  ngOnInit() {
    // this.basket$ = this.basketService.basket$;
    // this.currentUser$ = this.accountService.currentUser$;
  }

  logout() {
    // this.accountService.logout();
  }
}
