import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/landing/models/job';
import { JobService } from 'src/app/service/job/job.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent {

constructor(private jobService : JobService, private route : ActivatedRoute){}


ngOnInit(){
  const id = Number(this.route.snapshot.paramMap.get("id"));
  this.getJobByJobId(id);
}

job! : Job;
jobSkills : any[] = [];

getJobByJobId(id : Number){
  this.jobService.getJobbyId(id).subscribe({
    next : (result) => {
  this.job = result;
  this.jobSkills = this.job.skills;
    },
    error : (err) =>{
    console.log(err);
      
    }
  });
}

}
