import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
  newAppointment: Appointment = {
    id: 0,
    title: '',
    date: new Date(),
  };
  appointments: Appointment[] = JSON.parse(
    window.localStorage.getItem('appointments') || '[]'
  );
  clearAppointment() {
    this.newAppointment = { id: 0, title: '', date: new Date() };
  }
  addAppointment() {
    if (this.newAppointment.title.trim() && this.newAppointment.date) {
      this.newAppointment.id = this.appointments.length + 1;
      this.appointments.push({ ...this.newAppointment });
      window.localStorage.setItem(
        'appointments',
        JSON.stringify(this.appointments)
      );
      this.clearAppointment();
    }
  }
  removeAppointment(id: number) {
    this.appointments = this.appointments.filter((a) => a.id !== id);
    window.localStorage.setItem(
      'appointments',
      JSON.stringify(this.appointments)
    );
  }
}
