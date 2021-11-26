
import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/interfaces/categorias';
import { ComidasService } from '../../services/comidas.service';

//NATIVE
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Categories } from '../../interfaces/categorias';

@Component({
  selector: 'app-tipocomidas',
  templateUrl: './tipocomidas.page.html',
  styleUrls: ['./tipocomidas.page.scss'],
})
export class TipocomidasPage implements OnInit {

  comidas:Meal[]=[];
  tipo:string='';

  constructor(private srvcomidas:ComidasService,
    private iab: InAppBrowser,
    private actrouter:ActivatedRoute,
    private router:Router,
    private actionSheetController:ActionSheetController,
    private socialSharing: SocialSharing) { }

  ngOnInit() {
    this.actrouter.queryParams.subscribe(datos=>
    {
      this.tipo=this.router.getCurrentNavigation().extras.state.categorias;
    });

    this.srvcomidas.getComidasxTipo("Vegan").subscribe(datos=>
      {
        this.comidas.push(...datos.meals);
        console.log(this.comidas);
        // console.log(datos);      
      });
  }
  onClick(){
    console.log("ir a receta");

    const browser = this.iab.create('https://ionicframework.com/','_system');
  }



  async presentActionSheet(id:string) {
    
    let url='https://www.themealdb.com/meal/' + id;
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      mode:"ios",
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Compartir',
        icon: 'share-social',
        handler: () => {
          console.log('Share clicked');
          this.socialSharing.share('Mira esta receta, probando app comidas',null,url);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
