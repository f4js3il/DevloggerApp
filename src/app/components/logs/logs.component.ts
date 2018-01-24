import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/log';
import { LogService } from '../../services/log.service';
 

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs:Log[];
  selectedLog :Log;
  loaded :boolean = false;

  constructor(private logservice:LogService) { 

  }

  ngOnInit() {
    this.logservice.stateClear.subscribe(clear=>{
      if(clear){
        this.selectedLog = {id:'',text:'',date:''};
      }
    });
   this.logservice.getLogs().subscribe(logs =>{
     this.logs=logs;
     this.loaded=true;
  })
}

  onSelect(log: Log){
  this.logservice.setFormlog(log);
  this.selectedLog=log;
  }
  OnDelete(log :Log)
  {
if(confirm("Are you sure?"))
{
  this.logservice.deletelog(log);
}
  }
}
