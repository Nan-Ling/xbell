import type {
  FrameGotoOptions,
  Response,
  LifecycleEvent,
  PageScreenshotOptions,
  Request,
  SmartHandle,
  PageFunction,
  Video,
} from './pw';
import type { Locator } from './locator';
import type { ElementHandle } from './element-handle';
import type { Mouse } from './mouse';
import type { Keyboard } from './keyboard';
import type { BrowserContext } from './browser-context';

export interface Page<BrowserExtensionArg = {}> {
  evaluate<R, Args>(pageFunction: PageFunction<BrowserExtensionArg & Args, R>, arg?: Args): Promise<R>;
  evaluateHandle: <R, Args>(pageFunction: PageFunction<BrowserExtensionArg & Args, R>, args?: Args) => Promise<SmartHandle<R>>;
  close(): Promise<void>;
  goto(url: string, options?: FrameGotoOptions): Promise<Response | null>;
  waitForLoadState(state?: Exclude<LifecycleEvent, 'commit'>, options?: { timeout?: number }): Promise<void>;
  screenshot(options?: PageScreenshotOptions): Promise<Buffer>
  getByText(text: string): Locator;
  getByTestId(testId: string): Locator;
  getByClass(className: string): Locator;
  queryByText(text: string): Promise<ElementHandle | null>;
  queryByTestId(testId: string): Promise<ElementHandle | null>;
  queryByClass(className: string): Promise<ElementHandle | null>;
  url(): Promise<string>;
  waitForNavigation(options?: {
    timeout?: number;
    url?: string | RegExp|((url: URL) => boolean);
    waitUntil?: 'load' | 'domcontentloaded' | 'networkidle' | 'commit';
  }): Promise<null | Response>;
  waitForRequest(urlOrPredicate: string| RegExp | ((request: Request) => boolean | Promise<boolean>), options?: {
    timeout?: number;
  }): Promise<Request>;
  waitForResponse(urlOrPredicate: string| RegExp | ((response: Response) => boolean| Promise<boolean>), options?: {
    timeout?: number;
  }): Promise<Response>;
  keyboard: Keyboard;
  mouse: Mouse;
  video(): Promise<Video | null>;
  context(): BrowserContext;
}
