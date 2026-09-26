import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Activity, 
  Users, 
  Building2, 
  Bus, 
  Ticket, 
  CreditCard, 
  Banknote, 
  BarChart3, 
  Settings,
  Search,
  Bell
} from 'lucide-react';

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { section: 'OVERVIEW', items: [
      { name: 'Dashboard', icon: LayoutDashboard, path: '/admin', badge: null },
      { name: 'Live Operations', icon: Activity, path: '/admin/live', badge: '24' },
    ]},
    { section: 'MANAGEMENT', items: [
      { name: 'Passengers', icon: Users, path: '/admin/passengers', badge: null },
      { name: 'Bus Owners', icon: Building2, path: '/admin/owners', badge: null },
      { name: 'Fleet Management', icon: Bus, path: '/admin/fleet', badge: null },
      { name: 'Conductors', icon: Ticket, path: '/admin/conductors', badge: null },
    ]},
    { section: 'FINANCE', items: [
      { name: 'Transactions', icon: CreditCard, path: '/admin/transactions', badge: null },
      { name: 'Settlements', icon: Banknote, path: '/admin/settlements', badge: '7' },
    ]},
    { section: 'SYSTEM', items: [
      { name: 'Reports', icon: BarChart3, path: '/admin/reports', badge: null },
      { name: 'Settings', icon: Settings, path: '/admin/settings', badge: null },
    ]}
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-[#06080f] font-sans overflow-hidden">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white dark:bg-[#0a0c14] border-r border-gray-200 dark:border-gray-800 flex flex-col hidden md:flex">
        
        {/* LOGO AREA */}
        <div className="h-20 flex items-center px-6 border-b border-gray-100 dark:border-gray-800/50">
          <img src="/logo.png" alt="TapRide Logo" className="w-10 h-10 rounded-xl shadow-sm mr-3" />
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">TapRide</h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Admin Portal</p>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8 scrollbar-hide">
          {navigation.map((group, idx) => (
            <div key={idx}>
              <h3 className="px-3 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                {group.section}
              </h3>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <button
                      key={item.name}
                      onClick={() => navigate(item.path)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold' 
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`} strokeWidth={isActive ? 2.5 : 2} />
                        <span className="text-sm">{item.name}</span>
                      </div>
                      {item.badge && (
                        <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM USER PROFILE */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-800/50">
          <div 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800/50 cursor-pointer transition-colors"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">
              AD
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold text-gray-900 dark:text-white truncate">System Admin</p>
              <p className="text-xs text-gray-500 truncate">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        
        {/* TOP HEADER */}
        <header className="h-20 bg-white dark:bg-[#0a0c14] border-b border-gray-100 dark:border-gray-800 flex items-center justify-between px-8 z-10 shrink-0">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h2>
            <p className="text-sm text-gray-500">Monitor and manage the TapRide ecosystem</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search users, buses, transactions..." 
                className="pl-9 pr-4 py-2 bg-gray-50 dark:bg-[#121622] border border-gray-200 dark:border-gray-700 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <button className="relative p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-[#0a0c14]"></span>
            </button>
          </div>
        </header>

        {/* SCROLLABLE PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-8 bg-gray-50 dark:bg-[#06080f]">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
        
      </div>
    </div>
  );
}
