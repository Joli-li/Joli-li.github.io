import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import creativeImage from 'figma:asset/7a8e9239b40409feeb853dd6bbded906ce7a2b2f.png';
import dataImage from 'figma:asset/1d3b778ffe9e908b8b7db3bc9155ace6b9b2c22f.png';
import { P5Canvas } from './components/P5Canvas';

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center space-x-8">
              <a href="#portfolio" className="text-white hover:text-gray-300 transition-colors" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                作品集
              </a>
              <a href="#about" className="text-white hover:text-gray-300 transition-colors" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                關於
              </a>
              <a href="#contact" className="text-white hover:text-gray-300 transition-colors" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                聯絡
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/Joli-li?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 cursor-pointer text-white hover:text-gray-300 transition-colors" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
              </a>
              <a 
                href="https://www.linkedin.com/in/joli0428" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 cursor-pointer text-white hover:text-gray-300 transition-colors" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-14 overflow-hidden">
        {/* P5.js Canvas Background - Hero Only */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <P5Canvas height={window.innerHeight} />
        </div>

        <motion.div 
          className="relative text-center px-4 max-w-5xl mx-auto z-10"
          style={{ opacity, scale }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 tracking-tight text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            周湧秝
          </motion.h1>
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl text-white/80 mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            未來的・廣告策略・數據分析師
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#about"
              className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              探索更多
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Section 1 */}
      <section id="portfolio" className="py-32 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl mb-6 tracking-tight">
                數據驅動<br />精準行銷
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                以數據分析為基礎，結合創意思維，打造有效的數位行銷策略。
              </p>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <img
                src={dataImage}
                alt="Data analytics visualization"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Section 2 */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="order-2 md:order-1 relative h-96 rounded-3xl overflow-hidden">
              <img
                src={creativeImage}
                alt="Creative visualization"
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-5xl sm:text-6xl md:text-7xl mb-6 tracking-tight">
                創意與技術<br />的完美結合
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                從廣告創意到數位內容，運用跨領域專業創造價值。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl sm:text-6xl mb-8 tracking-tight">
              關於我
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              目前就讀於國立政治大學廣告學系（策略與創意溝通），並雙主修數位內容與科技學位學程。
              專注於數位行銷與數據分析，曾擔任政大數據分析社產學合作專案管理，運用 Python、SQL、Tableau 等工具進行數據處理與視覺化分析。
              擅長運用 Google Analytics 進行網路數據分析與社群媒體策略，致力於將數據洞察轉化為有效的行銷決策。
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { number: '4.26/4.3', label: 'GPA 系排 1%' },
              { number: '4次', label: '書卷獎與成績獎' },
              { number: '2個', label: '跨領域雙主修' }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl sm:text-6xl mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl sm:text-6xl text-center mb-20 tracking-tight"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            學歷與經驗
          </motion.h2>

          {/* Education */}
          <div className="mb-24">
            <h3 className="text-3xl mb-12">學歷</h3>
            <div className="space-y-8">
              {[
                {
                  period: '2024 - 現在',
                  title: '國立政治大學',
                  subtitle: '廣告學系（策略與創意溝通）',
                  achievements: [
                    '113-1 學期榮譽成績優良獎（書卷獎）',
                    '114 學年度吳舜文獎學金成績獎',
                    'GPA: 4.26/4.3（系排 1%）'
                  ]
                },
                {
                  period: '2025 - 現在',
                  title: '國立政治大學',
                  subtitle: '數位內容與科技學士學位學程（雙主修）',
                  achievements: []
                },
                {
                  period: '2023 - 2024',
                  title: '國立中央大學',
                  subtitle: '文學院學士班',
                  achievements: [
                    '112-1 學期榮譽成績優良書卷獎',
                    '112 學年度系排 1%'
                  ]
                }
              ].map((edu, index) => (
                <motion.div
                  key={edu.title + edu.period}
                  className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-2xl mb-2">{edu.title}</h4>
                      <p className="text-lg text-gray-600">{edu.subtitle}</p>
                    </div>
                    <span className="text-gray-500 mt-2 md:mt-0">{edu.period}</span>
                  </div>
                  {edu.achievements.length > 0 && (
                    <ul className="space-y-2 mt-4">
                      {edu.achievements.map((achievement) => (
                        <li key={achievement} className="text-gray-600 flex items-start">
                          <span className="mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-24">
            <h3 className="text-3xl mb-12">專案經驗</h3>
            <div className="space-y-8">
              {[
                {
                  title: '政大數據分析社',
                  role: '產學合作專案',
                  period: '2025.09 - 2025.12',
                  achievements: [
                    '透過 SQL 撈取資料庫數據，經由 Python 與 Tableau 分析與視覺化，提出數據驅動之決策與建議',
                    '負責專案管理，帶領組員完成產學合作之數據分析專案，透過分析提供申辦方建議'
                  ]
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-2xl mb-2">{project.title}</h4>
                      <p className="text-lg text-gray-600">{project.role}</p>
                    </div>
                    <span className="text-gray-500 mt-2 md:mt-0">{project.period}</span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {project.achievements.map((achievement) => (
                      <li key={achievement} className="text-gray-600 flex items-start">
                        <span className="mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Organizations */}
          <div className="mb-24">
            <h3 className="text-3xl mb-12">社團與組織</h3>
            <div className="space-y-8">
              {[
                {
                  title: '政大數據分析社 NCCU DA',
                  role: '社員、產學合作專案管理',
                  period: '2025.09 - 2025.12',
                  achievements: [
                    '習得數據分析流程、Problem solving、Python 與相關套件、Excel、Tableau、SQL 等思維架構與工具',
                    '擔任產學合作專案管理，規劃專案推展，協調分工與合作'
                  ]
                },
                {
                  title: '政大數位行銷實驗室 NCCU D.M Lab',
                  role: '社員',
                  period: '2024.09 - 2025.01',
                  achievements: [
                    '透過社課習得 GA4、SEO、文案等數位行銷之思維與工具',
                    '運用社課所學，參與產學合作專案（當學期與 USPACE 合作）',
                    '協助推廣該公司新推出的機場接送服務，與 10 餘人組成團隊，提出型態師特別企劃，並學習操作粉絲專頁後台'
                  ]
                },
                {
                  title: '中大閱人咖啡館',
                  role: '行銷部組員',
                  period: '2024.01 - 2024.06',
                  achievements: [
                    '策劃 5+ 則社群貼文與相簿企劃；任職期間社群粉絲人數成長 60%（300人 → 500+）',
                    '與四人團隊合作重新設計主視覺、貼文模板與字體選擇',
                    '透過 Instagram 後台數據工具分析觸及率與互動率，改進主視覺設計與貼文撰寫方向'
                  ]
                },
                {
                  title: '2024 花東青少年合唱音樂營',
                  role: '影像組組員',
                  period: '2024.07',
                  achievements: [
                    '擔任「公益平台文化基金會」主辦之暑期營隊志工。與 60 餘人組成團隊，規劃並當權威值 150 位學員參與的大型營隊。營隊承辦至今影響人次超過千人',
                    '獨立策劃完成 1 支結業影片及廣告影片、短影片在營隊社群權威觀超過 1.2 萬',
                    '負責長達半個月營期之活動影像紀錄工作'
                  ]
                }
              ].map((org, index) => (
                <motion.div
                  key={org.title}
                  className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-2xl mb-2">{org.title}</h4>
                      <p className="text-lg text-gray-600">{org.role}</p>
                    </div>
                    <span className="text-gray-500 mt-2 md:mt-0">{org.period}</span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {org.achievements.map((achievement) => (
                      <li key={achievement} className="text-gray-600 flex items-start">
                        <span className="mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-3xl mb-12">相關課程</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: '網路數據分析課程',
                  instructor: '李怡志老師',
                  period: '2024.09 - 2025.01',
                  score: '100/100 分',
                  highlights: [
                    '學習 Google Analytics、A/B Testing、組成分析等概念與技能',
                    '考取 Google Analytics Certification 及 Google Ads Search Certification 證照',
                    '以政大《大學報》案例進行練習，運用 GA4 數據提出 SEO 優化建議'
                  ]
                },
                {
                  title: '資料分析基礎與策略課程',
                  instructor: '林涵芳老師',
                  period: '2024.09 - 2025.01',
                  score: '98/100 分',
                  highlights: [
                    '學習資料清理的概念、研究方法與權限分析技巧',
                    '運用 Excel 做統計分析，對 NETFLIX 平台資料集進行電影排名分析練習'
                  ]
                }
              ].map((course, index) => (
                <motion.div
                  key={course.title}
                  className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-4">
                    <h4 className="text-2xl mb-2">{course.title}</h4>
                    <p className="text-gray-600">{course.instructor}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-500">{course.period}</span>
                      <span className="bg-black text-white px-3 py-1 rounded-full">{course.score}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {course.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-600 flex items-start">
                        <span className="mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-4 bg-black text-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl mb-8 tracking-tight">
            揪你一起<br />進入我的魔法世界
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            如果您對我的作品感興趣，或想要討論合作機會
          </p>
          <a
            href="mailto:428joli@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-colors text-lg"
          >
            <Mail className="w-5 h-5" />
            與我聯繫
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">© 2025 周湧秝 CHOU, YONG-LI. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:428joli@gmail.com" 
              className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              428joli@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}