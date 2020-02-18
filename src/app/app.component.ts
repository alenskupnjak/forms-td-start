import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

@ViewChild('f', {static: true}) signupForm: NgForm;
defaultQuestion = 'pet';
answer = '';
genders = ['Muško', 'Žensko'];

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.signupForm.setValue({
    //   userData: {
    //   username: suggestedName,
    //   email: ''
    // },
    // secret: 'pet',
    // quietionAnswer: 'text',
    // dataGender: 'Muško'
    // });

    this.signupForm.form.patchValue({
     userData: {
      username: suggestedName
     }
    });

  }

  onSubmit(form: NgForm) {

    console.log(this.signupForm);
  }


}
