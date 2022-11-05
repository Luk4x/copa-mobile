import { Heading, VStack } from 'native-base';
import { Header } from '../components/Header';

import { Input } from '../components/Input';
import Button from '../components/Button';

export default function Find() {
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
                <Input mb={2} placeholder="Qual o código do bolão?" />
                <Button title="BUSCAR BOLÃO" />
            </VStack>
        </VStack>
    );
}
