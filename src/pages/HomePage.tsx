import { ArrowRight, Bitcoin, Play, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 rounded-full border border-cpurple/30 bg-cpurple/10 text-cpurple text-xs font-semibold tracking-wide">
            NEW ACADEMY 2.0
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            掌握 <span className="text-ccyan">Web3</span> 的未来<br />从这里开始
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            CryptoLearn为您提供最前沿的数字资产教育。通过我们的沉浸式模块，深入了解区块链、DeFi 与元宇宙。
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link to="/history" className="px-6 py-3 bg-ccyan hover:bg-ccyan/90 text-cbg font-semibold rounded-md transition-colors inline-block">
              立即开始学习
            </Link>
            <Link to="/whitepapers" className="px-6 py-3 bg-ccard border border-white/10 hover:border-white/30 text-white font-semibold rounded-md transition-colors inline-block">
              查看白皮书
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full bg-gray-200/5 aspect-square max-h-[400px] rounded-xl flex items-center justify-center border border-white/5 relative">
           <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop" alt="Hero 3D" className="w-full h-full object-cover rounded-xl opacity-60 mix-blend-luminosity" />
           <div className="absolute inset-0 bg-gradient-to-t from-cbg to-transparent opacity-80"></div>
           <span className="absolute text-gray-500">hero img</span>
        </div>
      </section>

      {/* Market Prices */}
      <section className="px-6 py-12 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">实时行情</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { symbol: 'BTC', price: '$64,231.50', change: '+2.45%', color: 'from-ccyan to-ccyan/10', positive: true },
            { symbol: 'ETH', price: '$3,450.20', change: '+1.12%', color: 'from-cpurple to-cpurple/10', positive: true },
            { symbol: 'SOL', price: '$145.88', change: '-0.85%', color: 'from-red-500 to-red-500/10', positive: false },
            { symbol: 'ADA', price: '$0.452', change: '+0.45%', color: 'from-purple-500 to-purple-500/10', positive: true },
          ].map(coin => (
            <div key={coin.symbol} className="bg-ccard rounded-xl p-5 border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <Bitcoin className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold">{coin.symbol}</span>
                </div>
                <span className={`text-sm ${coin.positive ? 'text-green-400' : 'text-red-400'}`}>{coin.change}</span>
              </div>
              <div className="text-2xl font-semibold mb-2">{coin.price}</div>
              <div className={`h-1 w-full bg-gradient-to-r ${coin.color} rounded-full`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Modules */}
      <section className="px-6 py-12 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-1">学习模块</h2>
            <p className="text-gray-400 text-sm">从零开始构建你的加密知识体系</p>
          </div>
          <Link to="/coins" className="text-sm flex items-center gap-1 hover:text-ccyan transition-colors">
            全部课程 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              level: '入门', time: '2小时', title: '区块链基础 101', 
              desc: '了解分布式账本技术的本质，以及它是如何改变信任机制的。', students: '4.8k' 
            },
            { 
              level: '中级', time: '5小时', title: 'DeFi 生态深度解析', 
              desc: '从流动性挖矿到去中心化借贷，探索无国界的金融新世界。', students: '2.1k' 
            },
            { 
              level: '高级', time: '12小时', title: '智能合约编程实战', 
              desc: '使用 Solidity 编写并部署你的第一个智能合约到以太坊主网。', students: '800+' 
            }
          ].map((course, i) => (
            <div key={i} className="bg-ccard rounded-xl overflow-hidden border border-white/5 group hover:border-white/10 transition-colors">
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                {/* Placeholder Image replacement */}
                <div className="absolute inset-0 bg-gradient-to-br from-cbg to-ccard"></div>
                <img src={`https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=800&auto=format&fit=crop&sig=${i}`} alt="" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-gray-700 text-gray-300">{course.level}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-ccyan/20 text-ccyan">{course.time}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{course.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-500">{course.students} 学生已参加</span>
                  <button className="w-8 h-8 rounded bg-ccyan flex items-center justify-center text-cbg hover:bg-ccyan/90 transition-colors">
                    <Play className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Whitepapers */}
      <section className="px-6 py-12 md:px-12 max-w-7xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-8">精选白皮书</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="gradient-border-box p-6 flex flex-col md:flex-row gap-6 items-center md:items-start group">
             <div className="w-20 h-24 rounded-lg bg-cbg border border-white/5 flex items-center justify-center shrink-0">
               <Download className="w-8 h-8 text-ccyan" />
             </div>
             <div>
               <h3 className="text-xl font-bold mb-2 group-hover:text-ccyan transition-colors">比特币：点对点电子现金系统</h3>
               <p className="text-gray-400 text-sm mb-4">中本聪 2008 年发布的奠基之作，定义了去中心化金融的起点。</p>
               <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer" className="text-ccyan text-sm font-semibold flex items-center gap-1 hover:underline">下载 PDF ↓</a>
             </div>
          </div>
          
          <div className="gradient-border-box p-6 flex flex-col md:flex-row gap-6 items-center md:items-start group">
             <div className="w-20 h-24 rounded-lg bg-cbg border border-white/5 flex items-center justify-center shrink-0">
               <Download className="w-8 h-8 text-cpurple" />
             </div>
             <div>
               <h3 className="text-xl font-bold mb-2 group-hover:text-cpurple transition-colors">以太坊：下一代智能合约平台</h3>
               <p className="text-gray-400 text-sm mb-4">Vitalik Buterin 撰写的技术文档，开启了可编程区块链的新纪元。</p>
               <a href="https://ethereum.org/en/whitepaper/" target="_blank" rel="noopener noreferrer" className="text-cpurple text-sm font-semibold flex items-center gap-1 hover:underline">下载 PDF ↓</a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
