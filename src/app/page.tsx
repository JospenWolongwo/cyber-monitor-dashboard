'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import SocialMediaOverview from '@/components/dashboard/SocialMediaOverview';
import ActiveUsersCard from '@/components/dashboard/ActiveUsersCard';
import RecentActivityCard from '@/components/dashboard/RecentActivityCard';
import WorldMapCard from '@/components/maps/WorldMapCard';
import CameroonMapCard from '@/components/maps/CameroonMapCard';
import StatsCard from '@/components/dashboard/StatsCard';
import TikTokStreamCard from '@/components/dashboard/TikTokStreamCard';
import DetectionAnalysisCard from '@/components/dashboard/DetectionAnalysisCard';
import AlertLauncherCard from '@/components/dashboard/AlertLauncherCard';
import ContactListCard from '@/components/dashboard/ContactListCard';
import CalendarCard from '@/components/dashboard/CalendarCard';
import ActivityLogCard from '@/components/dashboard/ActivityLogCard';

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-12 gap-4">
          {/* Social Media Overview - 5 columns */}
          <div className="col-span-5">
            <SocialMediaOverview />
          </div>
          
          {/* Active Users - 3 columns */}
          <div className="col-span-3">
            <ActiveUsersCard />
          </div>

          {/* Recent Activity - 4 columns */}
          <div className="col-span-4">
            <RecentActivityCard />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-3 gap-6">
          <WorldMapCard />
          <CameroonMapCard />
          <StatsCard />
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-3 gap-6">
          <TikTokStreamCard />
          <DetectionAnalysisCard />
          <AlertLauncherCard />
        </div>

        {/* Fourth Row */}
        <div className="grid grid-cols-3 gap-6">
          <ContactListCard />
          <CalendarCard />
          <ActivityLogCard />
        </div>
      </div>
    </DashboardLayout>
  );
}
