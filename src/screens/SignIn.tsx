import { Center, Text, Icon } from 'native-base';
import { Fontisto } from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth';

import Button from '../components/Button';
import Logo from '../assets/logo.svg';

export default function SignIn() {
    const { signIn, user } = useAuth();

    console.log('dados do usuário:', user);

    return (
        <Center flex={1} bgColor="gray.900" p={7}>
            <Logo width={212} height={40} />
            <Button
                title="Entrar com o Google"
                type="SECONDARY"
                leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
                mt={12}
                mb={4}
                onPress={signIn}
            />
            <Text color="white" fontSize={18} textAlign="center">
                Não utilizamos nenhuma informação além do seu {'\n'} e-mail para a criação da sua
                conta.
            </Text>
        </Center>
    );
}
