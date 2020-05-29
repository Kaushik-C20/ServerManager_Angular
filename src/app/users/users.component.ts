import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Tim Cook'
    },
    {
      id: 2,
      name: 'KC'
    },
    {
      id: 3,
      name: 'Sundar'
    }
  ];
}
