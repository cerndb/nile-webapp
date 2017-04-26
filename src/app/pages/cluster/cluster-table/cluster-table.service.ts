/**
 * Created by adediosf on 17/03/17.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ClusterTableService {

  clusterData = [
    {
      name: 'zookeeper-aromerom',
      userName: 'aromerom',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'aromerom dev cluster',
      description: 'Zookeeper internal development cluster',
      type: 'Zookeeper'
    },
    {
      name: 'kafka-aromerom-dev',
      userName: 'aromerom',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'aromerom dev cluster',
      description: '',
      type: 'Kafka'
    },
    {
      name: 'zk-monit-test',
      userName: 'aromerom',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'monit',
      description: 'zk test cluster for monit',
      type: 'Zookeeper'
    },
    {
      name: 'kafka-monit-test',
      userName: 'aromerom',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'monit',
      description: 'kafka test cluster for monit',
      type: 'Kafka'
    },
    {
      name: 'kafka-pilot-dev',
      userName: 'mmartinm',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'NILE Pilot',
      description: 'Kafka internal development cluster',
      type: 'Kafka'
    },
    {
      name: 'zookeeper-pilot-dev',
      userName: 'mmartinm',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'NILE Pilot',
      description: 'Zookeeper internal development cluster',
      type: 'Zookeeper'
    },
    {
      name: 'nile-kafka-mmartinm-dev',
      userName: 'mmartinm',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: '',
      description: '',
      type: 'Kafka'
    },
    {
      name: 'nile-zk-mmartinm',
      userName: 'mmartinm',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: '',
      description: 'Zookeeper internal development cluster',
      type: 'Zookeeper'
    },
    {
      name: 'kafka-nxcals-test',
      userName: 'wjurasz',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'nxcals',
      description: 'kafka test cluster for nxcals',
      type: 'Kafka'
    },
    {
      name: 'zookeeper-nxcals-test',
      userName: 'wjurasz',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'nxcals',
      description: 'Zookeeper test cluster for nxcals',
      type: 'Zookeeper'
    },
    {
      name: 'kafka-sec-test',
      userName: 'certsoc',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'SECURITY TEAM',
      description: 'cluster for security team',
      type: 'Kafka'
    },
    {
      name: 'zookeeper-sec-test',
      userName: 'certsoc',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'SECURITY TEAM',
      description: 'Zookeeper test cluster for Security Team',
      type: 'Zookeeper'
    }
  ];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.clusterData);
      }, 2000);
    });
  }

}
