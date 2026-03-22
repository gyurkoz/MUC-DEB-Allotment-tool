export interface LoginRequestDTO {
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  password: string;
}
