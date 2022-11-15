import type { ElementHandle as ElementHandleInterface, Locator as LocatorInterface } from '../types';
import type { ElementHandleCheckOptions, ElementHandleClickOptions, ElementHandleDblclickOptions, ElementHandleHoverOptions, ElementHandleScreenshotOptions, ElementHandleUncheckOptions, Rect, TimeoutOptions } from '../types/pw';
import type { QueryItem } from './types';
import { getElementHandle } from './element-handle';

// TODO: browser-native impl
export class Locator implements LocatorInterface {
  private _uuid?: Promise<string>;
  constructor(private queryItems: QueryItem[]) {
  }

  private async _connectToLocator() {
    if (!this._uuid) {
      this._uuid = window.__xbell_page_locator_expose__(this.queryItems).then(res => res.uuid);
    }

    return this._uuid!;
  }

  private async _execute<T extends keyof LocatorInterface>(method: T, ...args: Parameters<LocatorInterface[T]>): Promise<ReturnType<LocatorInterface[T]>> {
    const uuid = await this._connectToLocator();

    return window.__xbell_page_locator_execute__({
      uuid,
      method,
      args,
    });
  }

  private appendQueryItem(queryItem: QueryItem) {
    return [...this.queryItems, queryItem];
  }

  get(selector: string): LocatorInterface {
    return new Locator(this.appendQueryItem({ value: selector }));
  }

  getByText(text: string): LocatorInterface {
    return new Locator(this.appendQueryItem({ type: 'text', value: text }));
  }

  getByClass(className: string): LocatorInterface {
    return new Locator(this.appendQueryItem({ type: 'class', value: className }));
  }

  getByTestId(testId: string): LocatorInterface {
    return new Locator(this.appendQueryItem({ type: 'testId', value: testId }));
  }


  first(): LocatorInterface {
    return new Locator(this.appendQueryItem({ method: 'first', args: [] }));
  }

  last(): LocatorInterface {
    return new Locator(this.appendQueryItem({ method: 'last', args: [] }));
  }

  nth(index: number): LocatorInterface {
    return new Locator(this.appendQueryItem({ method: 'nth', args: [index] }));
  }

  async queryElementByClass(className: string): Promise<ElementHandleInterface | null> {
    return getElementHandle(this.appendQueryItem({ type: 'class', value: className }));
  }

  async queryElementByTestId(testId: string): Promise<ElementHandleInterface | null> {
    return getElementHandle(this.appendQueryItem({ type: 'testId', value: testId }));
  }

  async queryElementByText(text: string): Promise<ElementHandleInterface | null> {
    return getElementHandle(this.appendQueryItem({ type: 'text', value: text }));
  }

  async boundingBox(options?: TimeoutOptions | undefined): Promise<Rect | null> {
    return await this._execute('boundingBox', options);
  }
  
  async screenshot(options?: ElementHandleScreenshotOptions | undefined): Promise<Buffer> {
    return await this._execute('screenshot', options);
  }

  async focus(options?: TimeoutOptions | undefined): Promise<void> {
    await this._execute('focus', options);
  }

  async click(options?: ElementHandleClickOptions | undefined): Promise<void> {
    await this._execute('click', options);
  }

  async dblclick(options?: ElementHandleDblclickOptions | undefined): Promise<void> {
    await this._execute('dblclick', options);
  }

  async fill(value: string, options?: { timeout?: number | undefined; } | undefined): Promise<void> {
    await this._execute('fill', value, options);
  }

  async hover(options?: ElementHandleHoverOptions | undefined): Promise<void> {
    await this._execute('hover', options);
  }

  async check(options?: ElementHandleCheckOptions | undefined): Promise<void> {
    await this._execute('check', options);
  }

  async uncheck(options?: ElementHandleUncheckOptions | undefined): Promise<void> {
    await this._execute('uncheck', options);
  }

  async isHidden(options?: TimeoutOptions | undefined): Promise<boolean> {
    return await this._execute('isHidden', options);
  }

  async isVisible(options?: TimeoutOptions | undefined): Promise<boolean> {
    return await this._execute('isVisible', options);
  }

  async isChecked(options?: TimeoutOptions | undefined): Promise<boolean> {
    return await this._execute('isChecked', options);
  }

  async isDisabled(options?: TimeoutOptions | undefined): Promise<boolean> {
    return await this._execute('isDisabled', options);
  }

  async setInputFiles(files: string | string[] | { name: string; mimeType: string; buffer: Buffer; } | { name: string; mimeType: string; buffer: Buffer; }[], options?: { noWaitAfter?: boolean | undefined; timeout?: number | undefined; } | undefined): Promise<void> {
    return await this._execute('setInputFiles', files, options);
  }

  async waitFor(options?: { state?: 'attached' | 'detached' | 'visible' | 'hidden' | undefined; timeout?: number | undefined; } | undefined): Promise<void> {
    return await this._execute('waitFor', options);
  }

  async count(): Promise<number> {
    return await this._execute('count');
  }
}
