import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

// The GraphQL schema
const typeDefs = `#graphql
  type Item {
    title: String
    tax: Taxes!
    unit: String
    amount: String
    price: String
    discount: String
    total: String
  }

  enum Taxes {
    GIFT
    INCOME
    SALES
    VALUE_ADDED
  }

  type Phase {
    title: String
    discount: String
    fee: String
    items: [Item]
    subtotal: String
    total: String
  }

  type Invoice {
    number: Int
    partner: String
    date: String
    totalCount: Int
    fee: Int
    discount: Int
    phases: [Phase!]
  }

  type Query {
    invoice: Invoice
  }
`;

const phases = [
  {
    title: 'Goods for pets',
    discount: '',
    fee: '',
    items: [
      {
        title: 'Stainless Steel Cat Bowls - 2 Cup',
        tax: 'GIFT',
        unit: 'item',
        amount: '10',
        price: '19.9',
        discount: '10',
        total: '179.1'
      },
      {
        title: 'PetFusion Ultimate Cat Scratcher Lounge',
        tax: 'INCOME',
        unit: 'item',
        amount: '2',
        price: '53.9',
        discount: '',
        total: '120.74'
      }
    ],
    subtotal: '299.84',
    total: '299.84'
  },
  {
    title: 'Delivery',
    discount: '20',
    fee: '150',
    items: [
      {
        title: 'Evening Delivery',
        tax: 'VALUE_ADDED',
        unit: 'hourly-rate',
        amount: '8',
        price: '29.9',
        discount: '',
        total: '296.61'
      }
    ],
    subtotal: '296.61',
    total: '87.29'
  },
];

const invoice = {
  number: 13,
  partner: 'Kitty & Co LLC',
  date: '2023/6/5',
  totalCount: 1200,
  fee: 0,
  discount: 10,
  phases
}

const resolvers = {
  Query: {
    invoice: () => invoice,
  },
};

const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const start = async () => {
  try {
    await server.start();

    app.use(
      cors(),
      bodyParser.json(),
      expressMiddleware(server),
    );

  } catch (error) {
      console.error(error);
  }

  try {
    await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000`);
        
  } catch (error) {
      console.error(error);
  }
};

start();