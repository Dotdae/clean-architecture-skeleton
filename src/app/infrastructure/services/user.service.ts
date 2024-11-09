import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { UserUseCase } from "@application/usecases/user/user.usecase";
import { User } from "@domain/models/user.model";

@Injectable({
  providedIn: 'root'
})

// El servicio se puede utilizar para ejecutar directamente los casos de uso sin necesidad de instanciar el caso de usode la capa de aplicación.

export class UserService {

  // Instanciamos el caso de uso.

  constructor(
    private userUseCase: UserUseCase
  ){}

  // Ejecutamos el método del caso de uso.

  getUsers(): Observable<User[]> {

    return this.userUseCase.execute();

  }

}
