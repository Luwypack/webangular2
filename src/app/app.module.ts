import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//HTTP - Servicios
import { HttpModule } from "@angular/http";

//Rutas
import { app_routing } from './app.routes';

//Servicios
import { InfoService } from './services/info.service';
import { ProductosService } from './services/productos.service';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { PortafolioDetalleComponent } from './components/portafolio-detalle/portafolio-detalle.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    PortafolioComponent,
    FooterComponent,
    AboutComponent,
    PortafolioDetalleComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule

  ],
  providers: [
    InfoService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
