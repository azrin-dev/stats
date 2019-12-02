import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectorsComponent } from './charts/sectors/sectors.component';
import { ClassComponent } from './charts/class/class.component';
import { IntroComponent } from './charts/intro/intro.component';
import { StatesConstructionComponent } from './charts/states-construction/states-construction.component';
import { StatesManufacturingComponent } from './charts/states-manufacturing/states-manufacturing.component';
import { StateSectorHistoryComponent } from './charts/state-sector-history/state-sector-history.component';
import { StatesSectorComponent } from './charts/states-sector/states-sector.component';
import { userRoutes } from 'src/app/user/user-routing.module';
import { StateSectorForecastComponent } from './charts/state-sector-forecast/state-sector-forecast.component';

export const routes: Routes = [
   { path: '',                               component: IntroComponent                 },
   { path: 'class',                          component: ClassComponent                 },
   { path: 'sectors',                        component: SectorsComponent               },
   { path: 'states/:sector',                 component: StatesSectorComponent          },
   { path: 'states/construction',            component: StatesConstructionComponent    },
   { path: 'states/manufacturing',           component: StatesManufacturingComponent   },
   { path: 'history/:state/:sector',         component: StateSectorHistoryComponent    },
   { path: 'forecast/:state/:sector',        component: StateSectorForecastComponent   },
   { path: 'user',         redirectTo: '/user/login',   pathMatch: 'full'          }
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes),
     RouterModule.forChild(userRoutes)
   ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
