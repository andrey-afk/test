import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {PasswordComplexityService} from "../../shared/services/passwordComplexity.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public password = new FormControl('', [Validators.required])
  private destroy$ = new Subject();

  constructor(public passwordComplexityService: PasswordComplexityService) {
  }

  public ngOnInit(): void {
    this.password.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe((res) => {
      if (res) {
        this.passwordComplexityService.passwordComplexity(res)
      }
    })
  }

}
