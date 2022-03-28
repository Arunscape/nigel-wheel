import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AppShell, Navbar, Header, Aside, Footer, Text, Button, Container } from '@mantine/core';
import { useState } from 'react';
import _ from 'lodash';


const wheel = [
  'art',
  'sexy_dice',
  'kiss',
  'jetpunk',
  'body_shot',
  'butler',
  'beer_pong',
  'roast', // take turns roasting the subject
  'toast', // complement circle
  'dare',
  'blind_guess',
  '-1_clothing',
  'swap_clothing',
  'girls_drink',
  'boys_drink',
  'nonbinary_drink',
  'rank',
  'never_have_i_ever',
  'rant',
  'act',
  'give_me_10', // pushups or something else
  'drink',
  'category',
  'truth', // hotseat
  '+1_clothing',
  'karaoke',
  'try_not_to_laugh',
  'handcuff',
];

const Home: NextPage = () => {

  const [activity, setActivity] = useState('Spin to get the party started!');

  return (

    <AppShell
      padding="md"
      // navbar={<Navbar width={{ base: 300 }} height={500} p="xs"><div>Hello</div></Navbar>}
      header={<Header height={60} p="xs"><div>Nigel Wheel</div></Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Container>

        <Text
          component="span"
          align="center"
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
          size="xl"
          weight={700}
          style={{ fontFamily: 'Greycliff CF, sans-serif' }}
        >
          {activity}
        </Text>
      </Container>
      <Container>

        <Button 
        onClick={() => {
          setActivity(_.sample(wheel))
        }}
        variant="gradient" 
        gradient={{ from: 'indigo', to: 'cyan' }}>Spin</Button>
      </Container>
    </AppShell>
  )
}

export default Home
