import { Button as NativeBaseButton, Text, IButtonProps } from 'native-base';

interface ButtonProps extends IButtonProps {
    title: string;
    type?: 'PRIMARY' | 'SECONDARY';
}

export default function Button({ title, type = 'PRIMARY', ...rest }: ButtonProps) {
    return (
        <NativeBaseButton
            w="full"
            h={14}
            rounded="sm"
            fontSize="md"
            bg={type === 'SECONDARY' ? 'red.500' : 'yellow.500'}
            _pressed={{ bg: type === 'SECONDARY' ? 'red.600' : 'yellow.600' }}
            _loading={{ _spinner: { color: 'black' } }}
            {...rest}
        >
            <Text
                textTransform="uppercase"
                fontSize="sm"
                fontFamily="heading"
                color={type === 'SECONDARY' ? 'white' : 'black'}
            >
                {title}
            </Text>
        </NativeBaseButton>
    );
}
