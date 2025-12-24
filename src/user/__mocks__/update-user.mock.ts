import { UpdatePasswordDTO } from "../dtos/update-password.dto";


export const updatePasswordMock: UpdatePasswordDTO = {
   lastPassword: "abc",
   newPassword: "sdujh"
};

export const updatePasswordInvalidMock: UpdatePasswordDTO = {
    lastPassword: 'jfsjsidj',
    newPassword: 'sdfhkskd',
};