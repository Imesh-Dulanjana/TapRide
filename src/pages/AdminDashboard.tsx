import React, { useState } from 'react';
import SidebarLayout from '../components/SidebarLayout';
import { 
  TrendingUp, 
  Bus, 
  MapPin, 
  Users, 
  DollarSign,
  Plus,
  CheckCircle2,
  AlertTriangle,
  Info,
  BarChart3,
  ArrowRight
} from 'lucide-react';

export default function AdminDashboard() {
  return (
    <SidebarLayout>
      
      {/* HERO BANNER */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white flex justify-between items-center shadow-lg shadow-blue-600/20">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            Good morning, Admin <span className="text-2xl">👋</span>
          </h1>
          <p className="text-blue-100 font-medium">Here's what's happening across the TapRide network today.</p>
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-blue-200 text-xs font-bold tracking-widest uppercase mb-1">Today</p>
          <p className="text-lg font-semibold">Saturday, August 29, 2026</p>
        </div>
      </div>

      {/* 4 STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'REGISTERED BUSES', value: '486', increase: '+ 8.4%', icon: Bus, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'ACTIVE JOURNEYS', value: '1,284', increase: '+ 5.7%', icon: MapPin, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'ACTIVE PASSENGERS', value: '18,642', increase: '+ 11.2%', icon: Users, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: "TODAY'S REVENUE", value: 'Rs. 1.42M', increase: '+ 12.8%', icon: DollarSign, color: 'text-purple-600', bg: 'bg-purple-50' }
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-[#0a0c14] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 ${stat.bg} dark:bg-opacity-10 rounded-xl flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <span className="text-emerald-500 text-xs font-bold flex items-center gap-1 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-md">
                <TrendingUp className="w-3 h-3" /> {stat.increase}
              </span>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* MIDDLE SECTION (Charts / Health) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* REVENUE OVERVIEW */}
        <div className="lg:col-span-2 bg-white dark:bg-[#0a0c14] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-gray-900 dark:text-white">Revenue Overview</h3>
            <button className="text-blue-600 text-sm font-semibold hover:text-blue-700 flex items-center gap-1">
              View Report <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="h-64 flex items-end justify-between gap-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
              const heights = ['h-32', 'h-40', 'h-36', 'h-48', 'h-44', 'h-64', 'h-40'];
              const isToday = day === 'Sat';
              return (
                <div key={day} className="flex flex-col items-center flex-1 gap-3">
                  <div className={`w-full max-w-[32px] rounded-t-sm ${isToday ? 'bg-blue-600' : 'bg-blue-100 dark:bg-blue-900/30'} ${heights[i]} transition-all`}></div>
                  <span className="text-xs font-medium text-gray-400">{day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* SYSTEM HEALTH */}
        <div className="bg-white dark:bg-[#0a0c14] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900 dark:text-white">System Health</h3>
            <span className="text-xs text-gray-400 font-medium">Live</span>
          </div>
          <div className="space-y-6">
            {[
              { name: 'Payment Gateway', desc: 'All transactions processing', status: 'Operational', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
              { name: 'Authentication', desc: 'Login services running', status: 'Operational', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
              { name: 'GPS Tracking', desc: '482 buses reporting', status: 'Operational', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
              { name: 'Sync Service', desc: '18 offline transactions', status: 'Attention', icon: AlertTriangle, color: 'text-amber-500', bg: 'bg-amber-50' },
              { name: 'Database', desc: '99.98% availability', status: 'Operational', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
            ].map((sys, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${sys.bg} dark:bg-opacity-10`}>
                    <sys.icon className={`w-4 h-4 ${sys.color}`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-none mb-1">{sys.name}</h4>
                    <p className="text-[10px] text-gray-500">{sys.desc}</p>
                  </div>
                </div>
                <span className={`text-[10px] font-bold ${sys.status === 'Operational' ? 'text-emerald-500' : 'text-amber-500'}`}>
                  {sys.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: 'Add Bus Owner', desc: 'Register a new owner', icon: Plus },
          { title: 'Register Bus', desc: 'Add vehicle to fleet', icon: Bus },
          { title: 'Review Settlements', desc: '7 awaiting approval', icon: DollarSign },
          { title: 'Generate Report', desc: 'Download system data', icon: BarChart3 }
        ].map((btn, i) => (
          <button key={i} className="bg-white dark:bg-[#0a0c14] border border-gray-100 dark:border-gray-800 rounded-xl p-4 flex items-center gap-4 hover:border-blue-500 hover:shadow-md transition-all text-left group">
            <div className="w-10 h-10 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
              <btn.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white">{btn.title}</h4>
              <p className="text-[10px] text-gray-500">{btn.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-12">
        
        {/* RECENT TRANSACTIONS */}
        <div className="lg:col-span-2 bg-white dark:bg-[#0a0c14] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900 dark:text-white">Recent Transactions</h3>
            <button className="text-blue-600 text-sm font-semibold hover:text-blue-700">View All →</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th className="py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Transaction</th>
                  <th className="py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Passenger</th>
                  <th className="py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Bus</th>
                  <th className="py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Amount</th>
                  <th className="py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { id: 'TRX-842931', pass: 'N. Perera', bus: 'NB-4521', amt: 'Rs. 320', status: 'SUCCESS' },
                  { id: 'TRX-842930', pass: 'K. Silva', bus: 'NB-7184', amt: 'Rs. 180', status: 'SUCCESS' },
                  { id: 'TRX-842929', pass: 'A. Fernando', bus: 'NB-4521', amt: 'Rs. 250', status: 'SUCCESS' },
                  { id: 'TRX-842928', pass: 'S. Kumar', bus: 'NB-3298', amt: 'Rs. 150', status: 'PENDING' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/30">
                    <td className="py-4 font-semibold text-gray-900 dark:text-white">{row.id}</td>
                    <td className="py-4 text-gray-600 dark:text-gray-300">{row.pass}</td>
                    <td className="py-4 text-gray-600 dark:text-gray-300">{row.bus}</td>
                    <td className="py-4 text-gray-600 dark:text-gray-300">{row.amt}</td>
                    <td className="py-4">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${
                        row.status === 'SUCCESS' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10' : 'bg-amber-50 text-amber-600 dark:bg-amber-500/10'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SYSTEM ALERTS */}
        <div className="bg-white dark:bg-[#0a0c14] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900 dark:text-white">System Alerts</h3>
            <button className="text-blue-600 text-sm font-semibold hover:text-blue-700">View All →</button>
          </div>
          <div className="space-y-4">
            {[
              { title: 'Pending settlements', desc: '7 bus owner settlements require admin review.', time: '12m', type: 'warning' },
              { title: 'Offline transactions', desc: '18 transactions are waiting for synchronization.', time: '24m', type: 'error' },
              { title: 'New bus registration', desc: '12 new buses were added to the network today.', time: '1h', type: 'info' },
              { title: 'Scheduled maintenance', desc: 'System maintenance is scheduled for Sunday 02:00.', time: '3h', type: 'info' }
            ].map((alert, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/10">
                <div className="shrink-0 mt-0.5">
                  {alert.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-500" />}
                  {alert.type === 'error' && <AlertTriangle className="w-4 h-4 text-red-500" />}
                  {alert.type === 'info' && <Info className="w-4 h-4 text-blue-500" />}
                </div>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white">{alert.title}</h4>
                    <span className="text-[9px] font-semibold text-gray-400">{alert.time}</span>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-relaxed">{alert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </SidebarLayout>
  );
}
