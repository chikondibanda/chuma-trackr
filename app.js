const { createApp, ref, onMounted, computed, watch } = Vue;

const ComponentDashboard = {
  template: `
    <div class="max-w-7xl mx-auto p-4 md:p-8 flex flex-col gap-6 md:gap-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h2 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Welcome back, User 👋</h2>
                <p class="text-slate-500 dark:text-slate-400 mt-1">Here is your financial overview for today.</p>
            </div>
            <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm">
                    <span class="material-symbols-outlined text-slate-500 dark:text-slate-400">person</span>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div class="flex flex-col gap-3 p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between">
                    <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Balance</p>
                    <div class="p-1.5 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                        <span class="material-symbols-outlined text-[20px]">account_balance</span>
                    </div>
                </div>
                <div>
                    <p class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">$12,450.00</p>
                    <div class="flex items-center gap-1 mt-1 text-green-600 dark:text-green-400 text-sm font-medium">
                        <span class="material-symbols-outlined text-[16px]">trending_up</span>
                        <span>+5% vs last month</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-3 p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between">
                    <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Income</p>
                    <div class="p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                        <span class="material-symbols-outlined text-[20px]">payments</span>
                    </div>
                </div>
                <div>
                    <p class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">$4,200.00</p>
                    <div class="flex items-center gap-1 mt-1 text-green-600 dark:text-green-400 text-sm font-medium">
                        <span class="material-symbols-outlined text-[16px]">trending_up</span>
                        <span>+2% vs last month</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-3 p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between">
                    <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Expenses</p>
                    <div class="p-1.5 rounded-md bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                        <span class="material-symbols-outlined text-[20px]">credit_card</span>
                    </div>
                </div>
                <div>
                    <p class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">$2,100.00</p>
                    <div class="flex items-center gap-1 mt-1 text-red-500 dark:text-red-400 text-sm font-medium">
                        <span class="material-symbols-outlined text-[16px]">trending_down</span>
                        <span>-1% vs last month</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-3 p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between">
                    <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Savings Rate</p>
                    <div class="p-1.5 rounded-md bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">
                        <span class="material-symbols-outlined text-[20px]">savings</span>
                    </div>
                </div>
                <div>
                    <p class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">50%</p>
                    <div class="flex items-center gap-1 mt-1 text-green-600 dark:text-green-400 text-sm font-medium">
                        <span class="material-symbols-outlined text-[16px]">trending_up</span>
                        <span>+5% vs last month</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div class="xl:col-span-2 flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white">Cash Flow</h3>
                        <p class="text-sm text-slate-500 dark:text-slate-400">Income vs Expenses over last 6 months</p>
                    </div>
                    <div class="flex items-center gap-2 text-xs">
                        <span class="w-2 h-2 rounded-full bg-primary"></span>
                        <span class="text-slate-600 dark:text-slate-300">Income</span>
                        <span class="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 ml-2"></span>
                        <span class="text-slate-600 dark:text-slate-300">Expense</span>
                    </div>
                </div>
                <div class="p-6 flex-1 min-h-[300px] flex items-end justify-between gap-2 md:gap-4 overflow-hidden">
                    <div v-for="month in ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']" :key="month" class="flex flex-col items-center gap-2 flex-1 h-full justify-end group cursor-pointer">
                        <div class="w-full flex justify-center items-end gap-1 h-[80%] relative">
                            <div class="w-1/3 bg-slate-200 dark:bg-slate-700 rounded-t-sm h-[40%] group-hover:bg-slate-300 transition-all"></div>
                            <div class="w-1/3 bg-primary rounded-t-sm h-[70%] group-hover:bg-primary/90 transition-all"></div>
                        </div>
                        <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">{{month}}</span>
                    </div>
                </div>
            </div>
            <div class="xl:col-span-1 flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white">Budget Progress</h3>
                    <button class="text-primary text-sm font-bold hover:underline">Edit</button>
                </div>
                <div class="p-6 flex flex-col gap-6">
                    <div v-for="budget in budgets" :key="budget.name" class="flex flex-col gap-2">
                        <div class="flex justify-between items-end">
                            <div class="flex items-center gap-2">
                                <div :class="budget.bg" class="w-8 h-8 rounded-full flex items-center justify-center">
                                    <span class="material-symbols-outlined text-[18px]">{{budget.icon}}</span>
                                </div>
                                <span class="text-sm font-semibold text-slate-700 dark:text-slate-200">{{budget.name}}</span>
                            </div>
                            <div class="text-sm font-medium">
                                <span class="text-slate-900 dark:text-white">\${{budget.spent}}</span>
                                <span class="text-slate-400"> / \${{budget.limit}}</span>
                            </div>
                        </div>
                        <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                            <div :class="budget.color" class="h-1.5 rounded-full" :style="{ width: (budget.spent/budget.limit*100) + '%' }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <h3 class="text-lg font-bold text-slate-900 dark:text-white">Recent Transactions</h3>
                <a href="#visualizations" class="text-primary text-sm font-bold hover:underline flex items-center gap-1">
                    View All <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-slate-100 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50">
                            <th class="p-4 font-semibold">Transaction</th>
                            <th class="p-4 font-semibold">Category</th>
                            <th class="p-4 font-semibold">Date</th>
                            <th class="p-4 font-semibold text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm">
                        <tr v-for="tx in transactions" :key="tx.id" class="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b border-slate-50 dark:border-slate-800">
                            <td class="p-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                                        <span class="material-symbols-outlined text-slate-500">{{tx.icon}}</span>
                                    </div>
                                    <div>
                                        <p class="font-bold text-slate-900 dark:text-white">{{tx.name}}</p>
                                        <p class="text-xs text-slate-500">{{tx.type}}</p>
                                    </div>
                                </div>
                            </td>
                            <td class="p-4">
                                <span :class="tx.catColor" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium">
                                    {{tx.category}}
                                </span>
                            </td>
                            <td class="p-4 text-slate-600 dark:text-slate-400">{{tx.date}}</td>
                            <td class="p-4 text-right font-bold" :class="tx.amount > 0 ? 'text-green-600 dark:text-green-400' : 'text-slate-900 dark:text-white'">
                                {{tx.amount > 0 ? '+' : ''}}\${{Math.abs(tx.amount).toFixed(2)}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `,
  setup() {
    const budgets = [
      { name: 'Food & Dining', spent: 350, limit: 500, icon: 'restaurant', bg: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600', color: 'bg-orange-500' },
      { name: 'Transport', spent: 120, limit: 200, icon: 'commute', bg: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600', color: 'bg-blue-500' },
      { name: 'Entertainment', spent: 190, limit: 200, icon: 'movie', bg: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600', color: 'bg-purple-500' }
    ];
    const transactions = [
      { id: 1, name: 'Spotify Premium', type: 'Subscription', category: 'Entertainment', date: 'Oct 24, 2023', amount: -12.99, icon: 'music_note', catColor: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' },
      { id: 2, name: 'Upwork Earnings', type: 'Freelance', category: 'Income', date: 'Oct 23, 2023', amount: 850.00, icon: 'work', catColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' }
    ];
    return { budgets, transactions };
  }
};

const ComponentVisualizations = {
  template: `
    <div class="max-w-7xl mx-auto w-full p-4 md:p-8 lg:p-10 space-y-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div class="flex flex-col gap-1">
                <h1 class="text-text-main dark:text-white text-3xl md:text-4xl font-extrabold tracking-tight">Spending Visualizations</h1>
                <p class="text-text-secondary dark:text-gray-400 text-base">Overview for October 2023</p>
            </div>
            <div class="flex items-center gap-3 w-full md:w-auto">
                <button class="flex-1 md:flex-none items-center justify-center gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/50 text-slate-900 dark:text-white px-4 h-10 rounded-lg text-sm font-semibold transition-all">
                    <span class="material-symbols-outlined text-lg">calendar_month</span>
                    <span>This Month</span>
                </button>
                <button data-micromodal-trigger="modal-download-report" class="flex-1 md:flex-none items-center justify-center gap-2 bg-primary text-black hover:bg-primary/90 px-4 h-10 rounded-lg text-sm font-bold transition-all shadow-sm shadow-primary/20">
                    <span class="material-symbols-outlined text-lg">download</span>
                    <span>Report</span>
                </button>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                <p class="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Total Spent</p>
                <p class="text-slate-900 dark:text-white text-3xl font-black tracking-tight">$2,450.00</p>
            </div>
            <div class="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                <p class="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Top Category</p>
                <p class="text-slate-900 dark:text-white text-3xl font-black tracking-tight">Groceries</p>
            </div>
            <div class="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                <p class="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Avg Daily Spend</p>
                <p class="text-slate-900 dark:text-white text-3xl font-black tracking-tight">$79.03</p>
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2 bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm h-[400px] flex items-center justify-center">
                <p class="text-slate-400">Cash Flow Visualization</p>
            </div>
            <div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm h-[400px] flex items-center justify-center">
                <p class="text-slate-400">Category Breakdown</p>
            </div>
        </div>
    </div>
    `
};

const ComponentBudgets = {
  template: `
    <div class="max-w-[1200px] mx-auto p-4 md:p-8 flex flex-col gap-8">
        <div class="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
            <div class="flex flex-col gap-1">
                <h2 class="text-slate-900 dark:text-white text-3xl md:text-4xl font-extrabold tracking-tight">My Monthly Budgets</h2>
                <p class="text-slate-500 dark:text-slate-400 text-base font-medium">Keep track of your spending goals and manage categories.</p>
            </div>
            <button data-micromodal-trigger="modal-create-budget" class="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-slate-900 text-sm font-bold shadow-lg shadow-primary/20 transition-all">
                <span class="material-symbols-outlined text-[20px]">add</span>
                <span>Create Budget</span>
            </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="flex flex-col gap-3 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                <div class="flex justify-between items-start z-10">
                    <div>
                        <p class="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Total Budgeted</p>
                        <p class="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">$3,500.00</p>
                    </div>
                    <div class="p-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-primary">
                        <span class="material-symbols-outlined">account_balance_wallet</span>
                    </div>
                </div>
                <div class="mt-2 flex items-center gap-2 text-xs font-medium text-green-600 dark:text-green-400">
                    <span class="material-symbols-outlined text-[16px]">trending_up</span>
                    <span>+12% from last month</span>
                </div>
            </div>
            <div class="flex flex-col gap-3 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                <div class="flex justify-between items-start z-10">
                    <div>
                        <p class="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Total Spent</p>
                        <p class="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">$1,240.00</p>
                    </div>
                    <div class="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                        <span class="material-symbols-outlined">shopping_cart</span>
                    </div>
                </div>
                <div class="mt-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                    <div class="bg-blue-500 h-1.5 rounded-full" style="width: 35%"></div>
                </div>
            </div>
            <div class="flex flex-col gap-3 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                <div class="flex justify-between items-start z-10">
                    <div>
                        <p class="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Remaining</p>
                        <p class="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">$2,260.00</p>
                    </div>
                    <div class="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
                        <span class="material-symbols-outlined">savings</span>
                    </div>
                </div>
                <div class="mt-2 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span>Safe to spend approx. $75/day</span>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div class="flex flex-col rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div class="flex justify-between items-start mb-4">
                    <div class="flex items-center gap-3">
                        <div class="size-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-700 dark:text-green-400">
                            <span class="material-symbols-outlined">shopping_basket</span>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg text-slate-900 dark:text-white">Groceries</h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400">Monthly limit: $500</p>
                        </div>
                    </div>
                    <button class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <span class="material-symbols-outlined">more_vert</span>
                    </button>
                </div>
                <div class="mb-4">
                    <div class="flex items-baseline gap-1 mb-2">
                        <span class="text-2xl font-bold text-slate-900 dark:text-white">$300</span>
                        <span class="text-sm text-slate-500 font-medium">spent</span>
                    </div>
                    <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mb-2">
                        <div class="bg-primary h-2 rounded-full transition-all duration-500" style="width: 60%"></div>
                    </div>
                    <div class="flex justify-between text-xs font-medium">
                        <span class="text-green-600 dark:text-green-400">60% used</span>
                        <span class="text-slate-500 dark:text-slate-400">$200 remaining</span>
                    </div>
                </div>
            </div>
            <button class="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-800 p-5 min-h-[180px] hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                <div class="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors mb-3">
                    <span class="material-symbols-outlined">add</span>
                </div>
                <span class="font-bold text-slate-900 dark:text-slate-100">Add New Category</span>
                <span class="text-sm text-slate-500 mt-1">Setup a new monthly budget</span>
            </button>
        </div>
    </div>
    `
};

const ComponentSettings = {
  template: `
    <div class="max-w-4xl mx-auto p-4 md:p-8 lg:p-10 space-y-8">
        <div class="flex flex-col gap-1">
            <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Settings</h1>
            <p class="text-slate-500 dark:text-slate-400 text-base">Manage your preferences and application settings.</p>
        </div>
        <div class="grid grid-cols-1 gap-6">
            <section class="bg-surface-light dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm overflow-hidden">
                <h2 class="text-lg font-bold mb-6 flex items-center gap-2">
                    <span class="material-symbols-outlined text-primary">tune</span>General Preferences
                </h2>
                <div class="space-y-6">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <p class="font-bold text-slate-900 dark:text-white">Base Currency</p>
                            <p class="text-sm text-slate-500 dark:text-slate-400">Select the currency for all your transactions.</p>
                        </div>
                        <select v-model="currency" class="w-full md:w-48 h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                            <option value="GBP">GBP (£)</option>
                            <option value="MWK">MWK (MK)</option>
                        </select>
                    </div>
                    <div class="border-t border-slate-100 dark:border-slate-800 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <p class="font-bold text-slate-900 dark:text-white">Dark Mode</p>
                            <p class="text-sm text-slate-500 dark:text-slate-400">Toggle between light and dark theme.</p>
                        </div>
                        <button :class="isDark ? 'bg-primary' : 'bg-slate-200'" class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none" @click="toggleTheme">
                            <span :class="isDark ? 'translate-x-6' : 'translate-x-1'" class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"></span>
                        </button>
                    </div>
                </div>
            </section>
            <section class="bg-surface-light dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm overflow-hidden">
                <h2 class="text-lg font-bold mb-6 flex items-center gap-2">
                    <span class="material-symbols-outlined text-primary">category</span>Manage Categories
                </h2>
                <div class="space-y-4">
                    <div class="flex gap-2">
                        <input v-model="newCat" class="flex-1 h-10 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="New category name..." type="text" @keyup.enter="addCat" />
                        <button class="h-10 px-4 bg-primary text-slate-900 font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2" @click="addCat">
                            <span class="material-symbols-outlined text-[20px]">add</span><span>Add</span>
                        </button>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                        <div v-for="cat in categories" :key="cat" class="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 group">
                            <div class="flex items-center gap-3">
                                <span class="material-symbols-outlined text-slate-400">label</span>
                                <span class="text-sm font-medium">{{cat}}</span>
                            </div>
                            <button class="text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100" @click="removeCat(cat)">
                                <span class="material-symbols-outlined text-[18px]">delete</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    `,
  props: ['categories', 'currency'],
  emits: ['update:currency', 'update:categories'],
  setup(props, { emit }) {
    const newCat = ref('');
    const isDark = ref(document.documentElement.classList.contains('dark'));
    const toggleTheme = () => {
      isDark.value = !isDark.value;
      document.documentElement.classList.toggle('dark', isDark.value);
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
    };
    const addCat = () => {
      if (newCat.value) {
        emit('update:categories', [...props.categories, newCat.value]);
        newCat.value = '';
      }
    };
    const removeCat = (cat) => {
      emit('update:categories', props.categories.filter(c => c !== cat));
    };
    const currency = computed({
      get: () => props.currency,
      set: (val) => emit('update:currency', val)
    });
    return { isDark, toggleTheme, newCat, addCat, removeCat, currency };
  }
};

const app = createApp({
  setup() {
    const currentView = ref('dashboard');
    const mobileMenuOpen = ref(false);
    const categories = ref(['Groceries', 'Rent & Housing', 'Transport', 'Entertainment', 'Salary']);
    const currency = ref('USD');

    const menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
      { id: 'visualizations', label: 'Transactions', icon: 'receipt_long' },
      { id: 'budgets', label: 'Budget', icon: 'pie_chart' },
    ];

    const updateView = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['dashboard', 'visualizations', 'budgets', 'settings'].includes(hash)) {
        currentView.value = hash;
      } else if (!hash) {
        currentView.value = 'dashboard';
      }
      mobileMenuOpen.value = false;
    };

    onMounted(() => {
      window.addEventListener('hashchange', updateView);
      updateView();
      try {
        MicroModal.init({
          openTrigger: 'data-micromodal-trigger',
          closeTrigger: 'data-micromodal-close',
          disableScroll: true,
          awaitOpenAnimation: true,
          awaitCloseAnimation: true
        });
      } catch (e) {
        console.error("MicroModal init failed", e);
      }
      if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    });

    // Watch view changes to re-init micromodal if needed (though global init should handle triggers)
    watch(currentView, () => {
      // Vue updates DOM asynchronously
      setTimeout(() => {
        try { MicroModal.init({ /* same config */ }); } catch (e) { }
      }, 0);
    });

    const saveTransaction = () => { console.log("Saving..."); MicroModal.close('modal-add-transaction'); };
    const saveBudget = () => { console.log("Saving Budget..."); MicroModal.close('modal-create-budget'); };
    const downloadReport = () => { console.log("Downloading..."); MicroModal.close('modal-download-report'); };

    return {
      currentView, mobileMenuOpen, menuItems, categories, currency,
      saveTransaction, saveBudget, downloadReport
    };
  }
});

app.component('component-dashboard', ComponentDashboard);
app.component('component-visualizations', ComponentVisualizations);
app.component('component-budgets', ComponentBudgets);
app.component('component-settings', ComponentSettings);

app.mount('#app');
