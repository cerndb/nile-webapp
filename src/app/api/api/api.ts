export * from './clusters.service';
import { ClustersService } from './clusters.service';
export * from './hosts.service';
import { HostsService } from './hosts.service';
export * from './instances.service';
import { InstancesService } from './instances.service';
export * from './volumes.service';
import { VolumesService } from './volumes.service';
export const APIS = [ClustersService, HostsService, InstancesService, VolumesService];
