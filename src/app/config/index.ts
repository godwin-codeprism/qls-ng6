import { ShellComponent, HomeComponent } from '../components';
import { coursesList } from '../utils';

const QLSRoutes = [{
  path: '',
  component: ShellComponent,
  data: {
    coursesList: coursesList
  },
  children: [{
    path: '',
    component: HomeComponent
  }]
},
{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}
];

export default QLSRoutes;