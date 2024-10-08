import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { UsersDataService } from './services/users-data.service'; // Adjust the path as necessary

@NgModule({
  imports: [
    HttpClientModule // Import HttpClientModule here
  ],
  providers: [
    UsersDataService // Provide your service here
  ],
  exports: [
    HttpClientModule // Optional: export HttpClientModule if needed elsewhere
  ]
})
export class ServiceModule {}
