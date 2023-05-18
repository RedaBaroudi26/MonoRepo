import { Component, OnInit } from '@angular/core';
import { User, UserService } from '@tp1-mono-repo/shared';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
  providers : [UserService]
})
export class AllUsersComponent implements OnInit {

  users : User [] = [] ;
  
  breadscrums = [
    {
      title: 'All Users',
      items: ['Users'],
      active: 'All Users',
    },
  ];

  constructor(private userService : UserService) {}
  
  ngOnInit(): void {
   this.userService.getAllUsers().subscribe(
    (res) => { this.users = res.users }
   )
  }

  isAdmin(isAdmin:boolean){
    return isAdmin ? 'Yes' : 'No' 
  }

  deleteUser( idUser : string = '' ){
    this.userService.deleteUser(idUser).subscribe(
       (res)=> {this.users = this.users.filter( user => user._id != idUser ) }
    )
  }

}
