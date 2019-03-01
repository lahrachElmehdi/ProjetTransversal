import { Component, OnInit } from '@angular/core';
import { EmployeurService } from '../../Services/Employeur/employeur.service';

@Component({
  selector: 'app-employeur',
  templateUrl: './employeur.component.html',
  styleUrls: ['./employeur.component.css']
})
export class EmployeurComponent implements OnInit {

  public form = {
    raisonSociale:null,
    adresse:null,
    numSiret:null,
    email:null,
  }

  public error = null;

  constructor(private employeurService:EmployeurService) { }

  ngOnInit() {
    
  }

  onSubmit(){
    this.employeurService.inscrire(this.form).subscribe(
      data => console.log(data),
      error => console.log(error.error.errors)
    );
  }

}
