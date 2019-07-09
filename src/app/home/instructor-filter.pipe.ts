import { PipeTransform, Pipe} from '@angular/core'
import { Instructor } from '../instructor.model'


@Pipe({
    name: "instructorFilter"
})
export class InstructorFilterPipe implements PipeTransform{
    transform(instructors: Instructor[], searchTerm: string): Instructor[]{
        if(!instructors || !searchTerm) {
            return instructors;
        }
        return instructors.filter(instructor => 
                instructor.displayName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}