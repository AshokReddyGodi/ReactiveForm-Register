import { AbstractControl } from '@angular/forms';

export class Passwordmatch {
    // Custom validator to check that two fields match.
    static matchPassword(ac: AbstractControl) {
        const pwd = ac.get('pwd');
        const cnfpwd = ac.get('cnfPwd');
        if (pwd.value === cnfpwd.value) {
            return null;
        }

        ac.get('cnfPwd').setErrors({ mustMatch: true });
        return true;
    }
}
