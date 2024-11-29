import React from 'react';
import { Plus } from 'lucide-react';

const tasks = [
  {
    title: 'New social media post',
    description: 'Sed mi ac ac sagittis mi. Interdum varius...',
    date: 'Feb 12',
    tags: ['Marketing', 'Internal'],
  },
  {
    title: 'Upload new item to marketplace',
    description: 'Sed mi ac ac sagittis mi. Interdum varius...',
    date: 'Feb 14',
    tags: ['Product', 'Design'],
  },
];

export default function TasksList() {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">My Tasks</h3>
        <button className="p-1.5 hover:bg-gray-100 rounded-lg">
          <Plus size={20} className="text-gray-600" />
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map((task, idx) => (
          <div key={idx} className="p-4 border border-gray-100 rounded-lg hover:border-gray-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium">{task.title}</h4>
              <span className="text-sm text-gray-500">{task.date}</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{task.description}</p>
            <div className="flex gap-2">
              {task.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className={`text-xs px-2 py-1 rounded ${
                    tag === 'Marketing' ? 'bg-blue-50 text-blue-600' :
                    tag === 'Internal' ? 'bg-purple-50 text-purple-600' :
                    tag === 'Product' ? 'bg-green-50 text-green-600' :
                    'bg-orange-50 text-orange-600'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}