import {Text, View, SafeAreaView, FlatList, Pressable} from "react-native";
import {Link} from "expo-router"
import useSWR from "swr";
import {fetcher} from "@/utils";

export default function Index() {

    const {data, isLoading} = useSWR('https://pokeapi.co/api/v2/pokemon', fetcher)

    if (isLoading) return <Text>Loading...</Text>

    return (
        <SafeAreaView
            style={{
                margin: 20
            }}
        >
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold'
            }}>Pokedex</Text>

            <FlatList data={data.results} renderItem={({item}) => {
                return (
                    <Link href={`pokemon/${item.name}`} asChild>
                        <Pressable style={{backgroundColor: "#DEDEDE", marginTop: 6, borderRadius: 6}}>
                            <Text style={{padding: 16, textTransform: 'capitalize'}}>{item.name}</Text>
                        </Pressable>
                    </Link>
                )
            }}/>

        </SafeAreaView>
    );
}
