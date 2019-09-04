import { createConnection, Connection } from 'typeorm';
import Country from 'src/entity/country';
import { User } from 'src/entity/user';
import Event from 'src/entity/event';
import Campaign from 'src/entity/campaign';

export default function getConnection() {
  return createConnection({
    type: 'oracle',
    connectString: 'localhost:1521/xe',
    username: 'evoke',
    password: 'evoke',
    entities: [Country, User],
    synchronize: true,
    logging: false
  });
}
