import type { ParameterType } from '../constants/index'
import type { XBellPage } from './page';
import type { XBellProject } from './project';

export interface IParameter {
  type: ParameterType;
  index: number;
}

export type PropertyKey = symbol | string;

export interface TestParams {
  page: XBellPage;
  project: XBellProject;
}

export interface TestEachParams<T = any> extends TestParams {
  item: T;
}

export interface TestBatchParams<T = any> extends TestParams {
  item: T;
}

export type TestFixtureParams<T = {}>  = TestParams & T;
