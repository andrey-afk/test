import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class PasswordComplexityService {

  public bar0: string = 'grey';
  public bar1: string = 'grey';
  public bar2: string = 'grey';
  constructor() {
  }

  public passwordComplexity(password: string) {
    if (password.length < 8) {
    this.bar0 = 'red';
    this.bar1 = 'red';
    this.bar2 = 'red';
      return;
    }

    const regex = new Array();
    regex.push("[A-Z]");
    regex.push("[a-z]");
    regex.push("[0-9]");
    regex.push("[$@$!%*#?&]");

    let passed = 0;
    for (let i = 0; i < regex.length; i++) {
      if (new RegExp(regex[i]).test(password)) {
        passed++;
      }
    }

    if (passed === 2) {
      this.bar0 = 'red';
      this.bar1 = 'grey';
      this.bar2 = 'grey';
    }

    if (passed === 3) {
      this.bar0 = 'yellow';
      this.bar1 = 'yellow';
      this.bar2 = 'grey';
    }

    if (passed === 4) {
      this.bar0 = 'green';
      this.bar1 = 'green';
      this.bar2 = 'green';
    }
  }
}
