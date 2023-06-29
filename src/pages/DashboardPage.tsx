import React, { useEffect } from 'react';
import { DASHBOARD } from 'src/config-global';
import { useDispatch } from 'src/redux/store';
import { setActiveSystem } from 'src/redux/slices/system';
import { setActiveString } from 'src/redux/slices/string';
import SystemListSection from 'src/sections/dashboard-section/system-list';
import SystemInfoSection from 'src/sections/dashboard-section/system-info';
import StringInfoSection from 'src/sections/dashboard-section/string-info';
import ModuleInfoSection from 'src/sections/dashboard-section/module-info';

export default function DashboardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveSystem('1'));
    dispatch(setActiveString('1-1'));
  }, [dispatch]);

  return (
    <div
      className="w-full flex flex-row gap-x-3"
      style={{ height: `calc(100vh - ${DASHBOARD.PADDING * 2}px)` }}
    >
      <div style={{ width: `${DASHBOARD.W_LIST}px` }}>
        <SystemListSection />
      </div>
      <SystemInfoSection />
      <div className="flex flex-col gap-3 overflow-y-auto">
        <StringInfoSection />
        <ModuleInfoSection />
      </div>
    </div>
  );
}
