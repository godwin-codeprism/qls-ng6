import { ShellComponent, HomeComponent, EnquiryComponent, AboutComponent, ITILFoundationComponent, ITILServiceStrategyComponent, ITILServiceDesignComponent, ITILServiceTransitionComponent, ITILServiceOperationComponent, ITILContinualServiceImprovementComponent, SOAComponent, PPOComponent, RCVComponent, OSAComponent, MALCComponent, SIAMComponent, CAPMComponent, PMPComponent, ACPComponent, Prince2FComponent, Prince2PComponent, Prince2APComponent, ScrumComponent, CSPOComponent, MSPComponent, SAFeComponent, DevOpsComponent, GreenBeltComponent, BlackBeltComponent, COBITComponent, TOGAFComponent, UpEventsComponent, ServicesComponent, ContactComponent } from '../components';
import { coursesList } from '../utils';
import paths from './paths';

const QLSRoutes = [{
    path: '',
    component: ShellComponent,
    data: {
        coursesList: coursesList
    },
    children: [
        {
            path: '',
            component: HomeComponent,
        },
        {
            path: paths.about.url,
            component: AboutComponent
        },
        {
            path: paths.ITIL_Foundation.url,
            component: ITILFoundationComponent
        },
        {
            path: paths.ITIL_Service_Strategy.url,
            component: ITILServiceStrategyComponent
        },
        {
            path: paths.ITIL_Service_Design.url,
            component: ITILServiceDesignComponent
        },
        {
            path: paths.ITIL_Service_Transition.url,
            component: ITILServiceTransitionComponent
        },
        {
            path: paths.ITIL_Service_Operation.url,
            component: ITILServiceOperationComponent
        },
        {
            path: paths.ITIL_Continual_Service_Improvement.url,
            component: ITILContinualServiceImprovementComponent
        },
        {
            path: paths.SOA.url,
            component: SOAComponent
        },
        {
            path: paths.PPO.url,
            component: PPOComponent
        },
        {
            path: paths.RCV.url,
            component: RCVComponent
        },
        {
            path: paths.OSA.url,
            component: OSAComponent
        },
        {
            path: paths.MALC.url,
            component: MALCComponent
        },
        {
            path: paths.SIAM.url,
            component: SIAMComponent
        },
        {
            path: paths.CAPM.url,
            component: CAPMComponent
        },
        {
            path: paths.PMP.url,
            component: PMPComponent
        },
        {
            path: paths.ACP.url,
            component: ACPComponent
        },
        {
            path: paths.Prince2F.url,
            component: Prince2FComponent
        },
        {
            path: paths.Prince2P.url,
            component: Prince2PComponent
        },
        {
            path: paths.Prince2AP.url,
            component: Prince2APComponent
        },
        {
            path: paths.Scrum.url,
            component: ScrumComponent
        },
        {
            path: paths.CSPO.url,
            component: CSPOComponent
        },
        {
            path: paths.MSP.url,
            component: MSPComponent
        },
        {
            path: paths.SAFe.url,
            component: SAFeComponent
        },
        {
            path: paths.DevOps.url,
            component: DevOpsComponent
        },
        {
            path: paths.Green_Belt.url,
            component: GreenBeltComponent
        },
        {
            path: paths.Black_Belt.url,
            component: BlackBeltComponent
        },
        {
            path: paths.COBIT.url,
            component: COBITComponent
        },
        {
            path: paths.TOGAF.url,
            component: TOGAFComponent
        },
        {
            path: paths.up_events.url,
            component: UpEventsComponent
        },
        {
            path: paths.services.url,
            component: ServicesComponent
        },
        {
            path: paths.contact.url,
            component: ContactComponent
        }

    ]
},
{
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
}
];

export default QLSRoutes;