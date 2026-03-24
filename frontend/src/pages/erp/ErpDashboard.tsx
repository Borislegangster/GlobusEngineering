import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  HardHatIcon,
  TrendingUpIcon,
  UsersIcon,
  AlertTriangleIcon,
  ClockIcon,
  PackageIcon,
  ShieldAlertIcon,
  FileTextIcon,
  GitBranchIcon,
  FileOutputIcon,
  ArrowUpRightIcon,
  ArrowDownRightIcon } from
'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend } from
'recharts';
const profitData = [
{
  name: 'Villa Bonapriso',
  margin: 22
},
{
  name: 'Immeuble Akwa',
  margin: 15
},
{
  name: 'Résidence Bonanjo',
  margin: 8
},
{
  name: 'Entrepôt Bonabéri',
  margin: -3
},
{
  name: 'Bureau Deïdo',
  margin: 12
}];

const expenseData = [
{
  name: 'Matériaux',
  value: 45,
  color: '#F97316'
},
{
  name: "Main d'œuvre",
  value: 30,
  color: '#1D4ED8'
},
{
  name: 'Logistique',
  value: 12,
  color: '#10B981'
},
{
  name: 'Sous-traitance',
  value: 8,
  color: '#8B5CF6'
},
{
  name: 'Divers',
  value: 5,
  color: '#9CA3AF'
}];

const recentActivity = [
{
  id: 1,
  icon: ClockIcon,
  color: 'text-green-600',
  bg: 'bg-green-100',
  title: 'Pointage: 45 ouvriers présents ce matin',
  time: 'Il y a 1h'
},
{
  id: 2,
  icon: PackageIcon,
  color: 'text-blue-600',
  bg: 'bg-blue-100',
  title: 'DA #127 validée — Ciment 50 tonnes',
  time: 'Il y a 2h'
},
{
  id: 3,
  icon: ShieldAlertIcon,
  color: 'text-red-600',
  bg: 'bg-red-100',
  title: 'Incident QHSE déclaré — Chantier Akwa',
  time: 'Il y a 3h'
},
{
  id: 4,
  icon: FileTextIcon,
  color: 'text-purple-600',
  bg: 'bg-purple-100',
  title: 'Facture sous-traitant reçue — Menuiserie Bois',
  time: 'Hier'
},
{
  id: 5,
  icon: GitBranchIcon,
  color: 'text-orange-600',
  bg: 'bg-orange-100',
  title: 'Plan V3 Architecture uploadé — Villa Bonapriso',
  time: 'Hier'
},
{
  id: 6,
  icon: FileOutputIcon,
  color: 'text-gray-600',
  bg: 'bg-gray-100',
  title: 'Contrat généré — Ouvrier temporaire #89',
  time: '2 jours'
}];

const alerts = [
{
  id: 1,
  title: 'Retard chantier Akwa',
  desc: '15 jours de retard sur le planning initial',
  color: 'border-red-500',
  bg: 'bg-red-50',
  textColor: 'text-red-700'
},
{
  id: 2,
  title: 'Dépassement budget Bonabéri',
  desc: '+3% au-dessus du budget prévu',
  color: 'border-orange-500',
  bg: 'bg-orange-50',
  textColor: 'text-orange-700'
},
{
  id: 3,
  title: 'Stock ciment bas',
  desc: 'Seulement 5 tonnes restantes (seuil: 10T)',
  color: 'border-yellow-500',
  bg: 'bg-yellow-50',
  textColor: 'text-yellow-700'
}];

const formatCurrency = (value: number) =>
new Intl.NumberFormat('fr-FR', {
  maximumFractionDigits: 0
}).format(value) + ' FCFA';
const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};
export function ErpDashboard() {
  const today = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="space-y-6 max-w-[1400px] mx-auto">
      
      {/* Welcome */}
      <motion.div
        variants={fadeUp}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        
        <div>
          <h2 className="font-montserrat font-extrabold text-2xl text-globus-blue-dark">
            Bienvenue, Admin 👋
          </h2>
          <p className="font-opensans text-sm text-globus-gray capitalize">
            {today} — Vue d'ensemble de l'activité Globus Engineering
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-green-600 font-opensans">
            Système opérationnel
          </span>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          variants={fadeUp}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <HardHatIcon className="w-5 h-5 text-green-600" />
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-green-600">
              <ArrowUpRightIcon className="w-3 h-3" /> +2
            </span>
          </div>
          <p className="font-montserrat font-extrabold text-2xl text-globus-blue-dark">
            7
          </p>
          <p className="text-xs text-globus-gray font-opensans">
            Chantiers Actifs
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <TrendingUpIcon className="w-5 h-5 text-blue-600" />
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-green-600">
              <ArrowUpRightIcon className="w-3 h-3" /> +18%
            </span>
          </div>
          <p className="font-montserrat font-extrabold text-xl text-globus-blue-dark">
            125M
          </p>
          <p className="text-xs text-globus-gray font-opensans">
            CA Mensuel (FCFA)
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <UsersIcon className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-xs text-globus-gray font-opensans">
              12 temp.
            </span>
          </div>
          <p className="font-montserrat font-extrabold text-2xl text-globus-blue-dark">
            156
          </p>
          <p className="text-xs text-globus-gray font-opensans">
            Employés Actifs
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <AlertTriangleIcon className="w-5 h-5 text-red-600" />
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-red-600">
              <ArrowDownRightIcon className="w-3 h-3" /> Urgent
            </span>
          </div>
          <p className="font-montserrat font-extrabold text-2xl text-globus-blue-dark">
            3
          </p>
          <p className="text-xs text-globus-gray font-opensans">
            Alertes Actives
          </p>
        </motion.div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          variants={fadeUp}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          
          <h3 className="font-montserrat font-bold text-base text-globus-blue-dark mb-4">
            Rentabilité par Projet (%)
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={profitData}
                layout="vertical"
                margin={{
                  top: 0,
                  right: 20,
                  left: 0,
                  bottom: 0
                }}>
                
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={true}
                  vertical={false}
                  stroke="#f3f4f6" />
                
                <XAxis
                  type="number"
                  tick={{
                    fontSize: 11,
                    fill: '#6b7280'
                  }}
                  axisLine={false}
                  tickLine={false}
                  domain={[-10, 30]}
                  tickFormatter={(v) => `${v}%`} />
                
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{
                    fontSize: 11,
                    fill: '#374151'
                  }}
                  axisLine={false}
                  tickLine={false}
                  width={120} />
                
                <Tooltip
                  formatter={(value: number) => [`${value}%`, 'Marge']}
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    fontSize: '12px'
                  }} />
                
                <Bar dataKey="margin" radius={[0, 4, 4, 0]} maxBarSize={24}>
                  {profitData.map((entry, index) =>
                  <Cell
                    key={index}
                    fill={entry.margin >= 0 ? '#10B981' : '#EF4444'} />

                  )}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          
          <h3 className="font-montserrat font-bold text-base text-globus-blue-dark mb-4">
            Répartition des Dépenses
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  dataKey="value"
                  stroke="none"
                  paddingAngle={3}>
                  
                  {expenseData.map((entry, index) =>
                  <Cell key={index} fill={entry.color} />
                  )}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [`${value}%`, '']}
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    fontSize: '12px'
                  }} />
                
                <Legend
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{
                    fontSize: '11px'
                  }} />
                
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          variants={fadeUp}
          className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          
          <h3 className="font-montserrat font-bold text-base text-globus-blue-dark mb-5">
            Activité Récente
          </h3>
          <div className="space-y-4">
            {recentActivity.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="flex items-start gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
                    
                    <Icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-opensans text-sm text-gray-800 leading-snug">
                      {item.title}
                    </p>
                    <p className="font-opensans text-xs text-globus-gray mt-0.5">
                      {item.time}
                    </p>
                  </div>
                </div>);

            })}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          
          <h3 className="font-montserrat font-bold text-base text-globus-blue-dark mb-5 flex items-center gap-2">
            <AlertTriangleIcon className="w-4 h-4 text-red-500" /> Alertes
            Critiques
          </h3>
          <div className="space-y-3">
            {alerts.map((alert) =>
            <div
              key={alert.id}
              className={`${alert.bg} border-l-4 ${alert.color} rounded-lg p-3`}>
              
                <p
                className={`font-montserrat font-bold text-sm ${alert.textColor}`}>
                
                  {alert.title}
                </p>
                <p className="font-opensans text-xs text-gray-600 mt-1">
                  {alert.desc}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>);

}