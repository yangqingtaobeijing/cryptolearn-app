import { Link } from 'react-router-dom';
import { FileText, Database, Code, ShieldCheck, Landmark } from 'lucide-react';

export default function HistoryPage() {
  const events = [
    {
      date: '2008 OCT 31',
      title: '比特币白皮书发布',
      desc: '中本聪发表了《比特币：一种点对点的电子现金系统》，为去中心化金融奠定了理论基础。',
      tag: '创世之初',
      icon: FileText,
      img: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=800&auto=format&fit=crop'
    },
    {
      date: '2009 JAN 03',
      title: '创世区块诞生',
      desc: '比特币网络正式上线，中本聪在创世区块中留下了当天的泰晤士报头版标题，开启了加密货币时代。',
      tag: '区块 0',
      icon: Database,
      img: 'https://images.unsplash.com/photo-1622630998477-20b41cd0e025?q=80&w=800&auto=format&fit=crop'
    },
    {
      date: '2015 JUL 30',
      title: '以太坊主网上线',
      desc: '以太坊引入了智能合约概念，使区块链从单纯的账本进化为"世界计算机"，开启了可编程金融时代。',
      tag: '智能合约',
      icon: Code,
      img: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=800&auto=format&fit=crop'
    },
    {
      date: '2017 DEC',
      title: 'NFT 热潮兴起',
      desc: 'CryptoKitties 的流行让 NFT 进入大众视野，非同质化代币重新定义了数字资产的所有权和稀缺性。',
      tag: '数字收藏品',
      icon: ShieldCheck,
      img: 'https://images.unsplash.com/photo-1644361566696-3d442b5b482a?q=80&w=800&auto=format&fit=crop'
    },
    {
      date: '2020 SUMMER',
      title: 'DeFi 之夏',
      desc: '流动性挖矿和去中心化交易所(DEX)爆发式增长，金融服务开始脱离中介，直接运行在区块链上。',
      tag: '金融革命',
      icon: Landmark,
      img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="px-6 py-16 md:py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
          信任的演变
        </h1>
        <p className="text-gray-400 text-lg">
          从中心化到共识，从比特币到DeFi，探索构建数字时代价值体系的每一个里程碑。
        </p>
      </section>

      {/* Timeline */}
      <section className="px-6 pb-20 md:px-12 max-w-5xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-[24px] md:left-1/2 top-4 bottom-0 w-px bg-gradient-to-b from-cpurple via-ccyan to-transparent transform md:-translate-x-1/2 rounded-full"></div>

        <div className="space-y-24">
          {events.map((event, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Content Block */}
                <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div className="bg-ccard border border-white/5 p-8 rounded-2xl w-full max-w-md relative group hover:border-cpurple/30 transition-colors">
                    <div className="text-ccyan text-sm font-bold mb-2 tracking-wider">{event.date}</div>
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <p className="text-gray-400 mb-6">{event.desc}</p>
                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-cpurple border border-cpurple/20">
                      {event.tag}
                    </span>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-[24px] md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-cbg bg-ccard flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                   <event.icon className={`w-5 h-5 ${isEven ? 'text-ccyan' : 'text-cpurple'}`} />
                </div>

                {/* Image Block */}
                <div className={`w-full md:w-1/2 flex pl-16 md:pl-0 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-white/10 relative">
                     <div className="absolute inset-0 bg-gradient-to-tr from-cbg to-transparent z-10 opacity-60"></div>
                     <img src={event.img} alt={event.title} className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-700" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-gradient-to-t from-ccard/50 to-transparent border-t border-white/5 text-center mt-12 mx-auto max-w-4xl rounded-xl border-x mb-12">
        <h2 className="text-3xl font-bold mb-4">准备好书写历史了吗？</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          加入 CryptoLearn 学院，深入学习区块链核心技术，把握数字金融的未来脉搏。
        </p>
        <Link to="/coins" className="px-8 py-3 bg-ccyan hover:bg-ccyan/90 text-cbg font-bold rounded-full transition-colors text-lg inline-block">
          立即开启学习之旅
        </Link>
      </section>
    </div>
  );
}
