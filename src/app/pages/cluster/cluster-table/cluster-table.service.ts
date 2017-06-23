/**
 * Created by adediosf on 17/03/17.
 */
import { Injectable } from '@angular/core';
import { ClustersService } from '../../../api/api/clusters.service';
import { Observable }         from 'rxjs/Observable';
import { ClusterEntity } from '../../../api/model/clusterEntity';
import { Http, Response }                    from '@angular/http';

@Injectable()
export class ClusterTableService {

  clusterData = [
    {
      name: 'zookeeper-aromerom',
      superuser: 'aromerom',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'aromerom dev cluster',
      description: 'Zookeeper internal development cluster',
      type: 'Zookeeper',
      replication_factor: 3,
      log_retention_hours: 48,
      partitions_number: 3,
      port_ssl: 9093,
      version: '0.10.2.0',
      size: 'small',
    },
    {
      name: 'kafka-aromerom-dev',
      superuser: 'aromerom',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'aromerom dev cluster',
      description: '',
      type: 'Kafka',
      replication_factor: 5,
      log_retention_hours: 240,
      partitions_number: 5,
      port_ssl: 9090,
      version: '0.10.2.0',
      size: 'large',
    },
    {
      name: 'zk-monit-test',
      superuser: 'aromerom',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'monit',
      description: 'zk test cluster for monit',
      type: 'Zookeeper',
      replication_factor: 3,
      log_retention_hours: 144,
      partitions_number: 3,
      port_ssl: 9091,
      version: '0.10.2.0',
      size: 'small',
    },
    {
      name: 'kafka-monit-test',
      superuser: 'aromerom',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'monit',
      description: 'kafka test cluster for monit',
      type: 'Kafka',
      replication_factor: 3,
      log_retention_hours: 120,
      partitions_number: 3,
      port_ssl: 8045,
      version: '0.10.2.0',
      size: 'medium',
    },
    {
      name: 'kafka-pilot-dev',
      superuser: 'mmartinm',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'NILE Pilot',
      description: 'Kafka internal development cluster',
      type: 'Kafka',
      replication_factor: 1,
      log_retention_hours: 168,
      partitions_number: 1,
      port_ssl: 9002,
      version: '0.10.2.0',
      size: 'small',
    },
    {
      name: 'zookeeper-pilot-dev',
      superuser: 'mmartinm',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'NILE Pilot',
      description: 'Zookeeper internal development cluster',
      type: 'Zookeeper',
      replication_factor: 5,
      log_retention_hours: 96,
      partitions_number: 5,
      port_ssl: 9010,
      version: '0.10.2.0',
      size: 'large',
    },
    {
      name: 'nile-kafka-mmartinm-dev',
      superuser: 'mmartinm',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: '',
      description: '',
      type: 'Kafka',
      replication_factor: 7,
      log_retention_hours: 140,
      partitions_number: 3,
      port_ssl: 8045,
      version: '0.10.2.0',
      size: 'large',
    },
    {
      name: 'nile-zk-mmartinm',
      superuser: 'mmartinm',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: '',
      description: 'Zookeeper internal development cluster',
      type: 'Zookeeper',
      replication_factor: 3,
      log_retention_hours: 150,
      partitions_number: 10,
      port_ssl: 8045,
      version: '0.10.2.0',
      size: 'small',
    },
    {
      name: 'kafka-nxcals-test',
      superuser: 'wjurasz',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'nxcals',
      description: 'kafka test cluster for nxcals',
      type: 'Kafka',
      replication_factor: 3,
      log_retention_hours: 120,
      partitions_number: 12,
      port_ssl: 9067,
      version: '0.10.2.0',
      size: 'medium',
    },
    {
      name: 'zookeeper-nxcals-test',
      superuser: 'wjurasz',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'nxcals',
      description: 'Zookeeper test cluster for nxcals',
      type: 'Zookeeper',
      replication_factor: 5,
      log_retention_hours: 170,
      partitions_number: 14,
      port_ssl: 9111,
      version: '0.10.2.0',
      size: 'large',
    },
    {
      name: 'kafka-sec-test',
      superuser: 'certsoc',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'SECURITY TEAM',
      description: 'cluster for security team',
      type: 'Kafka',
      replication_factor: 9,
      log_retention_hours: 230,
      partitions_number: 18,
      port_ssl: 9011,
      version: '0.10.2.0',
      size: 'small',
    },
    {
      name: 'zookeeper-sec-test',
      superuser: 'certsoc',
      egroup: 'it-db-nile-developers',
      category: 'DEV',
      project: 'SECURITY TEAM',
      description: 'Zookeeper test cluster for Security Team',
      type: 'Zookeeper',
      replication_factor: 7,
      log_retention_hours: 60,
      partitions_number: 30,
      port_ssl: 9047,
      version: '0.10.2.0',
      size: 'medium',
    }
  ];


  constructor(private clusterService:ClustersService, private http: Http) {}

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.clusterData);
      }, 2000);
    });
  }


  getClusterList(extraHttpRequestParams?: any): Observable<Array<ClusterEntity>> {
    return this.clusterService.getAllClusterUsingGET(extraHttpRequestParams);
  }


}
