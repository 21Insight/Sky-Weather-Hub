/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateAirports: OnCreateAirportsSubscription;
  onUpdateAirports: OnUpdateAirportsSubscription;
  onDeleteAirports: OnDeleteAirportsSubscription;
};

export type CreateAirportsInput = {
  id?: string | null;
  icao?: string | null;
  iata?: string | null;
  country?: string | null;
  _version?: number | null;
};

export type ModelAirportsConditionInput = {
  icao?: ModelStringInput | null;
  iata?: ModelStringInput | null;
  country?: ModelStringInput | null;
  and?: Array<ModelAirportsConditionInput | null> | null;
  or?: Array<ModelAirportsConditionInput | null> | null;
  not?: ModelAirportsConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Airports = {
  __typename: "Airports";
  id: string;
  icao?: string | null;
  iata?: string | null;
  country?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateAirportsInput = {
  id: string;
  icao?: string | null;
  iata?: string | null;
  country?: string | null;
  _version?: number | null;
};

export type DeleteAirportsInput = {
  id: string;
  _version?: number | null;
};

export type ModelAirportsFilterInput = {
  id?: ModelIDInput | null;
  icao?: ModelStringInput | null;
  iata?: ModelStringInput | null;
  country?: ModelStringInput | null;
  and?: Array<ModelAirportsFilterInput | null> | null;
  or?: Array<ModelAirportsFilterInput | null> | null;
  not?: ModelAirportsFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelAirportsConnection = {
  __typename: "ModelAirportsConnection";
  items: Array<Airports | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelSubscriptionAirportsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  icao?: ModelSubscriptionStringInput | null;
  iata?: ModelSubscriptionStringInput | null;
  country?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionAirportsFilterInput | null> | null;
  or?: Array<ModelSubscriptionAirportsFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type CreateAirportsMutation = {
  __typename: "Airports";
  id: string;
  icao?: string | null;
  iata?: string | null;
  country?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateAirportsMutation = {
  __typename: "Airports";
  id: string;
  icao?: string | null;
  iata?: string | null;
  country?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteAirportsMutation = {
  __typename: "Airports";
  id: string;
  icao?: string | null;
  iata?: string | null;
  country?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetAirportsQuery = {
  __typename: "Airports";
  id: string;
  icao?: string | null;
  iata?: string | null;
  country?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListAirportsQuery = {
  __typename: "ModelAirportsConnection";
  items: Array<{
    __typename: "Airports";
    id: string;
    icao?: string | null;
    iata?: string | null;
    country?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncAirportsQuery = {
  __typename: "ModelAirportsConnection";
  items: Array<{
    __typename: "Airports";
    id: string;
    icao?: string | null;
    iata?: string | null;
    country?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateAirportsSubscription = {
  __typename: "Airports";
  id: string;
  icao?: string | null;
  iata?: string | null;
  country?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateAirportsSubscription = {
  __typename: "Airports";
  id: string;
  icao?: string | null;
  iata?: string | null;
  country?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteAirportsSubscription = {
  __typename: "Airports";
  id: string;
  icao?: string | null;
  iata?: string | null;
  country?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateAirports(
    input: CreateAirportsInput,
    condition?: ModelAirportsConditionInput
  ): Promise<CreateAirportsMutation> {
    const statement = `mutation CreateAirports($input: CreateAirportsInput!, $condition: ModelAirportsConditionInput) {
        createAirports(input: $input, condition: $condition) {
          __typename
          id
          icao
          iata
          country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAirportsMutation>response.data.createAirports;
  }
  async UpdateAirports(
    input: UpdateAirportsInput,
    condition?: ModelAirportsConditionInput
  ): Promise<UpdateAirportsMutation> {
    const statement = `mutation UpdateAirports($input: UpdateAirportsInput!, $condition: ModelAirportsConditionInput) {
        updateAirports(input: $input, condition: $condition) {
          __typename
          id
          icao
          iata
          country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAirportsMutation>response.data.updateAirports;
  }
  async DeleteAirports(
    input: DeleteAirportsInput,
    condition?: ModelAirportsConditionInput
  ): Promise<DeleteAirportsMutation> {
    const statement = `mutation DeleteAirports($input: DeleteAirportsInput!, $condition: ModelAirportsConditionInput) {
        deleteAirports(input: $input, condition: $condition) {
          __typename
          id
          icao
          iata
          country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAirportsMutation>response.data.deleteAirports;
  }
  async GetAirports(id: string): Promise<GetAirportsQuery> {
    const statement = `query GetAirports($id: ID!) {
        getAirports(id: $id) {
          __typename
          id
          icao
          iata
          country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAirportsQuery>response.data.getAirports;
  }
  async ListAirports(
    filter?: ModelAirportsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAirportsQuery> {
    const statement = `query ListAirports($filter: ModelAirportsFilterInput, $limit: Int, $nextToken: String) {
        listAirports(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            icao
            iata
            country
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAirportsQuery>response.data.listAirports;
  }
  async SyncAirports(
    filter?: ModelAirportsFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncAirportsQuery> {
    const statement = `query SyncAirports($filter: ModelAirportsFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncAirports(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            icao
            iata
            country
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncAirportsQuery>response.data.syncAirports;
  }
  OnCreateAirportsListener(
    filter?: ModelSubscriptionAirportsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAirports">>
  > {
    const statement = `subscription OnCreateAirports($filter: ModelSubscriptionAirportsFilterInput) {
        onCreateAirports(filter: $filter) {
          __typename
          id
          icao
          iata
          country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAirports">>
    >;
  }

  OnUpdateAirportsListener(
    filter?: ModelSubscriptionAirportsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAirports">>
  > {
    const statement = `subscription OnUpdateAirports($filter: ModelSubscriptionAirportsFilterInput) {
        onUpdateAirports(filter: $filter) {
          __typename
          id
          icao
          iata
          country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAirports">>
    >;
  }

  OnDeleteAirportsListener(
    filter?: ModelSubscriptionAirportsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAirports">>
  > {
    const statement = `subscription OnDeleteAirports($filter: ModelSubscriptionAirportsFilterInput) {
        onDeleteAirports(filter: $filter) {
          __typename
          id
          icao
          iata
          country
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAirports">>
    >;
  }
}
