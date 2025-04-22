import { Component } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Kechlab';
  session: any = null;

  constructor(private readonly supabase: SupabaseService) {}
  ngOnInit() {
    this.session = this.supabase.session;
    this.supabase.authChanges((_, session) => (this.session = session));
  }
}
