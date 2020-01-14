import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';
import { childlocation } from '../../models/childlocation';
import { Geolocation} from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-child-home',
  templateUrl: 'child-home.html',
})
export class ChildHomePage {


  locationset = false;
  baselocation :childlocation = new childlocation(30.044420,31.235712);

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private geoloc :Geolocation,
  private mdlctrl: ModalController,
  private loadctrl: LoadingController
) {

   

  }


  getlocation(){

    const loading = this.loadctrl.create({
      content :'Fetching your location..',
    })
    loading.present();

    this.geoloc.getCurrentPosition()
    .then((locationdata)=>{

      this.baselocation.latitude = locationdata.coords.latitude;
      this.baselocation.longitude = locationdata.coords.longitude;
      this.locationset = true;
        loading.dismiss();
    })
    .catch((error)=>{

      console.log("Error: " + error);

    })
      
  }
  @ViewChild('myInput') myInput: ElementRef;
  resize() {
      var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
      var scrollHeight = element.scrollHeight;
      element.style.height = scrollHeight + 'px';
      this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  }




}
