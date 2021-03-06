import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goalSearch'
})
export class GoalSearchPipe implements PipeTransform {

  transform(projects: any[], filterGoal) {
    var output = [];
    console.log(filterGoal)

    if (filterGoal != 0) {
      for (var i in projects) {
        console.log(filterGoal)
        if ((parseInt(projects[i].goal) < filterGoal)) {
          output.push(projects[i])
        }
      }
      return output;
    } else {
      return projects;
    }
  }


}
