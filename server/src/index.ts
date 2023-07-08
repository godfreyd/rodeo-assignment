import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { IPhase, IPhaseItem } from './interfaces';
import { countTotal } from './services/countTotal';
import { countSubTotal } from './services/countSubTotal';

// The GraphQL schema
const typeDefs = `#graphql
  type Item {
    title: String
    tax: Taxes!
    unit: String
    amount: Int
    price: Float
    discount: Int
    total: Float
  }

  enum Taxes {
    GIFT
    INCOME
    SALES
    VALUE_ADDED
  }

  type Phase {
    title: String
    discount: Int
    fee: Int
    items: [Item]
    subtotal: Float
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

const product1: IPhaseItem = {
  title: 'Stainless Steel Cat Bowls - 2 Cup',
  tax: 'GIFT',
  unit: 'item',
  amount: 10,
  price: 19.9,
  discount: 10
}

product1.total = countTotal(product1);

const product2: IPhaseItem = {
  title: 'PetFusion Ultimate Cat Scratcher Lounge',
  tax: 'INCOME',
  unit: 'item',
  amount: 2,
  price: 53.9,
  discount: 0,
}

product2.total = countTotal(product2);

const product3: IPhaseItem = {
  title: 'Evening Delivery',
  tax: 'VALUE_ADDED',
  unit: 'hourly-rate',
  amount: 8,
  price: 29.9,
  discount: 0,
}

product3.total = countTotal(product3);

const phase1: IPhase = {
  title: 'Goods for pets',
  discount: 0,
  fee: 0,
  items: [
    product1,
    product2
  ],
  total: '299.84'
}

phase1.subtotal = countSubTotal(phase1.items);

const phase2: IPhase = {
  title: 'Delivery',
  discount: 20,
  fee: 150,
  items: [
    product3
  ],
  total: '87.29'
}

phase2.subtotal = countSubTotal(phase2.items);

const phases = [
  phase1,
  phase2
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