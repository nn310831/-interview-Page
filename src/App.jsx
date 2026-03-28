import React, { useState, useEffect } from 'react';
import { 
  Code, Database, BrainCircuit, Server, Terminal, 
  ShieldAlert,
  Briefcase, Zap, Cpu, Lightbulb, Compass, Rocket,
  LineChart, Activity, FileText
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events for navbar styling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'positioning', 'advantages', 'skills', 'judge-ai', 'projects'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2 text-blue-900 cursor-pointer" onClick={() => scrollTo('hero')}>
            <Terminal className="w-6 h-6 text-blue-600" />
            <span>Chen-An Liu</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            {['關於我', '個人定位', '核心優勢', '核心技能', 'Project: JUDGE AI', '其他專案'].map((item, idx) => {
              const ids = ['about', 'positioning', 'advantages', 'skills', 'judge-ai', 'projects'];
              return (
                <button 
                  key={idx} 
                  onClick={() => scrollTo(ids[idx])}
                  className={`hover:text-blue-600 transition-colors ${activeSection === ids[idx] ? 'text-blue-600 font-bold' : ''}`}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <button onClick={() => scrollTo('judge-ai')} className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
            探索專案
          </button>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-blue-50/50 to-slate-50">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-1 mb-8 shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              {/* Replace with actual image */}
              <span className="text-slate-400 text-sm font-medium">[個人照片]</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            劉宸銨 <span className="text-blue-600 font-light">Liu Chen-An</span>
          </h1>
        </div>
      </section>

      {/* 2. About Me */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                <Terminal className="text-blue-600" /> 關於我
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  目前就讀於<strong>國立臺北科技大學 資訊與財金管理系</strong>（預計 2027 年畢業）。我擁有資訊與財金的知識基礎，對資料結構與演算法（Big-O、高等樹演算法）抱有極大熱情。
                </p>
                <p>
                  為了進一步深化技術底蘊並準備報考資工所，我目前正積極自學<strong>離散數學</strong>與<strong>計算機組織（記憶體結構）</strong>。對我而言，鑽研這些底層知識不僅是為了升學，更是為了透徹理解軟體開發的本質，從而在未來的系統設計中，精準拿捏「軟體邏輯」與「硬體資源」之間的完美效能平衡。
                </p>
                <p>
                  在實務應用上，我不僅追求程式效率優化，更積極將技術落地。近期專注於<strong> AI 安全性與對抗審計 (Red Teaming)</strong> 領域，目前正與專題團隊開發基於 LLM 的自動化評估系統。
                </p>
              </div>
            </div>
            <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
              {[
                { label: '學歷背景', value: <>臺北科技大學<br/>資訊與財金管理系</>, icon: <FileText className="text-blue-500 w-6 h-6 mb-2"/> },
                { label: '核心語言', value: 'C++ / Java / Python', icon: <Code className="text-blue-500 w-6 h-6 mb-2"/> },
                { label: '正在研究', value: 'AI 安全 / 演算法', icon: <BrainCircuit className="text-blue-500 w-6 h-6 mb-2"/> },
                { label: '畢業年份', value: '2027', icon: <Activity className="text-blue-500 w-6 h-6 mb-2"/> },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                  {item.icon}
                  <div className="text-sm text-slate-500 mb-1">{item.label}</div>
                  <div className="font-semibold text-slate-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 個人定位 (Personal Positioning) */}
      <section id="positioning" className="pb-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto pt-16 border-t border-slate-100">
          <h3 className="text-2xl font-bold mb-10 text-center text-slate-900">核心價值與個人定位</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 定位 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-300 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">商業與技術</h4>
                <div className="text-xs font-mono text-blue-600 mb-5">Bridge between Business & Tech</div>
                <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <li>
                    <strong className="text-slate-800">自帶商業濾鏡：</strong> 具備「資訊與財金管理」雙核心背景，能秒懂 PM 與業務單位的真實需求。
                  </li>
                  <li>
                    <strong className="text-slate-800">數據驅動決策：</strong> 擁有處理數萬筆複雜數據的實戰經驗，能將生硬的數據分析結果對接回「風險調整後收益」、「分眾定價」等高階商業目標，並轉化為可執行的技術方案。
                  </li>
                </ul>
              </div>

              {/* 定位 2 */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-purple-300 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">AI 與數據實戰開發者</h4>
                <div className="text-xs font-mono text-purple-600 mb-5">AI & Data-Empowered</div>
                <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <li>
                    <strong className="text-slate-800">數據建模能力：</strong> 使用過 XGBoost、Random Forest 等主流機器學習模型，發掘數據潛力。
                  </li>
                  <li>
                    <strong className="text-slate-800">前瞻 LLM 應用實作：</strong> 掌握 Prompt Engineering、Chain-of-Thought 推理與自動化紅隊測試 (Red Teaming)，具備為企業直接導入 AI 解決方案的即戰力。
                  </li>
                </ul>
              </div>

              {/* 定位 3 */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-emerald-300 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">鑽研底層的全端實作派</h4>
                <div className="text-xs font-mono text-emerald-600 mb-5">Full-Stack & Deep Logic</div>
                <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <li>
                    <strong className="text-slate-800">向下鑽研底層效能：</strong> 自主以 C++ 實作核心資料結構與演算法，對程式效能 (Big-O) 與底層邏輯有著極高的自我要求。
                  </li>
                  <li>
                    <strong className="text-slate-800">向上建構完整系統：</strong> 具備使用 React 開發前端、Python 開發後端 API 的實戰經驗，並熟悉 Docker 與 Git 等協作工具，擁有將產品「從 0 到 1 完整落地」的開發量能。
                  </li>
                </ul>
              </div>

            </div>
          </div>
      </section>

      {/* 個人核心優勢 (Core Advantages) */}
      <section id="advantages" className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">個人核心優勢</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">以清晰的邏輯與高度的執行力，在團隊協作與自我成長中發揮最大價值。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 優勢 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-amber-300 transition-all group">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">強烈的求知慾與自學力</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                面對技術門檻具備「追根究底」的精神。善於整合各路學習資源與技術文件，能快速掌握新知，並將其轉化為實際的專案開發能力。
              </p>
            </div>

            {/* 優勢 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">具備專案全局觀的責任心</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                在團隊協作中習慣主動承擔。善於提前規劃專案時程，並能精準評估成員特質進行適切的任務分工，確保團隊目標如期且高品質達標。
              </p>
            </div>

            {/* 優勢 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-rose-300 transition-all group">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                <Rocket className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">敏捷的行動力與執行力</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                不流於空談理論，具備強大的「落地」能力。面對未知挑戰能迅速動手實作與試錯，一步步將抽象的想法或痛點，轉化為具體可行的解決方案。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Skills */}
      <section id="skills" className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">核心技能庫</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">結合理論基礎與現代化開發工具，具備從底層邏輯到全端系統部署的實戰能力。</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard 
            icon={<Code />} title="程式語言與基礎" 
            skills={['C++ (STL, OOP)', 'Python', 'TypeScript', 'JavaScript']} 
            color="bg-blue-50 text-blue-700" 
          />
          <SkillCard 
            icon={<BrainCircuit />} title="資料科學與 AI" 
            skills={['Scikit-learn (ML)', 'LLM Prompt Engineering', '自動化紅隊測試', 'JSON Schema 防呆']} 
            color="bg-purple-50 text-purple-700" 
          />
          <SkillCard 
            icon={<Server />} title="框架與系統開發" 
            skills={['React.js', 'FastAPI', 'RESTful API', '資料前處理管線']} 
            color="bg-emerald-50 text-emerald-700" 
          />
          <SkillCard 
            icon={<Database />} title="演算法與資料結構" 
            skills={['時間/空間複雜度分析', 'Binary Search', 'Merge Sort', '高等樹 (RB Tree)']} 
            color="bg-amber-50 text-amber-700" 
          />
        </div>
      </section>

      {/* 4. JUDGE AI Project - Core Focus */}
      <section id="judge-ai" className="py-24 px-6 bg-slate-900 text-slate-50 overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 font-medium text-sm mb-6 border border-blue-500/30">
              <ShieldAlert className="w-4 h-4" /> 專題亮點展示
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
              JUDGE AI: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">雙軌對抗審計系統</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              針對大型語言模型 (LLM) 隱性暴力與歧視性騷擾的自動化紅隊測試與推理審計管線。結合 AURA 框架，將安全防護從「顯性過濾」提升至「語境理解」層次。
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative border-l border-slate-700 md:border-none md:flex md:flex-col md:items-center">
            {/* Middle Line for Desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-slate-700 -translate-x-1/2"></div>

            <TimelineNode 
              phase="01" 
              title="隱性暴力基準與因子數據生成"
              align="left"
              tags={['JSON Schema', '知識注入', '正交矩陣提示法']}
              desc="從海量數據中建構自動化對抗數據管線。利用 allOf 條件約束實作雙層防護防呆機制，並將 AURA 定義作為外部知識注入 GPT-4 (Meta-Prompt)，繁衍高階多輪攻擊劇本（建立木馬情境 -> 預設植入 -> 邏輯反轉）。"
            />
            
            <TimelineNode 
              phase="02" 
              title="通用推理評判引擎建構 (路徑 A)"
              align="right"
              tags={['Claude 4.5 Sonnet', 'LLM-as-a-Judge', 'CoT (思維鏈)']}
              desc="實作 Generalist LLM-as-a-Judge。調用 Claude 模型結合安全基準，強制系統在給出 0-10 分的安全分數前，必須透過思維鏈技術完整輸出「判決理由 (Rationale)」，嚴格審查受測模型軌跡中是否隱含心理操控。"
            />

            <TimelineNode 
              phase="03" 
              title="專用過程獎勵模型審計 (路徑 B) 與系統開發"
              align="left"
              tags={['FastAPI', 'React', 'AffordRanker模型']}
              desc="雙軌審計的另一路徑：載入開源 PRM 模型，針對受測模型的「每一個推理步驟」獨立計算程序連貫性與安全性分數。並開發整合 FastAPI 與 React 的自動化審計應用程式，支援自定義攻擊策略。"
            />

            <TimelineNode 
              phase="04" 
              title="量化評估指標與可解釋性審計"
              align="right"
              tags={['AI Model Cards', 'ASR 攻擊成功率', '資料視覺化']}
              desc="將雙軌評判的原始數據轉化為可視化的「AI合規報告」。依循學術文獻規範，嚴格計算攻擊成功率 (ASR) 與漏洞分佈，精確定位邏輯陷阱，以協助開發者進行針對性的安全性微調。"
            />
          </div>
        </div>
      </section>

      {/* 5. Other Projects */}
      <section id="projects" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-slate-900">其他專案與實作</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="金融數據分析邏輯思維專案"
              icon={<LineChart className="w-6 h-6 text-emerald-500" />}
              tech={['Python', 'Pandas', 'XGBoost', '商業決策分析']}
              desc="結合財金領域知識與機器學習技術，對複雜金融數據進行清洗與特徵工程。透過預測模型挖掘潛在風險與趨勢，將生硬的數據分析結果轉化為具體的商業策略與決策建議。"
            />
            <ProjectCard 
              title="智慧路燈報修系統"
              icon={<Activity className="w-6 h-6 text-yellow-500" />}
              tech={['React', 'TypeScript', 'Google Maps API', 'Papa Parse']}
              desc="公共政策創意提案競賽作品。擔任前端開發，整合 Google Maps 實現即時地圖檢視與 GPS 定位，動態標記路燈位置，並解析市府公開 CSV 資料，提升市民通報效率。"
            />
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-8 text-center text-slate-400 text-sm">
        <p>© 劉宸銨 (Liu Chen-An). All rights reserved.</p>
        <p className="mt-2 text-slate-500">Built with React & Tailwind CSS for Interview Presentation.</p>
      </footer>
    </div>
  );
};

/* --- Component Helpers --- */

const SkillCard = ({ icon, title, skills, color }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${color}`}>
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-4 text-slate-900">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, idx) => (
        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const TimelineNode = ({ phase, title, desc, align, tags }) => {
  const isLeft = align === 'left';
  return (
    <div className={`relative flex w-full my-8 md:my-12 ${isLeft ? 'md:justify-start' : 'md:justify-end'} pl-8 md:pl-0`}>
      {/* Mobile timeline line connector */}
      <div className="absolute left-0 top-0 bottom-[-4rem] w-px bg-slate-700 md:hidden"></div>
      
      {/* Node Dot */}
      <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-6 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-slate-900 z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
      
      {/* Card Content */}
      <div className={`bg-slate-800 border border-slate-700 p-6 md:p-8 rounded-2xl md:w-[45%] hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 group`}>
        <div className="text-cyan-400 font-mono text-sm font-bold mb-2 opacity-80 group-hover:opacity-100 transition-opacity">PHASE {phase}</div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-2.5 py-1 text-xs font-medium bg-slate-900 text-slate-300 rounded-md border border-slate-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, desc, tech, icon }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col">
    <div className="flex items-center mb-6">
      <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
      {desc}
    </p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {tech.map((t, idx) => (
        <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default App;
