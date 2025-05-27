import React from 'react';
import SidebarNavigation from './components/SidebarNavigation';
import Header from './components/Header';
import BodyMap from './components/BodyMap';
import HealthStatusCard from './components/HealthStatusCard';
import CalendarSchedule from './components/CalendarSchedule';
import AppointmentCard from './components/AppointmentCard';
import UpcomingSchedule from './components/UpcomingSchedule';
import ActivityChart from './components/ActivityChart';
import { healthStatus, appointments, upcomingAppointments } from './data/staticData';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SidebarNavigation />
      <main className="flex-1 p-6 space-y-6">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <BodyMap />
              <div className="flex flex-col gap-4">
                {healthStatus.map((item, idx) => (
                  <HealthStatusCard key={idx} {...item} />
                ))}
              </div>
            </div>
            <ActivityChart />
          </div>
          <div className="space-y-6">
            <CalendarSchedule />
            {appointments.map((appt, idx) => (
              <AppointmentCard key={idx} {...appt} />
            ))}
            <UpcomingSchedule data={upcomingAppointments} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
