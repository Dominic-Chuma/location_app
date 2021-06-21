/* eslint-disable prettier/prettier */
import { Controller, Get, Param} from '@nestjs/common'; //, Get
import { Crud, CrudController } from '@nestjsx/crud';
import { Sender } from './location.entity';
import { LocationService } from './location.service';
// import { Sender } from './location.entity';
// import { get } from 'http';

@Crud({
    model: {
        type: Sender // This Sender is the class defined in location.entity
    }
})
@Controller('location')
export class LocationController implements CrudController<Sender> {
  constructor(public service: LocationService) {}
  
  // @Get('calculate')// Take a look at this again
  // getUsers() {
  //   return 'Users';
  // } 

  @Get(':id')// Take a look at this again
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getUsersById(@Param('id') id: string): any {
    // return {id};
    if (id === '1'){
      const longA = 6.443582;
      const longB = 6.513555;
      const latA = 3.520007;
      const latB = 3.315550;

      const central_angle = function (){
        // Math.acos(0.5);
        Math.sin(90 * Math.PI / 180);// converts Degree to Radians
        const overall_sine = (Math.sin(latA * (Math.PI / 180)) * Math.sin(latB * (Math.PI / 180)));
        console.log(overall_sine);
        const overall_cosine = (Math.cos(latA * (Math.PI / 180)) * Math.cos(latA * (Math.PI / 180)));
        console.log(overall_cosine);
        const acos_parameter = overall_sine + (overall_cosine * Math.cos(Math.abs(longA - longB) * (Math.PI / 180)));
        console.log(acos_parameter);
        const overall = Math.acos(acos_parameter);
        if (acos_parameter < 1 && acos_parameter > -1){
            // var overall = Math.acos(acos_parameter);
            console.log(overall);
            return overall;
        }else{
            const overall_sineA = (Math.sin(longA * (Math.PI / 180)) * Math.sin(longB * (Math.PI / 180)));
            console.log(overall_sineA);
    
            const overall_cosineA = (Math.cos(longA * (Math.PI / 180)) * Math.cos(longA * (Math.PI / 180)));
            console.log(overall_cosineA);
    
            const acos_parameterA = overall_sineA + (overall_cosineA * Math.cos(Math.abs(latA - latB) * (Math.PI / 180)));
            console.log(acos_parameterA);
    
            const overallA = Math.acos(acos_parameterA);
            console.log(overall , " & ", overallA);
    
            return overallA;
        }
      };

      // console.log(central_angle());
      const centralAngle = central_angle();

      const shortest_distance = 6371.009 * centralAngle;

      return ("The shortest Distance from this sender is " + shortest_distance + "km")
    }

    if (id === '2'){
      const longA = 6.443582;// Longitude of the Autochek Company
      const longB = 6.488194;
      const latA = 3.520007;// Latitude of the Autochek Company
      const latB = 3.329283;

      const central_angle = function (){
        // Math.acos(0.5);
        Math.sin(90 * Math.PI / 180);// converts Degree to Radians
        const overall_sine = (Math.sin(latA * (Math.PI / 180)) * Math.sin(latB * (Math.PI / 180)));
        // console.log(overall_sine);
        const overall_cosine = (Math.cos(latA * (Math.PI / 180)) * Math.cos(latA * (Math.PI / 180)));
        // console.log(overall_cosine);
        const acos_parameter = overall_sine + (overall_cosine * Math.cos(Math.abs(longA - longB) * (Math.PI / 180)));
        // console.log(acos_parameter);
        const overall = Math.acos(acos_parameter);
        if (acos_parameter < 1 && acos_parameter > -1){
            // var overall = Math.acos(acos_parameter);
            // console.log(overall);
            return overall;
        }else{
            const overall_sineA = (Math.sin(longA * (Math.PI / 180)) * Math.sin(longB * (Math.PI / 180)));
            // console.log(overall_sineA);
    
            const overall_cosineA = (Math.cos(longA * (Math.PI / 180)) * Math.cos(longA * (Math.PI / 180)));
            // console.log(overall_cosineA);
    
            const acos_parameterA = overall_sineA + (overall_cosineA * Math.cos(Math.abs(latA - latB) * (Math.PI / 180)));
            // console.log(acos_parameterA);
    
            const overallA = Math.acos(acos_parameterA);
            // console.log(overall , " & ", overallA);
    
            return overallA;
        }
      };

      // console.log(central_angle());
      const centralAngle = central_angle();

      const shortest_distance = 6371.009 * centralAngle;

      return ("The shortest Distance from this sender is " + shortest_distance + "km")
    }

    if ((id !== '1') && (id !== '2')){
      return [{
        "Company_Longitude": 6.443582,
        "Company_Latitude": 3.520007,
      }, "No further User"]
    }
  }
}
