import { useToast, FlatList } from 'native-base';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Game, GameProps } from '../components/Game';
import Loading from './Loading';
import { EmptyMyPoolList } from './EmptyMyPoolList';
import { ItemClick } from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types';

interface Props {
    poolId: string;
    code: string;
}

export function Guesses({ poolId, code }: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const [firstTeamPoints, setFirstTeamPoints] = useState('');
    const [secondTeamPoints, setSecondTeamPoints] = useState('');
    const [games, setGames] = useState<GameProps[]>([]);

    const toast = useToast();

    async function fetchGames() {
        try {
            setIsLoading(true);

            const response = await api.get(`pools/${poolId}/games`);
            setGames(response.data.games);
        } catch (error) {
            console.error(error);

            toast.show({
                title: 'Não foi possível carregar os jogos, volte outra hora!',
                placement: 'top',
                bgColor: 'red.500'
            });
        } finally {
            setIsLoading(false);
        }
    }

    async function handleGuessConfirm(gameId: string) {
        try {
            if (!firstTeamPoints.trim() || !secondTeamPoints.trim()) {
                return toast.show({
                    title: 'Informe o placar corretamente!',
                    placement: 'top',
                    bgColor: 'red.500'
                });
            }

            await api.post(`pools/${poolId}/games/${gameId}/guesses`, {
                firstTeamPoints: Number(firstTeamPoints),
                secondTeamPoints: Number(secondTeamPoints)
            });

            toast.show({
                title: 'Palpite realizado com sucesso!',
                placement: 'top',
                bgColor: 'green.500'
            });

            fetchGames();
        } catch (error) {
            console.error(error);

            toast.show({
                title: 'Não foi possível enviar o palpite, tente novamente!',
                placement: 'top',
                bgColor: 'red.500'
            });
        }
    }

    useEffect(() => {
        fetchGames();
    }, [poolId]);

    if (isLoading) return <Loading />;

    return (
        <FlatList
            data={games}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Game
                    data={item}
                    setFirstTeamPoints={setFirstTeamPoints}
                    setSecondTeamPoints={setSecondTeamPoints}
                    onGuessConfirm={() => handleGuessConfirm(item.id)}
                />
            )}
            ListEmptyComponent={() => <EmptyMyPoolList code={code} />}
        />
    );
}
