import { Component, OnInit } from '@angular/core';
import { TestCase } from '../model/test-case.model';
import { Operation } from '../model/operation.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CubeSummationService } from '../service/cube-summation.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public numberOfTestCase: number;
  public testsCase: TestCase[] = [];
  public alertMessage: string;
  public resultSolution: number[];

  constructor(private cubeSummationService: CubeSummationService) {}

  ngOnInit(): void {}

  public onBlurNumberOfTestCase(): void {
    this.testsCase = this.numberOfTestCase
      ? [...new Array(this.numberOfTestCase)].map(() => new TestCase())
      : [];
  }

  public onBlurNumberOperations(index: number, numberOfOperationsCase: number): void {
    this.testsCase[index].operations = numberOfOperationsCase
      ? [...new Array(numberOfOperationsCase)].map(() => new Operation())
      : [];
  }

  public solucionar(): void {
    this.cubeSummationService.resolver(this.testsCase).subscribe(
      res => this.resultSolution = res.body,
      (responseError: HttpErrorResponse) => { this.alertMessage = responseError.error; window.scrollTo( 0, 0 ); }
    );
  }
}
