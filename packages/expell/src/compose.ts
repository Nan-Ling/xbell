import type { Mock } from './spy';
import { createExpell } from './expell';
import { spy } from './spy';
import { spyMatcher } from './matchers/spy';

const expect = createExpell<typeof spyMatcher, Mock>(spyMatcher)

const ret = expect(spy(() => 1)).not.toHaveBeenCalled()
expect(spy(() => {})).toHaveBeenCalled()
expect(spy(() => {})).not.toHaveBeenCalledTimes(2)