import { Component, OnInit } from '@angular/core';
import { UserUseCase } from '@application/usecases/user/user.usecase';
import { UserService } from '@infrastructure/services/user.service';
import { User } from '@domain/models/user.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  // Creamos un array del tipo usuario.

  users: User[] = [];
  usersService: User[] = [];

  // Instanciamos el caso de uso.

  constructor(
    private userUseCase: UserUseCase,
    private userService: UserService
  ){}

  ngOnInit(): void {

    this.loadUsers();
    this.loadServiceUsers();

  }

  // Función ejecutando el caso de uso.

  loadUsers(): void {

    // Ejecutamos el caso de uso y nos suscribimos al observable que retorna dicho método.

    this.userUseCase.execute().subscribe({
      next: (data: User[]) => {
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  // Función ejecutando el servicio.

  loadServiceUsers(): void {

    // Misma lógica que arriba, nos tenemos que suscribir al método ya que retornamos un observable.

    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.usersService = data;
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

}
