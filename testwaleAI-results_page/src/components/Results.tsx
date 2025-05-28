import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

interface ResultsProps {
  overallAccuracy: number;
  questionsAttempted: number;
  totalQuestions: number;
  timeTaken: number;
  performanceRating: string;
  topicwiseAccuracy: {
    topic: string;
    accuracy: number;
  }[];
  topicsToFocus: string[];
}

const CircularProgress = ({ value, label, subLabel, percentage = 75 }: { 
  value: string | number; 
  label: string; 
  subLabel?: string;
  percentage?: number;
}) => {
  const radius = 60;
  const strokeWidth = 12;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-[160px] h-[160px]">
        <svg className="transform -rotate-90 w-full h-full">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#F3E8FF"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#5E2F7C"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">{value}</span>
          {subLabel && <span className="text-sm text-gray-500">{subLabel}</span>}
        </div>
      </div>
      <span className="mt-2 text-gray-600 font-medium">{label}</span>
    </div>
  );
};

const PerformanceCard = ({ rating }: { rating: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Performance Rating</h2>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="mb-4">
            <span className="text-[32px] font-bold text-[#1F2937]">{rating}</span>
          </div>
          <div className="relative w-full h-2 bg-[#F3E8FF] rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-[#5E2F7C] rounded-full"
              style={{ width: '10%' }}
            />
          </div>
          <div className="mt-2 text-right text-sm text-gray-500">
            10% completed
          </div>
        </div>
        <div className="ml-8">
          <div className="w-24 h-24 rounded-full bg-[#F3E8FF] flex items-center justify-center">
            <FiCheckCircle className="w-12 h-12 text-[#5E2F7C]" />
          </div>
        </div>
      </div>
    </div>
  );
};

const BarChart = ({ data }: { data: { topic: string; accuracy: number }[] }) => {
  const maxValue = 100; // Maximum value for the y-axis
  
  return (
    <div className="w-full">
      <div className="flex h-64 items-end space-x-4 mb-4">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-[#5E2F7C]" 
              style={{ 
                height: `${(item.accuracy / maxValue) * 100}%`,
                minHeight: '20px'
              }}
            ></div>
            <span className="text-sm text-gray-500 mt-2">{item.topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TopicProgressBar = ({ topic, completed }: { topic: string; completed: number }) => (
  <div className="mb-6">
    <div className="flex justify-between text-sm text-gray-600 mb-1">
      <span>{topic}</span>
      <span>{completed}% completed</span>
    </div>
    <div className="h-2 w-full bg-[#F3E8FF] rounded-full">
      <div 
        className="h-full bg-[#5E2F7C] rounded-full" 
        style={{ width: `${completed}%` }}
      ></div>
    </div>
  </div>
);

const Results: React.FC<ResultsProps> = ({
  overallAccuracy,
  questionsAttempted,
  totalQuestions,
  timeTaken,
  performanceRating,
  topicwiseAccuracy,
  topicsToFocus,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-[32px] font-bold text-[#1F2937]">Result</h1>
        <p className="text-gray-500">Test completed at 14:15 pm</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <CircularProgress 
            value={`${overallAccuracy}%`}
            label="Overall Accuracy"
            subLabel="Good Going"
            percentage={75}
          />
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <CircularProgress 
            value={`${questionsAttempted}/${totalQuestions}`}
            label="Questions Attempted"
            percentage={75}
          />
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <CircularProgress 
            value={`${timeTaken} min`}
            label="Time taken"
            percentage={75}
          />
        </div>
      </div>

      <div className="mt-6">
        <PerformanceCard rating={performanceRating} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Topicwise Accuracy</h2>
          <BarChart data={[
            { topic: 'topic 1', accuracy: 60 },
            { topic: 'topic 2', accuracy: 80 },
            { topic: 'topic 3', accuracy: 40 },
            { topic: 'topic 4', accuracy: 70 },
            { topic: 'topic 5', accuracy: 65 }
          ]} />
          <div className="mt-8 space-y-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <TopicProgressBar 
                key={num}
                topic={`topic ${num}`}
                completed={50}
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col min-h-[600px]">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Topics to Focus on</h2>
            <div className="space-y-4">
              {['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'].map((topic, index) => (
                <div key={index} className="text-gray-600">
                  {topic}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-[#001529] text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
              Retry Test
            </button>
            <button className="w-full bg-[#5E2F7C] text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results; 