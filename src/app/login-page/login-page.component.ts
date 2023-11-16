import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminParkingServiceService } from 'app/admin-parking-service.service';
import { AuthServiceService } from 'app/auth-service.service';
import { CoreServiceService } from 'app/core-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private adminService: AdminParkingServiceService, private router: Router, private authService: AuthServiceService, private snack: CoreServiceService) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      motdepasse: ['', Validators.required],
    });
  }

  onSubmit() { 
    if (this.loginForm.valid) {
      const login = this.loginForm.value;
      console.log(login);
     
      this.adminService.loginAdmin(login.email, login.motdepasse).subscribe(
        (response: any) => {
          const idAdminCon = response.idAdminParking; 
          console.log("ID de l'admin est :", idAdminCon)
          localStorage.setItem('idAdminParking', idAdminCon); // stockage de l'admin connecté dans la session
          this.authService.setAdminConnecte(response); 
          console.log("Mise à jour confirmée", response.idAdminParking)
          console.log("connexion établie", response);
          this.router.navigate(['/dashboard']);
          this.loginForm.reset();
        },
        (error: any) => {
          this.snack.openSnackBar("Mot de passe ou nom incorrect");
          console.log("erreur", error);
        }
      );
    }
}
}
