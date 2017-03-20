/**
 * Created by adediosf on 17/03/17.
 */
import { Injectable } from '@angular/core';


@Injectable()
export class ClusterTableSevice {

  clusterData = [
    {
      clusterName: 'zookeeper-aromerom',
      userName: 'aromerom',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'aromerom dev cluster',
      description: 'Zookeeper internal development cluster',
      type: 'ZOOKEEPER'
    },
    {
      clusterName: 'kafka-aromerom-dev',
      userName: 'aromerom',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'aromerom dev cluster',
      description: '',
      type: 'KAFKA'
    },
    {
      clusterName: 'zk-monit-test',
      userName: 'aromerom',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'monit',
      description: 'zk test cluster for monit',
      type: 'ZOOKEEPER'
    },
    {
      clusterName: 'kafka-monit-test',
      userName: 'aromerom',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'monit',
      description: 'kafka test cluster for monit',
      type: 'KAFKA'
    },
    {
      clusterName: 'kafka-pilot-dev',
      userName: 'mmartinm',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'NILE Pilot',
      description: 'Kafka internal development cluster',
      type: 'KAFKA'
    },
    {
      clusterName: 'zookeeper-pilot-dev',
      userName: 'mmartinm',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'NILE Pilot',
      description: 'Zookeeper internal development cluster',
      type: 'ZOOKEEPER'
    },
    {
      clusterName: 'nile-kafka-mmartinm-dev',
      userName: 'mmartinm',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: '',
      description: '',
      type: 'KAFKA'
    },
    {
      clusterName: 'nile-zk-mmartinm',
      userName: 'mmartinm',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: '',
      description: 'Zookeeper internal development cluster',
      type: 'ZOOKEEPER'
    },
    {
      clusterName: 'kafka-nxcals-test',
      userName: 'wjurasz',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'nxcals',
      description: 'kafka test cluster for nxcals',
      type: 'KAFKA'
    },
    {
      clusterName: 'zookeeper-nxcals-test',
      userName: 'wjurasz',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'nxcals',
      description: 'Zookeeper test cluster for nxcals',
      type: 'ZOOKEEPER'
    },
    {
      clusterName: 'kafka-sec-test',
      userName: 'certsoc',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'SECURITY TEAM',
      description: 'cluster for security team',
      type: 'KAFKA'
    },
    {
      clusterName: 'zookeeper-sec-test',
      userName: 'certsoc',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'SECURITY TEAM',
      description: 'Zookeeper test cluster for Security Team',
      type: 'ZOOKEEPER'
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
