import { Routes } from "@angular/router";

export const Approutes: Routes = [
     { path: '', redirectTo: '/home',pathMatch: 'full' },
     { path: 'home', loadChildren: './modules/landing-page/landing-page.module#LandingPageModule' },
     { path: 'education', loadChildren: './modules/education/education.module#EducationModule' },
     { path: 'stories-one', loadChildren: './modules/stories-one/stories-one.module#StoriesOneModule' },
     { path: 'stories-two', loadChildren: './modules/stories-two/stories-two.module#StoriesTwoModule' },
     { path: '**', loadChildren: './modules/page-not-found/page-not-found.module#PageNotFoundModule' }

];
