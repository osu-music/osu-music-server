import { Module } from '@nestjs/common';
import { RemoteGateway } from './gateways/remote.gateway';
import { ClientsService } from './services/clients.service';
import { AuthModule } from '../auth/auth.module';
import { DevicesService } from './services/devices.service';
import { RemoteControlService } from './services/remote-control.service';
import { DevicesResolver } from './resolvers/devices.resolver';
import { DevicesSubService } from './services/devices-sub.service';

@Module({
  imports: [AuthModule],
  providers: [
    RemoteGateway,
    ClientsService,
    DevicesService,
    RemoteControlService,
    DevicesResolver,
    DevicesSubService,
  ],
  exports: [RemoteControlService],
})
export class RemoteModule {}
