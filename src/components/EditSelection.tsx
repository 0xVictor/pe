import React from 'react';
import {
  Sparkle,
  Pen,
  BookOpen,
  ArrowsOut,
  SortDescending,
  Lightbulb,
  ArrowRight,
} from '@phosphor-icons/react';

import { AIOptions, Option } from '@/styles/components/AIToolbar';

interface EditSelectionProps {
  handleGenerate: (command: string) => void;
}

const EditSelection: React.FC<EditSelectionProps> = ({ handleGenerate }) => {
  return (
    <AIOptions>
      <label>Edit selection</label>
      <ul>
        <Option>
          <button onClick={() => handleGenerate('summarize')}>
            <Lightbulb size={16} /> Summarize
          </button>
        </Option>
        <Option>
          <button onClick={() => handleGenerate('rewrite')}>
            <Sparkle size={16} /> Rewrite
          </button>
        </Option>
        <Option>
          <button onClick={() => handleGenerate('continue')}>
            <ArrowRight size={16} /> Continue writting
          </button>
        </Option>
        <Option>
          <button onClick={() => handleGenerate('shorter')}>
            <SortDescending size={16} /> Make shorter
          </button>
        </Option>
        <Option>
          <button onClick={() => handleGenerate('longer')}>
            <ArrowsOut size={16} /> Make Longer
          </button>
        </Option>
        <Option>
          <button onClick={() => handleGenerate('explain')}>
            <BookOpen size={16} /> Explain
          </button>
        </Option>
        <Option>
          <button onClick={() => handleGenerate('fix')}>
            <Pen size={16} /> Fix spelling and grammar
          </button>
        </Option>
      </ul>
      <hr />
      <label>Change tone</label>
      <ul>
        <Option>
          <button onClick={() => handleGenerate('professional')}>
            <Sparkle size={16} /> Professional
          </button>
        </Option>
        <Option>
          <button onClick={() => handleGenerate('casual')}>
            <Sparkle size={16} /> Casual
          </button>
        </Option>
        <Option>
          <button onClick={() => handleGenerate('funny')}>
            <Sparkle size={16} /> Funny
          </button>
        </Option>
      </ul>
    </AIOptions>
  );
};

export default EditSelection;
