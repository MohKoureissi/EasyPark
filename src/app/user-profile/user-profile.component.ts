import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }
  // private router: Router

  ngOnInit() {
  }

  deconnecter (){
    localStorage.removeItem("idClient");
    localStorage.clear();
    // this.router.navigate(['/connexion']);
    
    }
}
