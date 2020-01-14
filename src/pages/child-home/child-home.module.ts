import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildHomePage } from './child-home';
import { AgmCoreModule} from '@agm/core';
@NgModule({
  declarations: [
    ChildHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ChildHomePage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_0OyT7fQBdXDsmTtMThEeOF4s4_XQZLM'   //old key
      
    })
  ],
})
export class ChildHomePageModule {}




