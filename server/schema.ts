import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLID,
  GraphQLError,
} from 'graphql'
import casual from 'casual'

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  description: '...',

  fields: () => {
    return {
      id: {
        type: GraphQLID,
        resolve: company => company.id,
      },
      name: {
        type: GraphQLString,
        resolve: company => company.name,
      },
      stage: {
        type: GraphQLString,
        resolve: company => company.stage,
      },
      sector: {
        type: GraphQLString,
        resolve: company => company.sector,
      },
      investmentSize: {
        type: GraphQLInt,
        resolve: company => company.investmentSize,
      },
    }
  },
})

const sectors = ['Fintech', 'IOT', 'Roboadvisory', 'Insuretech']
const stages = ['Idea', 'Prototype', 'Seed', 'Series A', 'Series B', 'Series C']
const companies = [...Array(Math.round(Math.random() * 3 + 1)).keys()]
  .map((_, id) => ({
    id,
    name: casual.company_name,
    stage: casual.random_element(stages),
    sector: casual.random_element(sectors),
    investmentSize: Math.round(Math.random() * 10000000),
  }))

const companiesQuery = {
  type: new GraphQLList(CompanyType),
  resolve: (root, args, {session, ...data}, d) =>
    companies,
}

const sectorsQuery = {
  type: new GraphQLList(GraphQLString),
  resolve: (root, args, {session, ...data}, d) =>
    sectors,
}

const stagesQuery = {
  type: new GraphQLList(GraphQLString),
  resolve: (root, args, {session, ...data}, d) =>
    stages,
}

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'get companies',
  fields: {
    companies: companiesQuery,
    sectors: sectorsQuery,
    stages: stagesQuery,
  },
})

const addCompany = (obj, company) => {
  if (company.name.length <= 2) {
    throw new GraphQLError('Company name has to be longer then 2 characters')
  }
  if (stages.indexOf(company.stage) === -1) {
    throw new GraphQLError('Company stage must be in the list')
  }
  if (sectors.indexOf(company.sector) === -1) {
    throw new GraphQLError('Company sector must be in the list')
  }
  if (company.investmentSize < 0) {
    throw new GraphQLError('Investment size has to be positive number')
  }
  companies.push({
    id: companies.length ?? 0,
    ...company,
  })
  return company
}

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'add company',
  fields: {
    addCompany: {
      type: CompanyType,
      args: {
        name: {
          type: GraphQLString,
        },
        stage: {
          type: GraphQLString,
        },
        sector: {
          type: GraphQLString,
        },
        investmentSize: {
          type: GraphQLInt,
        },
      },
      resolve: addCompany,
    },
  },
})

const schema = new GraphQLSchema({
  query,
  mutation,
})

export default schema
