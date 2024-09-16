import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {jwtDecode, JwtPayload} from "jwt-decode";

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrl: './prijava.component.css'
})
export class PrijavaComponent {
  private prijavaService: any;
  private username: String = "korisnik";
  private password: String = "korisnik";
  private router: Router = new Router();

  public login(): void {
    sessionStorage.removeItem("app.token");
    this.prijavaService.login(this.username, this.password)
      .subscribe({
        next: (token: string) => {
          sessionStorage.setItem("app.token", token);
          const decodedToken = jwtDecode<JwtPayload>(token);
          // @ts-ignore
          sessionStorage.setItem("app.roles",  decodedToken.scope);
          this.router.navigateByUrl("/persons");
        },
        error: (error: any) => console.log(error)
        //this.snackBar.open(`Login failed: ${error.status}`, "OK")
      });
  }
}
