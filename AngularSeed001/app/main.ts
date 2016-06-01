import { AppComponent } from "./components/app/app";
import { bootstrap, enableProdMode, provide } from "./barrel";

enableProdMode();

bootstrap(AppComponent, []);