import { ListMasterPage } from './list-master/list-master';
/*import { SearchPage } from './search/search';*/
import { SettingsPage } from './settings/settings';
import { TabsPage } from './tabs/tabs';
import { TutorialPage } from './tutorial/tutorial';
// import { ChatPage } from './chat/chat';
import { MyfarmPage } from './myfarm/myfarm';
import { FeedsPage } from './feeds/feeds';
import { FarmfreshPage } from './farmfresh/farmfresh';


// The page the user lands on after opening the app and without a session
export const FirstRunPage = TutorialPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab5Root = FeedsPage;

export const Tab1Root = ListMasterPage;
// export const Tab2Root = /*SearchPage*/ChatPage;

export const Tab4Root = MyfarmPage;

export const Tab3Root = SettingsPage;

export const Tab6Root = FarmfreshPage;
