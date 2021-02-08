import React, { useEffect, useRef } from 'react';
import {
  HubConnection,
  LogLevel,
  HubConnectionBuilder,
  HttpTransportType,
} from '@aspnet/signalr';

import { Container, Usuarios, Painel, Mensagens, Input } from './styles';

const Componente: React.FC = () => {
  const connectionRef = useRef<HubConnection | null>(null);

  useEffect(() => {
    const iniciar = async () => {
      connectionRef.current = new HubConnectionBuilder()
        .withUrl('http://localhost:50587/chat', HttpTransportType.WebSockets)
        .configureLogging(LogLevel.Information)
        .build();

      try {
        await connectionRef.current.start();

        const { current: connection } = connectionRef;

        connection.on('UsuerLoggedOn', (id: number, name: string) => {
          console.log({ id, name }, 'yellow');
        });

        connection.on('MessageAdded', (message: string) => {
          console.log(message);
        });
      } catch (err) {
        console.log(err, 'red');
      }
    };

    const parar = async () => {
      if (connectionRef.current) await connectionRef.current.stop();
    };

    iniciar();
    return () => {
      parar();
    };
  }, []);

  return (
    <Container>
      <Usuarios>
        <h3>Users online:</h3>
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
          <li>User 4</li>
        </ul>
      </Usuarios>

      <Painel>
        <Mensagens>
          <div>
            <p>
              <b>User 1</b> (21:53)
            </p>
            <p>Olá</p>
          </div>
        </Mensagens>
        <Input>
          <span>:-)</span>
          <input type="text" />
          <button
            onClick={() => {
              const { current: connection } = connectionRef;

              if (!connection) return;

              connection.invoke('AddMessage', 'Teste');
            }}
          >
            Send
          </button>
        </Input>
      </Painel>
    </Container>
  );
};

export default Componente;
