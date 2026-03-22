import type { UserDTO } from "./userDTO";

export interface LoginResponseDTO {
  token: string;
  user: UserDTO;
}
