import '@testing-library/jest-dom/extend-expect';
import * as emotion from '@emotion/core';
import { createSerializer } from 'jest-emotion';

expect.addSnapshotSerializer(createSerializer(emotion));
