import { Heading, useToast, VStack } from 'native-base';
import { Header } from '../components/Header';

import { Input } from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import { api } from '../services/api';
import { useNavigation } from '@react-navigation/native';

export default function Find() {
    const [isLoading, setIsLoading] = useState(false);
    const [code, setCode] = useState('');

    const toast = useToast();

    const { navigate } = useNavigation();

    async function handleJoinPool() {
        try {
            setIsLoading(true);

            if (!code.trim()) {
                return toast.show({
                    title: 'Informe o código!',
                    placement: 'top',
                    bgColor: 'red.500'
                });
            }

            await api.post('/pools/join', { code });

            toast.show({
                title: 'Você entrou no bolão com sucesso!',
                placement: 'top',
                bgColor: 'green.500'
            });

            setIsLoading(false);
            setCode('');

            navigate('pools');
        } catch (error) {
            setIsLoading(false);

            console.error(error);

            let errorMessage = error.response?.data?.message;
            if (errorMessage === 'Pool not found.') {
                errorMessage = 'Bolão não encontrado, verifique o código!';
            } else if (errorMessage === 'You already joined this pool.') {
                errorMessage = 'Você já está participando desse bolão!';
            } else {
                errorMessage = 'Esse bolão não existe, verifique o código!';
            }

            return toast.show({
                title: errorMessage,
                placement: 'top',
                bgColor: 'red.500'
            });
        }
    }

    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Buscar por código" showBackButton />
            <VStack mt={20} mx={5} alignItems="center">
                <Heading
                    fontFamily="heading"
                    color="white"
                    fontSize="3xl"
                    mb={8}
                    textAlign="center"
                >
                    Encontre um bolão através de seu código único!
                </Heading>
                <Input
                    mb={2}
                    placeholder="Qual o código do bolão?"
                    onChangeText={setCode}
                    autoCapitalize="characters"
                    value={code}
                />
                <Button title="BUSCAR BOLÃO" isLoading={isLoading} onPress={handleJoinPool} />
            </VStack>
        </VStack>
    );
}
