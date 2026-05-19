import { Link } from 'react-router-dom';
import { Bitcoin, Layers, Zap, Network, ExternalLink } from 'lucide-react';

export default function CoinsPage() {
  return (
    <div className="w-full flex-grow flex flex-col">
      {/* Header */}
      <section className="px-6 py-16 md:py-24 text-center max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          主流加密货币介绍
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          探索驱动未来去中心化金融的核心资产。从数字黄金到可编程合约，了解最受关注的区块链生态系统。
        </p>
      </section>

      {/* Coins Grid */}
      <section className="px-6 pb-12 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* BTC */}
          <div className="bg-ccard rounded-xl p-6 border-t-2 border-t-ccyan border border-white/5 flex flex-col group hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all">
            <div className="w-12 h-12 rounded-full bg-ccyan/20 text-ccyan flex items-center justify-center mb-6">
              <Bitcoin className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-ccyan mb-2">Bitcoin (BTC)</h2>
            <div className="inline-block px-2 py-1 bg-white/5 rounded text-xs text-gray-300 w-fit mb-6">数字黄金</div>
            <p className="text-gray-400 text-sm flex-grow mb-8 line-clamp-4">
              比特币是世界上第一种去中心化数字货币，由中本聪于2009年创立。它是基于点对点网络的开源协议，不依赖任何中央银行或第三方机构发行或结算。
            </p>
            <a href="https://bitcoin.org" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold flex items-center gap-1 hover:text-ccyan transition-colors">
              官方网站 <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* ETH */}
          <div className="bg-ccard rounded-xl p-6 border-t-2 border-t-cpurple border border-white/5 flex flex-col group hover:shadow-[0_0_30px_rgba(176,38,255,0.1)] transition-all">
            <div className="w-12 h-12 rounded-full bg-cpurple/20 text-cpurple flex items-center justify-center mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-cpurple mb-2">Ethereum (ETH)</h2>
            <div className="inline-block px-2 py-1 bg-white/5 rounded text-xs text-gray-300 w-fit mb-6">智能合约</div>
            <p className="text-gray-400 text-sm flex-grow mb-8 line-clamp-4">
              以太坊是一个支持智能合约和去中心化应用(dApps)的全球开源平台，由维塔利克·布特林创立。它的原生货币是以太币(ETH)，是驱动网络运行的燃料。
            </p>
            <a href="https://ethereum.org" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold flex items-center gap-1 hover:text-cpurple transition-colors">
              官方网站 <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* SOL */}
          <div className="bg-ccard rounded-xl p-6 border-t-2 border-t-green-400 border border-white/5 flex flex-col group hover:shadow-[0_0_30px_rgba(74,222,128,0.1)] transition-all">
            <div className="w-12 h-12 rounded-full bg-green-400/20 text-green-400 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-green-400 mb-2">Solana (SOL)</h2>
            <div className="inline-block px-2 py-1 bg-white/5 rounded text-xs text-gray-300 w-fit mb-6">高性能网络</div>
            <p className="text-gray-400 text-sm flex-grow mb-8 line-clamp-4">
              Solana 专注于大规模采用的高性能区块链，通过其独特的历史证明(PoH)机制提供极高的吞吐量和极低的交易费用。
            </p>
            <a href="https://solana.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold flex items-center gap-1 hover:text-green-400 transition-colors">
              官方网站 <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* ADA */}
          <div className="bg-ccard rounded-xl p-6 border-t-2 border-t-blue-400 border border-white/5 flex flex-col group hover:shadow-[0_0_30px_rgba(96,165,250,0.1)] transition-all">
            <div className="w-12 h-12 rounded-full bg-blue-400/20 text-blue-400 flex items-center justify-center mb-6">
              <Network className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-blue-400 mb-2">Cardano (ADA)</h2>
            <div className="inline-block px-2 py-1 bg-white/5 rounded text-xs text-gray-300 w-fit mb-6">学术驱动</div>
            <p className="text-gray-400 text-sm flex-grow mb-8 line-clamp-4">
              Cardano 是一个建立在同行评审研究基础上的区块链平台，旨在通过更可持续和可扩展的方式提供安全性，采用 Ouroboros 权益证明机制。
            </p>
            <a href="https://cardano.org" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold flex items-center gap-1 hover:text-blue-400 transition-colors">
              官方网站 <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 mt-auto bg-gradient-to-b from-transparent to-ccard border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">准备好开始学习了吗？</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            加入我们的学院，获取深入的分析报告和实时的市场洞察。从基础知识到高级交易策略，我们为您准备了全面的课程。
          </p>
          <Link to="/history" className="px-8 py-4 bg-ccyan hover:bg-ccyan/90 text-cbg font-bold rounded-lg transition-colors text-lg inline-block">
            立即免费加入
          </Link>
        </div>
      </section>
    </div>
  );
}
