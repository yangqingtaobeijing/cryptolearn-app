import { useState } from 'react';
import { ArrowRight, ExternalLink, Search, Activity, Layers, AppWindow, Globe, Wallet, Shield, BarChart, Code, Terminal, BookOpen, Lock } from 'lucide-react';

export default function WhitepapersPage() {
  const [activeTab, setActiveTab] = useState('区块浏览器');

  const tabs = [
    { id: '区块浏览器', icon: Globe, label: '区块浏览器' },
    { id: '钱包与托管', icon: Wallet, label: '钱包与托管' },
    { id: '数据统计与研究', icon: BarChart, label: '数据统计与研究' },
    { id: '开发者社区', icon: Code, label: '开发者社区' },
  ];

  const contentMap: Record<string, any[]> = {
    '区块浏览器': [
      { icon: Search, title: 'Blockchain.com', desc: '最悠久的比特币交易查询工具', color: 'text-ccyan', url: 'https://www.blockchain.com/explorer' },
      { icon: Layers, title: 'Etherscan', desc: '以太坊生态无可争议的标准浏览器', color: 'text-cpurple', url: 'https://etherscan.io' },
      { icon: Activity, title: 'Mempool.space', desc: '实时观测比特币内存池与费率', color: 'text-blue-400', url: 'https://mempool.space' },
      { icon: Layers, title: 'L2BEAT', desc: 'Layer 2 扩容方案的风险与数据追踪', color: 'text-orange-400', url: 'https://l2beat.com' },
      { icon: Activity, title: 'Dune Analytics', desc: '由社区驱动的链上数据可视化平台', color: 'text-green-400', url: 'https://dune.com' },
      { icon: Globe, title: 'CoinGecko', desc: '独立的加密货币市场行情深度分析', color: 'text-yellow-400', url: 'https://www.coingecko.com' },
    ],
    '钱包与托管': [
      { icon: Wallet, title: 'MetaMask', desc: '以太坊及EVM兼容链最普及的Web3钱包', color: 'text-orange-500', url: 'https://metamask.io' },
      { icon: Shield, title: 'Ledger', desc: '行业领先的硬件钱包安全冷存储方案', color: 'text-gray-300', url: 'https://www.ledger.com' },
      { icon: Lock, title: 'Trezor', desc: '首款开源比特币硬件冷钱包', color: 'text-green-500', url: 'https://trezor.io' },
      { icon: AppWindow, title: 'Phantom', desc: 'Solana生态最受欢迎的非托管钱包', color: 'text-purple-400', url: 'https://phantom.app' },
      { icon: Shield, title: 'Trust Wallet', desc: '支持多链资产的流行移动端去中心化钱包', color: 'text-blue-500', url: 'https://trustwallet.com' },
      { icon: Wallet, title: 'Coinbase Wallet', desc: '面向Web3探索的自我托管式钱包', color: 'text-blue-400', url: 'https://www.coinbase.com/wallet' },
    ],
    '数据统计与研究': [
      { icon: BarChart, title: 'CoinMarketCap', desc: '全球访问量最大的加密资产价格追踪网站', color: 'text-blue-500', url: 'https://coinmarketcap.com' },
      { icon: Activity, title: 'DefiLlama', desc: '完全开源的最全面的DeFi TVL仪表盘', color: 'text-gray-100', url: 'https://defillama.com' },
      { icon: Globe, title: 'Glassnode', desc: '深度链上数据与市场情报高级分析', color: 'text-gray-400', url: 'https://glassnode.com' },
      { icon: Layers, title: 'Messari', desc: '为专业人士打造的加密研究与数据工具', color: 'text-teal-400', url: 'https://messari.io' },
      { icon: BarChart, title: 'Token Terminal', desc: '评估加密协议基本面的财务数据平台', color: 'text-emerald-400', url: 'https://tokenterminal.com' },
      { icon: Search, title: 'Nansen', desc: '通过丰富标签增强链上数据的分析平台', color: 'text-indigo-400', url: 'https://www.nansen.ai' },
    ],
    '开发者社区': [
      { icon: Code, title: 'GitHub', desc: '开源加密与区块链底层代码的根据地', color: 'text-gray-100', url: 'https://github.com' },
      { icon: Terminal, title: 'Hardhat', desc: '专为专业以太坊开发者打造的开发环境', color: 'text-yellow-400', url: 'https://hardhat.org' },
      { icon: AppWindow, title: 'Alchemy', desc: '领先的Web3开发平台与节点API提供商', color: 'text-blue-400', url: 'https://www.alchemy.com' },
      { icon: BookOpen, title: 'Ethereum Foundation', desc: '官方的以太坊开发者资源与权威文档', color: 'text-cpurple', url: 'https://ethereum.org/en/developers/' },
      { icon: Code, title: 'Stack Exchange', desc: '比特币与以太坊等高质量技术问答社区', color: 'text-blue-300', url: 'https://ethereum.stackexchange.com' },
      { icon: Terminal, title: 'buildspace', desc: '面向Web3构建者与创造者的学习网络', color: 'text-yellow-300', url: 'https://buildspace.so' },
    ],
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="px-6 py-12 md:py-20 md:px-12 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cpurple/30 bg-cpurple/10 text-cpurple text-xs font-semibold mb-6">
          <Layers className="w-3.5 h-3.5" />
          学术与生态资源库
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl leading-tight">
          数字货币的基石：经典文献与全球生态
        </h1>
        <p className="text-gray-400 text-lg max-w-xl">
          深入探索重塑现代金融的原始代码。从比特币的去中心化愿景到以太坊的图灵完备合约，这些文献是加密文明的宪法。
        </p>
      </section>

      {/* Core Whitepapers */}
      <section className="px-6 py-8 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold">核心白皮书</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bitcoin (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 bg-ccard border border-white/5 rounded-xl overflow-hidden flex flex-col md:flex-row">
            <div className="p-8 flex-1 flex flex-col justify-center">
              <div className="text-ccyan text-sm font-semibold mb-2">2008年10月31日</div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">比特币：一种点对点的电子现金系统</h3>
              <p className="text-gray-400 mb-8 max-w-md">
                中本聪(Satoshi Nakamoto)提出的革命性方案，解决了双花问题，拉开了去中心化金融的序幕。
              </p>
              <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-ccyan hover:bg-ccyan/90 text-cbg font-semibold rounded-md transition-colors mt-auto md:mt-0">
                阅读白皮书 <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="w-full md:w-2/5 min-h-[300px] relative bg-slate-900 border-l border-white/5">
               <img src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop" alt="Bitcoin" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity" />
               <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ccard md:w-1/2"></div>
            </div>
          </div>

          {/* Ethereum (Spans 1 col) */}
          <div className="bg-ccard border border-white/5 rounded-xl p-8 flex flex-col justify-between group hover:border-cpurple/30 transition-colors">
            <div>
              <div className="text-gray-500 text-sm font-semibold mb-2">2013年</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cpurple transition-colors">以太坊：下一代智能合约与去中心化应用平台</h3>
              <p className="text-gray-400 text-sm">
                Vitalik Buterin 将区块链的应用范围扩展到了简单的支付之外，引入了可编程性。
              </p>
            </div>
            <a href="https://ethereum.org/en/whitepaper/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full mt-8 px-6 py-3 border border-white/10 hover:border-white/30 text-white font-semibold rounded-md transition-colors">
              深度解读 <AppWindow className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Global Ecosystem */}
      <section className="px-6 py-12 md:px-12 max-w-7xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-8">全球生态导航</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Nav */}
          <div className="space-y-2">
            {tabs.map((item, i) => (
              <button 
                key={i} 
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between p-4 rounded-lg border transition-colors ${
                activeTab === item.id ? 'bg-white/5 border-white/10 text-white' : 'border-transparent text-gray-400 hover:bg-white/5 hover:text-white'
              }`}>
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </button>
            ))}
          </div>

          {/* Grid Links */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {contentMap[activeTab].map((link: any, i: number) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-ccard border border-white/5 rounded-xl p-5 flex items-start gap-4 hover:border-white/20 transition-colors group">
                <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 ${link.color}`}>
                  <link.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold flex items-center gap-2 group-hover:text-ccyan transition-colors">
                    {link.title} <ArrowRight className="w-3 h-3 text-gray-500 -rotate-45" />
                  </h4>
                  <p className="text-gray-400 text-sm mt-1">{link.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
