import { AdminParking } from './adminParking';
import { Voiture} from './voiture'
export interface Maintenance {
    idMaintenance: number;
    date:          Date;
    prix:          number;
    description:   string;
    adminParking:  AdminParking;
    voiture:       Voiture;
}