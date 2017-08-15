import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';


import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { FarmfreshPage } from  '../pages/farmfresh/farmfresh';
import { SupportPage } from '../pages/support/support';
import { AddpagePage } from '../pages/addpage/addpage';
import { MyApp } from './app.component';
import { MyfarmPage } from '../pages/myfarm/myfarm';
import { AlertdetailPage } from '../pages/alertdetail/alertdetail';
import { AlertfilterPage } from '../pages/alertfilter/alertfilter';
import { CardsPage } from '../pages/cards/cards';
import { FarmdetailsPage } from '../pages/farmdetails/farmdetails';
import { ContentPage } from '../pages/content/content';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ListMasterPage } from '../pages/list-master/list-master';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { MenuPage } from '../pages/menu/menu';
import { AboutPage } from '../pages/about/about';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
import { ChatPage } from '../pages/chat/chat';
import { AlertPage } from '../pages/alert/alert';
import { FeedsPage } from '../pages/feeds/feeds';
import { Api } from '../providers/api';
import { Items } from '../mocks/providers/items';
import { Itemss } from '../mocks/providers/itemss';
import { Settings } from '../providers/settings';
import { User } from '../providers/user';
import { PopoverPage } from '../pages/about-popover/about-popover';

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FarmproviderProvider } from '../providers/farmprovider';
import { MyfarmproviderProvider } from '../providers/myfarmprovider';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    CardsPage,
    ContentPage,
    ItemCreatePage,
    ItemDetailPage,
    ListMasterPage,
    LoginPage,
    MapPage,
    MenuPage,
    SearchPage,
    SettingsPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    WelcomePage,
    ChatPage,
    MyfarmPage,
    AlertPage,
    FeedsPage,
    AlertdetailPage,
    AlertfilterPage,
    AddpagePage,
    AboutPage,
    PopoverPage,
    SupportPage,
    FarmdetailsPage,
    FarmfreshPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CardsPage,
    ContentPage,
    ItemCreatePage,
    ItemDetailPage,
    ListMasterPage,
    LoginPage,
    MapPage,
    MenuPage,
    SearchPage,
    SettingsPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    WelcomePage,
    ChatPage,
    MyfarmPage,
    AlertPage,
    FeedsPage,
    AlertdetailPage,
    AlertfilterPage,
    AddpagePage,
    AboutPage,
    PopoverPage,
    SupportPage,
    FarmdetailsPage,
    FarmfreshPage
  ],
  providers: [
    ConferenceData,
    UserData,
    Api,
    Items,
    Itemss,
    User,
    Camera,
    GoogleMaps,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FarmproviderProvider,
    MyfarmproviderProvider
  ]
})
export class AppModule { }
