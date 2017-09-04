import { Injectable } from '@angular/core';
import { colorHelper } from '../../theme/theme.constants';

@Injectable()
export class DashboardService {

  constructor() {
  }

  getResourcesData() {

      return [
        {
          color: '#1b70ef',
          description: 'Instances',
          stats: '25',
          icon: 'Instances',
        }, {
          color: '#1b70ef',
          description: 'VCPUs',
          stats: '150',
          icon: 'CPUs',
        }, {
          color: '#1b70ef',
          description: 'Memory',
          stats: '160',
          icon: 'Storage',
        }, {
          color: '#1b70ef',
          description: 'Volumes',
          stats: '10',
          icon: 'refresh',
        }
      ];
    }

  getKafkaData() {
      return [
        {
          value: 3,
          color: '#ffffff',
          highlight: colorHelper.shade('#ffffff', 15),
          label: 'kafka-nxcals-test',

        }, {
          value: 10,
          color: '#3c4eb9',
          highlight: colorHelper.shade('#3c4eb9', 15),
          label: 'kafka-nxcals-qa',

        },{
          value: 20,
          color: '#1b70ef',
          highlight: colorHelper.shade('#1b70ef', 15),
          label: 'kafka-nxcals',

        },
      ];
    }

     getZookeeperData() {
          return [
            {
              value: 1,
              color: '#ffffff',
              highlight: colorHelper.shade('#ffffff', 15),
              label: 'zk-nxcals-test',

            }, {
              value: 1,
              color: '#3c4eb9',
              highlight: colorHelper.shade('#3c4eb9', 15),
              label: 'zk-nxcals-qa',

            },{
              value: 5,
              color: '#1b70ef',
              highlight: colorHelper.shade('#1b70ef', 15),
              label: 'zk-nxcals',

            },
          ];
        }

        getVcpuData() {
                  return [
                    {
                      value: 12,
                      color: '#ffffff',
                      highlight: colorHelper.shade('#ffffff', 15),
                      label: 'kafka-nxcals-test',

                    }, {
                      value: 48,
                      color: '#3c4eb9',
                      highlight: colorHelper.shade('#3c4eb9', 15),
                      label: 'kafka-nxcals-qa',

                    },{
                      value: 80,
                      color: '#1b70ef',
                      highlight: colorHelper.shade('#1b70ef', 15),
                      label: 'kafka-nxcals',

                    }
                  ];
                }

}
