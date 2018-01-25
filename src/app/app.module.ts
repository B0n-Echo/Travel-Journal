import { appRoutes } from '../routes';
import { ActivityService } from './services/activity.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';
import { MapService } from './services/map.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import * as primeng from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    primeng.PanelMenuModule,
    primeng.MenubarModule,
    primeng.ButtonModule,
    primeng.DataGridModule,
    primeng.DataTableModule,
    primeng.InputTextModule,
    primeng.InputTextareaModule,
    primeng.PasswordModule,
    primeng.DialogModule,
    primeng.DropdownModule,
    primeng.ConfirmDialogModule,
    primeng.GrowlModule,
    primeng.PaginatorModule,
    primeng.SharedModule,
    primeng.TabMenuModule,
    primeng.CheckboxModule,
    primeng.TooltipModule,
    primeng.InputMaskModule,
    primeng.PanelModule,
    primeng.FieldsetModule,
    primeng.RadioButtonModule,
    primeng.OverlayPanelModule,
    primeng.InplaceModule,
    primeng.AutoCompleteModule,
    primeng.ToggleButtonModule,
    primeng.MultiSelectModule,
    primeng.CalendarModule,
    primeng.InputSwitchModule,
    primeng.FileUploadModule,
    primeng.SelectButtonModule,
    primeng.EditorModule,
    primeng.MessagesModule,
    primeng.TabViewModule,
    primeng.MenuModule,
    primeng.DialogModule,
    primeng.DataListModule,
    primeng.PickListModule,
    primeng.OverlayPanelModule,
    primeng.LightboxModule,
  ],
  providers: [ActivityService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
