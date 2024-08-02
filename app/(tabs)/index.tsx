import { Image, StyleSheet, Platform, Button, TextInput, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import React, { useState, useEffect } from 'react';
import Activities from '@/components/Activities';
import _ from "lodash"

export default function HomeScreen() {
  const [degree, setDegree] = useState(0);
  const [players, setPlayers] = useState<string[]>([]);
  const [activeplayer, setactiveplayer] = useState(0);

  // for the form to add players
  const [playerName, setPlayerName] = useState("");

  const [wheel, setWheel] = useState();
  const [Activity, setActivity] = useState(<></>);


  const nextplayer = () => {
    const lastplayer = players.length - 1;
    const i = activeplayer === lastplayer ? 0 : activeplayer + 1;
    setactiveplayer(i);
  }

  const activities = Activities;




  return <ParallaxScrollView
    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    headerImage={
      <Image
        source={require('@/assets/images/partial-react-logo.png')}
        style={styles.reactLogo}
      />}
  >

    <ThemedView>
      <HelloWave />
      <View>
        {players.map((p, i) => {

          // return <div key={i}><Title order={i === activeplayer ? 1 : 5}
          return <View key={i}>

            <Text>
              {p}
            </Text >
            <Button title="Delet" onPress={() => {
              const newplayers = players.filter(x => x != p);
              console.log("removing", p)

              setPlayers(newplayers);
              localStorage.setItem("players", JSON.stringify(newplayers));
              return;

            }} />
          </View>
        })}
      </View>

      <TextInput value={playerName} onChange={(e: any) => setPlayerName(e.target.value)} />
      <Button
        title='Add Payer'
        onPress={() => {
          const newplayers = [...players, playerName]
          setPlayers(newplayers);

          // if (!isSignedIn) {
          localStorage.setItem("players", JSON.stringify(newplayers));
          setPlayerName("");
          return;
          // }

          // const docRef = doc(db, `/users/${firebaseauth.currentUser?.uid}`);

          // await setDoc(docRef, { players: newplayers }, { merge: true });

          // setPlayerName("");

        }}
      />

      <Button
        title='Spin!'
        onPress={() => {
          // @ts-ignore
          setActivity(_.sample(activities))
          nextplayer()
        }} />

      {/* {Activity && <Activity players={players} activeplayer={activeplayer} />} */}

    </ThemedView>

  </ParallaxScrollView>
  // return (
  //   <ParallaxScrollView
  //     headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
  //     headerImage={
  //       <Image
  //         source={require('@/assets/images/partial-react-logo.png')}
  //         style={styles.reactLogo}
  //       />
  //     }>
  //     {/* <ThemedView style={styles.titleContainer}>
  //       <ThemedText type="title">Welcome!</ThemedText>
  //       <HelloWave />
  //     </ThemedView>
  //     <ThemedView style={styles.stepContainer}>
  //       <ThemedText type="subtitle">Step 1: Try it</ThemedText>
  //       <ThemedText>
  //         Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
  //         Press{' '}
  //         <ThemedText type="defaultSemiBold">
  //           {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
  //         </ThemedText>{' '}
  //         to open developer tools.
  //       </ThemedText>
  //     </ThemedView>
  //     <ThemedView style={styles.stepContainer}>
  //       <ThemedText type="subtitle">Step 2: Explore</ThemedText>
  //       <ThemedText>
  //         Tap the Explore tab to learn more about what's included in this starter app.
  //       </ThemedText>
  //     </ThemedView>
  //     <ThemedView style={styles.stepContainer}>
  //       <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
  //       <ThemedText>
  //         When you're ready, run{' '}
  //         <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
  //         <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
  //         <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
  //         <ThemedText type="defaultSemiBold">app-example</ThemedText>.
  //       </ThemedText>
  //     </ThemedView> */}
  //     <ThemedView>   



  //     </ThemedView>
  //   </ParallaxScrollView >
  // );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
