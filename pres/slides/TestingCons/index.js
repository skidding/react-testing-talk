import React from 'react';
import { createSlider } from '../../shared/steps';
import { EmojiLabel } from '../../shared/EmojiLabel';

export const TestingCons = createSlider([
  <EmojiLabel emoji="⌨️" label="More code" />,
  <EmojiLabel emoji="🐌" label="Refactor drag" />
]);
