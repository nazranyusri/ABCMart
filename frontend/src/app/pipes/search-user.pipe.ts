import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interface/user';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {
  transform(users: User[], searchKey: string): User[] {
    if (!users || !searchKey) {
      return users;
    }

    searchKey = searchKey.toLowerCase();

    return users.filter((user: User) => {
      return (
        user.name.toLowerCase().includes(searchKey) ||
        user.email.toLowerCase().includes(searchKey) ||
        user.role.toLowerCase().includes(searchKey)
      );
    });
  }
}