import {AutocompleteComponent } from "./AutoCompleteEmail/AutocompleteComponent";
import {PasswordInput, Stack, Button} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';

export function Login({ onLogin }: { onLogin: () => void }){

    const handleLogin = () => {
        onLogin();
    };
    const [visible, { toggle }] = useDisclosure(false);

    return(
        <div>
            <h1>Register</h1>

            <AutocompleteComponent/>


            <Stack>
                <PasswordInput
                    label="Password"
                    visible={visible}
                    onVisibilityChange={toggle}
                />
                <PasswordInput
                    label="Confirm password"

                    visible={visible}
                    onVisibilityChange={toggle}
                />
            </Stack>
            <Button variant="filled" color="rgba(204, 24, 24, 1)" radius="lg" onClick={handleLogin}>Sign in</Button>

        </div>
    )
}