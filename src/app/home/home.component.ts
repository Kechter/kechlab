import { Component, Input } from '@angular/core';
import { AuthSession } from '@supabase/supabase-js';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input()
  session!: AuthSession;

  constructor(private readonly supabase: SupabaseService) { 
  }

  logout()  {
    this.supabase.signOut();
  }
}
