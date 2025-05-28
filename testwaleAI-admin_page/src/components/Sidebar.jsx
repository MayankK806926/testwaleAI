import React, { useState } from 'react'
import { FiChevronDown, FiChevronRight, FiHelpCircle, FiLogOut, FiAward } from 'react-icons/fi'
import { PiGraduationCap } from 'react-icons/pi'

const Sidebar = () => {
  const [gradeDropdown, setGradeDropdown] = useState(false)
  const [examDropdown, setExamDropdown] = useState(false)

  const grades = ['Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']
  const exams = ['JEE Mains', 'JEE Advanced', 'NEET UG', 'KCET', 'BITSAT']

  return (
    <aside className="w-64 bg-slate-800 text-white min-h-screen flex flex-col">
      <div className="p-6 flex-1">
        <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
        
        <nav className="space-y-2">
          <div>
            <button
              onClick={() => setGradeDropdown(!gradeDropdown)}
              className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-slate-700 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <PiGraduationCap className="w-5 h-5 mr-3" />
                <span>Grade</span>
              </div>
              {gradeDropdown ? <FiChevronDown className="w-4 h-4" /> : <FiChevronRight className="w-4 h-4" />}
            </button>
            
            {gradeDropdown && (
              <div className="ml-8 mt-2 space-y-1">
                {grades.map((grade) => (
                  <a
                    key={grade}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                  >
                    {grade}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setExamDropdown(!examDropdown)}
              className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-slate-700 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <FiAward className="w-5 h-5 mr-3" />
                <span>Competitive Exams</span>
              </div>
              {examDropdown ? <FiChevronDown className="w-4 h-4" /> : <FiChevronRight className="w-4 h-4" />}
            </button>
            
            {examDropdown && (
              <div className="ml-8 mt-2 space-y-1">
                {exams.map((exam) => (
                  <a
                    key={exam}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
                  >
                    {exam}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="p-6 border-t border-slate-700">
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center px-4 py-3 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <FiHelpCircle className="w-5 h-5 mr-3" />
            <span>Help Center</span>
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-3 hover:bg-red-600 rounded-lg transition-colors text-red-300 hover:text-white"
          >
            <FiLogOut className="w-5 h-5 mr-3" />
            <span>Logout</span>
          </a>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
