/**
 * Created by adediosf on 09/06/17.
 */
import { Injectable } from '@angular/core';


@Injectable()
export class ProjectService {

  egroups = [
    {
      'name': 'it-db-nile-developers'
    },
    {
      'name': 'it-db-dbod'
    },
    {
      'name': 'it-db-sec'
    }
  ];

  getEgroupsList(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.egroups);
      }, 100);
    });
  }

}
