import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from 'app/auth-service.service';
import { SuperAdminServiceService } from 'app/super-admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-super-admin',
  templateUrl: './login-super-admin.component.html',
  styleUrls: ['./login-super-admin.component.scss']
})
export class LoginSuperAdminComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private superAdminService: SuperAdminServiceService, private router: Router, private authService: AuthServiceService) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      motdepasse: ['', Validators.required],
    });
  }

  onSubmit() { 
    if (this.loginForm.valid) {
      const login = this.loginForm.value;
      // console.log(login);
     
      this.superAdminService.loginSuperAdmin(login.email, login.motdepasse).subscribe(
        (response: any) => {
          const idAdminCon = response.idAdminParking; 
          console.log("ID de l'admin est :", idAdminCon)
          localStorage.setItem('idAdminParking', idAdminCon);
           // stockage de l'admin connecté dans la session
          this.authService.setAdminConnecte(response); 
          // console.log("Mise à jour confirmée", response.idAdminParking)
          console.log("connexion établie", response);
          this.router.navigate(['../dashboard-super-admin']);
          this.loginForm.reset();
        },
        (error: any) => {
          console.log("erreur", error);
        }
      );
    }
}
   
}
