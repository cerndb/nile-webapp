import { Injectable } from '@angular/core';
import { kafka, zk } from './data';


@Injectable()
export class DashboardService {

  constructor() { }

  getKafkaData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(kafka);
      }, 1000);
    });
  }

  getZookeeperData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(zk);
      }, 1000);
    });
  }

}
