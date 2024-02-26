import { Component, OnInit } from '@angular/core';
import { GenericListComponent } from '../../shared/generic-list/generic-list.component';
import { ListUsersService } from '../../services/list-users.service';
import { Users } from '../../interfaces/users.interface';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [GenericListComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

public list: any;

constructor(private userService: ListUsersService) {
  this.list = [];
  this.getUsers();
}

getUsers(): void {
  this.userService.getListUsers().subscribe(response => {
    this.list = response;
  });
}


}
