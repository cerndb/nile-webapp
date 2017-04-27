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
      type: 'Zookeeper',
      replication_factor: 3,
      log_retention_hours: 48,
      partitions_number: 3,
    },
    {
      name: 'kafka-aromerom-dev',
      userName: 'aromerom',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'aromerom dev cluster',
      description: '',
      type: 'Kafka',
      replication_factor: 5,
      log_retention_hours: 240,
      partitions_number: 5,
    },
    {
      name: 'zk-monit-test',
      userName: 'aromerom',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'monit',
      description: 'zk test cluster for monit',
      type: 'Zookeeper',
      replication_factor: 3,
      log_retention_hours: 144,
      partitions_number: 3,
    },
    {
      name: 'kafka-monit-test',
      userName: 'aromerom',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'monit',
      description: 'kafka test cluster for monit',
      type: 'Kafka',
      replication_factor: 3,
      log_retention_hours: 120,
      partitions_number: 3,
    },
    {
      name: 'kafka-pilot-dev',
      userName: 'mmartinm',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'NILE Pilot',
      description: 'Kafka internal development cluster',
      type: 'Kafka',
      replication_factor: 1,
      log_retention_hours: 168,
      partitions_number: 1,
    },
    {
      name: 'zookeeper-pilot-dev',
      userName: 'mmartinm',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'NILE Pilot',
      description: 'Zookeeper internal development cluster',
      type: 'Zookeeper',
      replication_factor: 5,
      log_retention_hours: 96,
      partitions_number: 5,
    },
    {
      name: 'nile-kafka-mmartinm-dev',
      userName: 'mmartinm',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: '',
      description: '',
      type: 'Kafka',
      replication_factor: 7,
      log_retention_hours: 140,
      partitions_number: 3,
    },
    {
      name: 'nile-zk-mmartinm',
      userName: 'mmartinm',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: '',
      description: 'Zookeeper internal development cluster',
      type: 'Zookeeper',
      replication_factor: 3,
      log_retention_hours: 150,
      partitions_number: 10,
    },
    {
      name: 'kafka-nxcals-test',
      userName: 'wjurasz',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'nxcals',
      description: 'kafka test cluster for nxcals',
      type: 'Kafka',
      replication_factor: 3,
      log_retention_hours: 120,
      partitions_number: 12,
    },
    {
      name: 'zookeeper-nxcals-test',
      userName: 'wjurasz',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'nxcals',
      description: 'Zookeeper test cluster for nxcals',
      type: 'Zookeeper',
      replication_factor: 5,
      log_retention_hours: 170,
      partitions_number: 14,
    },
    {
      name: 'kafka-sec-test',
      userName: 'certsoc',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'SECURITY TEAM',
      description: 'cluster for security team',
      type: 'Kafka',
      replication_factor: 9,
      log_retention_hours: 230,
      partitions_number: 18,
    },
    {
      name: 'zookeeper-sec-test',
      userName: 'certsoc',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'SECURITY TEAM',
      description: 'Zookeeper test cluster for Security Team',
      type: 'Zookeeper',
      replication_factor: 7,
      log_retention_hours: 60,
      partitions_number: 30,
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
