export interface PassengerDTO {
  /** @pattern ^U[0-9]+$ */
  uNumber: string;
  /**
   * @minLength 1
   * @maxLength 50
   */
  firstName: string;
  /**
   * @minLength 1
   * @maxLength 50
   */
  lastName: string;
  email: string;
  phoneNumber: string;
}
