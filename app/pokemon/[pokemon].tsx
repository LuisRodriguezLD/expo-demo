import React from 'react';
import {Text, SafeAreaView, Pressable, ScrollView, View, Image} from 'react-native';
import {Link, useGlobalSearchParams} from "expo-router";
import useSWR from "swr";
import {fetcher} from "@/utils";

const MyComponent = () => {

    const globalParams = useGlobalSearchParams();
    const pokemon = globalParams.pokemon;

    const {data, isLoading} = useSWR(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, fetcher)
    if (isLoading) {
        return <Text>Loading...</Text>
    }


    return (
        <SafeAreaView style={{margin: 20}}>
            <Link href="../" asChild style={{
                marginTop: 20
            }}>
                <Pressable style={{
                    borderRadius: 10,
                    backgroundColor: '#222',
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 10,
                    paddingBottom: 10
                }}>
                    <Text style={{color: 'white', textAlign: 'center'}}>Back</Text>
                </Pressable>
            </Link>

            <ScrollView>
                <View style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View>
                        <Text>{pokemon}</Text>
                    </View>
                    <Image source={{uri: data.sprites.front_default}} style={{
                        width: 200,
                        height: 200,
                        borderRadius: 100,
                        marginTop: 20
                    }}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MyComponent;
