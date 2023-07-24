import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerAirports = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Airports, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ICAO: string;
  readonly IATA?: string | null;
  readonly Country: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAirports = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Airports, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ICAO: string;
  readonly IATA?: string | null;
  readonly Country: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Airports = LazyLoading extends LazyLoadingDisabled ? EagerAirports : LazyAirports

export declare const Airports: (new (init: ModelInit<Airports>) => Airports) & {
  copyOf(source: Airports, mutator: (draft: MutableModel<Airports>) => MutableModel<Airports> | void): Airports;
}