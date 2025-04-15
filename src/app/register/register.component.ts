import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SupabaseService } from '../supabase.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [ReactiveFormsModule,RouterModule],
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  loading = false;
  signUpForm: FormGroup;

  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder
  ) {
    this.signUpForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  async onSubmit(): Promise<void> {
    try {
      this.loading = true;
      const email = this.signUpForm.value.email as string;
      const password = this.signUpForm.value.password as string;
      const { error } = await this.supabase.signUp(email, password);
      if (error) throw error;
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      this.signUpForm.reset();
      this.loading = false;
    }
  }
}
