import {requirements} from '../mocks/requirements';



export class RequirementsService {
    public static getRequirements() {
        return Promise.resolve(requirements);
    }
}
