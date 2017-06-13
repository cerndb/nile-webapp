import { Injectable } from '@angular/core';
import { kafka, numberNodes, numberVolumes, storageUsage, vcpu, zk } from './data';


@Injectable()
export class DashboardService {

  constructor() { }

  getKafkaData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(kafka);
      }, 100);
    });
  }

  getZookeeperData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(zk);
      }, 100);
    });
  }

  getVCPUData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(vcpu);
      }, 100);
    });
  }

  getNumberNodes(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(numberNodes);
      }, 100);
    });
  }

  getNumberVolumes(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(numberVolumes);
      }, 100);
    });
  }

  getStorageUsage(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(storageUsage);
      }, 100);
    });
  }

}
