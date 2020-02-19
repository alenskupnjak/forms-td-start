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

user = {
  username: '',
  email: '',
  tajnoPitanje: '',
  odgovor: '',
  gender: ''
};
subbmited = false;

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
    this.subbmited = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.tajnoPitanje = this.signupForm.value.secret;
    this.user.odgovor = this.signupForm.value.quietionAnswer;
    this.user.gender = this.signupForm.value.dataGender;
  }


}
