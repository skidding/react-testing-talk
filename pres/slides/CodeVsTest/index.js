import React from 'react';
import { createSlider } from '../../shared/createSteps';
import { EmojiLabel } from '../../shared/EmojiLabel';

export const CodeVsTest = createSlider([
  <EmojiLabel emoji="😍" label="React coding" />,
  <EmojiLabel emoji="😕" label="React testing" />
]);
