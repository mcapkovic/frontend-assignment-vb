import {gql} from '@apollo/client'

export interface CompanyType {
  id: string
  name: string
  stage: string
  sector: string
  investmentSize: number
}

export const GET_COMPANIES = gql`
  query getCompanies {
    companies {
      id
      name
      stage
      sector
      investmentSize
    }
  }`

export const ADD_COMPANY = gql`
  mutation addCompany ($name: String!, $stage: String!, $sector: String!, $investmentSize: Int!) {
    addCompany(name: $name, stage: $stage, sector: $sector, investmentSize: $investmentSize) {
      name
      stage
      sector
      investmentSize
    }
  }`
