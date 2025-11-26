import React from 'react';
import { User } from '../types';
import { USERS } from '../constants';
import { ViewMode } from '../App';

interface ContentAreaProps {
  user: User | null;
  viewMode: ViewMode;
}

export const ContentArea: React.FC<ContentAreaProps> = ({ user, viewMode }) => {
  
  // DASHBOARD VIEW
  if (viewMode === 'dashboard') {
    return (
      <div className="flex-1 p-8 md:p-16 bg-white overflow-y-auto">
        <div className="max-w-6xl mx-auto animate-fadeIn">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Dashboard Overview</h1>
            <p className="text-slate-500 mt-2 text-lg">Team Nexus Performance & Project Status</p>
          </header>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-blue-600 rounded-xl p-6 text-white shadow-lg shadow-blue-200/50">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-blue-100 font-medium text-sm uppercase tracking-wide">Total Members</span>
                 <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
               </div>
               <div className="text-4xl font-bold">{USERS.length}</div>
               <div className="mt-2 text-blue-200 text-sm flex items-center">
                 <span className="bg-blue-500/50 px-1.5 rounded text-xs mr-2">+1 this week</span>
                 <span>Full capacity</span>
               </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-slate-500 font-medium text-sm uppercase tracking-wide">Active Tasks</span>
                 <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               </div>
               <div className="text-4xl font-bold text-slate-800">12</div>
               <div className="mt-2 text-emerald-600 text-sm flex items-center">
                 <span className="font-medium">94%</span>
                 <span className="text-slate-400 ml-1">completion rate</span>
               </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-slate-500 font-medium text-sm uppercase tracking-wide">Pending Review</span>
                 <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               </div>
               <div className="text-4xl font-bold text-slate-800">3</div>
               <div className="mt-2 text-slate-400 text-sm">
                 Requires immediate attention
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activity Panel */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                Live Activity
              </h3>
              <div className="relative pl-2 border-l-2 border-slate-200 space-y-8">
                {/* Item 1 */}
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-blue-500"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-800"><span className="font-semibold">Kaith Duro</span> pushed 3 commits</p>
                      <p className="text-xs text-slate-500 mt-0.5">Updated authentication middleware</p>
                    </div>
                    <span className="text-xs text-slate-400 font-mono mt-1 sm:mt-0">2h ago</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-emerald-500"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-800"><span className="font-semibold">Aaron Enguerra</span> uploaded new assets</p>
                      <p className="text-xs text-slate-500 mt-0.5">Homepage hero section mockups</p>
                    </div>
                    <span className="text-xs text-slate-400 font-mono mt-1 sm:mt-0">4h ago</span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-purple-500"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-800"><span className="font-semibold">Tobey Marco</span> closed Issue #42</p>
                      <p className="text-xs text-slate-500 mt-0.5">Fixed mobile navigation glitch</p>
                    </div>
                    <span className="text-xs text-slate-400 font-mono mt-1 sm:mt-0">6h ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Goals Panel */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
               <h3 className="font-semibold text-slate-800 mb-6 flex items-center gap-2">
                 <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                 Sprint Goals
               </h3>
               <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-slate-700">Frontend Implementation</span>
                      <span className="text-blue-600 font-bold">85%</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full shadow-sm" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-slate-700">Backend API Integration</span>
                      <span className="text-indigo-600 font-bold">60%</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full shadow-sm" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-slate-700">Database Schema</span>
                      <span className="text-emerald-600 font-bold">100%</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full shadow-sm" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-slate-700">User Documentation</span>
                      <span className="text-amber-500 font-bold">30%</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full shadow-sm" style={{ width: '30%' }}></div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // PROFILE VIEW (No user selected state)
  if (!user) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 bg-gray-50 text-slate-400">
        <svg className="w-24 h-24 mb-6 opacity-20" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
        <h2 className="text-2xl font-light text-slate-600">No Member Selected</h2>
        <p className="mt-2 text-center max-w-md">Please select a team member from the sidebar to view their details.</p>
      </div>
    );
  }

  // PROFILE VIEW (User selected)
  return (
    <div className="flex-1 p-8 md:p-16 bg-white overflow-y-auto">
      <div className="max-w-3xl mx-auto animate-fadeIn">
        <div className="flex items-center space-x-4 mb-8">
          <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 text-3xl font-light">
            {user.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">{user.name}</h1>
            <div className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
              {user.role}
            </div>
          </div>
        </div>

        <div className="prose prose-slate lg:prose-lg max-w-none">
          <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b pb-2">Professional Summary</h3>
          
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 min-h-[100px]">
             {user.description ? (
               <p className="text-slate-600 leading-relaxed italic">"{user.description}"</p>
             ) : (
               <span className="text-slate-400 text-sm italic">No summary available.</span>
             )}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
               <h4 className="font-medium text-slate-900 mb-2">Contact Info</h4>
               <p className="text-slate-500 text-sm">email: {user.name.split(',')[0].toLowerCase().trim()}@nexus.team</p>
               <p className="text-slate-500 text-sm">ext: 100{user.id}</p>
             </div>
             <div className="p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
               <h4 className="font-medium text-slate-900 mb-2">Department</h4>
               <p className="text-slate-500 text-sm">Technology & Operations</p>
               <p className="text-slate-500 text-sm">Building B, Floor 4</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};